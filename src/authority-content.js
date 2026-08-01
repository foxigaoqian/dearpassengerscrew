export const AUTHORITY_SLUGS = [
  "price",
  "download",
  "steam",
  "solo",
  "crossplay",
  "languages",
  "developer",
  "confirmed-features"
];

export const WIKI_SLUGS = [
  "pilot-role",
  "cabin-crew",
  "flight-flow",
  "passengers",
  "cargo-and-payouts",
  "weather-and-turbulence",
  "emergency-handling",
  "items-and-aircraft-areas"
];

export const NEWS_SLUGS = [
  "steam-reveal-2026",
  "700k-wishlists",
  "one-million-wishlists",
  "one-point-five-million-wishlists",
  "two-million-wishlists-top-six",
  "gamescom-demo-plans"
];

export const STATIC_SLUGS = ["about", "editorial-policy", "corrections", "contact", "privacy-policy"];

export const SOURCES = {
  steam: {
    name: "Official Dear Passengers Steam page",
    url: "https://store.steampowered.com/app/4534960/Dear_Passengers/",
    type: "Primary source"
  },
  trailer: {
    name: "Official announcement trailer",
    url: "https://www.youtube.com/watch?v=hEsuA_rqTxk",
    type: "Official footage"
  },
  steam700: {
    name: "700,000 passengers in 36 hours",
    url: "https://store.steampowered.com/news/app/4534960/view/698770449667981489",
    type: "FLEXUS announcement"
  },
  steam1m: {
    name: "1,000,000 passengers onboard",
    url: "https://store.steampowered.com/news/app/4534960/view/698770449667981854",
    type: "FLEXUS announcement"
  },
  steam15m: {
    name: "1,500,000 passengers onboard",
    url: "https://store.steampowered.com/news/app/4534960/view/698770449667982669",
    type: "FLEXUS announcement"
  },
  steam2m: {
    name: "2,000,000 wishlists and Steam Top 6",
    url: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1839676055888602",
    type: "FLEXUS announcement"
  },
  devua: {
    name: "FLEXUS interview reported by dev.ua",
    url: "https://dev.ua/en/news/1-billion-dear-passengers-1784294360",
    type: "Attributed developer statement"
  },
  community: {
    name: "Official Steam Community hub",
    url: "https://steamcommunity.com/app/4534960",
    type: "Official community channel"
  },
  githubIssues: {
    name: "GitHub corrections and source submissions",
    url: "https://github.com/foxigaoqian/dearpassengerscrew/issues",
    type: "Correction channel"
  },
  cloudflarePrivacy: {
    name: "Cloudflare Privacy Policy",
    url: "https://www.cloudflare.com/privacypolicy/",
    type: "Hosting provider policy"
  }
};

const page = (name, title, description, answer, sections, faq, sources = ["steam", "trailer"]) => ({
  name,
  title,
  description,
  answer,
  sections,
  faq,
  sources
});

