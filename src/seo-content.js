export const LAST_CHECKED = "2026-08-01";

export const PAGE_SLUGS = [
  "release-date",
  "demo",
  "multiplayer",
  "how-many-players",
  "platforms",
  "gameplay",
  "trailer",
  "characters",
  "system-requirements",
  "news",
  "wiki"
];

export const TOOL_SLUGS = [
  "can-i-run-it",
  "crew-check",
  "countdown",
  "system-compare",
  "status-tracker",
  "role-quiz"
];

export const UPDATE_LOG = [
  {
    date: "2026-08-01",
    status: "Verified",
    title: "Official Steam record checked again",
    detail: "The 2026 release window, Windows support, single-player, online co-op, six interface languages and minimum PC requirements remain unchanged. No public demo, exact date, price or maximum crew size is listed."
  },
  {
    date: "2026-07-31",
    status: "Verified",
    title: "Steam information rechecked",
    detail: "Release remains 2026. Windows, single-player and online co-op remain confirmed. Exact date, price and maximum player count remain unannounced."
  },
  {
    date: "2026-07-30",
    status: "Expanded",
    title: "Multilingual intelligence hub launched",
    detail: "Added localized status pages, search-intent guides, system tools and source tracking for six supported game languages."
  }
];

const en = {
  ui: {
    home: "Home", verified: "Verified answer", confirmed: "What official sources confirm",
    unknown: "What remains unknown", why: "Why this matters", sources: "Primary sources",
    related: "Continue researching", updated: "Last verified", log: "Verification log",
    official: "Official Steam page", trailer: "Official trailer", tool: "Open tool",
    read: "Read guide", back: "Back to intelligence hub", current: "Current status",
    sourceNote: "We separate official facts from inference. When the developer publishes new information, the central status record and affected pages can be updated together.",
    breadcrumb: "Game intelligence", faq: "Frequently asked questions"
  },
  pages: {
    "release-date": {
      name: "Release Date", title: "Dear Passengers Release Date: What Is Confirmed for 2026?",
      meta: "The latest verified Dear Passengers release-date information, official 2026 window, what remains unknown and where to watch for an exact date.",
      answer: "Dear Passengers is planned for release in 2026. FLEXUS and the official Steam page have not announced an exact day or month.",
      confirmed: ["The Steam store lists 2026 as the planned release year.", "The game is not yet available to purchase or download.", "Players can wishlist the game to receive Steam release notifications."],
      unknown: ["Exact release day and month", "Whether early access, a public beta or a launch demo will precede release"],
      why: "A year-only release window can change while development, testing and platform certification continue. Any site presenting a precise date without linking to a new developer announcement is speculating.",
      faq: [["Is Dear Passengers out now?", "No. Steam currently says the game is not yet available."], ["Will it definitely release in 2026?", "2026 is the official plan, not a contractual guarantee. Development schedules can change."], ["Where will the date appear first?", "The Steam store, official developer channels and a formal trailer or announcement are the strongest sources."]]
    },
    demo: {
      name: "Demo", title: "Dear Passengers Demo: Can You Play It Right Now?",
      meta: "Check whether a Dear Passengers demo is available, how to identify an official build and what to avoid when searching for downloads.",
      answer: "There is no public Dear Passengers demo listed on Steam at the time of our latest verification.",
      confirmed: ["The official Steam page has no Download Demo button.", "The full game is not yet available.", "No public demo build is linked by the official store page."],
      unknown: ["Whether a time-limited festival demo will be released", "Whether playtests will be public or invite-only"],
      why: "Unreleased games attract fake download pages. A legitimate PC demo should be distributed by the developer through Steam or another clearly verified official channel.",
      faq: [["Can I download the demo from another website?", "Do not trust an executable unless FLEXUS links to it from an official channel."], ["Is there a Steam playtest?", "No public Steam playtest is visible right now."], ["Will there be a demo later?", "It is possible, but not confirmed on the current store page."]]
    },
    multiplayer: {
      name: "Multiplayer", title: "Dear Passengers Multiplayer and Online Co-op Explained",
      meta: "Verified Dear Passengers multiplayer information: online co-op, single-player support, crew roles and what is still unannounced.",
      answer: "Dear Passengers officially supports online co-op and single-player. Local split-screen and cross-platform play have not been announced.",
      confirmed: ["Online co-op with friends is a listed key feature.", "One player can pilot while others work inside the cabin.", "Single-player is listed in Steam features."],
      unknown: ["Cross-play and cross-progression", "Matchmaking, private lobbies and local split-screen details"],
      why: "The cooperative design is central to the game, but platform networking details often arrive closer to launch. Plan around confirmed PC online co-op rather than assuming every multiplayer feature.",
      faq: [["Is Dear Passengers co-op?", "Yes, online co-op is officially confirmed."], ["Can I play alone?", "Yes, single-player is listed on Steam."], ["Does it support couch co-op?", "Local or split-screen co-op has not been announced."]]
    },
    "how-many-players": {
      name: "Player Count", title: "How Many Players Can Play Dear Passengers?",
      meta: "The verified answer on Dear Passengers player count, online co-op group size and why specific numbers remain unconfirmed.",
      answer: "The maximum Dear Passengers player count has not been officially announced. Online co-op is confirmed, but a precise crew limit is not.",
      confirmed: ["The game is designed around a crew of friends.", "Online co-op and single-player are listed.", "Official descriptions use plural crew language without publishing a maximum."],
      unknown: ["Maximum lobby size", "Minimum players for the intended co-op experience"],
      why: "Screenshots or trailer scenes are not reliable evidence of lobby limits. We will publish a number only when it appears in official feature data, store metadata or a developer statement.",
      faq: [["Is it a four-player game?", "Four players may be a reasonable guess, but it is not currently confirmed."], ["Can two people play?", "Online co-op is confirmed, but supported party-size ranges are not published."], ["Why not count characters in the trailer?", "Marketing scenes do not define networking or lobby limits."]]
    },
    platforms: {
      name: "Platforms", title: "Dear Passengers Platforms: PC, PlayStation, Xbox and Switch",
      meta: "See which Dear Passengers platforms are confirmed and the current status of PlayStation, Xbox, Switch, macOS and Linux versions.",
      answer: "Windows PC through Steam is the only confirmed platform. Console, macOS and Linux editions have not been announced.",
      confirmed: ["A Windows Steam store page is live.", "The minimum operating system is Windows 10 64-bit.", "DirectX 12 is included in the PC requirements."],
      unknown: ["PlayStation 5 and Xbox Series versions", "Nintendo Switch, macOS, Linux and Steam Deck verification"],
      why: "A developer can announce additional platforms later, but store listings and certification usually provide the first reliable confirmation. Avoid treating controller footage as proof of a console release.",
      faq: [["Is Dear Passengers on PS5?", "No PlayStation version is officially announced."], ["Is it coming to Xbox?", "No Xbox edition is confirmed right now."], ["Will it work on Steam Deck?", "Steam Deck compatibility has not been verified."]]
    },
    gameplay: {
      name: "Gameplay", title: "Dear Passengers Gameplay: Flying, Cabin Chaos and Cargo",
      meta: "A verified breakdown of the Dear Passengers gameplay loop, pilot role, cabin service, passenger physics, cargo risk and dynamic weather.",
      answer: "The core loop combines flying the plane, managing the cabin, serving passengers, protecting cargo and containing physics-driven disasters.",
      confirmed: ["Players choose passengers and cargo before takeoff.", "Crew members pilot, serve and solve cabin problems.", "Weather, turbulence and air pockets physically affect loose objects and passengers."],
      unknown: ["Mission length and progression structure", "Full upgrade, difficulty and replay systems"],
      why: "The game is not simply a flight simulator. Its identity comes from coordinating different jobs while riskier passengers and cargo promise better rewards and create more ways for a flight to fail.",
      faq: [["Do all players fly the plane?", "No. One can pilot while other crew members work in the cabin."], ["Is there combat?", "The official description focuses on control, service, cargo and disaster management."], ["Is every flight different?", "Dynamic weather and risky passenger or cargo choices should create variation, though full procedural details are unannounced."]]
    },
    trailer: {
      name: "Trailer", title: "Dear Passengers Official Trailer and Gameplay Evidence",
      meta: "Watch the official Dear Passengers trailer and review what it actually confirms about co-op roles, cabin physics, flying and passenger management.",
      answer: "The official trailer shows cooperative pilot and cabin roles, passenger service, loose cargo, turbulence and escalating failures.",
      confirmed: ["First-person cockpit and cabin gameplay is shown.", "Multiple crew activities occur during the same flight.", "Passenger and object physics are central to the comedy and challenge."],
      unknown: ["Whether every scene represents final launch gameplay", "Final interface, performance and feature completeness"],
      why: "Trailers are strong evidence for the intended experience but not for unshown specifications such as player limits, price or launch date. We label trailer observations separately from store-confirmed facts.",
      faq: [["Is the trailer official?", "Yes. The embedded video is the official Dear Passengers trailer."], ["Is it all gameplay footage?", "It presents in-engine gameplay, but marketing edits may not represent an uninterrupted session."], ["Does the trailer confirm four players?", "No. Visible characters are not an official lobby-size statement."]]
    },
    characters: {
      name: "Characters & Roles", title: "Dear Passengers Characters, Crew Jobs and Passenger Types",
      meta: "What is known about Dear Passengers characters, pilot and cabin roles, risky passengers and cargo without inventing unannounced names.",
      answer: "Official information describes functional crew roles and difficult passenger types, but no complete named character roster has been announced.",
      confirmed: ["Crew members can pilot or work inside the cabin.", "Passengers have needs and can become part of physical cabin chaos.", "Riskier passengers and cargo can produce larger payouts."],
      unknown: ["Named playable characters and biographies", "Role classes, cosmetics and character progression"],
      why: "Many competing pages invent names from screenshots. We treat a visible model as artwork, not a confirmed named character, until FLEXUS publishes a roster or biography.",
      faq: [["Who are the playable characters?", "The complete roster is not announced."], ["Are roles locked to characters?", "No official role-locking system has been described."], ["Can I customize my crew member?", "Character customization is currently unconfirmed."]]
    },
    "system-requirements": {
      name: "System Requirements", title: "Dear Passengers System Requirements for PC",
      meta: "Official Dear Passengers minimum PC requirements: Windows, CPU, RAM, GPU, DirectX and storage, plus an interactive compatibility checker.",
      answer: "The published minimum calls for Windows 10 64-bit, a 2.5 GHz Core i5 equivalent, 8 GB RAM, GTX 1060 or RX 6600 XT, DirectX 12 and 4 GB storage.",
      confirmed: ["Windows 10 64-bit and DirectX 12", "Intel Core i5 at 2.5 GHz or equivalent with 8 GB RAM", "GTX 1060 or RX 6600 XT and 4 GB available storage"],
      unknown: ["Recommended requirements and target resolution", "Steam Deck, laptop GPU and integrated graphics performance"],
      why: "Minimum requirements indicate the floor, not a guaranteed frame rate at high settings. Use our checker as a screening tool and wait for benchmarks or recommended specifications for a performance prediction.",
      faq: [["Can a GTX 1060 run it?", "It is listed as a minimum GPU."], ["Is 8 GB RAM enough?", "8 GB is the published minimum, though background applications may affect performance."], ["How much storage is needed?", "The current store page lists 4 GB available space."]]
    },
    news: {
      name: "News", title: "Dear Passengers News, Announcements and Verification Log",
      meta: "A source-tracked Dear Passengers news hub covering official Steam changes, developer announcements, trailers, demos and release information.",
      answer: "No exact release date, price, public demo or maximum player count has been announced in the latest verified official information.",
      confirmed: ["The Steam page targets 2026.", "The official trailer and store feature descriptions are public.", "The store supports six interface languages."],
      unknown: ["Next developer announcement date", "Demo, playtest and launch-timing plans"],
      why: "This page is a verification log rather than a rumor feed. Each update records the date, source and whether information is confirmed, observed or still unknown.",
      faq: [["How often is this page updated?", "It is updated when an official source changes or a new announcement is published."], ["Do you report leaks?", "Unverified leaks are not presented as facts."], ["Where are old updates?", "The verification log keeps dated summaries of material changes."]]
    },
    wiki: {
      name: "Wiki", title: "Dear Passengers Wiki: Verified Game Guide and Index",
      meta: "A source-first Dear Passengers wiki covering release date, demo, multiplayer, platforms, gameplay, roles, trailer, system requirements and news.",
      answer: "This wiki is an organized index of verified Dear Passengers information, designed to answer player questions without filling gaps with invented details.",
      confirmed: ["All major guide pages link back to official evidence.", "Confirmed, observed and unknown information use separate labels.", "Six localized editions share the same central fact record."],
      unknown: ["Full mechanics, items, missions and progression available only after release", "Complete character, passenger and cargo catalogs"],
      why: "Before launch, a useful wiki should remain compact and accurate. It can expand into detailed mechanics and catalogs once players and official documentation provide evidence.",
      faq: [["Is this the official wiki?", "No. It is an independent fan information project."], ["Can I trust every detail?", "Each factual section identifies its source and uncertainty."], ["Will the wiki expand?", "Yes. The structure is ready for missions, items, passengers, cargo and strategy pages."]]
    }
  },
  tools: {
    "can-i-run-it": ["Can I Run Dear Passengers?", "Compare your PC with the official minimum requirements.", "Device checker"],
    "crew-check": ["Dear Passengers Crew Compatibility", "Check whether your platform, mode and party plan are currently supported.", "Crew checker"],
    countdown: ["Dear Passengers Release Countdown", "Track the remaining official 2026 release window without inventing an exact date.", "Release window"],
    "system-compare": ["Dear Passengers System Comparison", "Compare the official minimum with a practical target configuration.", "System comparison"],
    "status-tracker": ["Dear Passengers Status Tracker", "See confirmed, observed and unknown information in one live-style board.", "Status tracker"],
    "role-quiz": ["Which Dear Passengers Crew Role Fits You?", "Choose how you handle chaos and get a pilot, cabin, cargo or crisis role.", "Role quiz"]
  }
};

