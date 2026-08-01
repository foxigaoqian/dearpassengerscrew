import worker from "../src/index.js";
import { PAGE_SLUGS, TOOL_SLUGS } from "../src/seo-content.js";
import {
  AUTHORITY_SLUGS,
  WIKI_SLUGS,
  NEWS_SLUGS,
  STATIC_SLUGS
} from "../src/authority-content.js";
import { INTENT_DEPTH } from "../src/intent-depth.js";
import { LINK_GRAPH, LINK_TARGETS, targetPath } from "../src/link-graph.js";

const locales = ["en", "zh-cn", "ja", "ar", "tr", "uk"];
const nonEnglishLocales = locales.filter((locale) => locale !== "en");
const nonEnglishPrefix = /^\/(zh-cn|ja|ar|tr|uk)(?:\/|$)/;
const paths = [
  "/",
  ...PAGE_SLUGS.map((slug) => `/${slug}/`),
  ...TOOL_SLUGS.map((slug) => `/tools/${slug}/`)
];

for (const locale of nonEnglishLocales) {
  paths.push(
    `/${locale}/`,
    ...PAGE_SLUGS.map((slug) => `/${locale}/${slug}/`),
    ...TOOL_SLUGS.map((slug) => `/${locale}/tools/${slug}/`)
  );
}

paths.push(
  ...AUTHORITY_SLUGS.map((slug) => `/${slug}/`),
  ...WIKI_SLUGS.map((slug) => `/wiki/${slug}/`),
  ...NEWS_SLUGS.map((slug) => `/news/${slug}/`),
  ...STATIC_SLUGS.map((slug) => `/${slug}/`),
  "/media/"
);

const titles = new Map();
const descriptions = new Map();
const failures = [];
const documents = new Map();
let accessibilityPagesChecked = 0;

if (Object.keys(INTENT_DEPTH).sort().join("|") !== [...PAGE_SLUGS].sort().join("|")) {
  failures.push({ intentDepthCoverage: Object.keys(INTENT_DEPTH), expected: PAGE_SLUGS });
}

const expectedGraphKeys = [
  ...PAGE_SLUGS.map((slug) => `page:${slug}`),
  ...TOOL_SLUGS.map((slug) => `tool:${slug}`),
  ...AUTHORITY_SLUGS.map((slug) => `authority:${slug}`),
  ...WIKI_SLUGS.map((slug) => `wiki:${slug}`),
  ...NEWS_SLUGS.map((slug) => `news:${slug}`),
  ...STATIC_SLUGS.map((slug) => `static:${slug}`),
  "media:media"
];

for (const key of expectedGraphKeys) {
  if (!LINK_GRAPH[key]?.length || !LINK_TARGETS[key]) {
    failures.push({ missingLinkGraphKey: key });
  }
}

for (const [source, targets] of Object.entries(LINK_GRAPH)) {
  for (const target of targets) {
    if (!LINK_TARGETS[target]) failures.push({ source, unknownLinkTarget: target });
    if (target === source) failures.push({ source, selfLinkTarget: target });
  }
}