export const AUTHORITY_CONTENT = {
  price: page(
    "Price",
    "Dear Passengers Price: Is It Free or Paid?",
    "The verified Dear Passengers price status, whether the game is free-to-play, and what Steam does and does not confirm before release.",
    "FLEXUS has not announced a launch price. Steam's public store data marks the product as not free, but no amount, edition or preorder is listed.",
    [
      {
        heading: "There is no official Dear Passengers price yet",
        paragraphs: [
          "The Steam page is live for wishlisting, but it does not show a purchase price, preorder package, launch discount or edition comparison. That means any exact amount circulating on a third-party page is an estimate rather than a confirmed price.",
          "Steam's store data currently marks the app as not free. That is useful evidence against calling it a confirmed free-to-play game, but it still does not tell players what FLEXUS will charge at launch. The responsible answer is therefore: likely paid, exact price unknown."
        ],
        bullets: ["Official amount: not announced", "Preorder: not available", "Launch editions: not announced", "Free-to-play: not supported by current store data"]
      },
      {
        heading: "Why the Steam user tag is not a price announcement",
        paragraphs: [
          "Steam tags can be suggested and weighted by users. A Free to Play tag is not the same thing as a price block, developer announcement or published package. Search snippets that copy community tags can therefore produce a misleading answer.",
          "We will replace this page's unknown status only when the official store page displays a price or FLEXUS publishes a direct statement. Comparable-game pricing can help with budgeting, but it must remain clearly labelled as comparison rather than prediction."
        ]
      },
      {
        heading: "What to check before spending money",
        paragraphs: [
          "Wait for the official package, regional price and refund terms. Also check whether the public demo arrives before launch, whether your crew size is supported, and whether the final recommended hardware is published. Those details matter more than an unofficial price guess."
        ]
      }
    ],
    [
      ["How much will Dear Passengers cost?", "No official amount has been announced."],
      ["Is Dear Passengers free?", "Current Steam store data does not mark it as free, but the launch price remains unpublished."],
      ["Can I preorder it?", "No official preorder package is available."],
      ["Will there be different editions?", "FLEXUS has not announced editions or paid DLC."]
    ]
  ),
  download: page(
    "Download",
    "Dear Passengers Download: Is the Game Available?",
    "Safe Dear Passengers download status for Steam, demo, Playtest, APK claims and unofficial installers.",
    "Dear Passengers is not released and cannot currently be downloaded from its official Steam page. A Gamescom demo and later public demo are planned, but the public build is not live.",
    [
      {
        heading: "There is no official Dear Passengers download today",
        paragraphs: [
          "The official Steam listing currently offers a wishlist action, not an Install, Purchase, Download Demo or Request Access button. The full game remains scheduled for 2026.",
          "FLEXUS has said a Gamescom build is being prepared and that a public demo should follow later. That confirms an access plan, not a live file. No public demo date, download platform or availability window has been published."
        ],
        bullets: ["Full game: unreleased", "Steam demo: not live", "Steam Playtest: not listed", "Gamescom build: planned", "Later public demo: developer-reported plan"]
      },
      {
        heading: "Avoid fake APK files, keys and installers",
        paragraphs: [
          "Dear Passengers is currently confirmed for Windows PC through Steam. There is no official Android APK, iOS build, cracked release, console download or public beta key. Pages asking visitors to disable security software, complete surveys or install an unknown launcher are not official distribution channels.",
          "A safe download page should always lead back to FLEXUS or Steam and should state clearly when no download exists. It should never turn an unreleased game into a fake call-to-action."
        ]
      },
      {
        heading: "How to know when the real build arrives",
        paragraphs: [
          "Wishlist the game on Steam, follow its official community hub, and check whether the store page gains an official demo or access panel. This tracker records the source and last-checked date whenever the status changes."
        ]
      }
    ],
    [
      ["Can I download Dear Passengers now?", "No official full-game or public-demo download is available."],
      ["Is there a Dear Passengers APK?", "No official mobile version or APK has been announced."],
      ["Is there a Steam Playtest?", "No Playtest request panel is currently listed."],
      ["Will there be a demo?", "A Gamescom demo and later public demo have been reported from a FLEXUS co-founder, but no public date is set."]
    ],
    ["steam", "devua", "community"]
  ),
  steam: page(
    "Steam",
    "Dear Passengers on Steam: App ID, Wishlist and Store Status",
    "Official Dear Passengers Steam details including App ID 4534960, release status, modes, languages and wishlist milestones.",
    "The official Dear Passengers Steam App ID is 4534960. The listing confirms a 2026 Windows release, single-player, multiplayer, co-op and online co-op.",
    [
      {
        heading: "What the official Steam listing confirms",
        paragraphs: [
          "Steam is the only confirmed storefront and Windows PC is the only confirmed platform. The product is not yet available to purchase or install. FLEXUS is listed as both developer and publisher.",
          "The feature panel includes Single-player, Multi-player, Co-op, Online Co-op and Family Sharing. Family Sharing is an account-library feature and does not reveal the maximum co-op player count."
        ],
        bullets: ["App ID: 4534960", "Developer and publisher: FLEXUS", "Release window: 2026", "Platform: Windows PC", "Modes: solo and online co-op", "Store status: wishlist available"]
      },
      {
        heading: "Languages shown on Steam",
        paragraphs: [
          "The listing currently names six interface languages: English, Arabic, Simplified Chinese, Turkish, Ukrainian and Japanese. Full audio and subtitle support are not checked in the public language table.",
          "A listed interface language does not automatically guarantee translated voice acting, every community post or every pre-release demo. The final language table should be checked again near launch."
        ]
      },
      {
        heading: "Wishlist milestones are developer-reported",
        paragraphs: [
          "FLEXUS announced 700,000 wishlists in 36 hours, one million in two days and 1.5 million shortly afterward. Steam does not expose a live public wishlist counter, so these figures should be described as official developer reports rather than independently audited totals."
        ]
      }
    ],
    [
      ["What is the Dear Passengers Steam App ID?", "4534960."],
      ["Can I buy it on Steam?", "Not yet. The page currently supports wishlisting."],
      ["Does Steam confirm co-op?", "Yes, Co-op and Online Co-op are listed."],
      ["Does Family Sharing mean a specific player count?", "No. It does not reveal lobby size."]
    ],
    ["steam", "steam700", "steam1m", "steam15m"]
  ),
  solo: page(
    "Solo play",
    "Can You Play Dear Passengers Solo?",
    "What Single-player support confirms, what solo footage does not prove, and which role-switching questions remain unanswered.",
    "Yes. Steam lists Single-player support. FLEXUS has not yet explained how one player handles simultaneous cockpit and cabin responsibilities.",
    [
      {
        heading: "Single-player is officially listed",
        paragraphs: [
          "The answer does not need to be inferred from trailer footage: Single-player appears in the official Steam feature panel. Players should be able to use the game without joining an online crew.",
          "What the label does not explain is how the game restructures its divided jobs. The central pitch puts one person in the cockpit while others manage passengers, cargo and cabin incidents, so solo play needs some form of role switching, assistance, automation or difficulty scaling."
        ]
      },
      {
        heading: "Open questions about the solo experience",
        paragraphs: [
          "FLEXUS has not described AI crew, pausing, quick swapping, remote cabin controls, mission scaling or whether some tasks are removed for solo sessions. The official trailer focuses on the shared-crew fantasy rather than documenting a complete single-player run.",
          "Until a demo or developer FAQ shows the system, do not assume solo means controlling several characters, playing with bots or receiving the same event density as a full crew."
        ],
        bullets: ["AI crewmates: not announced", "Role switching: not explained", "Difficulty scaling: not explained", "Offline requirement: not announced"]
      },
      {
        heading: "Who should wait for more information",
        paragraphs: [
          "Players buying primarily for solo play should wait for the public demo, unedited gameplay or a dedicated FLEXUS explanation. The mode is confirmed; its quality, pacing and workload are not yet measurable."
        ]
      }
    ],
    [
      ["Is Dear Passengers single-player?", "Yes, Steam lists Single-player."],
      ["Are there AI crewmates?", "Not announced."],
      ["Can one player switch between pilot and cabin crew?", "FLEXUS has not explained the solo control model."],
      ["Is solo offline?", "No offline requirement has been confirmed."]
    ]
  ),
  crossplay: page(
    "Crossplay",
    "Does Dear Passengers Have Crossplay or Local Co-op?",
    "Current Dear Passengers crossplay, split-screen, LAN, local co-op and Remote Play Together status.",
    "Crossplay and local co-op are not announced. Only Windows PC and online co-op are currently confirmed.",
    [
      {
        heading: "Crossplay needs more than one confirmed platform",
        paragraphs: [
          "Dear Passengers currently has one confirmed platform: Windows PC through Steam. FLEXUS has not announced PlayStation, Xbox, Nintendo Switch, macOS or Linux versions, so there is no second platform for an official crossplay promise.",
          "Online Co-op confirms that friends can work together over the internet. It does not by itself confirm cross-platform lobbies, cross-progression or account linking."
        ]
      },
      {
        heading: "Local and shared-screen modes are also unknown",
        paragraphs: [
          "The Steam feature panel does not currently list Shared/Split Screen Co-op or Remote Play Together. LAN play, couch co-op and hot-seat role switching are likewise unannounced.",
          "A first-person cockpit-and-cabin layout could make split-screen demanding, but design speculation is not evidence. This page will only change when the store features or a FLEXUS statement changes."
        ],
        bullets: ["Online co-op: confirmed", "Crossplay: not announced", "Local co-op: not announced", "Split-screen: not listed", "LAN: not announced", "Remote Play Together: not listed"]
      }
    ],
    [
      ["Is Dear Passengers cross-platform?", "No cross-platform support has been announced."],
      ["Does it have split-screen?", "Split-screen is not listed on Steam."],
      ["Can two people play on one PC?", "Local shared-screen support is not confirmed."],
      ["Is Remote Play Together supported?", "It is not currently shown in the Steam feature panel."]
    ]
  ),
  languages: page(
    "Languages",
    "Dear Passengers Languages and Localization Support",
    "The six Dear Passengers interface languages currently listed on Steam, plus audio and subtitle limitations.",
    "Steam lists English, Arabic, Simplified Chinese, Turkish, Ukrainian and Japanese for the interface. Full audio and subtitles are not currently checked.",
    [
      {
        heading: "Six interface languages are listed",
        paragraphs: [
          "The current Steam language table names English, Arabic, Simplified Chinese, Turkish, Ukrainian and Japanese. Each has an interface checkmark.",
          "The table does not currently show full-audio or subtitle checkmarks. Interface support normally covers menus and on-screen UI, but the final scope can change before release."
        ],
        bullets: ["English", "Arabic", "Simplified Chinese", "Turkish", "Ukrainian", "Japanese"]
      },
      {
        heading: "What is not confirmed",
        paragraphs: [
          "Voice acting, subtitles, community announcements, demo localization and language switching have not been explained. A multilingual Steam store page is not proof that every piece of spoken or promotional content will be translated.",
          "The game is developed by Kyiv-based FLEXUS and Ukrainian appears among the supported interfaces. Additional languages may be added, but none should be promised until the official table changes."
        ]
      }
    ],
    [
      ["Is Dear Passengers available in Chinese?", "Simplified Chinese interface support is listed."],
      ["Does it support Japanese?", "Japanese interface support is listed."],
      ["Is there Arabic support?", "Arabic interface support is listed."],
      ["Are voices translated?", "Full audio support is not currently checked in Steam's table."]
    ],
    ["steam"]
  ),
  developer: page(
    "Developer",
    "Who Is the Dear Passengers Developer FLEXUS?",
    "Source-backed overview of FLEXUS as the developer and publisher of Dear Passengers, without confusing studio claims with independent verification.",
    "Dear Passengers is developed and published by FLEXUS, a Kyiv-based Ukrainian game studio moving into PC co-op development.",
    [
      {
        heading: "FLEXUS develops and publishes Dear Passengers",
        paragraphs: [
          "The official Steam listing names FLEXUS in both roles. Reporting from dev.ua describes the team as a Kyiv-based Ukrainian studio and attributes comments about the reveal, wishlists and demo plan to co-founder Semen Kozyura.",
          "Dear Passengers is positioned as a physics-driven co-op action-adventure rather than a serious commercial-flight simulator. The studio's public copy emphasizes friends, cascading emergencies and risky passenger-and-cargo choices."
        ]
      },
      {
        heading: "What FLEXUS has publicly reported",
        paragraphs: [
          "The studio announced rapid wishlist milestones through Steam news: 700,000 in 36 hours, one million in two days and 1.5 million soon afterward. These are official studio reports; Valve does not provide a public live wishlist counter.",
          "A co-founder also said a playable build was being prepared for Gamescom and a public demo would follow later. No public-demo date or exact launch date accompanied that statement."
        ]
      },
      {
        heading: "Editorial rule for studio claims",
        paragraphs: [
          "This site labels FLEXUS announcements as primary developer statements, not independent audits. Dates, player counts, pricing and platform claims remain unknown until they are published through a direct source."
        ]
      }
    ],
    [
      ["Who makes Dear Passengers?", "FLEXUS."],
      ["Who publishes it?", "FLEXUS is also listed as publisher."],
      ["Where is FLEXUS based?", "dev.ua describes the studio as Kyiv-based and Ukrainian."],
      ["Are wishlist totals public Steam data?", "No. The milestones are reported by the developer."]
    ],
    ["steam", "steam700", "steam1m", "steam15m", "devua"]
  ),
  "confirmed-features": page(
    "Confirmed features",
    "Dear Passengers Confirmed Features: Official Checklist",
    "A conservative checklist of Dear Passengers features confirmed in writing, shown in official footage, or still unannounced.",
    "Confirmed features include piloting, cabin work, passenger service, cargo choices, physics, dynamic weather, single-player and online co-op.",
    [
      {
        heading: "Confirmed in the official description",
        paragraphs: [
          "FLEXUS describes a complete high-level loop: select passengers and cargo, split work between cockpit and cabin, serve travelers, protect cargo, react to failures and try to reach the destination.",
          "Weather, turbulence and air pockets interact with passengers, luggage and unsecured objects. The game connects early risk-versus-payout choices with later physical problems in the aircraft."
        ],
        bullets: ["Pilot the aircraft", "Work inside the cabin", "Serve passengers", "Choose passengers and cargo", "Higher-risk manifests", "Physics-driven people and objects", "Dynamic weather and turbulence"]
      },
      {
        heading: "Confirmed store features",
        paragraphs: [
          "Steam lists Single-player, Multi-player, Co-op, Online Co-op and Family Sharing. Windows is the only supported operating system shown, and six interface languages are listed.",
          "Minimum requirements are published, but recommended specifications and performance targets are not."
        ]
      },
      {
        heading: "Visible does not always mean formally specified",
        paragraphs: [
          "The trailer shows dramatic incidents, unusual cargo, repairs and weapons-like action. Edited footage is useful evidence that a scene exists in promotional material, but it does not define frequency, controls, progression or final balance.",
          "Maximum player count, exact launch date, price, console versions, crossplay, local co-op, Steam Deck support and final demo details remain unannounced."
        ]
      }
    ],
    [
      ["Can players fly the plane?", "Yes, piloting is explicitly confirmed."],
      ["Can players work in the cabin?", "Yes, cabin service and incident response are central features."],
      ["Is online co-op confirmed?", "Yes."],
      ["Is proximity voice chat confirmed?", "No specific voice-chat design has been announced."]
    ]
  )
};

