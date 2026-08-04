import app from "../src/entry.js";

const targets = [
  {
    path: "/ja/",
    required: [
      "Dear Passengers（ディア・パッセンジャーズ）ゲーム｜発売日・デモ・協力プレイ",
      "ディア・パッセンジャーズ ゲームガイド",
      "乗客の皆様へ ゲーム",
      "2026-07-14T00:00:00Z"
    ],
    forbidden: [
      "Dear Passengers 発売日・デモ・マルチプレイ・ゲームガイド",
      '"uploadDate":"2026-07-14"'
    ]
  },
  {
    path: "/ja/wiki/",
    required: [
      "Dear Passengers Wiki（ディア・パッセンジャーズ攻略・最新情報）",
      "ディア・パッセンジャーズを調べる",
      "/ja/how-many-players/"
    ],
    forbidden: [
      "Dear Passengers 検証済みWiki"
    ]
  },
  {
    path: "/wiki/",
    required: [
      "Dear Passengers Wiki: Release Date, Multiplayer, Roles &amp; Gameplay",
      "Explore the Dear Passengers Wiki",
      "/how-many-players/"
    ],
    forbidden: [
      "Dear Passengers Wiki: Verified Game Guide and Index"
    ]
  },
  {
    path: "/how-many-players/",
    required: [
      "Dear Passengers Player Count: How Many Players Can Play?",
      "maximum lobby or crew size"
    ],
    forbidden: [
      "How Many Players Can Play Dear Passengers?"
    ]
  }
];

for (const target of targets) {
  const request = new Request(`https://localhost${target.path}`);
  const response = await app.fetch(request, {}, {});
  const html = await response.text();

  if (response.status !== 200) {
    throw new Error(`${target.path} returned ${response.status}`);
  }

  if (!(response.headers.get("content-type") || "").includes("text/html")) {
    throw new Error(`${target.path} did not return HTML`);
  }

  for (const needle of target.required) {
    if (!html.includes(needle)) {
      throw new Error(`${target.path} is missing required output: ${needle}`);
    }
  }

  for (const needle of target.forbidden) {
    if (html.includes(needle)) {
      throw new Error(`${target.path} still contains obsolete output: ${needle}`);
    }
  }
}

console.log(`Validated ${targets.length} Search Console SEO target pages.`);