for (const path of paths) {
  const response = await worker.fetch(new Request(`https://dearpassengerscrew.com${path}`));
  const html = await response.text();
  documents.set(path, html);
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
  const isEnglish = !nonEnglishPrefix.test(path);
  const isLocalized = true;
  const isIntent = PAGE_SLUGS.some((slug) => path.endsWith(`/${slug}/`));
  const isTool = path.includes("/tools/");
  const isEnglishIntent = isEnglish && isIntent;
  const isDeepEnglish = isEnglish && !isIntent && !isTool && path !== "/" && path !== "/media/";
  const isLocaleHome = path === "/" || nonEnglishLocales.some((locale) => path === `/${locale}/`);
  const requiredHreflang = isLocalized && (isIntent || isTool || isLocaleHome) ? 7 : 2;
  const minimumText = path === "/" ? 13_000 : isEnglishIntent ? 4_000 : isIntent ? 1_500 : isTool && isEnglish ? 1_650 : isTool ? 800 : 1_000;
  const requiredImages = path === "/" ? 7 : path === "/media/" ? 10 : isIntent || isTool || isDeepEnglish ? 1 : 0;
  const imageTags = [...html.matchAll(/<img\b[^>]*>/g)].map(([tag]) => tag);
  const imagesMissingAlt = imageTags.filter((tag) => !/\balt=(?:"[^"]*"|'[^']*')/.test(tag)).length;
  const imagesMissingDimensions = imageTags.filter((tag) => !/\bwidth="\d+"/.test(tag) || !/\bheight="\d+"/.test(tag)).length;
  const hasAccessibleShell = html.includes('class="skip-link" href="#main-content"') &&
    html.includes('id="main-content"') &&
    /class="menu-button"[^>]*aria-expanded="false"[^>]*aria-controls="site-navigation"/.test(html) &&
    /class="language-button"[^>]*aria-expanded="false"[^>]*aria-controls="language-menu"/.test(html);
  accessibilityPagesChecked += 1;

  if (
    response.status !== 200 ||
    !title ||
    !description ||
    canonical !== expectedCanonical ||
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

  if (!hasAccessibleShell || imagesMissingAlt || imagesMissingDimensions || html.includes("user-scalable=no")) {
    failures.push({
      path,
      accessibleShell: hasAccessibleShell,
      imagesMissingAlt,
      imagesMissingDimensions,
      disablesViewportZoom: html.includes("user-scalable=no")
    });
  }

  if (
    !response.headers.get("strict-transport-security") ||
    !response.headers.get("content-security-policy") ||
    response.headers.get("x-frame-options") !== "DENY" ||
    !response.headers.get("cache-control")?.includes("stale-while-revalidate")
  ) {
    failures.push({ path, missingProductionHeaders: true });
  }

  if (isLocaleHome && (
    !html.includes('class="hero-image"') ||
    !html.includes('fetchpriority="high"') ||
    !html.includes('<link rel="preload" as="image"')
  )) {
    failures.push({ path, missingLcpImagePriority: true });
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
      const parsed = JSON.parse(match[1]);
      const nodes = parsed["@graph"] || [parsed];
      for (const node of nodes) {
        if (["Article", "NewsArticle"].includes(node["@type"]) && !node.publisher) {
          failures.push({ path, articleMissingPublisher: true });
        }
        if (node["@type"] === "Organization" && node.sameAs?.some((url) => url.includes("steampowered.com") || url.includes("youtube.com"))) {
          failures.push({ path, organizationIdentityConflict: node.sameAs });
        }
        if (node["@type"] === "VideoGame" && node.datePublished === "2026") {
          failures.push({ path, releaseWindowMisusedAsDatePublished: true });
        }
      }
    } catch {
      failures.push({ path, invalidJsonLd: true });
    }
  }
}

for (const [sourcePath, html] of documents) {
  const sourceLocale = html.match(/<html lang="([^"]+)"/)?.[1];
  const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)]
    .map((match) => ({ locale: match[1], url: new URL(match[2]) }));
  const self = alternates.find((entry) => entry.locale === sourceLocale);
  if (!self || self.url.pathname !== sourcePath) {
    failures.push({ sourcePath, invalidHreflangSelfReference: self?.url.pathname });
  }
  for (const alternate of alternates.filter((entry) => entry.locale !== "x-default")) {
    const targetHtml = documents.get(alternate.url.pathname);
    if (!targetHtml) {
      failures.push({ sourcePath, missingHreflangTarget: alternate.url.pathname });
      continue;
    }
    const returnLink = new RegExp(`<link rel="alternate" hreflang="${sourceLocale}" href="https://dearpassengerscrew\\.com${sourcePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`);
    if (!returnLink.test(targetHtml)) {
      failures.push({ sourcePath, missingReciprocalHreflang: alternate.url.pathname, sourceLocale });
    }
  }
}

const routeSet = new Set(paths);
const incoming = new Map(paths.map((path) => [path, new Set()]));
const contextualIncoming = new Map(paths.map((path) => [path, new Set()]));
const outgoing = new Map(paths.map((path) => [path, new Set()]));
const checkedTargets = new Map();