export const WIKI_CONTENT = {
  "pilot-role": page(
    "Pilot role",
    "Dear Passengers Pilot Role: Cockpit Duties and Crew Impact",
    "A source-aware field guide to the confirmed pilot responsibility and the questions official footage still leaves open.",
    "One crew member can pilot the aircraft while the rest work inside the cabin. Pilot movement and weather decisions directly affect the physical space behind the cockpit.",
    [
      { heading: "Keep the aircraft moving", paragraphs: ["Piloting is an explicit part of the official description. The cockpit player manages the flight while cabin players handle service, passengers, cargo and incidents.", "Dynamic weather, turbulence and air pockets make the pilot's choices a shared concern. Sudden movement can turn unsecured luggage, equipment and people into hazards."] },
      { heading: "Communicate before the cabin moves", paragraphs: ["A practical crew should warn before sharp manoeuvres and report rough conditions early. That recommendation is an interpretation of the confirmed linked systems, not an announced tutorial rule.", "FLEXUS has not published the complete control layout, autopilot options, navigation depth, landing model or controller support."] },
      { heading: "Confirmed versus inferred", paragraphs: ["Confirmed: a player pilots; weather affects the flight; cabin physics respond to movement. Inferred strategy: use short warnings and coordinate difficult corrections with the cabin."] }
    ],
    [["Can you fly the plane?", "Yes."], ["Is the pilot a locked class?", "No permanent class system has been announced."], ["Is there realistic navigation?", "Simulation depth is not specified."]],
    ["steam", "trailer"]
  ),
  "cabin-crew": page(
    "Cabin crew",
    "Dear Passengers Cabin Crew: Service, Cargo and Emergencies",
    "What cabin players do in Dear Passengers and how passenger service connects to cargo, weather and cockpit decisions.",
    "Cabin players serve passengers, protect cargo and deal with problems before they escalate while another crew member can fly.",
    [
      { heading: "Routine service creates pressure", paragraphs: ["Passengers expect food, drinks and a smooth flight. Cabin work continues while the plane moves, so normal service can collide with turbulence, blocked aisles and emergency tasks.", "The official description makes service part of the game loop rather than background decoration."] },
      { heading: "Secure the profitable problem", paragraphs: ["Passengers and cargo are selected before departure, and harder choices can pay more. Cabin crew therefore inherit the consequences of the manifest: difficult travelers, unstable objects and limited access.", "Exact tools, inventory slots and passenger-behaviour systems are not yet documented."] },
      { heading: "Respond as a team", paragraphs: ["The cockpit needs clear information about what is happening behind it. Cabin players need warnings before rough manoeuvres. This two-way pressure is the strongest confirmed reason the game is built around co-op."] }
    ],
    [["What does cabin crew do?", "Serve passengers, protect cargo and respond to onboard problems."], ["Are there fixed classes?", "No fixed class system is announced."], ["Can cabin crew repair the plane?", "Official footage shows incident response, but the complete repair system is not documented."]]
  ),
  "flight-flow": page(
    "Flight flow",
    "Dear Passengers Flight Flow: From Manifest to Landing",
    "The confirmed Dear Passengers gameplay sequence from selecting risky passengers and cargo to surviving weather and cabin chaos.",
    "The high-level loop begins with a passenger-and-cargo manifest, then divides cockpit and cabin work before escalating through service, weather and emergencies.",
    [
      { heading: "1. Build the manifest", paragraphs: ["Before takeoff, the crew chooses passengers and cargo. Better-paying choices can create a more difficult trip, connecting economic risk to later cabin pressure."] },
      { heading: "2. Divide the aircraft", paragraphs: ["One person can pilot while others work inside. FLEXUS has not announced fixed classes, so this is best treated as a responsibility split rather than a permanent character system."] },
      { heading: "3. Serve and secure", paragraphs: ["Cabin players try to meet passenger needs and keep cargo controlled. The pilot handles route and weather pressure. Both sides can create new work for the other."] },
      { heading: "4. Contain the cascade", paragraphs: ["Turbulence, air pockets, loose objects and bad decisions can combine. The official pitch is less about one scripted emergency than about several systems failing together."] },
      { heading: "5. Reach the destination", paragraphs: ["Delivery is the stated job, but FLEXUS has not yet explained scoring, progression, route length, failure states or the final economy."] }
    ],
    [["Does every flight start with a manifest?", "The official description places passenger and cargo choice before departure."], ["Are routes procedurally generated?", "Not announced."], ["How long is one flight?", "Not announced."]]
  ),
  passengers: page(
    "Passengers",
    "Dear Passengers Wiki: Passenger Needs and Cabin Risk",
    "How passengers shape service workload, physical hazards and the pre-flight risk-versus-payout decision.",
    "Passengers are selected before takeoff, expect service during the route and can become part of the physics-driven cabin chaos.",
    [
      { heading: "Passengers are gameplay, not decoration", paragraphs: ["The crew is expected to deliver travelers, provide food and drinks and react when a normal flight stops being normal. Passenger demands create routine work before an emergency begins.", "FLEXUS has not published named archetypes, mood meters, health values or a complete behavior list."] },
      { heading: "Risk starts before departure", paragraphs: ["The manifest connects traveler selection with payout and difficulty. A more profitable passenger choice may require more attention or make the cabin harder to control.", "Exactly how the game communicates risk, reward and passenger traits remains unknown."] },
      { heading: "Physics makes people part of the incident", paragraphs: ["Weather and sudden aircraft movement can affect passengers as well as luggage and other objects. The trailer shows the comedy of this system, but promotional scenes do not define final damage or failure rules."] }
    ],
    [["Can players choose passengers?", "Yes, passenger selection is part of the official premise."], ["Are there named characters?", "A full official roster has not been published."], ["Can passengers be injured?", "Final health and failure rules are not explained."]]
  ),
  "cargo-and-payouts": page(
    "Cargo and payouts",
    "Dear Passengers Cargo and Payouts: Risk Before Takeoff",
    "How suspicious cargo, passenger choices and larger payouts create the Dear Passengers risk-reward loop.",
    "The crew chooses cargo before departure, and more profitable loads can create more dangerous problems during the flight.",
    [
      { heading: "The manifest is a strategic choice", paragraphs: ["FLEXUS ties passengers and cargo to payout. The crew is not simply loading every available object; it is choosing which risks the group believes it can manage.", "The exact economy, contract tiers, currency and progression system are not announced."] },
      { heading: "Loose cargo changes the cabin", paragraphs: ["Turbulence and air pockets can move unsecured objects. Valuable freight may therefore create both an economic objective and a physical obstacle for cabin players.", "Official footage includes unusual and dangerous-looking cargo, but individual items should not be assigned mechanics until FLEXUS documents them."] },
      { heading: "A practical crew rule", paragraphs: ["Choose a manifest that matches the number of available hands and keep critical routes clear. This is strategy inferred from the confirmed systems, not a quoted in-game tutorial."] }
    ],
    [["Can you choose cargo?", "Yes."], ["Does dangerous cargo pay more?", "The official description connects more trouble with more money."], ["Is illegal cargo a formal category?", "The store tagline references illegal cargo, but a full category system is not documented."]]
  ),
  "weather-and-turbulence": page(
    "Weather and turbulence",
    "Dear Passengers Weather, Turbulence and Air Pockets",
    "How dynamic weather connects cockpit decisions with passengers, luggage, cargo and loose objects in the cabin.",
    "Dynamic weather, turbulence and air pockets are confirmed systems that can move passengers, luggage and unsecured objects.",
    [
      { heading: "Weather is a shared mechanic", paragraphs: ["The pilot experiences flight conditions from the cockpit, but the consequences propagate into the cabin. This makes weather a crew-wide event instead of a visual background effect.", "FLEXUS explicitly names turbulence and air pockets. Storm frequency, forecasts, route planning and difficulty settings are not specified."] },
      { heading: "Prepare before the warning", paragraphs: ["Securing important cargo and keeping aisles usable are sensible responses to the confirmed physics. A pilot warning can give the cabin time to stop service and protect key objects.", "These are practical interpretations; the final game may teach or score preparation differently."] },
      { heading: "Do not convert trailer spectacle into a feature list", paragraphs: ["Birds, damage and extreme scenes appear in official media. They confirm promotional scenarios, not exact random-event probabilities or a complete weather simulation."] }
    ],
    [["Does weather affect gameplay?", "Yes."], ["Is turbulence physics-based?", "The official description says it moves passengers, luggage and loose objects."], ["Can players forecast weather?", "Not announced."]]
  ),
  "emergency-handling": page(
    "Emergency handling",
    "Dear Passengers Emergency Handling and Crew Priorities",
    "A conservative strategy guide built from the confirmed cockpit, cabin, passenger, cargo and weather systems.",
    "Emergencies can connect several systems at once, so crews should protect control, access and critical cargo before returning to routine service.",
    [
      { heading: "Stop the cascade", paragraphs: ["Dear Passengers is presented as a game where one problem becomes worse if the crew does not respond. A cabin incident can distract the cockpit, while a difficult manoeuvre can create more cabin work.", "Specific fire, repair, medical or combat rules are not comprehensively documented."] },
      { heading: "A source-aware priority model", paragraphs: ["First preserve aircraft control. Then restore access through the cabin, secure important cargo and stabilize passenger service. Communicate what changed before players duplicate work.", "This priority model is our strategy synthesis, not an official FLEXUS ruleset. It will be revised after hands-on footage or a public demo."] },
      { heading: "What a future demo must clarify", paragraphs: ["Players still need to see failure states, revive systems, inventory limits, repair interactions, objective scoring and how event density scales with crew size."] }
    ],
    [["Are emergencies random?", "The game promises unexpected events, but generation rules are not explained."], ["Can the plane be repaired?", "Official footage shows damage response, but the full system is unknown."], ["What should crews prioritize?", "Aircraft control, access, critical cargo and communication are a practical starting order."]]
  ),
  "items-and-aircraft-areas": page(
    "Items and aircraft areas",
    "Dear Passengers Items, Cockpit, Cabin and Cargo Areas",
    "A careful index of aircraft spaces and object groups visible or described in official Dear Passengers material.",
    "The confirmed activity spans the cockpit, passenger cabin, service aisle and cargo-related spaces, but a complete map and item database are not published.",
    [
      { heading: "Confirmed activity areas", paragraphs: ["The cockpit supports piloting. The cabin supports passenger service and incident response. Pre-flight selection covers passengers and cargo, implying loading or manifest interfaces.", "Official media also shows exterior and damaged-aircraft situations. Those scenes should be labelled as trailer-visible until the final traversal rules are known."] },
      { heading: "Object groups shown or described", paragraphs: ["Food and drink service items, luggage, cargo and loose cabin objects are central to the physics premise. Promotional footage includes more unusual objects, but names, rarity and interactions are not documented.", "This wiki will split individual items into dedicated entries only when an official name or repeatable public-demo behavior exists."] },
      { heading: "Why restraint makes the wiki more useful", paragraphs: ["A pre-release wiki can easily turn every trailer frame into invented lore. Our index separates written confirmation, visible footage and strategy interpretation so future updates can correct one layer without rewriting the others."] }
    ],
    [["Is there a full aircraft map?", "No official map is published."], ["Can players go outside the plane?", "Exterior scenes appear in official footage, but traversal rules are not explained."], ["Is there an inventory system?", "Not formally described."]]
  )
};

