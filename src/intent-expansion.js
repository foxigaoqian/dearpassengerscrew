const section = (heading, paragraphs, bullets = []) => ({ heading, paragraphs, bullets });

// Additional editorial chapters for the eleven primary search intents. These
// extend the direct answer without manufacturing facts that FLEXUS has not
// published. Each section is written for its own question and update trigger.
export const INTENT_EXPANSION = {
  "release-date": [
    section("Why placeholder dates should be treated cautiously", [
      "Unreleased games often acquire dates through retailer templates, database defaults or copied articles. Those entries can look precise without tracing back to FLEXUS or the Steam listing. A real Dear Passengers date should be repeatable across a first-party announcement and the official store record, not merely repeated by several sites that cite one another.",
      "A precise date also needs context. It should be clear whether the announcement covers the full game, a public demo, a closed test or an event build. This guide will never turn the end of the 2026 window into a fabricated countdown simply because a countdown is visually attractive."
    ]),
    section("A practical launch-readiness checklist", [
      "Before launch, players should expect several ordinary details to become public: price, purchase options, supported languages, recommended hardware and the exact multiplayer rules. None is a guaranteed sequence, but together they give a more useful picture of readiness than social-media excitement alone.",
      "For a crew planning time off, the safe decision is to wait for a dated announcement and region-specific Steam unlock information. Wishlist the official app now, then use the release tracker and news archive to see when a broad year becomes an actionable day."
    ], ["Look for an exact first-party date", "Confirm whether it is full release or demo access", "Check regional unlock and preload wording", "Revisit price, hardware and co-op details"])
  ],
  demo: [
    section("What players should test in a Dear Passengers demo", [
      "The most valuable demo questions are practical. Players need to see how quickly roles can be understood, whether a crew can recover after one task fails and how clearly cockpit events are communicated to the cabin. A short build can reveal more about the game by exposing coordination friction than by showing every passenger or cargo type.",
      "Performance matters as well. The demo should make it possible to compare the published minimum specification with real frame rate, input response and memory use. Those results belong in the system-requirements guide only when the build version, hardware and settings are recorded."
    ]),
    section("Demo access, safety and save progress", [
      "A legitimate demo may have its own Steam package, download size and availability window. Save transfer, multiplayer access, matchmaking and content limits must be read from the official page rather than inferred from another game. FLEXUS has not confirmed whether progress from a future demo will carry into the full release.",
      "Avoid pages that ask users to disable security tools, install a browser extension or download a mobile APK. Dear Passengers is currently confirmed for Windows PC through Steam; a genuine public build should be reachable from an official FLEXUS or Steam destination."
    ], ["Use the official Steam or developer link", "Record demo version and availability dates", "Do not assume save transfer", "Treat APK and unrelated launcher claims as unsafe"])
  ],
  multiplayer: [
    section("The communication problem at the center of co-op", [
      "The interesting multiplayer problem is not simply completing several chores. It is deciding which problem matters now. The pilot has information about flight conditions, while cabin players can see passengers, service tasks and moving cargo. Good crews will need a common language for urgency because each role sees a different part of the same failure.",
      "That structure could support specialization, rapid role switching or both. The footage shows responsibilities, but it does not prove a fixed class system. Until a public build exists, the safest description is role-based cooperation inside one shared aircraft."
    ]),
    section("Matchmaking, private lobbies and crossplay", [
      "Steam confirms online co-op but does not describe public matchmaking, invite codes, server regions, host migration or join-in-progress. These details affect whether the game works best with an established friend group or can be played comfortably with strangers.",
      "Crossplay is a separate question. It cannot be confirmed while Windows is the only announced platform. A future console version would still need an explicit cross-platform policy; online co-op on two platforms does not automatically mean those players can share a lobby."
    ], ["Online co-op: confirmed", "Public matchmaking: unknown", "Private lobby flow: unknown", "Crossplay and progression: unknown"])
  ],
  "how-many-players": [
    section("How to read trailers without inventing a lobby limit", [
      "A trailer may show several crew members because a scene needs to communicate the airline fantasy quickly. Character count can change between shots, and non-player characters may occupy the same space. Counting visible models is useful for describing a scene, but it cannot establish minimum or maximum network capacity.",
      "The reliable answer will come from a numbered Steam feature, official FAQ, lobby screen or reproducible public build. When that evidence appears, this page will identify the source and whether the number applies to online co-op, solo play with helpers or another mode."
    ]),
    section("Choosing a crew before the limit is announced", [
      "Groups can safely know that online co-op exists, but should avoid buying multiple copies around an assumed four-player cap. A pair may be able to switch roles, while a larger group may have dedicated jobs; neither arrangement is documented yet.",
      "The crew checker therefore gives a partial-confirmation result for multiplayer plans. It acknowledges the supported mode while keeping the party-size field unresolved. That is less exciting than a guessed number, but far more useful when money and schedules are involved."
    ], ["One player is supported", "Online co-op is supported", "The maximum is still unpublished", "Role scaling and difficulty scaling are unknown"])
  ],
  platforms: [
    section("What counts as a confirmed platform", [
      "A platform is confirmed when the game has a first-party store listing or FLEXUS names the exact system in an official announcement. Controller-friendly footage, publisher history and community wishlists are not platform commitments. The present evidence supports Windows PC on Steam and nothing broader.",
      "This distinction matters because console approval, interface work, performance targets and online services can change release timing. Even if another version is planned internally, players cannot make a purchase decision until the studio identifies it publicly."
    ]),
    section("What to verify if console versions are announced", [
      "A useful port announcement should identify PS5, Xbox Series, Nintendo hardware or another exact target rather than saying only console. Players should then check whether launch is simultaneous, whether feature parity is promised and whether online crews can cross platform boundaries.",
      "Handheld PC compatibility deserves its own evidence. Steam Deck verification, controller glyphs, text size and performance are testable details. Proton compatibility reports may be informative after release, but they are not a substitute for official Linux or SteamOS support."
    ], ["Exact device generation", "Release timing and feature parity", "Crossplay and save progression", "Controller, handheld and accessibility details"])
  ],
  gameplay: [
    section("Risk, reward and repeatable flights", [
      "Passenger and cargo selection suggests that a crew can influence difficulty before takeoff. A higher-value manifest may create more pressure in the cabin, giving the group a reason to accept or reject risk rather than facing random chaos with no agency. The precise payout and progression rules remain unpublished.",
      "For the loop to support repeated play, missions will need meaningful variation in people, cargo, weather or incidents. Official media shows several sources of variation, but does not yet explain route length, procedural generation, upgrades or how one completed flight affects the next."
    ]),
    section("Simulation, comedy and player skill", [
      "Dear Passengers uses an aircraft setting, but the available material emphasizes coordination and physical comedy rather than procedural realism. Player skill appears to include prioritization, movement, communication and damage control alongside whatever flight controls the final build uses.",
      "That positioning helps set expectations. Someone seeking a strict cockpit simulator may find the cabin chaos central rather than optional. Players who enjoy cooperative recovery—where a small mistake becomes a story—are closer to the intended fantasy shown by FLEXUS."
    ], ["Manifest choices create pre-flight risk", "Cockpit and cabin events interact", "Physics can escalate ordinary tasks", "Progression and mission variety remain open"])
  ],
  trailer: [
    section("A scene-by-scene evidence standard", [
      "The strongest trailer observations are concrete: a player occupies the cockpit, crew members work in the cabin, objects move during unstable flight and passengers require attention. These can be linked to a timestamp or official screenshot. Claims about exact statistics, lobby size or final controls cannot.",
      "The media archive uses descriptive captions instead of fictional lore. That keeps screenshots useful for readers while preserving the line between what appears on screen and what FLEXUS has documented as a launch feature."
    ]),
    section("What future footage should clarify", [
      "A longer gameplay walkthrough could answer how a mission begins, how players choose duties, what failure looks like and whether the crew returns to a persistent hub. Interface footage may also reveal inventory, voice communication, objectives and controller prompts.",
      "Until then, repeated analysis of the announcement edit reaches diminishing returns. New conclusions should come from new first-party footage or playable access, not from zooming into the same frame and presenting interpretation as confirmation."
    ])
  ],
  characters: [
    section("Roles, avatars and classes are different things", [
      "A visible crew member can be an avatar, a job can be a momentary responsibility, and a class can carry unique abilities or progression. The current material supports avatars and responsibilities, but it does not establish a permanent class system. Calling every uniform a named character would create lore the developer has not supplied.",
      "The role quiz on this site is therefore an editorial tool. It matches play preferences to visible jobs such as piloting, service, cargo and crisis response; it does not claim that those names or abilities appear in the final selection screen."
    ]),
    section("How passenger types may shape strategy", [
      "Passengers are more than decoration in the public description. Their needs and behavior can compete with safety and service work, while pre-flight selection links them to the crew's risk decision. That supports a systems-based wiki entry without inventing biographies.",
      "A public demo can establish whether passengers have readable traits, fixed archetypes, randomized demands or escalating states. Tested behavior should be documented with the build version because balancing and presentation can change before launch."
    ])
  ],
  "system-requirements": [
    section("How to interpret the official minimum", [
      "A minimum specification tells players the published entry point, not the experience attached to it. Steam does not currently state resolution, preset or target frame rate for the GTX 1060 or RX 6600 XT line. CPU model detail is also broad, so age, core count and laptop power limits can matter.",
      "The 4 GB storage figure is small enough that future updates may change it. Players should leave additional space for download unpacking, patches and shader caches rather than treating the store number as a permanent exact footprint."
    ]),
    section("A better way to compare your PC", [
      "Start with operating system and DirectX support, then compare RAM and the dedicated GPU class. Similar product names do not always mean similar performance, especially on laptops. Integrated graphics and older mobile parts need real demo results before receiving a confident recommendation.",
      "Our compatibility tool repeats the official minimum and labels any higher planning target as editorial guidance. When a demo becomes public, measured results should include build version, resolution, preset and frame rate so another player can reproduce the comparison."
    ], ["Confirm 64-bit Windows 10 or later", "Check 8 GB RAM and DirectX 12", "Compare the actual GPU, not only its name", "Keep extra free space for updates"])
  ],
  news: [
    section("How evergreen guides and news work together", [
      "A dated report records what happened on a particular day; an evergreen guide carries the current answer. When FLEXUS changes the release field or publishes a demo, the news archive should preserve that event while the release-date and demo guides are updated for readers who only need the latest status.",
      "This two-layer model prevents old announcements from ranking with stale answers. It also makes corrections visible because a reader can compare the current guide, the original report and the update history instead of finding silently rewritten claims."
    ]),
    section("What the wishlist milestones do—and do not—show", [
      "Developer-reported wishlist figures demonstrate substantial interest, but they are not sales, active players or independent Steam analytics. The source and attribution must remain attached whenever a milestone is repeated.",
      "Interest can explain why release and demo questions are popular, but it cannot answer them. The site therefore treats wishlist reports as news and keeps launch facts tied to the official Steam page or a direct FLEXUS announcement."
    ])
  ],
  wiki: [
    section("The versioned-wiki model", [
      "Unreleased-game documentation should be deliberately incomplete. Each entry starts with what Steam confirms, adds observations from official footage and lists the questions that require playable access. That structure is more trustworthy than filling every empty heading with assumed mechanics.",
      "Once a demo arrives, controls, items and strategies should be tagged with the build version and test date. If launch changes a system, the older note can remain as historical context instead of being silently presented as if it never existed."
    ]),
    section("How players can contribute useful evidence", [
      "A useful contribution includes a source link or reproducible steps: platform, build number, mode, crew size and what happened. A screenshot can support interface text, while a short clip can support an interaction. Memory, rumor and copied wiki text are starting leads rather than final evidence.",
      "Corrections should update both the affected wiki entry and any guide that depends on it. The internal link graph makes those dependencies visible, connecting roles to gameplay, platforms to requirements and demo discoveries to the relevant evergreen answer."
    ])
  ]
};