for (const [sourcePath, html] of documents) {
  const contextualAnchors = new Set();
  for (const match of html.matchAll(/<a\b([^>]*?)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g)) {
    const attributes = `${match[1]} ${match[3]}`;
    const href = match[2];
    if (href.startsWith("#")) continue;
    const resolved = new URL(href, `https://dearpassengerscrew.com${sourcePath}`);
    if (resolved.hostname !== "dearpassengerscrew.com") continue;
    const target = resolved.pathname;
    if (!checkedTargets.has(target)) {
      checkedTargets.set(
        target,
        worker.fetch(new Request(`https://dearpassengerscrew.com${target}`)).then((response) => response.status)
      );
    }
    const status = await checkedTargets.get(target);
    if (![200, 301, 302].includes(status)) {
      failures.push({ sourcePath, brokenInternalLink: target, status });
    }
    if (!routeSet.has(target) || target === sourcePath) continue;
    incoming.get(target).add(sourcePath);
    outgoing.get(sourcePath).add(target);
    if (attributes.includes('data-context-link="true"')) {
      contextualIncoming.get(target).add(sourcePath);
      const anchorText = match[4].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      if (anchorText.length < 12 || /^(read|open|click|learn more)$/i.test(anchorText)) {
        failures.push({ sourcePath, weakContextualAnchor: anchorText, target });
      }
      if (contextualAnchors.has(anchorText)) {
        failures.push({ sourcePath, duplicateContextualAnchor: anchorText });
      }
      contextualAnchors.add(anchorText);
    }
  }
}

let maximumCrawlDepth = 0;
for (const locale of locales) {
  const start = locale === "en" ? "/" : `/${locale}/`;
  const queue = [[start, 0]];
  const depths = new Map([[start, 0]]);
  while (queue.length) {
    const [current, depth] = queue.shift();
    for (const target of outgoing.get(current) || []) {
      if (depths.has(target)) continue;
      depths.set(target, depth + 1);
      queue.push([target, depth + 1]);
    }
  }
  const localePaths = paths.filter((path) =>
    locale === "en"
      ? !nonEnglishPrefix.test(path)
      : path.startsWith(`/${locale}/`)
  );
  for (const path of localePaths) {
    const depth = depths.get(path);
    if (depth === undefined || depth > 3) {
      failures.push({ path, crawlDepth: depth ?? "unreachable", maximum: 3, localeStart: start });
    } else {
      maximumCrawlDepth = Math.max(maximumCrawlDepth, depth);
    }
  }
}

for (const path of paths) {
  if (path === "/") continue;
  const totalIncoming = incoming.get(path).size;
  const contextualCount = contextualIncoming.get(path).size;
  if (totalIncoming < 3) failures.push({ path, insufficientIncomingLinks: totalIncoming, minimum: 3 });
  if (!nonEnglishPrefix.test(path) && contextualCount < 2) {
    failures.push({ path, insufficientContextualIncomingLinks: contextualCount, minimum: 2 });
  }
}

const sitemapResponse = await worker.fetch(
  new Request("https://dearpassengerscrew.com/sitemap.xml")
);
const sitemap = await sitemapResponse.text();
const sitemapUrls = sitemap.match(/<url>/g)?.length || 0;
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);

if (sitemapUrls !== paths.length) {
  failures.push({ sitemapUrls, expected: paths.length });
}

if (sitemap.includes("https://dearpassengerscrew.com/en/")) {
  failures.push({ sitemapContainsLegacyEnglishPrefix: true });
}

if (
  sitemapLocations.length !== new Set(sitemapLocations).size ||
  sitemapLocations.some((path) => !routeSet.has(path)) ||
  [...routeSet].some((path) => !sitemapLocations.includes(path)) ||
  sitemap.includes("<priority>") ||
  sitemap.includes("<changefreq>")
) {
  failures.push({ invalidSitemapLocationSet: true });
}

const robotsResponse = await worker.fetch(new Request("https://dearpassengerscrew.com/robots.txt"));
const robots = await robotsResponse.text();
if (
  robotsResponse.status !== 200 ||
  !robots.includes(`Sitemap: https://dearpassengerscrew.com/sitemap.xml`) ||
  !robots.includes(`Sitemap: https://dearpassengerscrew.com/image-sitemap.xml`)
) {
  failures.push({ invalidRobots: true });
}

const imageSitemapResponse = await worker.fetch(new Request("https://dearpassengerscrew.com/image-sitemap.xml"));
const imageSitemap = await imageSitemapResponse.text();
if (imageSitemapResponse.status !== 200 || (imageSitemap.match(/<image:image>/g)?.length || 0) < 13) {
  failures.push({ invalidImageSitemap: true });
}

const llmsResponse = await worker.fetch(new Request("https://dearpassengerscrew.com/llms.txt"));
const llms = await llmsResponse.text();
if (llmsResponse.status !== 200 || !llms.includes("Independent, unofficial") || !llms.includes("/editorial-policy/")) {
  failures.push({ invalidLlmsText: true });
}

