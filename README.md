# Dear Passengers Crew

Independent multilingual game-intelligence hub for **Dear Passengers**, built as a Cloudflare Worker.

## What is included

- 133 validated indexable URLs
- Six localized editions across English, Simplified Chinese, Japanese, Arabic, Turkish and Ukrainian
- 11 dedicated search-intent guides in every language: release date, demo, multiplayer, player count, platforms, gameplay, trailer, characters, system requirements, news and wiki
- Long-form English intent briefings with page-specific evidence, two official screenshots, direct answers and source-aware FAQs
- Six practical player tools in every language: PC compatibility, crew compatibility, release countdown, requirements comparison, live status tracker and role quiz
- Eight additional high-intent English briefings: price, download, Steam, solo, crossplay, languages, developer and confirmed features
- Eight source-aware wiki entries and five dated news reports
- Official media archive with ten full-resolution Steam screenshots and the announcement trailer
- Expanded English homepage with a natural-language game overview, four intent briefings, four official cabin feeds, PC manifest, language status, verified dispatches and a first-party source ledger
- Official Steam media and a click-to-play privacy-enhanced trailer facade
- Confirmed/unknown evidence labels, source links, last-checked dates and update history
- SEO essentials: 133 unique titles and descriptions, canonical URLs, reciprocal page-level hreflang, corrected Article/NewsArticle/VideoGame/VideoObject/Breadcrumb/CollectionPage JSON-LD, XML sitemap, image sitemap and robots
- Search-engine-readable `/llms.txt` index for AI discovery (supplementary, not treated as a ranking factor)
- Discoverable high-priority hero imagery, explicit image dimensions, below-fold lazy loading and an official-media image sitemap
- One-hop HTTPS, host, locale-case and repeated-slash normalization, with the public `workers.dev` duplicate disabled
- Shared immutable stylesheet caching, HTML stale-while-revalidate caching and centralized CSP/HSTS/frame/referrer/permissions headers
- Dense internal-link architecture connecting guides, tools and localized editions
- A maintained semantic link graph with contextual anchors, topic-cluster feedback loops, full footer navigation and crawl-depth auditing
- Automated route, title, canonical, exact sitemap, image sitemap, robots, structured-data semantics, security-header and 404 validation in GitHub Actions
- Automated hreflang self-reference, reciprocal-return and target validation plus URL-variant redirect tests
- Automated orphan-page, broken-link, weak-anchor, incoming-link and click-depth validation
- Daily official-source monitoring that opens a GitHub issue when tracked Steam fields change
- Responsive layout for desktop, tablet and mobile

## URL architecture

English is the canonical default at the root. Legacy `/en/*` requests receive a
permanent redirect to the equivalent root URL. Other languages keep an explicit
locale prefix and never depend on browser-language redirects.

```text
/                                  # English homepage
/release-date/                     # English intent page
/tools/{tool}/                     # English tool
/{locale}/                         # Non-English homepage
/{locale}/release-date/            # Non-English intent page
/{locale}/tools/{tool}/            # Non-English tool
```

## Development

```bash
npm install
npm run check
npm run validate
npm run dev
```

## Deployment

```bash
npm run deploy
```

The production routes are configured in `wrangler.jsonc` for:

- `dearpassengerscrew.com`
- `www.dearpassengerscrew.com`

Operational discovery endpoints:

- `/sitemap.xml`
- `/image-sitemap.xml`
- `/robots.txt`
- `/llms.txt`
- `/assets/site.css?v=20260801`

This is an independent fan information site. It clearly separates verified facts from unconfirmed information; game names, imagery and trademarks belong to their respective owners.

## Editorial update workflow

The daily `source-watch` workflow compares Steam’s live app data with
`data/official-status.json`. A detected material change opens or updates one
GitHub issue. Editors then verify the primary source, update the affected
evergreen guides and news report, change the verification date, and refresh the
stored snapshot in the same reviewed commit.