function localized(base, overrides) {
  return {
    ui: { ...base.ui, ...overrides.ui },
    pages: Object.fromEntries(Object.entries(base.pages).map(([slug, page]) => [
      slug,
      { ...page, ...(overrides.pages?.[slug] || {}) }
    ])),
    tools: { ...base.tools, ...overrides.tools }
  };
}

const zh = localized(en, {
  ui: {
    home: "首页", verified: "核实后的答案", confirmed: "官方来源已经确认",
    unknown: "仍未公布的内容", why: "为什么这点重要", sources: "主要来源",
    related: "继续查看相关内容", updated: "最后核实", log: "核实更新记录",
    official: "Steam官方页面", trailer: "官方预告片", tool: "打开工具",
    read: "阅读指南", back: "返回游戏情报中心", current: "当前状态",
    sourceNote: "本站把官方事实与推测分开。开发者发布新消息后，中心状态数据和相关页面可以同步更新。",
    breadcrumb: "游戏情报", faq: "常见问题"
  },
  pages: {
    "release-date": { name:"发售时间", title:"Dear Passengers发售时间：2026年有哪些官方信息？", meta:"Dear Passengers最新发售时间、2026年官方窗口、尚未公布的日期以及可靠消息来源。", answer:"Dear Passengers计划于2026年发售，但FLEXUS和Steam尚未公布具体月份及日期。", confirmed:["Steam商店标注计划于2026年发售。","游戏当前仍不可购买或下载。","玩家可以加入Steam愿望单等待通知。"], unknown:["具体月份和日期","是否会提前推出抢先体验、测试或Demo"], why:"只公布年份的发售窗口仍可能受开发、测试和平台认证影响。任何无法链接到开发者新公告的具体日期都应被视为推测。", faq:[["现在已经发售了吗？","没有，Steam仍显示游戏尚未推出。"],["一定会在2026年发售吗？","2026年是官方计划，但开发进度仍可能改变。"],["具体日期最先在哪里公布？","优先关注Steam商店、开发者官方频道和正式预告。"]]},
    demo: { name:"Demo试玩", title:"Dear Passengers Demo：现在可以玩吗？", meta:"核实Dear Passengers Demo是否开放、如何识别官方下载以及搜索试玩版时应避免什么。", answer:"截至最后核实，Steam没有提供公开的Dear Passengers Demo。", confirmed:["Steam页面没有Download Demo按钮。","正式版仍未开放。","商店没有链接任何公开试玩版本。"], unknown:["是否参加游戏节并推出限时Demo","测试将公开开放还是邀请制"], why:"未发售游戏容易出现虚假下载页面。可信的PC试玩版应由开发者通过Steam或明确认证的官方渠道发布。", faq:[["能从其他网站下载吗？","除非FLEXUS官方链接，否则不要运行第三方可执行文件。"],["有Steam Playtest吗？","当前没有公开可见的Steam测试。"],["以后会有Demo吗？","存在可能，但目前没有官方确认。"]]},
    multiplayer: { name:"多人联机", title:"Dear Passengers多人模式与在线合作详解", meta:"核实在线合作、单人模式、机组分工以及尚未公布的本地联机和跨平台信息。", answer:"官方确认支持在线合作和单人游戏；本地分屏与跨平台联机尚未公布。", confirmed:["官方主要卖点包含好友在线合作。","一名玩家可驾驶飞机，其他人处理机舱。","Steam功能列表包含单人游戏。"], unknown:["跨平台联机和进度互通","匹配、私人房间与本地分屏"], why:"合作玩法是游戏核心，但网络功能通常接近发售才完整公布。目前应该以PC在线合作为准，不应默认拥有所有多人功能。", faq:[["是合作游戏吗？","是，官方已确认在线合作。"],["可以单人玩吗？","可以，Steam已列出单人模式。"],["支持同屏合作吗？","本地或分屏合作尚未公布。"]]},
    "how-many-players": { name:"联机人数", title:"Dear Passengers最多支持几个人？", meta:"Dear Passengers联机人数的核实答案、队伍规模以及为什么目前不能写死具体数字。", answer:"官方尚未公布最大玩家人数。在线合作已经确认，但具体队伍上限未知。", confirmed:["游戏围绕好友机组展开。","已确认单人和在线合作。","官方描述使用多人机组表述，但没有提供上限。"], unknown:["最大房间人数","推荐合作人数范围"], why:"从截图或预告片里数角色不能证明房间人数。只有商店功能数据或开发者声明才能确认具体数字。", faq:[["这是四人游戏吗？","四人可能是合理猜测，但目前没有官方确认。"],["两个人能玩吗？","在线合作已确认，但支持的队伍范围未公布。"],["为什么不能按预告片人数判断？","宣传场景不等于网络房间限制。"]]},
    platforms: { name:"支持平台", title:"Dear Passengers支持平台：PC、PS5、Xbox和Switch", meta:"查看已经确认的平台，以及PlayStation、Xbox、Switch、macOS、Linux当前状态。", answer:"目前只确认Windows PC Steam版本，主机、macOS和Linux版本均未官宣。", confirmed:["Windows Steam商店页面已经上线。","最低系统为Windows 10 64位。","PC配置要求包含DirectX 12。"], unknown:["PS5和Xbox Series版本","Switch、macOS、Linux和Steam Deck支持"], why:"其他平台可能以后公布，但商店页面和平台认证才是可靠证明。手柄操作画面不能证明一定有主机版。", faq:[["有PS5版吗？","目前没有官宣PlayStation版本。"],["会登录Xbox吗？","当前没有确认Xbox版本。"],["Steam Deck能玩吗？","尚未获得Steam Deck兼容认证。"]]},
    gameplay: { name:"玩法介绍", title:"Dear Passengers玩法：驾驶、机舱事故与危险货物", meta:"了解驾驶、服务乘客、货物风险、物理事故和动态天气组成的核心循环。", answer:"核心玩法包括驾驶飞机、管理机舱、服务乘客、保护货物并阻止物理事故继续扩大。", confirmed:["起飞前选择乘客与货物。","机组分别执行驾驶、服务与事故处理。","天气、颠簸和气流会影响乘客及松动物体。"], unknown:["单局时长与完整成长结构","升级、难度和重复游玩系统"], why:"它不只是飞行模拟器。真正特色是多人同时处理不同岗位，风险越高的乘客与货物可能带来更高报酬和更多事故。", faq:[["所有人都驾驶飞机吗？","不是，一人可驾驶，其余人员处理机舱。"],["有战斗系统吗？","官方重点是控制、服务、货物与灾难管理。"],["每次航班都不同吗？","动态天气与风险选择会制造变化，但完整随机机制尚未公布。"]]},
    trailer: { name:"官方预告", title:"Dear Passengers官方预告片与实机证据", meta:"观看官方预告片，并核对它真正证明的合作岗位、机舱物理、驾驶与乘客管理玩法。", answer:"官方预告展示了合作驾驶与机舱岗位、乘客服务、松散货物、颠簸和不断升级的事故。", confirmed:["展示第一人称驾驶舱和机舱画面。","同一航班中有多种机组任务。","乘客和物体物理是喜剧与挑战核心。"], unknown:["所有镜头是否代表最终版本","最终UI、性能和功能完整度"], why:"预告片能证明游戏方向，却不能证明未展示的玩家人数、价格和日期。本站把画面观察与商店确认分开标记。", faq:[["这是官方预告吗？","是，页面嵌入官方Dear Passengers预告。"],["全部都是实机吗？","展示的是引擎内玩法，但剪辑不等于连续实玩。"],["能证明支持四人吗？","不能，镜头中的角色数量不是官方房间人数。"]]},
    characters: { name:"角色与岗位", title:"Dear Passengers角色、机组岗位与乘客类型", meta:"核实驾驶、机舱、危险乘客和货物等信息，不编造未公布的角色姓名。", answer:"官方目前主要介绍机组岗位和乘客类型，完整的具名角色阵容尚未公布。", confirmed:["机组可以驾驶飞机或在机舱工作。","乘客有需求，也会卷入物理事故。","高风险乘客与货物可能带来更高收益。"], unknown:["可玩角色姓名和背景故事","职业分类、外观和角色成长"], why:"一些网站会根据截图编造角色名。本站只把可见模型视为美术形象，直到官方发布角色名单。", faq:[["可玩角色有哪些？","完整阵容尚未公布。"],["岗位和角色绑定吗？","官方没有公布岗位锁定机制。"],["可以自定义角色吗？","目前没有确认。"]]},
    "system-requirements": { name:"配置要求", title:"Dear Passengers PC系统配置要求", meta:"官方最低配置、Windows、CPU、内存、显卡、DirectX和存储空间，以及设备检测工具。", answer:"最低配置为Windows 10 64位、2.5GHz i5同级处理器、8GB内存、GTX 1060或RX 6600 XT、DirectX 12和4GB空间。", confirmed:["Windows 10 64位与DirectX 12","2.5GHz Core i5同级CPU和8GB内存","GTX 1060或RX 6600 XT以及4GB空间"], unknown:["推荐配置与目标分辨率","Steam Deck、笔记本显卡和核显表现"], why:"最低配置只是运行门槛，并不保证高画质帧率。设备检测工具用于初步筛选，最终性能还要等待测试和推荐配置。", faq:[["GTX 1060能玩吗？","它被列为最低显卡。"],["8GB内存够吗？","官方最低是8GB，但后台程序可能影响表现。"],["需要多少空间？","Steam当前列出4GB可用空间。"]]},
    news: { name:"新闻动态", title:"Dear Passengers新闻、公告与核实记录", meta:"追踪Steam更新、开发者公告、预告、Demo和发售信息，并记录日期与来源。", answer:"最新核实信息仍未公布具体日期、价格、公开Demo和最大玩家人数。", confirmed:["Steam目标为2026年。","官方预告和商店功能介绍已经公开。","商店支持六种界面语言。"], unknown:["下一次开发者公告时间","Demo、测试和发售节奏"], why:"这里不是传闻聚合页，而是核实记录。每次更新都会标注日期、来源以及已确认、已观察或仍未知。", faq:[["多久更新一次？","官方来源发生变化或发布新公告时更新。"],["会发布泄露内容吗？","未核实泄露不会作为事实发布。"],["旧更新在哪里？","核实记录会保存重要变化的日期摘要。"]]},
    wiki: { name:"游戏Wiki", title:"Dear Passengers Wiki：经过核实的游戏指南索引", meta:"覆盖发售、Demo、联机、平台、玩法、岗位、预告、配置与新闻的来源优先Wiki。", answer:"这是一个经过组织的独立资料索引，目标是在不编造信息的前提下回答Dear Passengers玩家问题。", confirmed:["主要指南都链接官方证据。","已确认、已观察与未知使用不同标签。","六种语言共用同一份中心事实记录。"], unknown:["发售后才能补充的机制、物品、任务与成长","完整角色、乘客和货物图鉴"], why:"游戏发售前，Wiki应该保持紧凑准确。游戏上线后再根据官方文档和真实玩法扩展详细资料。", faq:[["这是官方Wiki吗？","不是，这是独立玩家信息项目。"],["所有内容都可靠吗？","事实区域会注明来源和不确定性。"],["以后会扩充吗？","会，结构已经为任务、物品、乘客、货物和攻略页面预留。"]]}
  },
  tools: {
    "can-i-run-it":["我的电脑能玩Dear Passengers吗？","将电脑配置与官方最低要求进行对比。","设备检测"],
    "crew-check":["Dear Passengers组队兼容检测","判断平台、模式和队伍计划当前是否得到官方支持。","组队检测"],
    countdown:["Dear Passengers发售倒计时","在不编造具体日期的前提下追踪2026官方发售窗口。","发售窗口"],
    "system-compare":["Dear Passengers配置对比","对比官方最低配置与更实用的目标配置。","配置对比"],
    "status-tracker":["Dear Passengers状态追踪","集中查看已确认、已观察和仍未知的信息。","状态追踪"],
    "role-quiz":["你适合Dear Passengers哪个岗位？","根据你处理混乱的方式匹配驾驶、机舱、货物或危机岗位。","岗位测试"]
  }
});

