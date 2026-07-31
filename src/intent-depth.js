const section = (heading, paragraphs, bullets = []) => ({ heading, paragraphs, bullets });

export const INTENT_DEPTH = {
  "release-date": {
    media: [3, 0],
    sections: [
      section("What the 2026 release window actually means", [
        "The official Steam listing currently gives Dear Passengers a broad 2026 window. A year is useful for planning, but it is not the same as a dated launch announcement. FLEXUS has not published a month, day, unlock time, preload period or preorder schedule.",
        "A developer interview reported by dev.ua says the studio still intends to release in 2026 and does not want to rush an unfinished build. That supports the store window while also explaining why a precise countdown would be misleading."
      ], ["Official window: 2026", "Exact date: not announced", "Preload and preorder: not announced", "Windows Steam release: confirmed"]),
      section("Signals worth watching before launch", [
        "The strongest date signal will be a change to the Steam release field or a dated FLEXUS announcement. A public demo, Steam event appearance, recommended PC specifications, pricing and a new trailer could also indicate that launch information is getting closer.",
        "Wishlist notifications are useful because Steam can surface material store changes. Community guesses, retailer placeholders and countdown pages should not replace a first-party date."
      ]),
      section("How this page will change", [
        "When FLEXUS announces a date, this guide should record the announcement time, source URL, supported regions and whether the wording describes a full launch, demo, beta or early-access build. The old 2026-only answer should remain in the update history so readers can see what changed."
      ])
    ]
  },
  demo: {
    media: [2, 4],
    sections: [
      section("The public demo is planned, but it is not live", [
        "The current Steam page does not show a Download Demo or Request Access control. A FLEXUS co-founder told dev.ua that the team was preparing a Gamescom build and intended to release a public demo later. That is meaningful developer-attributed information, but it is not a downloadable public build.",
        "No public demo date, duration, save-transfer policy, multiplayer availability or content limit has been announced. The safest current answer is therefore planned, not available."
      ], ["Gamescom build: planned", "Later public demo: planned", "Steam download button: absent", "Public release date: unknown"]),
      section("How to identify the legitimate build", [
        "A real PC demo should appear on the official Steam app page or be linked directly by FLEXUS. It should not require an unrelated launcher, survey completion, browser extension, disabled antivirus protection or a mobile APK.",
        "The Steam App ID for the full game is 4534960. A future demo may use a separate package or app record, so the source link matters more than a copied filename."
      ]),
      section("Questions the demo needs to answer", [
        "The demo can clarify crew size, solo role handling, controller support, lobby flow and practical performance. Until players can test the build, trailer scenes remain evidence of the intended experience rather than a benchmark for final controls or frame rate."
      ])
    ]
  },
  multiplayer: {
    media: [1, 8],
    sections: [
      section("Online co-op is central to the game", [
        "Steam lists Multi-player, Co-op and Online Co-op alongside Single-player. The official description separates cockpit work from cabin work: one crew member can fly while others handle passengers, service, cargo and emergencies.",
        "That division creates the core communication problem. A maneuver that helps the pilot can disrupt the cabin, while a cabin incident can force the pilot to change course or flying style."
      ], ["Online co-op: confirmed", "Single-player: confirmed", "Local split screen: not announced", "Crossplay: not announced"]),
      section("Lobby details remain open", [
        "FLEXUS has not published a maximum party size, minimum co-op size, matchmaking system, public-lobby browser, private-code flow, join-in-progress rule or built-in voice-chat feature.",
        "Trailer character counts are not a reliable substitute for networking specifications. Marketing footage can stage more or fewer characters than a final lobby supports."
      ]),
      section("What crews can plan today", [
        "Players can safely plan around Windows PC online co-op and a solo option. They should not buy extra copies, controllers or another platform solely on the assumption that four-player support, couch co-op or cross-platform progression will exist."
      ])
    ]
  },
  "how-many-players": {
    media: [1, 9],
    sections: [
      section("There is no official maximum yet", [
        "The store feature panel confirms online co-op but does not publish a numbered player range. Official copy uses plural language about friends and crew jobs without stating whether the final limit is two, four, six or another number.",
        "Several visible crew members in a trailer can suggest how FLEXUS presents the fantasy, but it does not define server capacity, lobby design or supported party size."
      ], ["Minimum for solo: one", "Online co-op: confirmed", "Maximum crew: unknown", "Four-player claim: unconfirmed"]),
      section("Why the exact number changes the experience", [
        "Crew size affects how cockpit, service, cargo and emergency duties can be divided. A small team may need rapid role switching, while a larger team can specialize but may create more communication overhead.",
        "The game also needs to explain whether difficulty, passenger count or failure frequency scales with the group. None of those balancing rules are public."
      ]),
      section("The evidence required for a confirmed answer", [
        "This tracker will treat a number as confirmed only when it appears in official Steam metadata, a FLEXUS announcement, a public demo lobby or direct developer documentation. Until then, the crew-check tool reports online support without inventing a cap."
      ])
    ]
  },
  platforms: {
    media: [0, 7],
    sections: [
      section("Windows PC is the only confirmed platform", [
        "Dear Passengers has an official Windows Steam page and publishes Windows 10 64-bit requirements. There are no official PlayStation, Xbox, Nintendo, macOS, Linux, mobile or VR store listings.",
        "Controller-like footage or a gamepad-friendly genre does not confirm a console port. Platform confirmation normally requires a first-party store page, platform-holder announcement or direct FLEXUS statement."
      ], ["Windows PC: confirmed", "Steam: confirmed storefront", "PS5 and Xbox: not announced", "Switch, macOS and Linux: not announced"]),
      section("Steam Deck and controller status", [
        "Steam does not currently show a Deck compatibility rating, and controller support is not listed in the public feature panel. Proton may eventually run a Windows build on Linux-based hardware, but that is not the same as official support.",
        "Players using handheld PCs should wait for demo testing, input documentation and performance measurements before assuming the interface will be comfortable."
      ]),
      section("What a future port announcement should include", [
        "A useful platform update should identify the exact console generation, release timing, crossplay policy, save progression and whether the port launches with feature parity. This page will separate an announced port from an available one."
      ])
    ]
  },
  gameplay: {
    media: [5, 6],
    sections: [
      section("The flight begins before takeoff", [
        "Official descriptions indicate that players choose passengers and cargo, creating a risk-versus-reward decision before the aircraft leaves. Higher-value work can introduce more troublesome people, dangerous loads or harder situations.",
        "Once airborne, the crew divides between flight control and cabin operations. Service tasks continue while turbulence, loose objects and passenger behavior create new priorities."
      ], ["Choose passengers and cargo", "Pilot the aircraft", "Serve and manage the cabin", "Contain physics-driven emergencies"]),
      section("Failure is part of the entertainment", [
        "Dear Passengers is not presented as a strict procedural flight simulator. Its identity comes from chain reactions: a rough maneuver moves unsecured cargo, a cabin problem distracts the crew, and an improvised fix can create the next disaster.",
        "Dynamic weather, turbulence and air pockets provide outside pressure while passengers and objects produce physical comedy inside the plane."
      ]),
      section("Progression is still largely unknown", [
        "Mission length, route selection, aircraft upgrades, crew progression, difficulty settings, procedural generation and long-term economy systems have not been fully explained. The public demo should reveal how separate flights connect into a larger game."
      ])
    ]
  },
  trailer: {
    media: [8, 3],
    sections: [
      section("What the official trailer proves", [
        "The announcement trailer shows first-person cockpit and cabin activity, multiple crew jobs, passenger service, loose luggage, unusual cargo, turbulence and aircraft damage. These scenes are strong evidence for the intended tone and visible mechanics.",
        "The footage also shows why the game is designed around shared reactions. Cockpit decisions and cabin problems happen in the same moving space rather than in separate minigames."
      ], ["Official FLEXUS footage", "Pilot and cabin roles visible", "Passenger and object physics visible", "Dynamic hazards visible"]),
      section("What the trailer does not prove", [
        "An edited reveal cannot confirm maximum player count, final user interface, average mission length, launch performance, matchmaking, controller support, crossplay or exact release timing.",
        "Individual frames should be described as observed footage, not converted into promises about every launch feature."
      ]),
      section("How to use the scene archive", [
        "The media archive preserves ten official Steam screenshots at full resolution. Its captions connect visible scenes to cockpit, cabin, cargo and emergency topics without presenting interpretation as developer documentation."
      ])
    ]
  },
  characters: {
    media: [1, 5],
    sections: [
      section("Jobs are clearer than named characters", [
        "Current official material describes functional crew responsibilities rather than a complete roster of heroes. Pilot, cabin service, cargo handling and emergency response are useful ways to understand play, but FLEXUS has not confirmed them as locked character classes.",
        "Passengers also behave as systems and hazards. They have needs, occupy the cabin and can become part of the physical chaos during rough conditions."
      ], ["Pilot duties: visible", "Cabin duties: visible", "Named playable roster: not announced", "Class progression: not announced"]),
      section("Passenger and cargo selection", [
        "The pre-flight manifest appears to connect risk with payout. Difficult passengers and unusual cargo can make a trip more profitable while creating extra work for the crew.",
        "It remains unclear whether passenger types have fixed traits, procedural behavior, rarity tiers or story arcs."
      ]),
      section("Avoiding invented character lore", [
        "Trailer costumes, colors and repeated models are not enough to establish names, biographies or abilities. Wiki entries should keep observed roles separate from any future official character database."
      ])
    ]
  },
  "system-requirements": {
    media: [0, 7],
    sections: [
      section("Published minimum PC specifications", [
        "Steam lists Windows 10 64-bit, an Intel Core i5 at 2.5 GHz or an equivalent processor, 8 GB RAM, a GTX 1060 or RX 6600 XT, DirectX 12 and 4 GB of free storage.",
        "These are minimum entry requirements. The listing does not attach a target resolution, graphics preset or frame rate, so meeting the list does not guarantee a specific performance level."
      ], ["OS: Windows 10 64-bit", "CPU: Core i5 2.5 GHz or equivalent", "Memory: 8 GB RAM", "GPU: GTX 1060 / RX 6600 XT", "DirectX: 12", "Storage: 4 GB"]),
      section("Recommended specifications are not official", [
        "FLEXUS has not posted a recommended configuration. The comparison tool provides a conservative planning target, clearly labelled as editorial guidance rather than an official requirement.",
        "Laptop GPU names can be misleading because mobile parts may perform differently from desktop cards with similar branding. Integrated graphics should be treated cautiously until public testing exists."
      ]),
      section("What to check when the demo arrives", [
        "Players should record resolution, preset, frame rate, CPU and GPU usage, memory consumption and shader behavior. Real demo measurements will be more useful than guessing from the small download size."
      ])
    ]
  },
  news: {
    media: [2, 3],
    sections: [
      section("A dated record is more useful than a rumor feed", [
        "The news archive tracks material changes to release timing, demo access, store features and developer-reported wishlist milestones. Every report identifies whether the evidence comes from Steam, FLEXUS or an attributed interview.",
        "Wishlist totals are developer-reported milestones, not live public analytics. Steam does not expose an independently auditable real-time counter."
      ], ["Reveal and Steam listing", "700,000 wishlist report", "One-million wishlist report", "1.5-million wishlist report", "Gamescom and public-demo plan"]),
      section("What qualifies for an update", [
        "A new date, price, demo, player limit, platform, language, system requirement or major gameplay explanation should create a dated report and update the related evergreen guides.",
        "Minor social posts should not be inflated into separate pages unless they materially answer a player question."
      ]),
      section("How corrections are handled", [
        "When a source changes or a report overstates the evidence, the affected page should be corrected with the verification date preserved. The editorial policy explains the difference between confirmed, attributed, observed, interpreted and unknown information."
      ])
    ]
  },
  wiki: {
    media: [6, 9],
    sections: [
      section("A systems-first Dear Passengers wiki", [
        "Because the game is unreleased, a useful wiki should organize confirmed systems without pretending that every item, passenger or aircraft rule is already documented. The current entries cover pilot work, cabin service, flight flow, passengers, cargo, weather and emergency handling.",
        "Each entry distinguishes store-confirmed facts from trailer observations and open questions."
      ], ["Pilot role", "Cabin crew", "Flight flow", "Passengers", "Cargo and payouts", "Weather and turbulence", "Emergency handling", "Aircraft areas and items"]),
      section("What the wiki will add after public access", [
        "A public demo can support tested control maps, lobby instructions, item behavior, route steps, failure conditions and practical crew strategies. Screenshots and version numbers should accompany details that may change.",
        "Launch coverage should preserve old-version notes rather than silently treating early footage as permanent behavior."
      ]),
      section("Community questions are leads, not proof", [
        "Steam discussions and search queries help identify missing answers. They do not confirm features. The wiki only upgrades an unknown status when first-party documentation or reproducible public gameplay supports it."
      ])
    ]
  }
};
