import worker from "../src/index.js";
import { PAGE_SLUGS, TOOL_SLUGS } from "../src/seo-content.js";
import {
  AUTHORITY_SLUGS,
  WIKI_SLUGS,
  NEWS_SLUGS,
  STATIC_SLUGS
} from "../src/authority-content.js";

const locales = ["en", "zh-cn", "ja", "ar", "tr", "uk"];
const paths = [];

for (const locale of locales) {
  paths.push(
    `/${locale}/`,
    ...PAGE_SLUGS.map((slug) => `/${locale}/${slug}/`),
    ...TOOL_SLUGS.map((slug) => `/${locale}/tools/${slug}/`)
  );
}

paths.push(
  ...AUTHORITY_SLUGS.map((slug) => `/en/${slug}/`),
  ...WIKI_SLUGS.map((slug) => `/en/wiki/${slug}/`),
  ...NEWS_SLUGS.map((slug) => `/en/news/${slug}/`),
  ...STATIC_SLUGS.map((slug) => `/en/${slug}/`),
  "/en/media/"
);

const titles = new Map();
const failures = [];

for (const path of paths) {
  const response = await worker.fetch(new Request(`https://dearpassengerscrew.com${path}`));
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];

  if (response.status !== 200 || !title || !canonical || html.length < 10_000) {
    failures.push({ path, status: response.status, title, canonical, bytes: html.length });
  }

  if (title && titles.has(title)) {
    failures.push({ path, duplicateTitle: title, firstUsedAt: titles.get(title) });
  } else if (title) {
    titles.set(title, path);
  }
}

const sitemapResponse = await worker.fetch(
  new Request("https://dearpassengerscrew.com/sitemap.xml")
);
const sitemap = await sitemapResponse.text();
const sitemapUrls = sitemap.match(/<url>/g)?.length || 0;

if (sitemapUrls !== paths.length) {
  failures.push({ sitemapUrls, expected: paths.length });
}

const missingResponse = await worker.fetch(
  new Request("https://dearpassengerscrew.com/en/this-route-does-not-exist/")
);

if (missingResponse.status !== 404) {
  failures.push({ invalid404Status: missingResponse.status });
}

if (failures.length) {
  console.error(JSON.stringify({ checked: paths.length, failures }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      checked: paths.length,
      uniqueTitles: titles.size,
      sitemapUrls,
      invalidRouteStatus: missingResponse.status
    },
    null,
    2
  )
);