const ja = localized(en, {
  ui:{home:"ホーム",verified:"確認済みの答え",confirmed:"公式に確認された内容",unknown:"未発表",why:"重要な理由",sources:"一次情報",related:"関連ガイド",updated:"最終確認",log:"確認履歴",official:"公式Steam",trailer:"公式トレーラー",tool:"ツールを開く",read:"ガイドを読む",back:"情報ハブへ戻る",current:"現在の状況",sourceNote:"公式事実と推測を分離しています。新情報が出た場合、中央データと関連ページを同時に更新できます。",breadcrumb:"ゲーム情報",faq:"よくある質問"},
  pages:Object.fromEntries(Object.entries(en.pages).map(([slug,p])=>[slug,{name:({"release-date":"発売日","demo":"デモ","multiplayer":"マルチプレイ","how-many-players":"人数","platforms":"対応機種","gameplay":"ゲームプレイ","trailer":"トレーラー","characters":"キャラクター","system-requirements":"動作環境","news":"ニュース","wiki":"Wiki"})[slug],title:`Dear Passengers ${({"release-date":"発売日","demo":"デモ版","multiplayer":"マルチプレイ","how-many-players":"最大人数","platforms":"対応プラットフォーム","gameplay":"ゲームプレイ","trailer":"公式トレーラー","characters":"キャラクターと役割","system-requirements":"PC動作環境","news":"ニュースと更新履歴","wiki":"検証済みWiki"})[slug]}`,meta:`Dear Passengersの${({"release-date":"発売時期","demo":"デモ情報","multiplayer":"協力プレイ","how-many-players":"プレイヤー人数","platforms":"対応機種","gameplay":"内容","trailer":"公式映像","characters":"役割","system-requirements":"PC要件","news":"公式更新","wiki":"確認済み情報"})[slug]}を公式情報に基づいて確認。`,answer:({"release-date":"発売予定は2026年。正確な月日は未発表です。","demo":"Steamに一般公開デモはありません。","multiplayer":"オンライン協力と一人プレイは確認済み。ローカル分割とクロスプレイは未発表です。","how-many-players":"最大人数は未発表です。オンライン協力のみ確認されています。","platforms":"確認済みはWindows PCのみです。","gameplay":"操縦、接客、貨物管理、物理ベースの機内トラブルが中心です。","trailer":"公式映像は操縦、機内作業、乱気流と物理カオスを示しています。","characters":"役割は示されていますが、完全な名前付きキャラクター一覧は未発表です。","system-requirements":"最低はWindows 10 64-bit、8GB RAM、GTX 1060またはRX 6600 XT、4GBです。","news":"正確な発売日、価格、デモ、最大人数はまだ発表されていません。","wiki":"推測を避け、確認済み情報を整理した独立Wikiです。"})[slug],confirmed:p.confirmed.map((_,i)=>[["Steam公式ページと説明を一次情報として使用。","確認済みと観察内容を分離。","更新日と出典を記録。"],["公式ストア情報を確認。","トレーラーの内容を確認。","不明点を明示。"]][i%2][i%3]),unknown:["正確な詳細は開発者の発表待ち","発売前に変更される可能性"],why:"未発表情報を推測で埋めず、Steamと公式映像で確認できる内容だけを掲載します。新しい公式発表が出た時点でこのページと履歴を更新します。",faq:[[`${p.name}の情報は公式ですか？`,"Steamと公式トレーラーを基準にしています。"],["今後更新されますか？","公式情報が変わった場合に更新します。"],["不明な内容は？","未発表として明確に表示します。"]]}])) ,
  tools:{"can-i-run-it":["Dear Passengersを実行できる？","PCを公式最低要件と比較します。","PCチェック"],"crew-check":["クルー互換性チェック","機種、モード、人数の公式対応状況を確認。","クルーチェック"],countdown:["発売ウィンドウカウントダウン","正確な日付を捏造せず2026年の残り期間を表示。","発売予定"],"system-compare":["システム比較","最低構成と実用的な目標構成を比較。","構成比較"],"status-tracker":["ステータストラッカー","確認済み・観察・不明を一覧表示。","状況確認"],"role-quiz":["あなたに合うクルー役割","操縦、客室、貨物、危機対応から診断。","役割診断"]}
});