const news = (name, title, description, answer, date, sections, sources) => ({
  ...page(name, title, description, answer, sections, [], sources),
  date
});

export const NEWS_CONTENT = {
  "steam-reveal-2026": news(
    "Steam reveal",
    "Dear Passengers Revealed for Steam With a 2026 Window",
    "The original Dear Passengers Steam reveal confirmed Windows, solo play, online co-op and the game's cockpit-and-cabin premise.",
    "FLEXUS opened the Dear Passengers Steam page with a 2026 Windows release window and an official announcement trailer.",
    "2026-07-14",
    [
      { heading: "What the reveal established", paragraphs: ["The store listing named FLEXUS as developer and publisher, confirmed Windows PC and opened wishlisting. Single-player and online co-op appeared in the feature panel.", "The game description established the crew split: one player can pilot while others run the cabin, serve passengers and handle cargo and escalating problems."] },
      { heading: "What remained missing", paragraphs: ["The reveal did not include an exact release date, price, maximum player count, console plan or public demo date. Those gaps remain important search questions rather than invitations to guess."] }
    ],
    ["steam", "trailer"]
  ),
  "700k-wishlists": news(
    "700K wishlists",
    "Dear Passengers Reports 700,000 Wishlists in 36 Hours",
    "FLEXUS's first major Dear Passengers wishlist milestone and what the developer-reported number does and does not mean.",
    "FLEXUS reported 700,000 Steam wishlists during the first 36 hours after the reveal.",
    "2026-07-15",
    [
      { heading: "The first public milestone", paragraphs: ["The official Steam news post thanked players for wishlisting, sharing, making memes and discussing the game. The figure represented a fast-moving pre-release snapshot.", "Wishlist totals are private account data. The number is an official FLEXUS report, not a public counter independently verified by this site."] },
      { heading: "What did not change", paragraphs: ["The milestone did not add a launch date, price, demo download or player limit. The official release window remained 2026."] }
    ],
    ["steam700", "steam"]
  ),
  "one-million-wishlists": news(
    "One million wishlists",
    "Dear Passengers Reaches One Million Wishlists in Two Days",
    "FLEXUS reported one million Dear Passengers wishlists and a Top 25 Steam position two days after the reveal.",
    "FLEXUS said the game reached one million wishlists and entered Steam's Top 25 most-wishlisted games in two days.",
    "2026-07-17",
    [
      { heading: "One million passengers onboard", paragraphs: ["The official announcement described the growth as organic and said there had been no paid creators, advertising or marketing campaign. That wording is the studio's own characterization.", "The milestone indicates unusual awareness for a newly revealed game, but wishlists are not sales, downloads or active players."] },
      { heading: "The release status stayed the same", paragraphs: ["Dear Passengers remained a 2026 Windows release with no exact day, public-demo date, price or maximum crew size."] }
    ],
    ["steam1m", "steam"]
  ),
  "one-point-five-million-wishlists": news(
    "1.5 million wishlists",
    "Dear Passengers Reaches 1.5 Million Steam Wishlists",
    "The latest official Dear Passengers wishlist milestone and FLEXUS's development note about mechanics, events, luggage and passengers.",
    "FLEXUS reported 1.5 million wishlists and said development continued on more mechanics, unexpected events, suspicious luggage and passengers.",
    "2026-07-20",
    [
      { heading: "The newest official milestone", paragraphs: ["The 1.5-million figure superseded the earlier 700,000 and one-million snapshots. It remains a developer-reported total because Steam does not expose a public live wishlist counter.", "FLEXUS paired the number with a short development message rather than a detailed roadmap."] },
      { heading: "Do not turn the wording into promised features", paragraphs: ["More mechanics, events, luggage and passengers indicates active development. It does not identify exact finished systems, quantities or launch content.", "No exact release date, price, public-demo date or player limit was announced in the milestone post."] }
    ],
    ["steam15m", "steam"]
  ),
  "two-million-wishlists-top-six": news(
    "Two million wishlists",
    "Dear Passengers Reaches 2 Million Wishlists and Steam Top 6",
    "FLEXUS reported two million Dear Passengers wishlists and a Top 6 position among Steam's most-wishlisted games on July 31, 2026.",
    "FLEXUS says Dear Passengers has passed two million Steam wishlists and reached the platform's Top 6 most-wishlisted games. The figures are developer-reported, not a public live Steam counter.",
    "2026-07-31",
    [
      { heading: "The latest official milestone", paragraphs: ["FLEXUS published the two-million figure through the game's official Steam news feed on July 31, 2026. The same announcement described Dear Passengers as number six among Steam's most-wishlisted games.", "Wishlist totals are private publisher data. This site can verify that FLEXUS made the statement, but cannot independently audit a live Valve counter."] },
      { heading: "The product status did not change", paragraphs: ["The announcement did not publish an exact release date, price, maximum crew size or live public-demo download. The verified store status therefore remains: Windows PC, 2026, single-player and online co-op.", "Milestone coverage is linked to the evergreen release, demo and multiplayer pages so readers can distinguish popularity news from product availability."] }
    ],
    ["steam2m", "steam"]
  ),
  "gamescom-demo-plans": news(
    "Gamescom demo",
    "FLEXUS Plans a Gamescom Demo and Later Public Demo",
    "The attributed Dear Passengers demo plan, what is confirmed for Gamescom and why no public download exists yet.",
    "A FLEXUS co-founder told dev.ua that a Gamescom build was being prepared and a public demo would be released later. No public date or platform was specified.",
    "2026-07-17",
    [
      { heading: "What the developer said", paragraphs: ["dev.ua attributed the statement to FLEXUS co-founder Semen Kozyura. The team planned to appear with Ukrainian games at Gamescom and was preparing a playable build.", "The same statement said a public demo would follow a little later. It did not define whether that means Steam, a limited playtest, a festival build or another distribution method."] },
      { heading: "What players can download today", paragraphs: ["Nothing official. The Steam page still lacks a Download Demo or Request Access action. An event plan should not be rewritten as a live public release.", "This site will update the demo, download and release pages together if an official access button or dated announcement appears."] }
    ],
    ["devua", "steam"]
  )
};

