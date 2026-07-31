import worker from "../src/index.js";
import { PAGE_SLUGS, TOOL_SLUGS } from "../src/seo-content.js";
import {
  AUTHORITY_SLUGS,
  WIKI_SLUGS,
  NEWS_SLUGS,
  STATIC_SLUGS
} from "../src/authority-content.js";
import { INTENT_DEPTH } from "../src/intent-depth.js";

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
const descriptions = new Map();
const failures = [];

if (Object.keys(INTENT_DEPTH).sort().join("|") !== [...PAGE_SLUGS].sort().join("|")) {
  failures.push({ intentDepthCoverage: Object.keys(INTENT_DEPTH), expected: PAGE_SLUGS });
}

for (const path of paths) {
  const response = await worker.fetch(new Request(`https://dearpassengerscrew.com${path}`));
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const h1Count = html.match(/<h1(?:\s|>)/g)?.length || 0;
  const hreflangCount = html.match(/hreflang=/g)?.length || 0;
  const imageCount = html.match(/<img\s/g)?.length || 0;
  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const expectedCanonical = `https://dearpassengerscrew.com${path}`;
  const isLocalized = /^\/(en|zh-cn|ja|ar|tr|uk)\//.test(path);
  const isIntent = PAGE_SLUGS.some((slug) => path.endsWith(`/${slug}/`));
  const isTool = path.includes("/tools/");
  const isEnglishIntent = path.startsWith("/en/") && isIntent;
  const isDeepEnglish = path.startsWith("/en/") && !isIntent && !isTool && path !== "/en/" && path !== "/en/media/";
  const requiredHreflang = isLocalized && (isIntent || isTool || /^\/(en|zh-cn|ja|ar|tr|uk)\/$/.test(path)) ? 7 : 2;
  const minimumText = path === "/en/" ? 9_000 : isEnglishIntent ? 4_000 : isIntent ? 1_500 : isTool && path.startsWith("/en/") ? 1_650 : isTool ? 800 : 1_000;
  const requiredImages = path === "/en/" ? 7 : path === "/en/media/" ? 10 : isIntent || isTool || isDeepEnglish ? 1 : 0;

  if (
    response.status !== 200 ||
    !title ||
    !description ||
    canonical !== expectedCanonical ||
    html.length < 10_000 ||
    h1Count !== 1 ||
    hreflangCount < requiredHreflang ||
    visibleText.length < minimumText ||
    imageCount < requiredImages
  ) {
    failures.push({
      path,
      status: response.status,
      title,
      description,
      canonical,
      expectedCanonical,
      bytes: html.length,
      h1Count,
      hreflangCount,
      requiredHreflang,
      textChars: visibleText.length,
      minimumText,
      imageCount,
      requiredImages
    });
  }

  if (title && titles.has(title)) {
    failures.push({ path, duplicateTitle: title, firstUsedAt: titles.get(title) });
  } else if (title) {
    titles.set(title, path);
  }

  if (description && descriptions.has(description)) {
    failures.push({ path, duplicateDescription: description, firstUsedAt: descriptions.get(description) });
  } else if (description) {
    descriptions.set(description, path);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch {
      failures.push({ path, invalidJsonLd: true });
    }
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

const trailingSlashResponse = await worker.fetch(
  new Request("https://dearpassengerscrew.com/en/release-date")
);
if (trailingSlashResponse.status !== 301 || trailingSlashResponse.headers.get("location") !== "https://dearpassengerscrew.com/en/release-date/") {
  failures.push({ trailingSlashStatus: trailingSlashResponse.status, location: trailingSlashResponse.headers.get("location") });
}

const faviconResponse = await worker.fetch(
  new Request("https://dearpassengerscrew.com/favicon.svg")
);
if (faviconResponse.status !== 200 || !faviconResponse.headers.get("content-type")?.includes("image/svg+xml")) {
  failures.push({ faviconStatus: faviconResponse.status, faviconType: faviconResponse.headers.get("content-type") });
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
      uniqueDescriptions: descriptions.size,
      sitemapUrls,
      invalidRouteStatus: missingResponse.status,
      trailingSlashStatus: trailingSlashResponse.status,
      faviconStatus: faviconResponse.status
    },
    null,
    2
  )
);
