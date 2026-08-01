# UI, content and internal-link benchmark

This document records the design and information-architecture benchmark used for the August 2026 editorial redesign. It is an implementation guide, not a request to copy another site's source code or wording.

## What the competitor does well

The strongest reference page behaves like a long-form game magazine rather than a dashboard:

- a cinematic full-screen hero creates the first impression;
- condensed display typography gives game titles a distinctive silhouette;
- body copy stays in a roughly 700–900 px reading column;
- large numbered chapters create landmarks through a long page;
- dark navy, warm off-white and sand sections alternate to reset attention;
- comparison cards are reserved for states, specifications and choices;
- ordinary explanation remains natural prose instead of becoming a card;
- an editorial-verification strip appears before the main article;
- a contents bar lets readers jump to a specific answer;
- related pages are linked from sentences, calls to action, FAQs and the footer.

Observed desktop reference measurements:

- homepage height: approximately 14,800 px;
- homepage copy: approximately 2,300 words;
- article copy: approximately 1,700 words on the release-date example;
- content container: approximately 1,180 px;
- article reading column: approximately 790 px;
- display headings: approximately 68–110 px;
- body type: approximately 16–18 px with generous line height.

## Problems in the earlier Dear Passengers Crew design

- Too many consecutive cards made every fact feel equally important.
- The resource directory consumed more than 3,000 px of the homepage.
- Several visual sections had no contextual internal links.
- The homepage navigation used section fragments instead of ranking pages.
- Article pages put short lists inside large boxes, producing empty space.
- The display-font fallback did not reliably render as a condensed face.
- Related links were concentrated at the bottom instead of appearing where a question arose.

## Our independent design direction

The redesigned site uses an **editorial flight dossier** rather than the reference site's exact composition:

- Barlow Condensed for display copy and Manrope for body copy;
- official FLEXUS screenshots as evidence-bearing media;
- navy, safety orange and aged-manifest paper as the core palette;
- a verification manifest immediately after the hero;
- numbered rails that resemble briefing sections and aircraft documentation;
- unboxed prose for explanations;
- dense status boards only where comparison is useful;
- a compact task-based flight directory instead of a wall of cards;
- persistent source, update and uncertainty labels.

No competitor source code or body copy is included. The system reconstructs the successful editorial principles with independent HTML, CSS and wording.

## Homepage content order

1. Cinematic hero and official Steam destination
2. Editorial verification manifest
3. What Dear Passengers is
4. Four primary player questions
5. Current confirmed-status board
6. Search-oriented FAQ
7. Official trailer
8. Gameplay presentation
9. Manifest-to-mayhem flight loop
10. Official screenshot evidence
11. PC requirements and languages
12. Verified news desk
13. Source manifest
14. Crew compatibility tool
15. Evidence labels
16. Compact guide, tool and intelligence directory
17. Steam call to action and full footer

## Article content order

1. Cinematic article hero with breadcrumb, status and dates
2. “In this briefing” jump navigation
3. Current answer and editorial context
4. Five intent-specific deep sections
5. Confirmed-versus-unknown comparison
6. Semantic links to adjacent search questions
7. FAQ
8. Sticky source ledger
9. Related guides and tools
10. Update history and full footer

## Internal-link policy

Homepage navigation points directly to release, demo, multiplayer, gameplay and wiki pages. Contextual links use descriptive anchor text inside relevant paragraphs. The compact directory exposes the primary guides and four highest-use tools; secondary pages remain reachable through related modules, topic hubs and the footer.

Every English URL must have:

- at least three incoming internal links;
- at least two incoming contextual links;
- a crawl depth of three or less from the English homepage;
- no generic contextual anchor such as “click here” or “learn more.”

The current automated validation reports 3,191 unique internal-link edges, 559 contextual edges and a maximum crawl depth of two. The homepage has 13 genuine in-copy contextual links, down from 38, while all navigation layers still pass the incoming-link and crawl-depth rules.

## Content depth policy

The homepage targets approximately 2,000–2,600 useful words. Primary English intent pages target at least 1,000 words before footer repetition, with the most important release, demo, news and wiki pages receiving additional depth.

Content may be expanded only when it adds one of the following:

- a direct answer;
- evidence interpretation;
- a practical player decision;
- an explicit unknown;
- an update trigger;
- a related question that deserves its own URL.

Filler written only to reach a word count is rejected.