export const STATIC_CONTENT = {
  about: page(
    "About",
    "About Dear Passengers Crew",
    "Who runs this independent Dear Passengers game guide, what it covers and how it separates sources from interpretation.",
    "Dear Passengers Crew is an independent, unofficial research and player-utility site. It is not affiliated with FLEXUS, Valve or Steam.",
    [
      { heading: "Why this site exists", paragraphs: ["Players repeatedly search for an exact date, demo, download, price, player count and platform list before those details exist. Our job is to answer quickly without turning an information gap into a rumor.", "The site also organizes official media, source-backed news, wiki entries and practical tools so the same fact does not need to be rediscovered on every visit."] },
      { heading: "Who prepares the pages", paragraphs: ["Pages are published under the Dear Passengers Crew Editorial Desk, the organizational byline used across this independent project. The desk maintains the central fact record, source ledger, uncertainty labels and update history.", "Source extraction and comparison may be assisted by automation. Publication decisions, uncertainty labels and corrections follow the editorial policy; the site does not claim access to private developer data or a live Valve wishlist counter."] },
      { heading: "What we publish", paragraphs: ["We publish direct-answer guides, a status ledger, a media archive, source-labelled news, a pre-release wiki and small planning tools. Each factual page includes a last-checked date and direct source links.", "The public GitHub repository provides an additional technical record of material site revisions. Factual corrections can be submitted through its issue tracker until a dedicated editorial mailbox is configured."] },
      { heading: "Ownership and affiliation", paragraphs: ["Dear Passengers, its artwork, footage and trademarks belong to their respective owners. Official media is used for identification, reporting and commentary. Our writing, organization and tools are independent."] }
    ],
    [],
    ["steam"]
  ),
  "editorial-policy": page(
    "Editorial policy",
    "Editorial and Verification Policy",
    "How Dear Passengers Crew verifies first-party facts, labels trailer observations, handles estimates and updates pages.",
    "Every material claim is classified as confirmed, attributed, observed, interpreted or unknown.",
    [
      { heading: "Evidence levels", paragraphs: ["Confirmed means published in an official listing or direct FLEXUS channel. Attributed means a named publication reports a developer statement. Observed means visible in official footage. Interpretation explains likely player impact without presenting it as a promised rule. Unknown means no reliable answer exists."] },
      { heading: "Update process", paragraphs: ["Release, demo, price, player count, platform and requirements pages are rechecked when official store data changes. Related pages and the update log should change in the same revision so contradictory answers do not remain indexed.", "Automated comparison may help identify a changed source, but a check date is not treated as a content-change date. The sitemap lastmod value changes only when the page itself receives a material revision."] },
      { heading: "What we avoid", paragraphs: ["We do not invent countdown dates, turn user tags into pricing, publish unofficial installers, claim every trailer object is a final mechanic or present wishlist reports as independently audited Valve totals."] }
    ],
    [],
    ["steam", "community"]
  ),
  corrections: page(
    "Corrections",
    "Corrections and Source Submissions",
    "How to report a Dear Passengers factual error or submit a stronger primary source.",
    "Corrections are evaluated against the strongest available source and recorded when they materially change an answer.",
    [
      { heading: "What to include", paragraphs: ["Send the page URL, the sentence that appears wrong, a direct source URL and the date you observed the source. Screenshots are useful context but a live first-party page is stronger whenever available."] },
      { heading: "How corrections are handled", paragraphs: ["Typos and broken links can be fixed immediately. Material changes to release, demo, price, player count, platforms or requirements should also update the source history and every related answer."] },
      { heading: "Contact", paragraphs: ["Until a dedicated mailbox is configured, factual issues can be submitted through the GitHub repository issue tracker. Do not send account credentials, private keys or personal data."] }
    ],
    [],
    ["steam", "githubIssues"]
  ),
  contact: page(
    "Contact",
    "Contact Dear Passengers Crew",
    "Contact the independent Dear Passengers Crew editorial desk about factual corrections, stronger sources, accessibility or technical problems.",
    "Use the public GitHub issue tracker for factual corrections, source submissions, accessibility reports and technical problems with this independent guide.",
    [
      { heading: "What you can contact us about", paragraphs: ["Useful reports include an incorrect game fact, a broken source link, a stronger first-party source, a translation problem, an accessibility barrier or a reproducible technical issue on this website.", "Dear Passengers Crew is not affiliated with FLEXUS, Valve or Steam. We cannot provide game keys, account support, refund assistance, press access or private information about the game's development."] },
      { heading: "What to include", paragraphs: ["Include the page URL, the exact sentence or feature involved, what you expected to see and a direct source URL when the report concerns a factual claim. For layout problems, include the browser, device width and a screenshot with sensitive information removed.", "Do not post passwords, API tokens, private keys, payment information, private correspondence or other personal data. GitHub issues are public by default."] },
      { heading: "How to submit a report", paragraphs: ["Open an issue in the public GitHub repository and choose a short, descriptive title. One issue per factual or technical problem makes review and follow-up easier.", "There is currently no guaranteed response time. Material factual corrections are checked against the strongest available source and, when accepted, should update every affected page and the source history together."] }
    ],
    [["Is this the game developer's support page?","No. This is an independent guide and cannot provide official game or Steam account support."],["Can I send a new source?","Yes. Include the direct URL, publication date and the page whose answer may need to change."],["Is a GitHub issue private?","No. Treat it as public and remove personal or confidential information before posting."]],
    ["githubIssues"]
  ),
  "privacy-policy": page(
    "Privacy policy",
    "Privacy Policy — Dear Passengers Crew",
    "How Dear Passengers Crew handles browser tools, hosting logs, external media, outbound links and contact submissions.",
    "The site has no user accounts, payment flow or contact form; browser tools run locally, while Cloudflare and linked third parties may process ordinary request data under their own policies.",
    [
      { heading: "Scope and effective date", paragraphs: ["This policy applies to dearpassengerscrew.com and is effective August 1, 2026. Dear Passengers Crew is an independent, unofficial information project and does not receive player-account data from FLEXUS, Valve or Steam.", "The current website does not offer account registration, purchases, newsletter signup or an on-site contact form. If those features are added later, this policy must be updated before they are used to collect new categories of information."] },
      { heading: "Information processed when you visit", paragraphs: ["The site is delivered through Cloudflare. Like most hosting and security providers, Cloudflare may process request information such as IP address, traffic-routing data, browser or system configuration, requested URLs and security signals in order to deliver, protect and operate the service.", "The application code does not create a user profile database or intentionally set account, payment or advertising cookies. Server, security and performance records controlled by the hosting provider are governed by Cloudflare's terms and privacy policy."] },
      { heading: "Interactive tools", paragraphs: ["The PC checker, crew checker, countdown, comparison and role quiz operate in your browser. Their selections are used to display an immediate result and are not submitted to a Dear Passengers Crew account or database.", "Do not enter personal information into tool fields. The tools are informational and do not inspect your computer automatically."] },
      { heading: "Official media and external services", paragraphs: ["Pages may load official screenshots from Steam content servers and a trailer thumbnail from YouTube. The privacy-enhanced YouTube embed is created only after you choose to play the trailer. Those providers may receive normal network request information under their own policies.", "Links to Steam, YouTube, dev.ua, GitHub and other external sites leave Dear Passengers Crew. Their privacy, cookie and retention practices are controlled by those services, not this website."] },
      { heading: "Contact, retention and choices", paragraphs: ["The contact route is the public GitHub issue tracker. Information posted there is sent to GitHub and may remain publicly visible according to GitHub's policies and repository history. Do not submit personal, confidential or security-sensitive data.", "Because this site currently has no user-account or contact-submission database, it has no visitor profile for you to access or delete. Questions about data processed by Cloudflare or GitHub should be directed to the relevant provider. A material change to this policy will update the effective date shown on this page and in the sitemap."] }
    ],
    [["Does this site require an account?","No. All public guides and tools work without a Dear Passengers Crew login."],["Are tool answers stored?","The current tools calculate results in the browser and do not submit those selections to a site database."],["Does the site use third-party services?","Yes. Cloudflare delivers the site, official media can load from Steam and YouTube, and contact reports use GitHub."],["Where should I avoid posting personal data?","Do not put personal or confidential information in public GitHub issues or in the website's planning tools."]],
    ["cloudflarePrivacy", "githubIssues"]
  )
};