const ar = localized(en, {
  ui:{home:"الرئيسية",verified:"الإجابة المؤكدة",confirmed:"ما تؤكده المصادر الرسمية",unknown:"ما يزال مجهولاً",why:"لماذا يهم",sources:"المصادر الأساسية",related:"تابع البحث",updated:"آخر تحقق",log:"سجل التحقق",official:"صفحة Steam الرسمية",trailer:"الإعلان الرسمي",tool:"افتح الأداة",read:"اقرأ الدليل",back:"العودة إلى المركز",current:"الحالة الحالية",sourceNote:"نفصل الحقائق الرسمية عن الاستنتاج. عند نشر معلومات جديدة يمكن تحديث السجل والصفحات المرتبطة معاً.",breadcrumb:"معلومات اللعبة",faq:"الأسئلة الشائعة"},
  pages:Object.fromEntries(Object.entries(en.pages).map(([slug,p])=>[slug,{name:({"release-date":"موعد الإصدار","demo":"التجربة","multiplayer":"اللعب الجماعي","how-many-players":"عدد اللاعبين","platforms":"المنصات","gameplay":"أسلوب اللعب","trailer":"الإعلان","characters":"الشخصيات","system-requirements":"المتطلبات","news":"الأخبار","wiki":"ويكي"})[slug],title:`Dear Passengers — ${({"release-date":"موعد الإصدار","demo":"نسخة التجربة","multiplayer":"اللعب التعاوني","how-many-players":"عدد اللاعبين","platforms":"المنصات","gameplay":"أسلوب اللعب","trailer":"الإعلان الرسمي","characters":"الشخصيات والأدوار","system-requirements":"متطلبات الكمبيوتر","news":"الأخبار والتحديثات","wiki":"دليل موثق"})[slug]}`,meta:`دليل عربي موثق حول ${({"release-date":"إصدار Dear Passengers","demo":"التجربة","multiplayer":"اللعب التعاوني","how-many-players":"عدد اللاعبين","platforms":"المنصات","gameplay":"أسلوب اللعب","trailer":"الإعلان","characters":"الأدوار","system-requirements":"المتطلبات","news":"الأخبار","wiki":"معلومات اللعبة"})[slug]}.`,answer:({"release-date":"الإصدار مخطط لعام 2026 ولم يعلن اليوم أو الشهر.","demo":"لا توجد تجربة عامة مدرجة على Steam.","multiplayer":"اللعب الفردي والتعاوني عبر الإنترنت مؤكدان؛ اللعب المحلي والمشترك بين المنصات غير معلنين.","how-many-players":"الحد الأقصى للاعبين غير معلن رغم تأكيد التعاون عبر الإنترنت.","platforms":"Windows PC هو المنصة الوحيدة المؤكدة.","gameplay":"الطيران وخدمة الركاب وإدارة الشحنات واحتواء فوضى المقصورة هي الحلقة الأساسية.","trailer":"الإعلان الرسمي يعرض الطيار وأعمال المقصورة والاضطرابات والفيزياء.","characters":"الأدوار معروفة لكن قائمة الشخصيات المسماة غير معلنة.","system-requirements":"الحد الأدنى: Windows 10 64-bit و8GB RAM وGTX 1060 أو RX 6600 XT و4GB.","news":"لا يوجد تاريخ دقيق أو سعر أو تجربة عامة أو حد أقصى معلن.","wiki":"ويكي مستقل ينظم المعلومات المؤكدة دون اختراع التفاصيل."})[slug],confirmed:["صفحة Steam الرسمية هي المصدر الأساسي.","تم فصل الحقائق عن المشاهدات.","تظهر حالة التحقق وتاريخه."],unknown:["التفاصيل الدقيقة بانتظار المطور","قد تتغير المعلومات قبل الإصدار"],why:"لا نملأ الفراغات بالتخمين. نعتمد على Steam والإعلان الرسمي ونحدث الصفحة والسجل عند صدور معلومات رسمية جديدة.",faq:[[p.name+" مؤكد؟","نعتمد على Steam والإعلان الرسمي."],["هل ستتحدث الصفحة؟","نعم عند تغير المصدر الرسمي."],["ماذا عن المعلومات غير المعروفة؟","تظهر بوضوح كغير معلنة."]]}])),
  tools:{"can-i-run-it":["هل يعمل Dear Passengers على جهازي؟","قارن جهازك بالحد الأدنى الرسمي.","فحص الجهاز"],"crew-check":["فحص توافق الطاقم","تحقق من المنصة والنمط وحجم الفريق.","فحص الطاقم"],countdown:["عدّاد نافذة الإصدار","يعرض المتبقي من 2026 دون اختراع تاريخ.","نافذة الإصدار"],"system-compare":["مقارنة النظام","قارن الحد الأدنى بتجهيز عملي.","مقارنة"],"status-tracker":["متتبع الحالة","المؤكد والمشاهد والمجهول في لوحة واحدة.","الحالة"],"role-quiz":["ما دورك في الطاقم؟","اختبار للطيار أو المقصورة أو الشحن أو الأزمات.","اختبار الدور"]}
});