const cssResponse = await worker.fetch(new Request("https://dearpassengerscrew.com/assets/site.css?v=20260801"));
const css = await cssResponse.text();
if (
  cssResponse.status !== 200 ||
  !cssResponse.headers.get("content-type")?.includes("text/css") ||
  !cssResponse.headers.get("cache-control")?.includes("immutable") ||
  css.length < 50_000
) {
  failures.push({ invalidSharedStylesheet: true, cssBytes: css.length });
}

const missingResponse = await worker.fetch(
  new Request("https://dearpassengerscrew.com/this-route-does-not-exist/")
);

if (missingResponse.status !== 404) {
  failures.push({ invalid404Status: missingResponse.status });
}

const trailingSlashResponse = await worker.fetch(
  new Request("https://dearpassengerscrew.com/release-date")
);
if (trailingSlashResponse.status !== 301 || trailingSlashResponse.headers.get("location") !== "https://dearpassengerscrew.com/release-date/") {
  failures.push({ trailingSlashStatus: trailingSlashResponse.status, location: trailingSlashResponse.headers.get("location") });
}

const rootWithChineseBrowser = await worker.fetch(
  new Request("https://dearpassengerscrew.com/", {
    headers: { "accept-language": "zh-CN,zh;q=0.9,en;q=0.8" }
  })
);
const rootWithChineseBrowserHtml = await rootWithChineseBrowser.text();
if (
  rootWithChineseBrowser.status !== 200 ||
  !rootWithChineseBrowserHtml.includes('<html lang="en"') ||
  !rootWithChineseBrowserHtml.includes('<link rel="canonical" href="https://dearpassengerscrew.com/"')
) {
  failures.push({
    rootEnglishStatus: rootWithChineseBrowser.status,
    rootEnglishLang: rootWithChineseBrowserHtml.match(/<html lang="([^"]+)"/)?.[1],
    rootEnglishCanonical: rootWithChineseBrowserHtml.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  });
}

for (const [legacyPath, expectedLocation] of [
  ["/en/", "https://dearpassengerscrew.com/"],
  ["/en/release-date/", "https://dearpassengerscrew.com/release-date/"],
  ["/en/tools/status-tracker/", "https://dearpassengerscrew.com/tools/status-tracker/"]
]) {
  const response = await worker.fetch(new Request(`https://dearpassengerscrew.com${legacyPath}`));
  if (response.status !== 301 || response.headers.get("location") !== expectedLocation) {
    failures.push({
      legacyEnglishPath: legacyPath,
      status: response.status,
      location: response.headers.get("location"),
      expectedLocation
    });
  }
}

for (const [variantUrl, expectedLocation] of [
  ["http://dearpassengerscrew.com/", "https://dearpassengerscrew.com/"],
  ["https://www.dearpassengerscrew.com/release-date/", "https://dearpassengerscrew.com/release-date/"],
  ["https://dearpassengerscrew.com//release-date//", "https://dearpassengerscrew.com/release-date/"],
  ["https://dearpassengerscrew.com/ZH-CN/release-date/", "https://dearpassengerscrew.com/zh-cn/release-date/"],
  ["https://dear-passengers-crew.workers.dev/release-date/", "https://dearpassengerscrew.com/release-date/"]
]) {
  const response = await worker.fetch(new Request(variantUrl));
  if (response.status !== 301 || response.headers.get("location") !== expectedLocation) {
    failures.push({ variantUrl, status: response.status, location: response.headers.get("location"), expectedLocation });
  }
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
      faviconStatus: faviconResponse.status,
      accessibilityPagesChecked,
      internalLinksChecked: checkedTargets.size,
      uniqueInternalLinkEdges: [...outgoing.values()].reduce((total, targets) => total + targets.size, 0),
      uniqueContextualLinkEdges: [...contextualIncoming.values()].reduce((total, sources) => total + sources.size, 0),
      minimumIncomingLinks: Math.min(...[...incoming.values()].map((sources) => sources.size)),
      minimumEnglishContextualIncomingLinks: Math.min(
        ...paths
          .filter((path) => !nonEnglishPrefix.test(path) && path !== "/")
          .map((path) => contextualIncoming.get(path).size)
      ),
      maximumCrawlDepth
    },
    null,
    2
  )
);
