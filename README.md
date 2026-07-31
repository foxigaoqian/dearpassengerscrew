# Dear Passengers Crew

Independent multilingual game-intelligence hub for **Dear Passengers**, built as a Cloudflare Worker.

## What is included

- 133 validated indexable URLs
- Six localized editions across English, Simplified Chinese, Japanese, Arabic, Turkish and Ukrainian
- 11 dedicated search-intent guides in every language: release date, demo, multiplayer, player count, platforms, gameplay, trailer, characters, system requirements, news and wiki
- Six practical player tools in every language: PC compatibility, crew compatibility, release countdown, requirements comparison, live status tracker and role quiz
- Eight additional high-intent English briefings: price, download, Steam, solo, crossplay, languages, developer and confirmed features
- Eight source-aware wiki entries and five dated news reports
- Official media archive with ten full-resolution Steam screenshots and the announcement trailer
- Official Steam media and official trailer embed
- Confirmed/unknown evidence labels, source links, last-checked dates and update history
- SEO essentials: 133 unique titles and descriptions, canonical URLs, page-level hreflang, Article/NewsArticle/FAQ/Breadcrumb/CollectionPage/SoftwareApplication JSON-LD, sitemap and robots
- Dense internal-link architecture connecting guides, tools and localized editions
- Automated route, title, canonical, sitemap and 404 validation in GitHub Actions
- Responsive layout for desktop, tablet and mobile

## URL architecture

```text
/{locale}/
/{locale}/release-date/
/{locale}/demo/
/{locale}/multiplayer/
/{locale}/how-many-players/
/{locale}/platforms/
/{locale}/gameplay/
/{locale}/trailer/
/{locale}/characters/
/{locale}/system-requirements/
/{locale}/news/
/{locale}/wiki/
/{locale}/tools/{tool}/
```

## Development

```bash
npm install
npm run check
npm run dev
```

## Deployment

```bash
npm run deploy
```

The production routes are configured in `wrangler.jsonc` for:

- `dearpassengerscrew.com`
- `www.dearpassengerscrew.com`

This is an independent fan information site. It clearly separates verified facts from unconfirmed information; game names, imagery and trademarks belong to their respective owners.