const tr = localized(en, {
  ui:{home:"Ana sayfa",verified:"Doğrulanmış cevap",confirmed:"Resmi kaynakların doğruladıkları",unknown:"Bilinmeyenler",why:"Neden önemli",sources:"Birincil kaynaklar",related:"Araştırmaya devam et",updated:"Son doğrulama",log:"Doğrulama günlüğü",official:"Resmi Steam sayfası",trailer:"Resmi fragman",tool:"Aracı aç",read:"Rehberi oku",back:"Bilgi merkezine dön",current:"Mevcut durum",sourceNote:"Resmi gerçekleri çıkarımdan ayırıyoruz. Yeni bilgi yayımlandığında merkez kayıt ve ilgili sayfalar birlikte güncellenebilir.",breadcrumb:"Oyun bilgisi",faq:"Sık sorulan sorular"},
  pages:Object.fromEntries(Object.entries(en.pages).map(([slug,p])=>[slug,{name:({"release-date":"Çıkış tarihi","demo":"Demo","multiplayer":"Çok oyunculu","how-many-players":"Oyuncu sayısı","platforms":"Platformlar","gameplay":"Oynanış","trailer":"Fragman","characters":"Karakterler","system-requirements":"Sistem","news":"Haberler","wiki":"Wiki"})[slug],title:`Dear Passengers ${({"release-date":"Çıkış Tarihi","demo":"Demo Durumu","multiplayer":"Online Co-op","how-many-players":"Kaç Kişilik","platforms":"Platformları","gameplay":"Oynanışı","trailer":"Resmi Fragmanı","characters":"Karakterleri ve Rolleri","system-requirements":"Sistem Gereksinimleri","news":"Haberleri","wiki":"Doğrulanmış Wiki"})[slug]}`,meta:`Dear Passengers ${({"release-date":"çıkış","demo":"demo","multiplayer":"co-op","how-many-players":"oyuncu sayısı","platforms":"platform","gameplay":"oynanış","trailer":"fragman","characters":"rol","system-requirements":"PC gereksinimi","news":"haber","wiki":"bilgi"})[slug]} rehberi ve doğrulanmış resmi durum.`,answer:({"release-date":"Oyun 2026 için planlandı; gün ve ay açıklanmadı.","demo":"Steam'de halka açık demo bulunmuyor.","multiplayer":"Online co-op ve tek oyunculu onaylı; yerel bölünmüş ekran ve çapraz oyun açıklanmadı.","how-many-players":"Maksimum oyuncu sayısı resmi olarak açıklanmadı.","platforms":"Yalnızca Windows PC onaylandı.","gameplay":"Uçuş, kabin servisi, kargo ve fizik tabanlı felaket yönetimi ana döngüdür.","trailer":"Resmi fragman pilot, kabin, türbülans ve fizik kaosunu gösteriyor.","characters":"Ekip rolleri biliniyor ancak isimli tam karakter listesi açıklanmadı.","system-requirements":"Minimum: Windows 10 64-bit, 8GB RAM, GTX 1060 veya RX 6600 XT ve 4GB.","news":"Kesin tarih, fiyat, demo ve maksimum oyuncu açıklanmadı.","wiki":"Doğrulanmış bilgiyi söylentiden ayıran bağımsız bir rehber."})[slug],confirmed:["Resmi Steam sayfası birincil kaynaktır.","Fragman gözlemleri ayrı işaretlenir.","Tarih ve kaynak kaydedilir."],unknown:["Ayrıntılar geliştirici duyurusunu bekliyor","Bilgiler çıkıştan önce değişebilir"],why:"Boşlukları tahminle doldurmuyoruz. Steam ve resmi videoda doğrulanabilen bilgileri kullanıyor, yeni duyuruda sayfayı ve günlüğü güncelliyoruz.",faq:[[p.name+" bilgisi resmi mi?","Steam ve resmi fragman temel alınır."],["Sayfa güncellenecek mi?","Resmi kaynak değiştiğinde evet."],["Bilinmeyenler nasıl gösteriliyor?","Açıkça açıklanmadı olarak işaretlenir."]]}])),
  tools:{"can-i-run-it":["Bilgisayarım Dear Passengers'ı açar mı?","PC'ni resmi minimumla karşılaştır.","Cihaz kontrolü"],"crew-check":["Ekip uyumluluk kontrolü","Platform, mod ve ekip planını doğrula.","Ekip kontrolü"],countdown:["Çıkış aralığı sayacı","Kesin tarih uydurmadan 2026'nın kalanını göster.","Çıkış aralığı"],"system-compare":["Sistem karşılaştırması","Minimum ve pratik hedef sistemi karşılaştır.","Sistem karşılaştır"],"status-tracker":["Durum takipçisi","Onaylı, gözlenen ve bilinmeyenleri izle.","Durum"],"role-quiz":["Hangi ekip rolü sana uygun?","Pilot, kabin, kargo veya kriz rolünü bul.","Rol testi"]}
});

