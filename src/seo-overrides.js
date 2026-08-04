const SITE = "https://dearpassengerscrew.com";

const SEO_STYLE = `
<style id="search-query-seo-overrides">
  .hero-title-localized{
    display:block!important;
    margin-top:18px;
    font-family:Manrope,system-ui,sans-serif!important;
    font-size:clamp(18px,1.7vw,27px)!important;
    line-height:1.25!important;
    letter-spacing:.035em!important;
    color:#fff!important;
    background:none!important;
    -webkit-text-fill-color:currentColor!important;
    filter:none!important;
  }
  .search-alias-note{
    max-width:680px;
    margin:18px 0 0;
    padding-left:15px;
    border-left:3px solid #ff9f0a;
    color:#c4d0db;
    font-size:13px;
    line-height:1.65;
  }
  .search-intent-hub{
    padding:30px clamp(20px,7vw,112px);
    background:#071522;
    color:#f7fbff;
    border-top:1px solid rgba(255,255,255,.12);
    border-bottom:1px solid rgba(255,255,255,.12);
  }
  .search-intent-hub-inner{
    width:min(1180px,100%);
    margin:auto;
  }
  .search-intent-hub p{
    margin:0 0 16px;
    color:#ffb12c;
    font-size:9px;
    font-weight:900;
    letter-spacing:.14em;
    text-transform:uppercase;
  }
  .search-intent-links{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
  }
  .search-intent-links a{
    min-height:44px;
    display:flex;
    align-items:center;
    padding:0 14px;
    border:1px solid rgba(255,255,255,.18);
    border-radius:10px;
    background:rgba(255,255,255,.045);
    color:#e9f0f6;
    font-size:12px;
    font-weight:750;
  }
  .search-intent-links a:hover{
    border-color:#ff9f0a;
    background:rgba(255,159,10,.12);
  }
  @media(max-width:760px){
    .hero-title-localized{font-size:17px!important;margin-top:13px}
    .search-alias-note{font-size:12px}
    .search-intent-hub{padding:24px 20px}
    .search-intent-links{display:grid;grid-template-columns:1fr 1fr}
    .search-intent-links a{font-size:11px}
  }
</style>`;

function replaceAll(html, from, to) {
  return from && html.includes(from) ? html.split(from).join(to) : html;
}

function injectStyle(html) {
  if (html.includes('id="search-query-seo-overrides"')) return html;
  return html.replace("</head>", `${SEO_STYLE}</head>`);
}

function injectIntentHub(html, locale) {
  if (html.includes('class="search-intent-hub"')) return html;

  const isJapanese = locale === "ja";
  const prefix = isJapanese ? "/ja" : "";
  const label = isJapanese ? "ディア・パッセンジャーズを調べる" : "Explore the Dear Passengers Wiki";
  const links = isJapanese
    ? [
        ["release-date", "発売日"],
        ["demo", "デモ"],
        ["multiplayer", "マルチプレイ"],
        ["how-many-players", "最大人数"],
        ["gameplay", "ゲームプレイ"],
        ["characters", "キャラクターと役割"],
        ["system-requirements", "PC動作環境"],
        ["news", "最新ニュース"]
      ]
    : [
        ["release-date", "Release date"],
        ["demo", "Demo status"],
        ["multiplayer", "Multiplayer and co-op"],
        ["how-many-players", "Player count"],
        ["gameplay", "Gameplay"],
        ["characters", "Characters and crew roles"],
        ["system-requirements", "System requirements"],
        ["news", "Latest news"]
      ];

  const markup = `<section class="search-intent-hub" aria-label="${label}"><div class="search-intent-hub-inner"><p>${label}</p><nav class="search-intent-links">${links.map(([slug, text]) => `<a href="${prefix}/${slug}/">${text}</a>`).join("")}</nav></div></section>`;
  return html.replace('<nav class="article-toc"', `${markup}<nav class="article-toc"`);
}