export const OFFICIAL_MEDIA = [
  ["Cockpit bird strike", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/b28210ec5549d2cda898099e6d4a5c29153b2f35/ss_b28210ec5549d2cda898099e6d4a5c29153b2f35.1920x1080.jpg?t=1784401335"],
  ["Cabin crew and passengers", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/8587fe02b49b18e907bc271403aca145aac23b2d/ss_8587fe02b49b18e907bc271403aca145aac23b2d.1920x1080.jpg?t=1784401335"],
  ["Airport manifest", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/de1051493ef5690ab1a17d7c2fc35a74a42a4ea1/ss_de1051493ef5690ab1a17d7c2fc35a74a42a4ea1.1920x1080.jpg?t=1784401335"],
  ["Aircraft in rough conditions", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/12ea170121330ac9040a00257436552a9b2368a1/ss_12ea170121330ac9040a00257436552a9b2368a1.1920x1080.jpg?t=1784401335"],
  ["Cabin incident", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/7d572221193bf6d9a3294f7a59af4d093afb6ba1/ss_7d572221193bf6d9a3294f7a59af4d093afb6ba1.1920x1080.jpg?t=1784401335"],
  ["Passenger service", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/59919ca43b7423a86e31e69e5f7ddc7b1fe7dcc3/ss_59919ca43b7423a86e31e69e5f7ddc7b1fe7dcc3.1920x1080.jpg?t=1784401335"],
  ["Unusual cargo", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/442dcbff83ae722b28b063e2b453a96d75f1d465/ss_442dcbff83ae722b28b063e2b453a96d75f1d465.1920x1080.jpg?t=1784401335"],
  ["Damaged aircraft", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/9fdf57c8e8d2946d9c82ebece8ce7c311f587d41/ss_9fdf57c8e8d2946d9c82ebece8ce7c311f587d41.1920x1080.jpg?t=1784401335"],
  ["Cabin physics", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/a30af7fc82215257ef5f0934d3be1fb5d7f4d5fb/ss_a30af7fc82215257ef5f0934d3be1fb5d7f4d5fb.1920x1080.jpg?t=1784401335"],
  ["Crew emergency", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4534960/0f97770ed578a9ce1a20309e58a3bd1cc3cce099/ss_0f97770ed578a9ce1a20309e58a3bd1cc3cce099.1920x1080.jpg?t=1784401335"]
];