const uk = localized(en, {
  ui:{home:"Головна",verified:"Перевірена відповідь",confirmed:"Що підтверджують офіційні джерела",unknown:"Що невідомо",why:"Чому це важливо",sources:"Першоджерела",related:"Продовжити дослідження",updated:"Остання перевірка",log:"Журнал перевірки",official:"Офіційна сторінка Steam",trailer:"Офіційний трейлер",tool:"Відкрити інструмент",read:"Читати гайд",back:"Назад до центру",current:"Поточний статус",sourceNote:"Ми відокремлюємо офіційні факти від висновків. Нові дані оновлюють центральний запис і пов’язані сторінки.",breadcrumb:"Інформація про гру",faq:"Поширені питання"},
  pages:Object.fromEntries(Object.entries(en.pages).map(([slug,p])=>[slug,{name:({"release-date":"Дата виходу","demo":"Демо","multiplayer":"Мультиплеєр","how-many-players":"Кількість гравців","platforms":"Платформи","gameplay":"Геймплей","trailer":"Трейлер","characters":"Персонажі","system-requirements":"Вимоги","news":"Новини","wiki":"Вікі"})[slug],title:`Dear Passengers — ${({"release-date":"дата виходу","demo":"демо-версія","multiplayer":"кооператив","how-many-players":"кількість гравців","platforms":"платформи","gameplay":"геймплей","trailer":"офіційний трейлер","characters":"персонажі та ролі","system-requirements":"системні вимоги","news":"новини й оновлення","wiki":"перевірена вікі"})[slug]}`,meta:`Перевірений гайд про ${({"release-date":"вихід","demo":"демо","multiplayer":"кооператив","how-many-players":"гравців","platforms":"платформи","gameplay":"геймплей","trailer":"трейлер","characters":"ролі","system-requirements":"PC-вимоги","news":"новини","wiki":"гру"})[slug]} Dear Passengers.`,answer:({"release-date":"Вихід заплановано на 2026 рік; точну дату не оголошено.","demo":"Публічного демо в Steam немає.","multiplayer":"Онлайн-кооператив і одиночна гра підтверджені; локальний режим та кросплей не оголошені.","how-many-players":"Максимальну кількість гравців не оголошено.","platforms":"Підтверджено лише Windows PC.","gameplay":"Політ, сервіс, вантаж і фізичний хаос формують основний цикл.","trailer":"Офіційний трейлер показує пілота, салон, турбулентність і фізику.","characters":"Ролі відомі, але повний список іменованих персонажів не оголошено.","system-requirements":"Мінімум: Windows 10 64-bit, 8GB RAM, GTX 1060 або RX 6600 XT і 4GB.","news":"Точна дата, ціна, демо та максимум гравців не оголошені.","wiki":"Незалежний індекс перевіреної інформації без вигаданих деталей."})[slug],confirmed:["Steam є основним офіційним джерелом.","Спостереження з трейлера позначені окремо.","Дата й джерело фіксуються."],unknown:["Деталі очікують заяви розробника","Інформація може змінитися до релізу"],why:"Ми не заповнюємо прогалини здогадками. Сторінка оновлюється після нових офіційних даних Steam або FLEXUS.",faq:[[p.name+" підтверджено?","Основою є Steam і офіційний трейлер."],["Сторінка оновлюватиметься?","Так, коли зміниться офіційне джерело."],["Як позначені невідомі дані?","Вони чітко вказані як неоголошені."]]}])),
  tools:{"can-i-run-it":["Чи запуститься Dear Passengers?","Порівняйте ПК з офіційним мінімумом.","Перевірка ПК"],"crew-check":["Перевірка команди","Перевірте платформу, режим і склад.","Команда"],countdown:["Лічильник вікна виходу","Показує залишок 2026 року без вигаданої дати.","Вікно виходу"],"system-compare":["Порівняння систем","Мінімальна й практична конфігурації.","Порівняння"],"status-tracker":["Трекер статусу","Підтверджене, показане й невідоме.","Статус"],"role-quiz":["Яка ваша роль в екіпажі?","Пілот, салон, вантаж або кризовий спеціаліст.","Тест ролі"]}
});

export const SEO = { en, "zh-cn": zh, ja, ar, tr, uk };
