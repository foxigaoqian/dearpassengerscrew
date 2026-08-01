# Internal link architecture

The internal-link system is designed as a topic graph rather than a list of
generic “related posts.” The source-of-truth mapping lives in
`src/link-graph.js`; rendered pages and the automated audit both consume that
structure.

## Primary clusters

| Hub intent | Supporting spokes | Conversion or utility path |
| --- | --- | --- |
| Release | release date, demo, price, Steam, dated announcements | release-window tracker, live status |
| Multiplayer | online co-op, player count, solo, crossplay | crew compatibility |
| Gameplay | flight loop, trailer, roles, passengers, cargo, weather, emergencies | role quiz |
| Purchase readiness | platforms, requirements, languages, download safety | PC checker, system comparison |
| Freshness | news hub, wishlist reports, demo report, Steam reveal | status tracker |
| Trust | sources, editorial policy, corrections, about | official Steam and trailer |

## Link layers

1. **Homepage discovery**
   - Primary guides and the four highest-use tools are linked from the English homepage.
   - Secondary tools and authority pages are distributed through contextual modules,
     topic hubs and a restrained footer instead of being forced into the homepage body.
   - Localized homepages expose their translated core guide and tool set.
   - News and wiki children are reachable through their hubs.
2. **Contextual search-intent links**
   - Every guide, authority article, wiki entry, news report, media page and
     tool includes a mid-content semantic link block.
   - Anchor text describes the destination question instead of repeating
     generic text such as “read more.”
3. **Cluster navigation**
   - News and wiki hubs link to every child.
   - Deep pages link laterally within their cluster and back to the relevant
     evergreen guide.
4. **Sitewide discovery**
   - The footer exposes core guides, player questions, tools and editorial
     trust pages.
   - Breadcrumbs preserve hierarchy on every article and tool.
5. **Language isolation**
   - Localized contextual links stay inside the same language for core guides
     and tools.
   - English-only authority research is not silently presented as translated.

## Automated quality gates

`scripts/validate.mjs` fails the build when:

- an internal link returns anything other than 200 or a valid redirect;
- a graph source or target is undefined;
- a graph entry links to itself;
- an anchor is empty, generic or duplicated on the same page;
- a content page has fewer than three distinct incoming pages;
- an English content page has fewer than two contextual incoming pages;
- a page is unreachable or more than three clicks from its localized homepage.

The current graph keeps every page within two clicks of the appropriate
localized homepage. Footer links count for discovery, while contextual links
are measured separately so sitewide navigation cannot hide a weak topic graph.
The English homepage currently contains 13 genuine in-copy contextual links;
directory, header and footer links remain discovery navigation rather than being
misclassified as editorial recommendations.