function optimizeJapaneseHomepage(html) {
  const oldTitle = "Dear Passengers 発売日・デモ・マルチプレイ・ゲームガイド";
  const newTitle = "Dear Passengers（ディア・パッセンジャーズ）ゲーム｜発売日・デモ・協力プレイ";
  const oldDescription = "Dear Passengersの発売時期、デモ、対応機種、協力プレイ、トレーラー、ゲーム内容を確認できる独立情報サイト。";
  const newDescription = "Dear Passengers（ディア・パッセンジャーズ）のゲーム内容、2026年の発売予定、デモ、マルチプレイ、対応機種、最大人数を公式情報に基づいて解説します。";
  const oldIntro = "発売日、デモ、プラットフォーム、協力プレイ——確定情報と未発表情報を明確に分離。";
  const newIntro = "Dear Passengers（ディア・パッセンジャーズ）は、FLEXUSが開発する一人称視点の協力型航空ゲームです。プレイヤーは飛行機の操縦、乗客へのサービス、貨物管理、機内トラブルへの対応を協力して行います。";
  const oldHeading = '<h1><span>DEAR</span> <span class="hero-title-main">PASSENGERS</span></h1>';
  const newHeading = '<h1><span>DEAR</span> <span class="hero-title-main">PASSENGERS</span><span class="hero-title-localized">ディア・パッセンジャーズ ゲームガイド</span></h1>';
  const oldLead = `<p class="lead">${oldIntro}</p>`;
  const newLead = `<p class="lead">${newIntro}</p><p class="search-alias-note">日本語では「ディア・パッセンジャーズ」と表記され、タイトルの意味から「乗客の皆様へ ゲーム」と検索される場合もあります。</p>`;

  html = replaceAll(html, oldTitle, newTitle);
  html = replaceAll(html, oldDescription, newDescription);
  html = html.replace(oldHeading, newHeading);
  html = html.replace(oldLead, newLead);
  return injectStyle(html);
}

function optimizeJapaneseWiki(html) {
  const oldTitle = "Dear Passengers 検証済みWiki";
  const newTitle = "Dear Passengers Wiki（ディア・パッセンジャーズ攻略・最新情報）";
  const oldMeta = "Dear Passengersの確認済み情報を公式情報に基づいて確認。";
  const newMeta = "Dear Passengers（ディア・パッセンジャーズ）の発売日、デモ、マルチプレイ、最大人数、対応機種、役割、貨物、動作環境をまとめた非公式Wiki。";
  const oldAnswer = "推測を避け、確認済み情報を整理した独立Wikiです。";
  const newAnswer = "Dear Passengers（ディア・パッセンジャーズ）の発売日、デモ、マルチプレイ、最大人数、ゲームプレイ、キャラクター、PC動作環境を整理した非公式Wikiです。";

  html = replaceAll(html, oldTitle, newTitle);
  html = replaceAll(html, oldMeta, newMeta);
  html = replaceAll(html, oldAnswer, newAnswer);
  html = injectIntentHub(html, "ja");
  return injectStyle(html);
}

function optimizeEnglishWiki(html) {
  const oldTitle = "Dear Passengers Wiki: Verified Game Guide and Index";
  const newTitle = "Dear Passengers Wiki: Release Date, Multiplayer, Roles & Gameplay";
  const oldMeta = "A source-first Dear Passengers wiki covering release date, demo, multiplayer, platforms, gameplay, roles, trailer, system requirements and news.";
  const newMeta = "The Dear Passengers Wiki covers the release date, demo, multiplayer, player count, crew roles, passengers, cargo, gameplay, system requirements and official updates.";
  const oldAnswer = "This wiki is an organized index of verified Dear Passengers information, designed to answer player questions without filling gaps with invented details.";
  const newAnswer = "The Dear Passengers Wiki collects verified information about the release date, demo, multiplayer, player count, crew roles, passengers, cargo, weather, system requirements and official updates.";

  html = replaceAll(html, oldTitle, newTitle);
  html = replaceAll(html, oldMeta, newMeta);
  html = replaceAll(html, oldAnswer, newAnswer);
  html = injectIntentHub(html, "en");
  return injectStyle(html);
}

function optimizePlayerCount(html) {
  const oldTitle = "How Many Players Can Play Dear Passengers?";
  const newTitle = "Dear Passengers Player Count: How Many Players Can Play?";
  const oldMeta = "The verified answer on Dear Passengers player count, online co-op group size and why specific numbers remain unconfirmed.";
  const newMeta = "The maximum Dear Passengers player count has not been officially confirmed. Check the latest online co-op, lobby-size and crew information.";
  const oldAnswer = "The maximum Dear Passengers player count has not been officially announced. Online co-op is confirmed, but a precise crew limit is not.";
  const newAnswer = "The maximum Dear Passengers player count has not been officially announced. Online co-op and single-player are confirmed, but FLEXUS has not published a maximum lobby or crew size.";

  html = replaceAll(html, oldTitle, newTitle);
  html = replaceAll(html, oldMeta, newMeta);
  html = replaceAll(html, oldAnswer, newAnswer);
  return html;
}

export function applySeoOverrides(pathname, html) {
  const normalized = pathname.replace(/\/{2,}/g, "/");

  if (normalized === "/ja/") return optimizeJapaneseHomepage(html);
  if (normalized === "/ja/wiki/") return optimizeJapaneseWiki(html);
  if (normalized === "/wiki/") return optimizeEnglishWiki(html);
  if (normalized === "/how-many-players/") return optimizePlayerCount(html);

  return html;
}

export const SEO_OVERRIDE_TARGETS = [
  `${SITE}/ja/`,
  `${SITE}/ja/wiki/`,
  `${SITE}/wiki/`,
  `${SITE}/how-many-players/`
];
