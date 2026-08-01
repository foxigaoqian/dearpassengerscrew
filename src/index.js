import { LAST_CHECKED, PAGE_SLUGS, TOOL_SLUGS, UPDATE_LOG, SEO } from "./seo-content.js";
import {
  AUTHORITY_SLUGS,
  WIKI_SLUGS,
  NEWS_SLUGS,
  STATIC_SLUGS,
  AUTHORITY_CONTENT,
  WIKI_CONTENT,
  NEWS_CONTENT,
  STATIC_CONTENT,
  OFFICIAL_MEDIA,
  SOURCES
} from "./authority-content.js";
import { INTENT_DEPTH } from "./intent-depth.js";
import { INTENT_EXPANSION } from "./intent-expansion.js";
import { LINK_GRAPH, LINK_TARGETS, targetPath, localizedTargetAllowed } from "./link-graph.js";

const SITE = "https://dearpassengerscrew.com";
const STEAM = "https://store.steampowered.com/app/4534960/Dear_Passengers/";
const TRAILER = "https://www.youtube-nocookie.com/embed/hEsuA_rqTxk";
const HERO = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4534960/12ea170121330ac9040a00257436552a9b2368a1/ss_12ea170121330ac9040a00257436552a9b2368a1.1920x1080.jpg?t=1784401335";
const CAPSULE = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4534960/7ddef53346afe3e3d4d479dbed740cdb38cfe09a/header.jpg?t=1784401335";
const TRAILER_ART = "https://i.ytimg.com/vi/hEsuA_rqTxk/maxresdefault.jpg";

const languages = {
  en: { label: "EN", name: "English", dir: "ltr" },
  "zh-cn": { label: "中文", name: "简体中文", dir: "ltr" },
  ja: { label: "日本語", name: "日本語", dir: "ltr" },
  ar: { label: "العربية", name: "العربية", dir: "rtl" },
  tr: { label: "TR", name: "Türkçe", dir: "ltr" },
  uk: { label: "UA", name: "Українська", dir: "ltr" }
};

const copy = {
  en: {
    title: "Dear Passengers — Release Date, Demo, Multiplayer & Game Guide",
    description: "Independent Dear Passengers game intelligence: verified release window, demo status, multiplayer details, platforms, trailer, gameplay and system requirements.",
    nav: ["Game status", "Player questions", "Gameplay", "Crew check"],
    eyebrow: "Independent verified game intelligence",
    intro: "Release date, demo, platforms and co-op details—confirmed facts clearly separated from unknowns.",
    cta1: "Check live status", cta2: "Can our crew play?",
    last: "Last checked · July 31, 2026", ticker: ["2026 · STEAM", "LIVE INTEL", "NOT AVAILABLE YET"],
    statusTitle: "What is confirmed today.",
    statusIntro: "A clean snapshot of the facts players need before they wishlist, wait or assemble a crew.",
    cards: [
      ["Release window", "2026", "Confirmed on Steam"],
      ["Platform", "Windows PC", "Steam page is live"],
      ["Public demo", "Not available yet", "No public download found"],
      ["Maximum players", "Not announced", "Online co-op is confirmed"],
      ["Price", "Not announced", "Do not assume free-to-play"],
      ["System baseline", "8 GB RAM", "GTX 1060 / RX 6600 XT"]
    ],
    questionsTitle: "What are players actually trying to find?",
    questionsIntro: "Each answer begins with the evidence, then names what remains unknown.",
    questions: [
      ["When will Dear Passengers release?", "The official Steam page lists a 2026 release window. No exact day or month has been announced."],
      ["Can I play a demo now?", "No public demo is currently listed on Steam. Treat third-party download claims cautiously."],
      ["How many people can play?", "Online co-op and single-player are confirmed. The maximum crew size has not been officially announced."],
      ["Is it free to play?", "The price has not been announced. A user-defined Steam tag is not confirmation of the business model."],
      ["Will it come to consoles?", "Only Windows PC is confirmed right now. PlayStation, Xbox and Switch versions remain unannounced."],
      ["What do you actually do?", "Pilot the plane, serve passengers, handle risky cargo and stop physics-driven cabin problems from becoming disasters."]
    ],
    trailerEyebrow: "Official media", trailerTitle: "Watch the chaos. Then inspect the evidence.",
    trailerText: "The official trailer shows the central loop: one player pilots while the rest of the crew manages passengers, cargo, service and rapidly escalating cabin failures.",
    evidence: ["Online co-op with friends", "Pilot or work inside the cabin", "Physics-based passengers and cargo", "Dynamic weather and turbulence"],
    playTitle: "One flight. Too many ways to fail.",
    playIntro: "Dear Passengers combines crew coordination, first-person chaos and risk-versus-reward decisions inside the world's worst airline.",
    features: [
      ["01", "Fly", "Keep the aircraft moving while weather and bad decisions work against you."],
      ["02", "Serve", "Food, drinks and passenger expectations compete for the crew's attention."],
      ["03", "Contain", "Secure cargo and stop one loose object from turning the cabin into a disaster."]
    ],
    checkerTitle: "Can your crew play?",
    checkerIntro: "Select your setup. The tool only returns what current official information supports.",
    fields: ["Platform", "Mode", "Crew size"],
    platform: ["Windows PC", "PlayStation", "Xbox", "Switch", "macOS / Linux"],
    mode: ["Online co-op", "Single-player", "Local split-screen"],
    check: "Run crew check",
    results: {
      ready: ["READY", "Windows PC single-player is officially supported."],
      partial: ["PARTIALLY CONFIRMED", "Online co-op is confirmed, but the maximum group size is still unknown."],
      waiting: ["WAIT FOR CONFIRMATION", "This setup has not been officially announced."]
    },
    timelineTitle: "Evidence, not guesses.",
    timeline: [
      ["Confirmed", "Steam store page", "Release window, Windows requirements, single-player and online co-op."],
      ["Observed", "Official trailer", "Pilot, cabin service, cargo, passenger physics and turbulence gameplay."],
      ["Unknown", "Developer announcement pending", "Exact date, price, maximum player count and console versions."]
    ],
    finalTitle: "The world's worst airline is hiring.",
    finalText: "Wishlist the official game, then come back here when you need the confirmed answer instead of another recycled rumor.",
    steam: "Open official Steam page", footer: "Independent fan intelligence · Not affiliated with FLEXUS or Valve."
  },
  "zh-cn": {
    title: "Dear Passengers 发售时间、Demo、联机人数与游戏指南",
    description: "Dear Passengers 独立游戏情报站：核实发售窗口、Demo状态、联机人数、平台、预告片、玩法和配置要求。",
    nav: ["游戏状态", "玩家问题", "玩法情报", "组队检测"],
    eyebrow: "独立核实的游戏情报中心",
    intro: "发售日期、Demo、平台和联机信息——已确认与未公布内容清楚分开。",
    cta1: "查看当前状态", cta2: "我的队伍能玩吗？",
    last: "最后核实 · 2026年7月31日", ticker: ["2026 · STEAM", "实时情报", "暂不可玩"],
    statusTitle: "今天已经确认的信息。",
    statusIntro: "在你加入愿望单、继续等待或召集队友之前，先看清真正确定的事实。",
    cards: [
      ["发售窗口", "2026年", "Steam官方确认"],
      ["平台", "Windows PC", "Steam页面已上线"],
      ["公开Demo", "暂未开放", "未发现官方下载"],
      ["最多人数", "尚未公布", "已确认在线合作"],
      ["价格", "尚未公布", "不能据此判断免费"],
      ["最低内存", "8 GB RAM", "GTX 1060 / RX 6600 XT"]
    ],
    questionsTitle: "玩家真正想知道什么？",
    questionsIntro: "每个答案先给证据，再说明哪些内容仍然未知。",
    questions: [
      ["Dear Passengers什么时候发售？", "Steam官方页面目前只确认2026年，具体月份和日期尚未公布。"],
      ["现在可以玩Demo吗？", "Steam目前没有公开Demo。对第三方所谓下载地址需要谨慎。"],
      ["最多支持几个人？", "单人和在线合作已经确认，但官方尚未公布最大队伍人数。"],
      ["这是一款免费游戏吗？", "价格没有公布。Steam用户标签不能当作商业模式的官方确认。"],
      ["会推出主机版吗？", "当前只确认Windows PC，PlayStation、Xbox和Switch均未官宣。"],
      ["游戏到底怎么玩？", "驾驶飞机、服务乘客、处理高风险货物，并阻止物理系统制造的机舱事故继续扩大。"]
    ],
    trailerEyebrow: "官方媒体", trailerTitle: "先看混乱，再看证据。",
    trailerText: "官方预告片展示了核心循环：一名玩家驾驶飞机，其余机组处理乘客、货物、服务任务和不断升级的机舱事故。",
    evidence: ["与好友在线合作", "驾驶飞机或在机舱工作", "乘客和货物物理系统", "动态天气与颠簸"],
    playTitle: "一次航班，无数种失败方式。",
    playIntro: "它把团队协作、第一人称混乱和风险回报选择塞进了世界上最糟糕的航空公司。",
    features: [
      ["01", "驾驶", "天气与错误决策不断干扰，你仍要让飞机继续前进。"],
      ["02", "服务", "食物、饮料和乘客需求同时争夺机组注意力。"],
      ["03", "控制", "固定货物，阻止一个松动物体把整个机舱变成灾难。"]
    ],
    checkerTitle: "你的队伍能玩吗？",
    checkerIntro: "选择设备与模式，工具只根据当前官方信息给出判断。",
    fields: ["平台", "模式", "队伍人数"],
    platform: ["Windows PC", "PlayStation", "Xbox", "Switch", "macOS / Linux"],
    mode: ["在线合作", "单人游戏", "本地分屏"],
    check: "开始检测",
    results: {
      ready: ["可以", "Windows PC单人模式已得到官方确认。"],
      partial: ["部分确认", "在线合作已确认，但最大队伍人数仍未公布。"],
      waiting: ["等待官宣", "这个组合目前没有得到官方确认。"]
    },
    timelineTitle: "只讲证据，不靠猜测。",
    timeline: [
      ["已确认", "Steam商店页面", "2026发售窗口、Windows配置、单人和在线合作。"],
      ["已观察", "官方预告片", "驾驶、机舱服务、货物、乘客物理和颠簸玩法。"],
      ["未知", "等待开发者公布", "具体日期、价格、最大人数和主机版本。"]
    ],
    finalTitle: "世界上最糟糕的航空公司正在招人。",
    finalText: "先去官方页面加入愿望单；以后想找确定答案，再回到这里，而不是继续看重复的传闻。",
    steam: "打开官方Steam页面", footer: "独立玩家情报站 · 与FLEXUS及Valve无隶属关系。"
  },
  ja: {
    title: "Dear Passengers 発売日・デモ・マルチプレイ・ゲームガイド",
    description: "Dear Passengersの発売時期、デモ、対応機種、協力プレイ、トレーラー、ゲーム内容を確認できる独立情報サイト。",
    nav: ["ゲーム状況", "よくある質問", "ゲームプレイ", "クルーチェック"],
    eyebrow: "独立検証ゲームインテリジェンス",
    intro: "発売日、デモ、プラットフォーム、協力プレイ——確定情報と未発表情報を明確に分離。",
    cta1: "最新状況を見る", cta2: "このクルーで遊べる？",
    last: "最終確認 · 2026年7月31日", ticker: ["2026 · STEAM", "LIVE INTEL", "まだプレイ不可"],
    statusTitle: "現在確認できること。",
    statusIntro: "ウィッシュリスト登録や仲間集めの前に、必要な事実だけを確認。",
    cards: [["発売時期","2026年","Steamで確認"],["対応機種","Windows PC","Steamページ公開済み"],["公開デモ","未配信","公式DLなし"],["最大人数","未発表","オンライン協力は確認"],["価格","未発表","無料とは断定不可"],["最低メモリ","8 GB RAM","GTX 1060 / RX 6600 XT"]],
    questionsTitle: "プレイヤーが本当に知りたいこと。",
    questionsIntro: "証拠を先に示し、まだ不明な点を明記します。",
    questions: [["発売日はいつ？","公式Steamページでは2026年のみ。月日未発表。"],["デモは遊べる？","Steamに公開デモはありません。"],["何人で遊べる？","オンライン協力と一人プレイは確認済み。最大人数は未発表。"],["無料ゲーム？","価格未発表。ユーザータグは公式確認ではありません。"],["コンソール版は？","現時点ではWindows PCのみ確認。"],["何をするゲーム？","操縦、接客、危険な貨物の管理、機内トラブル対応を行います。"]],
    trailerEyebrow: "公式メディア", trailerTitle: "カオスを見て、証拠を確認。",
    trailerText: "公式トレーラーでは操縦役と機内担当が協力し、乗客、貨物、サービス、故障に対処します。",
    evidence: ["オンライン協力", "操縦または機内作業", "物理ベースの乗客と貨物", "動的な天候と乱気流"],
    playTitle: "一便に、失敗の可能性は無数。",
    playIntro: "協力、物理カオス、リスク判断を最悪の航空会社に詰め込んだゲーム。",
    features: [["01","飛ぶ","天候と判断ミスに耐えて飛行を続ける。"],["02","サービス","食事、飲み物、乗客の要求に対応。"],["03","封じ込め","貨物を固定し機内事故の拡大を防ぐ。"]],
    checkerTitle: "このクルーで遊べる？", checkerIntro: "環境を選択すると、公式情報だけで判定します。",
    fields: ["機種","モード","人数"], platform: ["Windows PC","PlayStation","Xbox","Switch","macOS / Linux"], mode: ["オンライン協力","一人プレイ","ローカル分割"], check: "チェック",
    results: {ready:["対応","Windows PCの一人プレイは公式対応。"],partial:["一部確認","オンライン協力は確認済みですが最大人数は不明。"],waiting:["発表待ち","この環境は公式発表されていません。"]},
    timelineTitle: "推測ではなく証拠。", timeline: [["確認","Steamストア","2026年、Windows、一人、オンライン協力。"],["観察","公式トレーラー","操縦、接客、貨物、物理、乱気流。"],["不明","発表待ち","正確な日付、価格、最大人数、家庭用版。"]],
    finalTitle: "世界最悪の航空会社が採用中。", finalText: "公式ページでウィッシュリストに追加し、確定情報はここで確認。", steam: "公式Steamを開く", footer: "独立ファン情報サイト · FLEXUSおよびValveとは無関係です。"
  },
  ar: {
    title: "Dear Passengers — موعد الإصدار والتجربة واللعب الجماعي",
    description: "مركز معلومات مستقل للعبة Dear Passengers: الإصدار والتجربة والمنصات والتعاون والعرض الرسمي ومتطلبات النظام.",
    nav: ["حالة اللعبة", "أسئلة اللاعبين", "أسلوب اللعب", "فحص الطاقم"],
    eyebrow: "معلومات مستقلة تم التحقق منها",
    intro: "موعد الإصدار والتجربة والمنصات واللعب التعاوني—نفصل المؤكد بوضوح عما لم يُعلن.",
    cta1: "عرض الحالة", cta2: "هل يمكن لطاقمنا اللعب؟",
    last: "آخر تحقق · 31 يوليو 2026", ticker: ["STEAM · 2026", "معلومات مباشرة", "غير متاح الآن"],
    statusTitle: "ما تم تأكيده اليوم.",
    statusIntro: "ملخص واضح للحقائق التي تحتاجها قبل الانتظار أو جمع الطاقم.",
    cards: [["نافذة الإصدار","2026","مؤكد على Steam"],["المنصة","Windows PC","صفحة Steam متاحة"],["تجربة عامة","غير متاحة","لا يوجد تنزيل رسمي"],["أقصى عدد","غير معلن","التعاون عبر الإنترنت مؤكد"],["السعر","غير معلن","لا تفترض أنها مجانية"],["الذاكرة الدنيا","8 GB RAM","GTX 1060 / RX 6600 XT"]],
    questionsTitle: "ماذا يريد اللاعبون أن يعرفوا؟", questionsIntro: "نبدأ بالدليل ثم نوضح ما يزال مجهولاً.",
    questions: [["متى تصدر اللعبة؟","تذكر صفحة Steam عام 2026 فقط، دون يوم أو شهر."],["هل توجد تجربة الآن؟","لا توجد تجربة عامة مدرجة على Steam."],["كم لاعباً؟","اللعب الفردي والتعاوني مؤكدان، لكن الحد الأقصى غير معلن."],["هل هي مجانية؟","السعر غير معلن وتصنيف المستخدمين ليس تأكيداً رسمياً."],["هل تصدر على الأجهزة المنزلية؟","المؤكد حالياً Windows PC فقط."],["ماذا نفعل في اللعبة؟","الطيران وخدمة الركاب وإدارة الشحنات ومنع فوضى المقصورة من التصاعد."]],
    trailerEyebrow: "وسائط رسمية", trailerTitle: "شاهد الفوضى ثم افحص الدليل.",
    trailerText: "يعرض الإعلان الرسمي الحلقة الأساسية: طيار وبقية الطاقم يديرون الركاب والشحنات والخدمة والأعطال.",
    evidence: ["تعاون عبر الإنترنت","الطيران أو العمل في المقصورة","فيزياء الركاب والشحنات","طقس واضطرابات ديناميكية"],
    playTitle: "رحلة واحدة وطرق كثيرة للفشل.", playIntro: "تنسيق جماعي وفوضى فيزيائية وقرارات مخاطرة داخل أسوأ شركة طيران.",
    features: [["01","حلّق","حافظ على الطائرة رغم الطقس والقرارات السيئة."],["02","اخدم","الطعام والشراب وطلبات الركاب تتنافس على انتباهك."],["03","احتوِ","ثبّت الشحنات وأوقف المشكلة قبل أن تصبح كارثة."]],
    checkerTitle: "هل يمكن لطاقمك اللعب؟", checkerIntro: "اختر إعدادك وسنعتمد فقط على المعلومات الرسمية الحالية.",
    fields: ["المنصة","النمط","حجم الطاقم"], platform: ["Windows PC","PlayStation","Xbox","Switch","macOS / Linux"], mode: ["تعاون عبر الإنترنت","فردي","شاشة منقسمة"], check: "افحص الطاقم",
    results: {ready:["جاهز","اللعب الفردي على Windows PC مدعوم رسمياً."],partial:["مؤكد جزئياً","التعاون مؤكد لكن العدد الأقصى ما يزال مجهولاً."],waiting:["انتظر التأكيد","هذا الإعداد لم يُعلن رسمياً."]},
    timelineTitle: "دليل لا تخمين.", timeline: [["مؤكد","صفحة Steam","2026 وWindows والفردي والتعاون."],["مشاهد","الإعلان الرسمي","الطيران والخدمة والشحنات والفيزياء والاضطرابات."],["مجهول","بانتظار المطور","التاريخ والسعر والعدد الأقصى والمنصات المنزلية."]],
    finalTitle: "أسوأ شركة طيران في العالم توظف.", finalText: "أضف اللعبة إلى قائمة الرغبات وعد هنا للحصول على الإجابة المؤكدة.", steam: "افتح Steam الرسمي", footer: "موقع معلومات مستقل · غير تابع لـ FLEXUS أو Valve."
  },
  tr: {
    title: "Dear Passengers — Çıkış Tarihi, Demo ve Çok Oyunculu Rehber",
    description: "Dear Passengers için bağımsız bilgi merkezi: çıkış, demo, platformlar, co-op, fragman, oynanış ve sistem gereksinimleri.",
    nav: ["Oyun durumu","Oyuncu soruları","Oynanış","Ekip kontrolü"], eyebrow: "Bağımsız doğrulanmış oyun bilgisi",
    intro: "Çıkış, demo, platform ve co-op ayrıntıları—doğrulananlar ve bilinmeyenler açıkça ayrılır.", cta1: "Canlı durumu gör", cta2: "Ekibimiz oynayabilir mi?",
    last: "Son kontrol · 31 Temmuz 2026", ticker: ["2026 · STEAM","CANLI BİLGİ","HENÜZ YOK"],
    statusTitle: "Bugün doğrulananlar.", statusIntro: "Beklemeden veya ekip kurmadan önce gereken net gerçekler.",
    cards: [["Çıkış","2026","Steam'de onaylı"],["Platform","Windows PC","Steam sayfası açık"],["Demo","Henüz yok","Resmi indirme yok"],["Maksimum oyuncu","Açıklanmadı","Online co-op onaylı"],["Fiyat","Açıklanmadı","Ücretsiz varsaymayın"],["Minimum bellek","8 GB RAM","GTX 1060 / RX 6600 XT"]],
    questionsTitle: "Oyuncular gerçekte ne arıyor?", questionsIntro: "Önce kanıt, sonra bilinmeyenler.",
    questions: [["Ne zaman çıkacak?","Steam yalnızca 2026'yı listeliyor; gün ve ay açıklanmadı."],["Demo oynanabilir mi?","Steam'de halka açık demo bulunmuyor."],["Kaç kişi oynayabilir?","Tek oyunculu ve online co-op onaylı; maksimum sayı bilinmiyor."],["Ücretsiz mi?","Fiyat açıklanmadı; kullanıcı etiketi resmi doğrulama değildir."],["Konsollara gelecek mi?","Şu anda yalnızca Windows PC doğrulandı."],["Oyunda ne yapılıyor?","Uçağı uçurun, yolculara hizmet edin, kargoyu yönetin ve kabin felaketlerini durdurun."]],
    trailerEyebrow: "Resmi medya", trailerTitle: "Kaosu izle. Sonra kanıta bak.", trailerText: "Resmi fragman pilot ve kabin ekibinin yolcu, kargo, servis ve arızaları birlikte yönettiğini gösteriyor.",
    evidence: ["Arkadaşlarla online co-op","Pilotluk veya kabin görevi","Fizik tabanlı yolcu ve kargo","Dinamik hava ve türbülans"],
    playTitle: "Bir uçuş. Sayısız başarısızlık.", playIntro: "Dünyanın en kötü havayolunda ekip koordinasyonu, fizik kaosu ve risk kararları.",
    features: [["01","Uç","Hava ve kötü kararlara rağmen uçağı ilerlet."],["02","Servis","Yemek, içecek ve yolcu beklentilerini yönet."],["03","Kontrol","Kargoyu sabitle ve sorunun felakete dönüşmesini önle."]],
    checkerTitle: "Ekibin oynayabilir mi?", checkerIntro: "Kurulumu seç; yalnızca resmi bilgilere göre sonuç al.", fields: ["Platform","Mod","Ekip"], platform: ["Windows PC","PlayStation","Xbox","Switch","macOS / Linux"], mode: ["Online co-op","Tek oyunculu","Yerel bölünmüş ekran"], check: "Ekibi kontrol et",
    results: {ready:["HAZIR","Windows PC tek oyunculu resmi olarak destekleniyor."],partial:["KISMEN ONAYLI","Online co-op onaylı, maksimum ekip boyutu bilinmiyor."],waiting:["ONAY BEKLENİYOR","Bu kurulum resmi olarak açıklanmadı."]},
    timelineTitle: "Tahmin değil, kanıt.", timeline: [["Onaylı","Steam mağazası","2026, Windows, tek oyunculu ve co-op."],["Görüldü","Resmi fragman","Pilotluk, servis, kargo, fizik ve türbülans."],["Bilinmiyor","Duyuru bekleniyor","Tarih, fiyat, maksimum oyuncu ve konsollar."]],
    finalTitle: "Dünyanın en kötü havayolu işe alıyor.", finalText: "Resmi oyunu istek listene ekle; doğrulanmış cevap için buraya dön.", steam: "Resmi Steam sayfası", footer: "Bağımsız hayran bilgisi · FLEXUS veya Valve ile bağlantılı değildir."
  },
  uk: {
    title: "Dear Passengers — Дата виходу, демо та мультиплеєр",
    description: "Незалежний центр інформації Dear Passengers: дата виходу, демо, платформи, кооператив, трейлер, геймплей і вимоги.",
    nav: ["Статус гри","Питання","Геймплей","Перевірка команди"], eyebrow: "Незалежна перевірена інформація",
    intro: "Дата виходу, демо, платформи й кооператив—підтверджені факти окремо від невідомого.", cta1: "Переглянути статус", cta2: "Чи може команда грати?",
    last: "Перевірено · 31 липня 2026", ticker: ["2026 · STEAM","LIVE INTEL","ЩЕ НЕДОСТУПНО"],
    statusTitle: "Що підтверджено сьогодні.", statusIntro: "Факти, потрібні перед очікуванням або збором команди.",
    cards: [["Вихід","2026","Підтверджено Steam"],["Платформа","Windows PC","Сторінка Steam активна"],["Публічне демо","Немає","Офіційного завантаження немає"],["Максимум гравців","Не оголошено","Онлайн-кооп підтверджено"],["Ціна","Не оголошено","Не вважайте гру безкоштовною"],["Мінімум RAM","8 GB","GTX 1060 / RX 6600 XT"]],
    questionsTitle: "Що насправді шукають гравці?", questionsIntro: "Спочатку докази, потім те, що досі невідомо.",
    questions: [["Коли вийде гра?","Steam вказує 2026 рік без дня та місяця."],["Чи є демо?","Публічного демо в Steam зараз немає."],["Скільки гравців?","Одиночна гра та онлайн-кооп підтверджені; максимум невідомий."],["Гра безкоштовна?","Ціну не оголошено; тег користувачів не є підтвердженням."],["Чи будуть консолі?","Поки підтверджено лише Windows PC."],["Що робити в грі?","Керувати літаком, обслуговувати пасажирів, контролювати вантаж і зупиняти хаос."]],
    trailerEyebrow: "Офіційні медіа", trailerTitle: "Подивіться хаос. Перевірте докази.", trailerText: "Офіційний трейлер показує пілота та екіпаж, які керують пасажирами, вантажем, сервісом і аваріями.",
    evidence: ["Онлайн-кооп із друзями","Пілот або робота в салоні","Фізика пасажирів і вантажу","Динамічна погода й турбулентність"],
    playTitle: "Один рейс. Безліч шляхів до провалу.", playIntro: "Командна координація, фізичний хаос і ризик у найгіршій авіакомпанії.",
    features: [["01","Летіти","Тримайте літак у русі попри погоду й погані рішення."],["02","Сервіс","Їжа, напої та вимоги пасажирів потребують уваги."],["03","Стримувати","Закріпіть вантаж і не дайте проблемі стати катастрофою."]],
    checkerTitle: "Чи може ваша команда грати?", checkerIntro: "Оберіть умови — результат спирається лише на офіційні дані.", fields: ["Платформа","Режим","Команда"], platform: ["Windows PC","PlayStation","Xbox","Switch","macOS / Linux"], mode: ["Онлайн-кооп","Одиночна гра","Локальний split-screen"], check: "Перевірити",
    results: {ready:["ГОТОВО","Одиночна гра на Windows PC офіційно підтримується."],partial:["ЧАСТКОВО","Онлайн-кооп підтверджено, максимум гравців невідомий."],waiting:["ЧЕКАЄМО","Цю конфігурацію офіційно не оголошено."]},
    timelineTitle: "Докази, не здогадки.", timeline: [["Підтверджено","Steam","2026, Windows, одиночна гра та кооп."],["Показано","Офіційний трейлер","Пілот, сервіс, вантаж, фізика й турбулентність."],["Невідомо","Очікуємо розробника","Точна дата, ціна, максимум гравців і консолі."]],
    finalTitle: "Найгірша авіакомпанія наймає.", finalText: "Додайте офіційну гру до бажаного й повертайтеся за перевіреною відповіддю.", steam: "Відкрити офіційний Steam", footer: "Незалежний фан-сайт · Не пов’язаний із FLEXUS або Valve."
  }
};

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

function localeFromPath(pathname) {
  const first = pathname.split("/").filter(Boolean)[0]?.toLowerCase();
  return languages[first] ? first : "en";
}

function localizedPath(locale, path = "") {
  const cleanPath = String(path).replace(/^\/+|\/+$/g, "");
  if (locale === "en") return cleanPath ? `/${cleanPath}/` : "/";
  return cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
}

function localizedUrl(locale, path = "") {
  return `${SITE}${localizedPath(locale, path)}`;
}

function alternateLinks(slug = "") {
  return Object.keys(languages)
    .map((locale) => `<link rel="alternate" hreflang="${locale}" href="${localizedUrl(locale, slug)}">`)
    .join("");
}

function iconLinks() {
  return `<link rel="icon" href="${CAPSULE}" type="image/jpeg" sizes="any"><link rel="apple-touch-icon" href="${CAPSULE}"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">`;
}

function officialFigure(mediaIndex, label = "Official gameplay evidence") {
  const [name, url] = OFFICIAL_MEDIA[mediaIndex % OFFICIAL_MEDIA.length];
  return `<figure class="article-figure"><a href="${url}" target="_blank" rel="noopener"><img src="${url}" alt="Dear Passengers official screenshot: ${esc(name)}" loading="lazy"></a><figcaption><span>${esc(label)}</span><strong>${esc(name)}</strong><small>Official FLEXUS media via Steam · Open full resolution ↗</small></figcaption></figure>`;
}

function semanticLinks(locale, sourceKey, heading) {
  const data = SEO[locale] || SEO.en;
  const sourceTarget = sourceKey.replace(/^intent:/, "page:");
  const fallback = ["page:gameplay", "page:release-date", "page:multiplayer", "page:demo", "page:wiki", "tool:status-tracker"];
  const targets = [...(LINK_GRAPH[sourceTarget] || []), ...fallback]
    .filter((target, index, list) => target !== sourceTarget && localizedTargetAllowed(target, locale) && list.indexOf(target) === index)
    .slice(0, locale === "en" ? 5 : 4);
  const links = targets.map((target) => {
    const [kind, slug] = target.split(":");
    const english = LINK_TARGETS[target] || [slug, "Open the related verified resource."];
    const label = locale === "en"
      ? english[0]
      : kind === "page"
        ? data.pages[slug]?.name || english[0]
        : kind === "tool"
          ? data.tools[slug]?.[2] || english[0]
          : english[0];
    const reason = locale === "en"
      ? english[1]
      : kind === "page"
        ? data.pages[slug]?.answer || data.ui.sourceNote
        : kind === "tool"
          ? data.tools[slug]?.[1] || data.ui.sourceNote
          : data.ui.sourceNote;
    return `<li><a class="semantic-link" data-context-link="true" href="${targetPath(target, locale)}"><strong>${esc(label)}</strong><span>${esc(reason)}</span><b>↗</b></a></li>`;
  }).join("");
  return `<section class="semantic-section"><p class="kicker">SEMANTIC CONNECTIONS</p><h2>${esc(heading || data.ui.related)}</h2><p>${esc(locale === "en" ? "Continue with the next question in this topic cluster. Every link below resolves a specific adjacent search intent." : data.ui.sourceNote)}</p><ul class="semantic-list">${links}</ul></section>`;
}

function homepageEditorial(locale) {
  if (locale !== "en") return "";
  return `
    <section class="verification-bar" aria-label="Editorial verification">
      <div><span>INDEPENDENT GUIDE</span><strong>Built for players, not search engines alone.</strong></div>
      <div><span>METHOD</span><strong>Steam facts · official footage · attributed interviews</strong></div>
      <div><span>LAST CHECKED</span><strong>${LAST_CHECKED}</strong></div>
      <a href="/editorial-policy/">How verification works ↗</a>
    </section>
    <section class="editorial-chapter chapter-light" id="overview">
      <div class="chapter-rail"><b>01</b><span>GAME OVERVIEW</span></div>
      <div class="chapter-copy">
        <p class="kicker">DEAR PASSENGERS · EXPLAINED</p>
        <h2>What is Dear Passengers?</h2>
        <p class="chapter-lead"><strong>Dear Passengers is a first-person airline management comedy in which flying the plane is only half the problem.</strong></p>
        <p>Developed and published by FLEXUS, the game places a crew inside an aircraft where cockpit decisions, cabin service, passenger behavior, cargo and bad weather collide in real time. One player may be trying to keep the aircraft stable while another is serving food, securing a dangerous object or dealing with a passenger who has become the next emergency.</p>
        <p>That overlap is the core idea. Dear Passengers is not presented as a quiet commercial-flight simulator. Its official footage turns routine airline work into a chain reaction: a rough maneuver shifts loose objects, the cabin crew loses control of a task, and the attempted solution creates a new problem somewhere else in the aircraft. Our <a data-context-link="true" href="/gameplay/">complete Dear Passengers gameplay guide</a> follows that loop from the passenger manifest to an airborne crisis.</p>
        <h3>What is already confirmed?</h3>
        <p>The official Steam record confirms a 2026 release window for Windows PC, plus single-player, multiplayer, co-op and online co-op. It also publishes the current minimum PC requirements and six interface languages. The exact launch day, price, maximum crew size and a downloadable public build are not confirmed. Check the <a data-context-link="true" href="/release-date/">evidence behind the 2026 release window</a> or the <a data-context-link="true" href="/demo/">current public demo status</a> before trusting a countdown or third-party installer.</p>
        <h3>Who is this game likely for?</h3>
        <p>Based on the confirmed loop, it should appeal most to groups that enjoy communication under pressure, role specialization, physical comedy and recovering from plans that collapse in public. That is an editorial reading of the available evidence, not a promise about final balance. Solo play is listed on Steam, but FLEXUS has not yet explained how unfilled jobs are handled.</p>
        <div class="chapter-links"><a href="/developer/"><span>DEVELOPER PROFILE</span><strong>Who is FLEXUS?</strong><b>↗</b></a><a href="/wiki/"><span>SYSTEMS MANUAL</span><strong>Explore the Dear Passengers wiki</strong><b>↗</b></a></div>
      </div>
    </section>
    <section class="editorial-chapter chapter-dark intent-chapter">
      <div class="chapter-rail"><b>02</b><span>PLAYER QUESTIONS</span></div>
      <div class="chapter-copy">
        <p class="kicker">THE FOUR QUESTIONS THAT DEFINE THE SEARCH</p>
        <h2>Know what is real before boarding.</h2>
        <p class="chapter-lead">Each answer starts with the direct verdict, then links to a dedicated briefing where the source, uncertainty and update history are preserved.</p>
        <div class="intent-lines">
          <article><span>01</span><div><h3>When does Dear Passengers release?</h3><p>Steam says 2026, but no month, day, unlock time or preload schedule is public. The <a data-context-link="true" href="/release-date/">Dear Passengers release-date tracker</a> separates the official window from placeholder dates and speculation.</p></div></article>
          <article><span>02</span><div><h3>Is there a demo you can play now?</h3><p>No public Steam demo is currently available. A Gamescom build and a later public demo have been discussed in an attributed interview. The <a data-context-link="true" href="/demo/">Dear Passengers demo guide</a> explains what is planned and how to identify the legitimate build.</p></div></article>
          <article><span>03</span><div><h3>How does multiplayer work?</h3><p>Online co-op and single-player are confirmed; crossplay, local split-screen and matchmaking details are not. Read the <a data-context-link="true" href="/multiplayer/">multiplayer and online co-op briefing</a> before assembling a crew.</p></div></article>
          <article><span>04</span><div><h3>How many people can play together?</h3><p>FLEXUS has not published a maximum lobby size. Trailer headcounts are visual evidence, not networking specifications. Our <a data-context-link="true" href="/how-many-players/">Dear Passengers player-count tracker</a> records the exact evidence needed before a number becomes confirmed.</p></div></article>
        </div>
      </div>
    </section>`;
}

function homepageDepth(locale) {
  if (locale !== "en") return "";
  const feeds = OFFICIAL_MEDIA.slice(0, 4).map(([name, url], index) =>
    `<a class="feed-card reveal" href="/media/"><img src="${url}" alt="Dear Passengers official gameplay: ${esc(name)}" loading="lazy"><span>LIVE CABIN FEED · 0${index + 1}</span><strong>${esc(name)}</strong><small>Inspect official media ↗</small></a>`
  ).join("");
  const reports = ["one-point-five-million-wishlists", "gamescom-demo-plans", "steam-reveal-2026"].map((slug) => {
    const item = NEWS_CONTENT[slug];
    return `<a class="dispatch-card" href="/news/${slug}/"><time>${item.date}</time><span>VERIFIED DISPATCH</span><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><b>READ SOURCE-BACKED REPORT ↗</b></a>`;
  }).join("");
  return `
    <section class="editorial-chapter chapter-sand flight-loop-chapter">
      <div class="chapter-rail"><b>03</b><span>THE FLIGHT LOOP</span></div>
      <div class="chapter-copy">
        <p class="kicker">FROM MANIFEST TO MAYHEM</p>
        <h2>How a Dear Passengers flight appears to work.</h2>
        <p class="chapter-lead">The public material suggests a continuous co-op loop rather than a collection of disconnected airline minigames.</p>
        <h3>Before takeoff: choose the risk</h3>
        <p>Official descriptions say the crew selects passengers and cargo before departure. That turns the manifest into a risk-versus-reward decision: valuable work may bring difficult people, awkward objects or dangerous loads aboard. The exact economy, rarity system and route structure are still unknown, but the choice is important because it gives the crew some responsibility for the disaster that follows. The <a data-context-link="true" href="/wiki/cargo-and-payouts/">cargo and payout field guide</a> separates the visible system from features that have not been documented.</p>
        <h3>In the cockpit: fly for the whole aircraft</h3>
        <p>The pilot is not operating in isolation. Weather, turbulence and air pockets affect the aircraft while every abrupt movement can create work in the cabin. A maneuver that protects the plane may send an unsecured object through the aisle or interrupt passenger service. That connection between outside conditions and inside physics is why the <a data-context-link="true" href="/wiki/pilot-role/">Dear Passengers pilot role guide</a> and the <a data-context-link="true" href="/wiki/weather-and-turbulence/">weather and turbulence system</a> belong in the same strategic conversation.</p>
        <h3>In the cabin: contain the chain reaction</h3>
        <p>Cabin crew appear to serve food and drinks, manage passenger needs, handle cargo and respond when routine tasks become emergencies. The final game may formalize these duties differently, so we describe them as visible responsibilities rather than invented character classes. See the <a data-context-link="true" href="/characters/">crew roles and passenger guide</a> for what the trailer supports and what remains open.</p>
        <h3>Solo or co-op: the unanswered operational question</h3>
        <p>Steam confirms both single-player and online co-op, but it does not explain whether solo players switch instantly between stations, use automated helpers or receive a different workload. It also does not give a maximum party size. Our <a data-context-link="true" href="/multiplayer/">Dear Passengers co-op briefing</a> and <a data-context-link="true" href="/how-many-players/">maximum player-count tracker</a> will be updated when FLEXUS publishes lobby rules or a public demo makes them testable.</p>
      </div>
    </section>
    <section class="section feed-section">
      <div class="section-head split"><div><p class="kicker">LIVE CABIN FEEDS</p><h2>One aircraft. Four simultaneous problems.</h2></div><p>Official screenshots give the page visual evidence for cockpit pressure, cabin work, passenger handling and unstable cargo—not decorative filler.</p></div>
      <div class="feed-grid">${feeds}</div>
    </section>
    <section class="section manifest-section">
      <div class="section-head"><p class="kicker">AIRCRAFT MANIFEST</p><h2>The practical facts in one scan.</h2><p>Everything below is taken from the current Steam listing. Recommended hardware and unannounced platform features remain clearly separated.</p></div>
      <div class="manifest-layout">
        <div class="spec-board">
          <div><span>OPERATING SYSTEM</span><strong>Windows 10 · 64-bit</strong></div>
          <div><span>PROCESSOR</span><strong>Intel Core i5 · 2.5 GHz or equivalent</strong></div>
          <div><span>MEMORY</span><strong>8 GB RAM</strong></div>
          <div><span>GRAPHICS</span><strong>GTX 1060 / RX 6600 XT</strong></div>
          <div><span>DIRECTX</span><strong>Version 12</strong></div>
          <div><span>STORAGE</span><strong>4 GB available space</strong></div>
        </div>
        <div class="language-board">
          <p class="kicker">INTERFACE LANGUAGES</p><h3>Six editions on Steam.</h3>
          <p>English, Arabic, Simplified Chinese, Turkish, Ukrainian and Japanese are listed for the interface. Full audio and subtitle boxes are not checked.</p>
          <a class="primary" href="/languages/">CHECK LANGUAGE STATUS ↗</a>
          <a class="secondary dark-button" href="/tools/can-i-run-it/">TEST MY PC ↗</a>
        </div>
      </div>
    </section>
    <section class="section dispatch-section">
      <div class="section-head split"><div><p class="kicker">VERIFIED UPDATE DESK</p><h2>Announcements, not recycled rumors.</h2></div><p>Dated reports preserve the original source, what changed and which details remain unknown.</p></div>
      <div class="dispatch-grid">${reports}</div>
      <a class="source-link" href="/news/">OPEN THE COMPLETE NEWS ARCHIVE ↗</a>
    </section>
    <section class="section source-manifest">
      <div class="section-head"><p class="kicker">SOURCE MANIFEST</p><h2>First-party facts lead every answer.</h2></div>
      <div class="source-manifest-grid">
        <a href="${SOURCES.steam.url}" target="_blank" rel="noopener"><span>PRIMARY LISTING</span><strong>Official Steam page</strong><p>Release window, modes, languages and PC requirements.</p><b>OPEN SOURCE ↗</b></a>
        <a href="${SOURCES.trailer.url}" target="_blank" rel="noopener"><span>OFFICIAL MEDIA</span><strong>FLEXUS announcement trailer</strong><p>Visible roles, cabin hazards, cargo and flight situations.</p><b>OPEN SOURCE ↗</b></a>
        <a href="${SOURCES.devua.url}" target="_blank" rel="noopener"><span>ATTRIBUTED INTERVIEW</span><strong>Demo and release comments</strong><p>Gamescom build and later public-demo plan.</p><b>OPEN SOURCE ↗</b></a>
        <a href="/editorial-policy/"><span>METHODOLOGY</span><strong>Editorial and corrections policy</strong><p>How confirmed, attributed, observed and unknown claims are labelled.</p><b>READ POLICY ↗</b></a>
      </div>
    </section>`;
}

function resourceCards(locale) {
  const data = SEO[locale] || SEO.en;
  if (locale === "en") {
    const groups = [
      ["PLAN YOUR FLIGHT", ["release-date", "demo", "platforms", "system-requirements"], "page"],
      ["BUILD THE CREW", ["multiplayer", "how-many-players", "characters", "gameplay"], "page"],
      ["FOLLOW THE GAME", ["trailer", "news", "wiki"], "page"],
      ["PLAYER TOOLS", ["status-tracker", "countdown", "crew-check", "can-i-run-it", "system-compare", "role-quiz"], "tool"],
      ["VERIFIED INTELLIGENCE", ["price", "download", "steam", "solo", "crossplay", "languages", "developer", "confirmed-features"], "authority"]
    ];
    const columns = groups.map(([heading, slugs, kind]) => `<div class="directory-group"><strong>${heading}</strong>${slugs.map((slug) => {
      const target = `${kind}:${slug}`;
      const label = LINK_TARGETS[target]?.[0] || slug;
      return `<a data-context-link="true" href="${targetPath(target, "en")}"><span>${esc(label)}</span><b>↗</b></a>`;
    }).join("")}</div>`).join("");
    return `<section class="section resource-hub compact-directory"><div class="section-head split"><div><p class="kicker">COMPLETE FLIGHT DIRECTORY</p><h2>Every answer has one clear destination.</h2></div><p>Browse by task instead of scrolling through duplicated cards. Core guides, player tools and evidence pages remain within two clicks of the homepage.</p></div><div class="directory-grid">${columns}</div></section>`;
  }
  const guides = PAGE_SLUGS.map((slug) => {
    const item = data.pages[slug];
    return `<a class="resource-card reveal" href="${localizedPath(locale, slug)}"><span>GUIDE</span><h3>${esc(item.name)}</h3><p>${esc(item.answer)}</p><b>${esc(data.ui.read)} ↗</b></a>`;
  }).join("");
  const tools = TOOL_SLUGS.map((slug) => {
    const item = data.tools[slug];
    return `<a class="resource-card tool-card reveal" href="${localizedPath(locale, `tools/${slug}`)}"><span>TOOL</span><h3>${esc(item[2])}</h3><p>${esc(item[1])}</p><b>${esc(data.ui.tool)} ↗</b></a>`;
  }).join("");
  const authority = locale === "en" ? AUTHORITY_SLUGS.map((slug) => {
    const item = AUTHORITY_CONTENT[slug];
    return `<a class="resource-card authority-card reveal" href="/${slug}/"><span>INTELLIGENCE</span><h3>${esc(item.name)}</h3><p>${esc(item.answer)}</p><b>OPEN BRIEFING ↗</b></a>`;
  }).join("") : "";
  return `<section class="section resource-hub"><div class="section-head"><p class="kicker">SEARCH INTENT ARCHITECTURE</p><h2>${esc(data.ui.related)}</h2><p>${esc(data.ui.sourceNote)}</p></div><div class="resource-grid">${guides}${authority}${tools}</div></section>`;
}

function page(locale) {
  const t = copy[locale] || copy.en;
  const lang = languages[locale];
  const statusCards = t.cards.map(([k, v, note], index) => `<article class="status-card reveal"><span>0${index + 1}</span><p>${esc(k)}</p><strong>${esc(v)}</strong><small>${esc(note)}</small></article>`).join("");
  const questions = t.questions.map(([q, a], index) => `<details class="question reveal"${index === 0 ? " open" : ""}><summary><b>0${index + 1}</b>${esc(q)}<i>+</i></summary><p>${esc(a)}</p></details>`).join("");
  const evidence = t.evidence.map((item) => `<li><i></i>${esc(item)}</li>`).join("");
  const features = t.features.map(([n, title, body]) => `<article class="feature reveal"><span>${n}</span><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join("");
  const timeline = t.timeline.map(([state, source, body]) => `<article class="timeline-item reveal"><span>${esc(state)}</span><h3>${esc(source)}</h3><p>${esc(body)}</p></article>`).join("");
  const langMenu = Object.entries(languages).map(([code, value]) => `<a href="${localizedPath(code)}" ${code === locale ? 'aria-current="page"' : ""}>${esc(value.name)}</a>`).join("");
  const options = (items) => items.map((item, index) => `<option value="${index}">${esc(item)}</option>`).join("");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoGame",
        name: "Dear Passengers",
        url: localizedUrl(locale),
        image: [HERO, CAPSULE],
        description: t.description,
        gamePlatform: "Windows PC",
        applicationCategory: "Game",
        operatingSystem: "Windows 10 64-bit",
        datePublished: "2026",
        author: { "@type": "Organization", name: "FLEXUS" },
        publisher: { "@type": "Organization", name: "FLEXUS" }
      },
      {
        "@type": "FAQPage",
        mainEntity: t.questions.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
      },
      {
        "@type": "WebSite",
        name: "Dear Passengers Crew",
        url: SITE,
        inLanguage: locale
      },
      {
        "@type": "Organization",
        name: "Dear Passengers Crew",
        url: SITE,
        logo: CAPSULE,
        sameAs: [STEAM, SOURCES.trailer.url]
      }
    ]
  };

  return `<!doctype html>
<html lang="${locale}" dir="${lang.dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(t.title)}</title>
  <meta name="description" content="${esc(t.description)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta name="theme-color" content="#06101a">
  <link rel="canonical" href="${localizedUrl(locale)}">
  ${iconLinks()}
  ${alternateLinks()}
  <link rel="alternate" hreflang="x-default" href="${SITE}/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(t.title)}">
  <meta property="og:description" content="${esc(t.description)}">
  <meta property="og:url" content="${localizedUrl(locale)}">
  <meta property="og:image" content="${HERO}">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  <style>${styles()}</style>
</head>
<body>
  <div class="ticker" aria-hidden="true"><div>${[...t.ticker, ...t.ticker, ...t.ticker].map((x) => `<span>${esc(x)}</span><b>✦</b>`).join("")}</div></div>
  <header class="header">
    <a class="brand" href="${localizedPath(locale)}"><span class="brand-mark"><img src="${CAPSULE}" alt="" aria-hidden="true"></span><b>DEAR PASSENGERS<small>INDEPENDENT FLIGHT GUIDE</small></b></a>
    <button class="menu-button" aria-label="Menu">MENU</button>
    <nav>${locale === "en"
      ? '<a href="/release-date/">Release</a><a href="/demo/">Demo</a><a href="/multiplayer/">Multiplayer</a><a href="/gameplay/">Gameplay</a><a href="/wiki/">Wiki</a>'
      : [["release-date", t.nav[0]], ["demo", t.nav[1]], ["gameplay", t.nav[2]], ["multiplayer", t.nav[3]]].map(([slug, item]) => `<a href="${localizedPath(locale, slug)}">${esc(item)}</a>`).join("")}</nav>
    <div class="language"><button>${esc(lang.label)}⌄</button><div>${langMenu}</div></div>
  </header>

  <main>
    <section class="hero">
      <div class="hero-bg"></div><div class="hero-grid"></div>
      <div class="floating-baggage" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="hero-copy">
        <p class="eyebrow"><i></i>${esc(t.eyebrow)}</p>
        <h1><span>DEAR</span> <span class="hero-title-main">PASSENGERS</span></h1>
        ${locale === "en" ? '<p class="hero-shout"><span>FLIGHT BRIEFING 2026</span><strong>THE COMPLETE PLAYER CREW GUIDE</strong></p>' : ""}
        <p class="lead">${esc(t.intro)}</p>
        <div class="actions"><a class="primary" href="#status">${esc(t.cta1)} <b>↓</b></a><a class="secondary" href="#crew">${esc(t.cta2)} <b>↗</b></a></div>
      </div>
      <a class="capsule" href="${STEAM}" rel="noopener" target="_blank"><img src="${CAPSULE}" alt="Dear Passengers official Steam artwork"><span>OFFICIAL STEAM APP · 4534960</span></a>
      <div class="hero-facts"><div><small>RELEASE</small><b>2026</b><i></i></div><div><small>PUBLIC DEMO</small><b>${esc(t.cards[2][1])}</b><i class="amber"></i></div><div><small>MAX PLAYERS</small><b>${esc(t.cards[3][1])}</b><i class="muted"></i></div></div>
      <small class="media-credit">OFFICIAL FLEXUS GAME MEDIA · © FLEXUS</small>
    </section>

    ${homepageEditorial(locale)}

    <section id="status" class="section status">
      <div class="section-head"><p class="kicker">LIVE STATUS · ${esc(t.last)}</p><h2>${esc(t.statusTitle)}</h2><p>${esc(t.statusIntro)}</p></div>
      <div class="status-grid">${statusCards}</div>
      <a class="source-link" href="${STEAM}" target="_blank" rel="noopener">SOURCE · OFFICIAL STEAM PAGE ↗</a>
    </section>

    <section id="questions" class="section questions">
      <div class="section-head split"><div><p class="kicker">SEARCH INTENT · ANSWERED</p><h2>${esc(t.questionsTitle)}</h2></div><p>${esc(t.questionsIntro)}</p></div>
      <div class="question-list">${questions}</div>
    </section>

    <section class="media section">
      <div class="media-grid">
        <div class="video reveal"><iframe src="${TRAILER}" title="Dear Passengers official trailer" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="media-copy"><p class="kicker">${esc(t.trailerEyebrow)}</p><h2>${esc(t.trailerTitle)}</h2><p>${esc(t.trailerText)}</p><ul>${evidence}</ul></div>
      </div>
    </section>

    <section id="gameplay" class="section gameplay">
      <div class="section-head"><p class="kicker">THE FLIGHT LOOP</p><h2>${esc(t.playTitle)}</h2><p>${esc(t.playIntro)}</p></div>
      <div class="game-shot reveal"><img src="${HERO}" alt="Official Dear Passengers cabin gameplay screenshot"><div><span>OFFICIAL GAMEPLAY</span><b>PASSENGERS<br>UNDER PRESSURE</b></div></div>
      <div class="features">${features}</div>
    </section>

    ${homepageDepth(locale)}

    <section id="crew" class="section crew">
      <div class="crew-layout">
        <div><p class="kicker">CREW COMPATIBILITY</p><h2>${esc(t.checkerTitle)}</h2><p>${esc(t.checkerIntro)}</p></div>
        <form class="crew-form" id="crew-form">
          <label>${esc(t.fields[0])}<select id="platform">${options(t.platform)}</select></label>
          <label>${esc(t.fields[1])}<select id="mode">${options(t.mode)}</select></label>
          <label>${esc(t.fields[2])}<select id="size">${[1,2,3,4,5,6].map((n) => `<option${n===2?" selected":""}>${n}</option>`).join("")}</select></label>
          <button type="submit">${esc(t.check)} <b>↗</b></button>
          <div class="result" id="result" aria-live="polite"></div>
        </form>
      </div>
    </section>

    <section class="section evidence">
      <div class="section-head"><p class="kicker">VERIFICATION LAYERS</p><h2>${esc(t.timelineTitle)}</h2></div>
      <div class="timeline">${timeline}</div>
    </section>

    ${resourceCards(locale)}

    <section class="final">
      <img src="${TRAILER_ART}" alt="Dear Passengers official trailer artwork">
      <div><p class="kicker">JOIN THE CREW</p><h2>${esc(t.finalTitle)}</h2><p>${esc(t.finalText)}</p><a class="primary" href="${STEAM}" target="_blank" rel="noopener">${esc(t.steam)} <b>↗</b></a></div>
    </section>
  </main>

  ${pageFooter(locale)}
  <script>
    const results=${JSON.stringify(t.results)};
    const form=document.querySelector('#crew-form'),result=document.querySelector('#result');
    form.addEventListener('submit',event=>{
      event.preventDefault();
      const platform=document.querySelector('#platform').value;
      const mode=document.querySelector('#mode').value;
      const size=Number(document.querySelector('#size').value);
      const key=platform!=='0'||mode==='2'?'waiting':mode==='0'&&size>1?'partial':'ready';
      result.className='result show '+key;
      result.innerHTML='<span><i></i>'+results[key][0]+'</span><p>'+results[key][1]+'</p>';
    });
    document.querySelector('.menu-button').addEventListener('click',()=>document.querySelector('.header nav').classList.toggle('open'));
    document.querySelectorAll('details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('details').forEach(other=>{if(other!==item)other.open=false})}));
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('seen')),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  </script>
</body>
</html>`;
}

const toolLabels = {
  en: {
    platform:"Platform",mode:"Mode",size:"Crew size",check:"Check now",os:"Operating system",ram:"Memory",
    gpu:"Graphics level",dx:"DirectX",storage:"Free storage",run:"Run compatibility check",
    minimum:"Official minimum",target:"Practical target",component:"Component",result:"Result",
    preference:"Where do you want to work?",pressure:"How do you react under pressure?",risk:"How do you treat risky cargo?",
    quiz:"Find my role",days:"days remain in the official 2026 window",noDate:"No exact release date is announced. This is a window tracker, not a fake countdown.",
    pass:"MEETS THE PUBLISHED MINIMUM",partial:"NEEDS A CLOSER CHECK",fail:"BELOW THE PUBLISHED MINIMUM",
    crewPartial:"ONLINE CO-OP CONFIRMED — MAXIMUM CREW SIZE UNKNOWN",crewReady:"THIS MODE IS OFFICIALLY SUPPORTED",crewWait:"THIS SETUP IS NOT YET CONFIRMED",
    roles:["Pilot","Cabin Lead","Cargo Handler","Crisis Fixer"],
    roleText:["You stay focused on direction, timing and control.","You read people quickly and keep service moving.","You accept calculated risk and protect the valuable load.","You move toward the loudest problem before it spreads."]
  },
  "zh-cn": {
    platform:"平台",mode:"模式",size:"队伍人数",check:"开始检测",os:"操作系统",ram:"内存",
    gpu:"显卡水平",dx:"DirectX",storage:"可用空间",run:"检测设备兼容性",
    minimum:"官方最低配置",target:"实用目标配置",component:"项目",result:"检测结果",
    preference:"你更想在哪工作？",pressure:"遇到压力时怎么处理？",risk:"你如何看待高风险货物？",
    quiz:"匹配我的岗位",days:"天：官方2026发售窗口剩余时间",noDate:"官方没有公布具体日期。这是发售窗口追踪，不是假倒计时。",
    pass:"达到官方最低配置",partial:"需要进一步核对",fail:"低于官方最低配置",
    crewPartial:"已确认在线合作——最大人数未知",crewReady:"该模式已得到官方支持",crewWait:"该组合尚未获得官方确认",
    roles:["飞行员","机舱主管","货物管理员","危机处理员"],
    roleText:["你擅长掌握方向、节奏和控制。","你能快速判断乘客需求并维持服务。","你愿意承担可控风险并保护高价值货物。","你会主动冲向最严重的问题，阻止事故扩大。"]
  },
  ja: {
    platform:"機種",mode:"モード",size:"人数",check:"チェック",os:"OS",ram:"メモリ",gpu:"GPUレベル",dx:"DirectX",storage:"空き容量",run:"互換性を確認",
    minimum:"公式最低",target:"実用目標",component:"項目",result:"結果",preference:"働きたい場所",pressure:"危機への反応",risk:"危険な貨物への姿勢",quiz:"役割を診断",
    days:"日：公式2026年ウィンドウの残り",noDate:"正確な発売日は未発表です。これは発売期間の表示です。",pass:"最低要件を満たす",partial:"詳細確認が必要",fail:"最低要件未満",
    crewPartial:"オンライン協力確認済み・最大人数不明",crewReady:"公式対応",crewWait:"未確認の構成",roles:["パイロット","客室リーダー","貨物担当","危機対応"],roleText:["方向と制御に集中できます。","人を読みサービスを維持します。","計算したリスクで貨物を守ります。","最大の問題へ先に動きます。"]
  },
  ar: {
    platform:"المنصة",mode:"النمط",size:"حجم الطاقم",check:"افحص",os:"نظام التشغيل",ram:"الذاكرة",gpu:"مستوى الرسوم",dx:"DirectX",storage:"المساحة",run:"فحص التوافق",
    minimum:"الحد الأدنى الرسمي",target:"هدف عملي",component:"المكوّن",result:"النتيجة",preference:"أين تريد العمل؟",pressure:"كيف تتصرف تحت الضغط؟",risk:"كيف تتعامل مع الشحنات الخطرة؟",quiz:"اعثر على دوري",
    days:"يوم متبقٍ في نافذة 2026",noDate:"لا يوجد تاريخ دقيق. هذا متتبع للنافذة وليس عداداً مزيفاً.",pass:"يلبي الحد الأدنى",partial:"يحتاج إلى تحقق",fail:"أقل من الحد الأدنى",
    crewPartial:"التعاون مؤكد والحد الأقصى مجهول",crewReady:"النمط مدعوم رسمياً",crewWait:"الإعداد غير مؤكد",roles:["الطيار","قائد المقصورة","مسؤول الشحن","معالج الأزمات"],roleText:["تركز على الاتجاه والتحكم.","تفهم الناس وتحافظ على الخدمة.","تقبل المخاطرة المحسوبة وتحمي الحمولة.","تتجه إلى أكبر مشكلة قبل انتشارها."]
  },
  tr: {
    platform:"Platform",mode:"Mod",size:"Ekip",check:"Kontrol et",os:"İşletim sistemi",ram:"Bellek",gpu:"Grafik seviyesi",dx:"DirectX",storage:"Boş alan",run:"Uyumluluğu kontrol et",
    minimum:"Resmi minimum",target:"Pratik hedef",component:"Bileşen",result:"Sonuç",preference:"Nerede çalışmak istersin?",pressure:"Baskıda ne yaparsın?",risk:"Riskli kargoya yaklaşımın?",quiz:"Rolümü bul",
    days:"gün: resmi 2026 aralığında kalan",noDate:"Kesin tarih açıklanmadı. Bu bir aralık takipçisidir.",pass:"MİNİMUMU KARŞILIYOR",partial:"DAHA YAKIN KONTROL GEREKİR",fail:"MİNİMUMUN ALTINDA",
    crewPartial:"CO-OP ONAYLI — MAKSİMUM EKİP BİLİNMİYOR",crewReady:"RESMİ OLARAK DESTEKLENİYOR",crewWait:"BU KURULUM ONAYLANMADI",roles:["Pilot","Kabin Lideri","Kargo Sorumlusu","Kriz Uzmanı"],roleText:["Yön ve kontrole odaklanırsın.","İnsanları okuyup servisi sürdürürsün.","Hesaplı riskle yükü korursun.","Sorun büyümeden ona doğru gidersin."]
  },
  uk: {
    platform:"Платформа",mode:"Режим",size:"Команда",check:"Перевірити",os:"Операційна система",ram:"Пам’ять",gpu:"Рівень графіки",dx:"DirectX",storage:"Вільне місце",run:"Перевірити сумісність",
    minimum:"Офіційний мінімум",target:"Практична ціль",component:"Компонент",result:"Результат",preference:"Де хочете працювати?",pressure:"Реакція на тиск",risk:"Ставлення до ризикового вантажу",quiz:"Знайти роль",
    days:"днів у вікні 2026",noDate:"Точної дати немає. Це трекер вікна, а не вигаданий відлік.",pass:"ВІДПОВІДАЄ МІНІМУМУ",partial:"ПОТРІБНА ПЕРЕВІРКА",fail:"НИЖЧЕ МІНІМУМУ",
    crewPartial:"КООП ПІДТВЕРДЖЕНО — МАКСИМУМ НЕВІДОМИЙ",crewReady:"РЕЖИМ ПІДТРИМУЄТЬСЯ",crewWait:"КОНФІГУРАЦІЮ НЕ ПІДТВЕРДЖЕНО",roles:["Пілот","Керівник салону","Вантажник","Кризовий фахівець"],roleText:["Ви тримаєте напрям і контроль.","Ви розумієте людей і підтримуєте сервіс.","Ви приймаєте зважений ризик.","Ви йдете до найбільшої проблеми першими."]
  }
};

function pageHeader(locale, currentPath = "") {
  const data = SEO[locale] || SEO.en;
  const lang = languages[locale];
  const languageMenu = Object.entries(languages).map(([code, value]) => `<a href="${localizedPath(code, currentPath)}" ${code === locale ? 'aria-current="page"' : ""}>${esc(value.name)}</a>`).join("");
  const nav = locale === "en"
    ? `<a href="/release-date/">Release</a><a href="/demo/">Demo</a><a href="/news/">News</a><a href="/wiki/">Wiki</a><a href="/media/">Media</a>`
    : `<a href="${localizedPath(locale, "release-date")}">${esc(data.pages["release-date"].name)}</a><a href="${localizedPath(locale, "demo")}">${esc(data.pages.demo.name)}</a><a href="${localizedPath(locale, "multiplayer")}">${esc(data.pages.multiplayer.name)}</a><a href="${localizedPath(locale, "system-requirements")}">${esc(data.pages["system-requirements"].name)}</a>`;
  return `<div class="ticker" aria-hidden="true"><div>${[...copy[locale].ticker,...copy[locale].ticker,...copy[locale].ticker].map((x)=>`<span>${esc(x)}</span><b>✦</b>`).join("")}</div></div>
  <header class="header inner-header">
    <a class="brand" href="${localizedPath(locale)}"><span class="brand-mark"><img src="${CAPSULE}" alt="" aria-hidden="true"></span><b>DEAR PASSENGERS<small>INDEPENDENT FLIGHT GUIDE</small></b></a>
    <button class="menu-button" aria-label="Menu">MENU</button>
    <nav>${nav}</nav>
    <div class="language"><button>${esc(lang.label)}⌄</button><div>${languageMenu}</div></div>
  </header>`;
}

function pageFooter(locale) {
  const data = SEO[locale] || SEO.en;
  const core = [
    ["release-date", data.pages["release-date"].name],
    ["demo", data.pages.demo.name],
    ["multiplayer", data.pages.multiplayer.name],
    ["gameplay", data.pages.gameplay.name],
    ["system-requirements", data.pages["system-requirements"].name],
    ["wiki", data.pages.wiki.name]
  ].map(([slug, label]) => `<a data-sitewide-link="true" href="${localizedPath(locale, slug)}">${esc(label)}</a>`).join("");
  const questions = [
    ["how-many-players", data.pages["how-many-players"].name],
    ["platforms", data.pages.platforms.name],
    ["characters", data.pages.characters.name],
    ["trailer", data.pages.trailer.name],
    ["news", data.pages.news.name]
  ].map(([slug, label]) => `<a data-sitewide-link="true" href="${localizedPath(locale, slug)}">${esc(label)}</a>`).join("");
  const tools = ["can-i-run-it", "crew-check", "countdown", "status-tracker"].map((slug) =>
    `<a data-sitewide-link="true" href="${localizedPath(locale, `tools/${slug}`)}">${esc(data.tools[slug][2])}</a>`
  ).join("");
  const intelligence = locale === "en" ? [
    ["/price/", "Price status"],
    ["/download/", "Safe download"],
    ["/languages/", "Language support"],
    ["/developer/", "FLEXUS profile"],
    ["/media/", "Official media"],
    ["/about/", "About this guide"],
    ["/editorial-policy/", "Editorial policy"],
    ["/corrections/", "Corrections"]
  ].map(([url, label]) => `<a data-sitewide-link="true" href="${url}">${label}</a>`).join("") : "";
  return `<footer class="site-footer"><div class="footer-top"><div class="footer-intro"><a class="brand" href="${localizedPath(locale)}"><span class="brand-mark"><img src="${CAPSULE}" alt="" aria-hidden="true"></span><b>DEAR PASSENGERS<small>INDEPENDENT FLIGHT GUIDE</small></b></a><p>${esc(copy[locale].footer)}</p><p>${esc(data.ui.updated)} · ${LAST_CHECKED}</p></div><nav aria-label="Game guides"><strong>FLIGHT GUIDE</strong>${core}</nav><nav aria-label="Player questions"><strong>PLAYER QUESTIONS</strong>${questions}</nav><nav aria-label="Player tools"><strong>TOOLS</strong>${tools}</nav>${locale === "en" ? `<nav aria-label="Editorial intelligence"><strong>INTELLIGENCE</strong>${intelligence}</nav>` : ""}</div><div class="footer-bottom"><span>APP ID · 4534960</span><a href="${STEAM}" target="_blank" rel="noopener">OFFICIAL STEAM PAGE ↗</a><a href="/sitemap.xml">133-URL KNOWLEDGE GRAPH</a></div></footer>`;
}

function relatedGrid(locale, currentSlug = "") {
  const data = SEO[locale] || SEO.en;
  const pages = PAGE_SLUGS.filter((slug)=>slug!==currentSlug).slice(0,6).map((slug)=>`<a class="mini-link" href="${localizedPath(locale, slug)}"><span>GUIDE</span><b>${esc(data.pages[slug].name)}</b><i>↗</i></a>`).join("");
  const tools = TOOL_SLUGS.slice(0,3).map((slug)=>`<a class="mini-link tool-link" href="${localizedPath(locale, `tools/${slug}`)}"><span>TOOL</span><b>${esc(data.tools[slug][2])}</b><i>↗</i></a>`).join("");
  return `<div class="mini-grid">${pages}${tools}</div>`;
}

function updateLog(locale) {
  const data = SEO[locale] || SEO.en;
  return `<div class="update-log">${UPDATE_LOG.map((item)=>`<article><time>${item.date}</time><span>${esc(item.status)}</span><h3>${esc(item.title)}</h3><p>${esc(item.detail)}</p></article>`).join("")}<p class="source-note">${esc(data.ui.sourceNote)}</p></div>`;
}

function clusterHub(slug) {
  if (slug === "news") {
    return `<section class="section deep-index"><div class="section-head"><p class="kicker">VERIFIED DISPATCH ARCHIVE</p><h2>Every material update, linked to its source.</h2><p>Wishlist milestones, demo plans and store changes are recorded as dated reports—not silently folded into evergreen copy.</p></div><div class="authority-grid">${NEWS_SLUGS.map((key)=>{
      const item = NEWS_CONTENT[key];
      return `<a class="authority-tile" href="/news/${key}/"><time>${item.date}</time><span>VERIFIED REPORT</span><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><b>READ REPORT ↗</b></a>`;
    }).join("")}</div></section>`;
  }
  if (slug === "wiki") {
    return `<section class="section deep-index"><div class="section-head"><p class="kicker">COMMUNITY FIELD MANUAL</p><h2>Systems first. Speculation clearly marked.</h2><p>The wiki organizes cockpit, cabin, passenger, cargo and hazard topics without inventing classes, items or rules from isolated trailer frames.</p></div><div class="authority-grid">${WIKI_SLUGS.map((key)=>{
      const item = WIKI_CONTENT[key];
      return `<a class="authority-tile wiki-tile" href="/wiki/${key}/"><span>WIKI ENTRY</span><h3>${esc(item.name)}</h3><p>${esc(item.answer)}</p><b>OPEN ENTRY ↗</b></a>`;
    }).join("")}</div></section>`;
  }
  return "";
}

function intentPage(locale, slug) {
  const data = SEO[locale] || SEO.en;
  const item = data.pages[slug];
  const lang = languages[locale];
  const depth = locale === "en" ? INTENT_DEPTH[slug] : null;
  const depthSections = depth ? [...depth.sections, ...(INTENT_EXPANSION[slug] || [])] : [];
  const fallbackMedia = PAGE_SLUGS.indexOf(slug) % OFFICIAL_MEDIA.length;
  const depthMarkup = depth ? `<section class="intent-depth"><p class="kicker">DEEP BRIEFING</p>${depthSections.map((entry, index) => {
      const anchor = `briefing-${index + 1}`;
      return `<div class="depth-block" id="${anchor}"><span class="section-number">${String(index + 2).padStart(2, "0")}</span><h2>${esc(entry.heading)}</h2>${entry.paragraphs.map((text) => `<p class="long-copy">${esc(text)}</p>`).join("")}${entry.bullets?.length ? `<ul class="authority-bullets">${entry.bullets.map((text) => `<li>${esc(text)}</li>`).join("")}</ul>` : ""}${index === 0 ? officialFigure(depth.media[0], "Official scene evidence") : ""}${index === 1 ? officialFigure(depth.media[1], "Second official scene") : ""}</div>`;
    }).join("")}</section>` : `<section class="intent-depth localized-depth"><p class="kicker">04 · OFFICIAL MEDIA</p><h2>${esc(item.name)}</h2>${officialFigure(fallbackMedia, item.name)}</section>`;
  const briefingToc = depth ? `<nav class="article-toc" aria-label="In this briefing"><strong>IN THIS BRIEFING</strong><a href="#current-answer">Current answer</a>${depthSections.map((entry, index) => `<a href="#briefing-${index + 1}">${esc(entry.heading)}</a>`).join("")}<a href="#frequently-asked">FAQ</a></nav>` : "";
  const sourceKeys = slug === "demo" ? ["steam", "devua", "community"] : slug === "news" ? ["steam", "steam15m", "devua"] : ["steam", "trailer"];
  const sourceCards = sourceKeys.map((key) => {
    const source = SOURCES[key];
    return `<a href="${source.url}" target="_blank" rel="noopener"><span>${esc(source.type)}</span><strong>${esc(source.name)}</strong><b>↗</b></a>`;
  }).join("");
  const currentPath = slug;
  const canonical = localizedUrl(locale, slug);
  const confirmed = item.confirmed.map((x)=>`<li><i class="ok"></i>${esc(x)}</li>`).join("");
  const unknown = item.unknown.map((x)=>`<li><i class="unknown"></i>${esc(x)}</li>`).join("");
  const faqs = item.faq.map(([q,a],i)=>`<details class="question"${i===0?" open":""}><summary><b>0${i+1}</b>${esc(q)}<i>+</i></summary><p>${esc(a)}</p></details>`).join("");
  const schema = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"Article",headline:item.title,description:item.meta,dateModified:LAST_CHECKED,mainEntityOfPage:canonical,image:HERO,author:{"@type":"Organization",name:"Dear Passengers Crew"}},
      {"@type":"BreadcrumbList",itemListElement:[
        {"@type":"ListItem",position:1,name:data.ui.home,item:localizedUrl(locale)},
        {"@type":"ListItem",position:2,name:item.name,item:canonical}
      ]},
      {"@type":"FAQPage",mainEntity:item.faq.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}
    ]
  };
  return `<!doctype html><html lang="${locale}" dir="${lang.dir}"><head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(item.title)}</title><meta name="description" content="${esc(item.meta)}">
  <meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#06101a">
  <link rel="canonical" href="${canonical}">${iconLinks()}${alternateLinks(slug)}<link rel="alternate" hreflang="x-default" href="${localizedUrl("en", slug)}">
  <meta property="og:type" content="article"><meta property="og:title" content="${esc(item.title)}"><meta property="og:description" content="${esc(item.meta)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${HERO}">
  <script type="application/ld+json">${JSON.stringify(schema)}</script><style>${styles()}</style></head><body>
  ${pageHeader(locale,currentPath)}
  <main class="inner-main">
    <section class="article-hero"><div class="article-hero-bg"></div><div class="breadcrumbs"><a href="${localizedPath(locale)}">${esc(data.ui.home)}</a><span>/</span><span>${esc(item.name)}</span></div><p class="eyebrow"><i></i>${esc(data.ui.breadcrumb)}</p><h1>${esc(item.title)}</h1><p>${esc(item.meta)}</p><div class="article-meta"><span>PUBLISHED · JULY 2026</span><span>${esc(data.ui.updated)} · ${LAST_CHECKED}</span><span>STATUS · VERIFIED</span></div></section>
    ${briefingToc}
    <section class="article-body">
      <article>
        <section class="current-answer" id="current-answer"><p class="kicker">01 · CURRENT ANSWER</p><h2>${esc(item.answer)}</h2><p class="long-copy">${esc(item.why)}</p><p class="long-copy">${esc(data.ui.sourceNote)}</p><div class="answer-status"><span>VERIFICATION STATUS</span><strong>Confirmed facts separated from unknowns</strong><a href="/editorial-policy/">Read the methodology ↗</a></div></section>
        ${depthMarkup}
        <section class="fact-comparison"><p class="kicker">EVIDENCE CHECK</p><h2>What is confirmed—and what is not.</h2><div class="fact-columns"><div><h3>${esc(data.ui.confirmed)}</h3><ul class="evidence-list">${confirmed}</ul></div><div><h3>${esc(data.ui.unknown)}</h3><ul class="evidence-list">${unknown}</ul></div></div></section>
        ${semanticLinks(locale, `page:${slug}`, data.ui.related)}
        <section id="frequently-asked"><p class="kicker">FAQ</p><h2>${esc(data.ui.faq)}</h2><div class="question-list">${faqs}</div></section>
      </article>
      <aside><div class="aside-card"><span>${esc(data.ui.current)}</span><strong>${esc(item.answer)}</strong></div><div class="aside-card sources-card source-ledger"><span>${esc(data.ui.sources)}</span>${sourceCards}</div><div class="aside-card"><span>UPDATE STANDARD</span><p>When an official source changes, this page records the new answer and keeps the old state in its update history.</p></div></aside>
    </section>${locale === "en" ? clusterHub(slug) : ""}
    <section class="section compact-section"><div class="section-head"><p class="kicker">INTERNAL KNOWLEDGE GRAPH</p><h2>${esc(data.ui.related)}</h2></div>${relatedGrid(locale,slug)}</section>
    <section class="section compact-section log-section"><div class="section-head"><p class="kicker">SOURCE HISTORY</p><h2>${esc(data.ui.log)}</h2></div>${updateLog(locale)}</section>
  </main>${pageFooter(locale)}
  <script>document.querySelector('.menu-button').addEventListener('click',()=>document.querySelector('.header nav').classList.toggle('open'));document.querySelectorAll('details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('details').forEach(other=>{if(other!==item)other.open=false})}));</script>
  </body></html>`;
}

function deepPath(kind, slug) {
  if (kind === "wiki" || kind === "news") return `${kind}/${slug}`;
  return slug;
}

function deepCollection(kind) {
  if (kind === "authority") return AUTHORITY_CONTENT;
  if (kind === "wiki") return WIKI_CONTENT;
  if (kind === "news") return NEWS_CONTENT;
  return STATIC_CONTENT;
}

function deepRelated(kind, currentSlug) {
  const collection = deepCollection(kind);
  const local = Object.entries(collection).filter(([slug])=>slug!==currentSlug).slice(0,5).map(([slug,item])=>
    `<a class="mini-link" href="/${deepPath(kind,slug)}/"><span>${kind.toUpperCase()}</span><strong>${esc(item.name)}</strong><small>${esc(item.answer)}</small></a>`
  ).join("");
  const cross = [
    ["news","News archive","/news/"],
    ["wiki","Community wiki","/wiki/"],
    ["media","Official media archive","/media/"],
    ["status","Live status tracker","/tools/status-tracker/"]
  ].filter(([key])=>key!==kind).map(([key,label,url])=>
    `<a class="mini-link tool-link" href="${url}"><span>${key.toUpperCase()}</span><strong>${label}</strong><small>Open the connected source-backed resource.</small></a>`
  ).join("");
  return `<div class="mini-grid">${local}${cross}</div>`;
}

function deepContentPage(kind, slug) {
  const item = deepCollection(kind)[slug];
  const path = deepPath(kind, slug);
  const canonical = localizedUrl("en", path);
  const mediaIndex = [...slug].reduce((total, char) => total + char.charCodeAt(0), 0) % OFFICIAL_MEDIA.length;
  const sourceCards = item.sources.map((key)=>{
    const source = SOURCES[key];
    return `<a href="${source.url}" target="_blank" rel="noopener"><span>${esc(source.type)}</span><strong>${esc(source.name)}</strong><b>↗</b></a>`;
  }).join("");
  const sections = item.sections.map((section,index)=>{
    const bullets = section.bullets?.length ? `<ul class="authority-bullets">${section.bullets.map((text)=>`<li>${esc(text)}</li>`).join("")}</ul>` : "";
    return `<section><p class="kicker">${String(index+1).padStart(2,"0")} · ${kind === "news" ? "REPORT" : "BRIEFING"}</p><h2>${esc(section.heading)}</h2>${section.paragraphs.map((text)=>`<p class="long-copy">${esc(text)}</p>`).join("")}${bullets}${index === 0 ? officialFigure(mediaIndex, `${item.name} · official visual record`) : ""}</section>`;
  }).join("");
  const faqs = item.faq?.length ? `<section><p class="kicker">FAQ</p><h2>Passenger questions</h2><div class="question-list">${item.faq.map(([q,a],index)=>`<details class="question"${index===0?" open":""}><summary><b>${String(index+1).padStart(2,"0")}</b>${esc(q)}<i>+</i></summary><p>${esc(a)}</p></details>`).join("")}</div></section>` : "";
  const articleType = kind === "news" ? "NewsArticle" : "Article";
  const schema = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":articleType,headline:item.title,description:item.description,datePublished:item.date || LAST_CHECKED,dateModified:LAST_CHECKED,mainEntityOfPage:canonical,image:HERO,author:{"@type":"Organization",name:"Dear Passengers Crew"}},
      {"@type":"BreadcrumbList",itemListElement:[
        {"@type":"ListItem",position:1,name:"Home",item:`${SITE}/`},
        {"@type":"ListItem",position:2,name:kind,item:kind === "wiki" || kind === "news" ? `${SITE}/${kind}/` : canonical},
        {"@type":"ListItem",position:3,name:item.name,item:canonical}
      ]},
      ...(item.faq?.length ? [{"@type":"FAQPage",mainEntity:item.faq.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}] : [])
    ]
  };
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(item.title)}</title><meta name="description" content="${esc(item.description)}"><meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${canonical}">${iconLinks()}<link rel="alternate" hreflang="en" href="${canonical}"><link rel="alternate" hreflang="x-default" href="${canonical}">
  <meta property="og:type" content="${kind === "news" ? "article" : "website"}"><meta property="og:title" content="${esc(item.title)}"><meta property="og:description" content="${esc(item.description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${HERO}">
  <script type="application/ld+json">${JSON.stringify(schema)}</script><style>${styles()}</style></head><body>
  ${pageHeader("en","")}
  <main class="inner-main"><section class="article-hero authority-hero"><div class="article-hero-bg"></div><div class="breadcrumbs"><a href="/">Home</a><span>/</span>${kind === "wiki" || kind === "news" ? `<a href="/${kind}/">${kind}</a><span>/</span>` : ""}<span>${esc(item.name)}</span></div><p class="eyebrow"><i></i>${kind === "news" ? `VERIFIED DISPATCH · ${item.date}` : `${kind.toUpperCase()} INTELLIGENCE`}</p><h1>${esc(item.title)}</h1><p>${esc(item.description)}</p><div class="article-meta"><span>LAST VERIFIED · ${LAST_CHECKED}</span><span>PRIMARY SOURCES · ${item.sources.length}</span></div></section>
  <section class="answer-strip"><span>DIRECT ANSWER</span><strong>${esc(item.answer)}</strong></section>
  <section class="article-body authority-body"><article>${sections}${semanticLinks("en", `${kind}:${slug}`, "Follow the connected search intent.")}${faqs}</article><aside><div class="aside-card"><span>CURRENT ANSWER</span><strong>${esc(item.answer)}</strong></div><div class="aside-card sources-card source-ledger"><span>SOURCE LEDGER</span>${sourceCards}</div><div class="aside-card"><span>EDITORIAL LABELS</span><p>Confirmed · attributed · observed · interpreted · unknown</p><a class="source-link" href="/editorial-policy/">READ POLICY ↗</a></div></aside></section>
  <section class="section compact-section"><div class="section-head"><p class="kicker">INTERNAL KNOWLEDGE GRAPH</p><h2>Continue the investigation.</h2></div>${deepRelated(kind,slug)}</section></main>${pageFooter("en")}
  <script>document.querySelector('.menu-button').addEventListener('click',()=>document.querySelector('.header nav').classList.toggle('open'));document.querySelectorAll('details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('details').forEach(other=>{if(other!==item)other.open=false})}));</script></body></html>`;
}

function mediaPage() {
  const canonical = `${SITE}/media/`;
  const gallery = OFFICIAL_MEDIA.map(([name,url],index)=>`<figure class="media-tile"><a href="${url}" target="_blank" rel="noopener"><img src="${url}" alt="Official Dear Passengers screenshot: ${esc(name)}" loading="${index<2?"eager":"lazy"}"><span>OFFICIAL SCREENSHOT · ${String(index+1).padStart(2,"0")}</span><figcaption>${esc(name)}</figcaption></a></figure>`).join("");
  const schema = {"@context":"https://schema.org","@type":"CollectionPage",name:"Dear Passengers Official Media Archive",description:"Official screenshots and announcement trailer published by FLEXUS via Steam.",url:canonical,mainEntity:OFFICIAL_MEDIA.map(([name,url])=>({"@type":"ImageObject",name,contentUrl:url,creditText:"FLEXUS via Steam"}))};
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dear Passengers Official Screenshots and Trailer</title><meta name="description" content="Browse ten official Dear Passengers screenshots and the official announcement trailer with descriptive labels and source credit."><link rel="canonical" href="${canonical}">${iconLinks()}<link rel="alternate" hreflang="en" href="${canonical}"><link rel="alternate" hreflang="x-default" href="${canonical}"><meta name="robots" content="index,follow,max-image-preview:large"><script type="application/ld+json">${JSON.stringify(schema)}</script><style>${styles()}</style></head><body>${pageHeader("en","")}<main class="inner-main">
  <section class="article-hero authority-hero"><div class="article-hero-bg"></div><div class="breadcrumbs"><a href="/">Home</a><span>/</span><span>Media</span></div><p class="eyebrow"><i></i>OFFICIAL MEDIA ARCHIVE</p><h1>Dear Passengers screenshots & trailer</h1><p>Ten full-resolution Steam screenshots and the announcement trailer, organized for players researching cockpit, cabin, passengers, cargo and hazards.</p><div class="article-meta"><span>SOURCE · FLEXUS VIA STEAM</span><span>LAST VERIFIED · ${LAST_CHECKED}</span></div></section>
  <section class="section media-archive"><div class="media-grid authority-video"><div class="video"><iframe src="${TRAILER}" title="Dear Passengers official announcement trailer" loading="lazy" allowfullscreen></iframe></div><div class="media-copy"><p class="kicker">PRIMARY RECORDING</p><h2>Official announcement trailer</h2><p>Edited official footage establishes the game's cockpit-and-cabin fantasy. It should not be treated as a frame-by-frame promise of final controls or event frequency.</p><a class="primary" href="https://www.youtube.com/watch?v=hEsuA_rqTxk" target="_blank" rel="noopener">WATCH ON YOUTUBE ↗</a></div></div><div class="media-wall">${gallery}</div></section>
  <div class="section compact-section media-semantic">${semanticLinks("en", "media:media", "Read the evidence behind the footage.")}</div>
  <section class="section compact-section"><div class="section-head"><p class="kicker">READ THE FOOTAGE</p><h2>Connect images to verified context.</h2></div>${deepRelated("authority","confirmed-features")}</section></main>${pageFooter("en")}<script>document.querySelector('.menu-button').addEventListener('click',()=>document.querySelector('.header nav').classList.toggle('open'));</script></body></html>`;
}

function toolOptions(items) {
  return items.map(([value,label])=>`<option value="${value}">${esc(label)}</option>`).join("");
}

function toolMarkup(locale, slug) {
  const l = toolLabels[locale] || toolLabels.en;
  if (slug === "can-i-run-it") {
    return `<form class="interactive-tool" id="pc-tool">
      <label>${esc(l.os)}<select id="pc-os">${toolOptions([["pass","Windows 10/11 64-bit"],["fail","Older / 32-bit"],["unknown","Not sure"]])}</select></label>
      <label>${esc(l.ram)}<select id="pc-ram">${toolOptions([["fail","4 GB"],["pass","8 GB"],["pass","16 GB+"]])}</select></label>
      <label>${esc(l.gpu)}<select id="pc-gpu">${toolOptions([["fail","Below GTX 1060"],["pass","GTX 1060 / RX 6600 XT"],["pass","Above minimum"],["unknown","Not sure"]])}</select></label>
      <label>${esc(l.dx)}<select id="pc-dx">${toolOptions([["fail","DirectX 11"],["pass","DirectX 12"],["unknown","Not sure"]])}</select></label>
      <label>${esc(l.storage)}<select id="pc-storage">${toolOptions([["fail","Under 4 GB"],["pass","4 GB or more"]])}</select></label>
      <button type="submit">${esc(l.run)} <b>↗</b></button><div class="tool-result" id="tool-result"></div>
    </form>`;
  }
  if (slug === "crew-check") {
    return `<form class="interactive-tool three" id="crew-tool"><label>${esc(l.platform)}<select id="crew-platform">${toolOptions([["pc","Windows PC"],["other","PlayStation"],["other","Xbox"],["other","Switch"],["other","macOS / Linux"]])}</select></label><label>${esc(l.mode)}<select id="crew-mode">${toolOptions([["online","Online co-op"],["single","Single-player"],["local","Local split-screen"]])}</select></label><label>${esc(l.size)}<select id="crew-size">${[1,2,3,4,5,6].map(n=>`<option>${n}</option>`).join("")}</select></label><button type="submit">${esc(l.check)} <b>↗</b></button><div class="tool-result" id="tool-result"></div></form>`;
  }
  if (slug === "countdown") {
    return `<div class="countdown-tool"><strong id="window-days">—</strong><span>${esc(l.days)}</span><p>${esc(l.noDate)}</p><div class="window-line"><i></i><b>2026-01-01</b><b>2026-12-31</b></div></div>`;
  }
  if (slug === "system-compare") {
    return `<div class="compare-table"><div><b>${esc(l.component)}</b><b>${esc(l.minimum)}</b><b>${esc(l.target)}</b></div><div><span>OS</span><span>Windows 10 64-bit</span><span>Windows 11 64-bit</span></div><div><span>CPU</span><span>Core i5 @ 2.5 GHz</span><span>Modern 6-core CPU</span></div><div><span>RAM</span><span>8 GB</span><span>16 GB</span></div><div><span>GPU</span><span>GTX 1060 / RX 6600 XT</span><span>RTX 3060 / RX 6700+</span></div><div><span>DirectX</span><span>12</span><span>12</span></div><div><span>Storage</span><span>4 GB</span><span>8 GB free</span></div><p>* The practical target is our conservative planning suggestion, not an official recommended specification.</p></div>`;
  }
  if (slug === "status-tracker") {
    return `<div class="tracker-board"><article class="green"><span>CONFIRMED</span><strong>2026 · WINDOWS PC</strong><p>Single-player and online co-op.</p></article><article class="amber"><span>NOT AVAILABLE</span><strong>PUBLIC DEMO</strong><p>No official public download is listed.</p></article><article><span>UNKNOWN</span><strong>DATE · PRICE · MAX PLAYERS</strong><p>Waiting for a developer announcement.</p></article></div>${updateLog(locale)}`;
  }
  return `<form class="interactive-tool three" id="role-tool"><label>${esc(l.preference)}<select id="role-place">${toolOptions([["0","Cockpit"],["1","Passenger cabin"],["2","Cargo hold"],["3","Wherever the alarm is"]])}</select></label><label>${esc(l.pressure)}<select id="role-pressure">${toolOptions([["0","Stay on plan"],["1","Calm the people"],["2","Protect the objective"],["3","Fix the immediate threat"]])}</select></label><label>${esc(l.risk)}<select id="role-risk">${toolOptions([["0","Avoid it"],["1","Explain it"],["2","Price it"],["3","Contain it"]])}</select></label><button type="submit">${esc(l.quiz)} <b>↗</b></button><div class="tool-result" id="tool-result"></div></form>`;
}

function toolScript(locale, slug) {
  const l = toolLabels[locale] || toolLabels.en;
  if (slug === "countdown") return `const end=new Date('2026-12-31T23:59:59Z');const now=new Date();document.querySelector('#window-days').textContent=Math.max(0,Math.ceil((end-now)/86400000));`;
  if (slug === "system-compare" || slug === "status-tracker") return "";
  if (slug === "can-i-run-it") return `document.querySelector('#pc-tool').addEventListener('submit',e=>{e.preventDefault();const values=['pc-os','pc-ram','pc-gpu','pc-dx','pc-storage'].map(id=>document.querySelector('#'+id).value);const key=values.includes('fail')?'fail':values.includes('unknown')?'partial':'pass';const text=${JSON.stringify({pass:l.pass,partial:l.partial,fail:l.fail})}[key];document.querySelector('#tool-result').className='tool-result show '+key;document.querySelector('#tool-result').innerHTML='<span>'+text+'</span><p>Windows 10 64-bit · 8 GB RAM · GTX 1060 / RX 6600 XT · DirectX 12 · 4 GB</p>';});`;
  if (slug === "crew-check") return `document.querySelector('#crew-tool').addEventListener('submit',e=>{e.preventDefault();const p=document.querySelector('#crew-platform').value,m=document.querySelector('#crew-mode').value,s=Number(document.querySelector('#crew-size').value);const text=p!=='pc'||m==='local'?${JSON.stringify(l.crewWait)}:m==='online'&&s>1?${JSON.stringify(l.crewPartial)}:${JSON.stringify(l.crewReady)};document.querySelector('#tool-result').className='tool-result show';document.querySelector('#tool-result').innerHTML='<span>'+text+'</span>';});`;
  return `document.querySelector('#role-tool').addEventListener('submit',e=>{e.preventDefault();const scores=[0,0,0,0];['role-place','role-pressure','role-risk'].forEach(id=>scores[Number(document.querySelector('#'+id).value)]++);const winner=scores.indexOf(Math.max(...scores));const roles=${JSON.stringify(l.roles)},texts=${JSON.stringify(l.roleText)};document.querySelector('#tool-result').className='tool-result show role';document.querySelector('#tool-result').innerHTML='<span>'+roles[winner]+'</span><p>'+texts[winner]+'</p>';});`;
}

const TOOL_GUIDES = {
  "can-i-run-it": ["How the compatibility result is calculated", "The checker compares operating system, memory, graphics capability, DirectX and free storage with the minimum specifications currently published on Steam. It does not benchmark your computer or promise a resolution and frame rate. Laptop graphics, integrated GPUs and unknown hardware should receive a closer manual check.", "Recommended specifications have not been announced. A passing result means the selected hardware meets or exceeds the listed minimum on paper; public-demo testing will still be the best evidence of real performance."],
  "crew-check": ["What the crew checker can confirm", "Windows PC, single-player and online co-op are confirmed. The tool deliberately returns a partial result for larger online groups because FLEXUS has not published a maximum crew size. Console play, local split screen and crossplay remain unannounced.", "Use the result as a purchase-planning filter, not as a lobby simulator. The page will be updated when official player-count, matchmaking or platform documentation appears."],
  countdown: ["Why this is a release-window tracker", "Steam gives a 2026 release year without a month or day. The counter therefore measures the remaining official window instead of choosing an invented deadline. It cannot tell you how many days remain until launch.", "When FLEXUS publishes an exact date, this tool can switch to a real launch countdown while preserving the earlier year-only status in the update history."],
  "system-compare": ["Official minimum versus planning target", "The minimum column reproduces the published Steam specification. The practical-target column is conservative editorial guidance for players who prefer extra memory, storage headroom and a newer GPU; it is not an official recommended requirement.", "Before buying hardware, wait for a public build and compare real measurements at your intended resolution. Model names alone do not capture laptop power limits, cooling or driver behavior."],
  "status-tracker": ["One board for every material unknown", "The tracker keeps release timing, demo access, platforms, player count, price and requirements in a consistent confirmed, attributed or unknown state. Each status must link back to a first-party source or clearly identified interview.", "A material change should update the board, the relevant evergreen guide, the news archive and the verification date together. That prevents one page from repeating an obsolete answer."],
  "role-quiz": ["A preference quiz, not an official class selector", "The quiz maps working style to pilot, cabin, cargo or crisis-response responsibilities visible in official descriptions and footage. FLEXUS has not announced these as fixed character classes, skill trees or locked jobs.", "Use the result to start a crew conversation. Real role switching, solo assistance and progression rules will remain unknown until the developer publishes documentation or a public demo can be tested."]
};

function toolGuide(locale, slug) {
  const data = SEO[locale] || SEO.en;
  const guide = TOOL_GUIDES[slug];
  const mediaIndex = (TOOL_SLUGS.indexOf(slug) + 4) % OFFICIAL_MEDIA.length;
  if (locale !== "en") {
    return `<section class="section tool-guide"><div class="section-head"><p class="kicker">VERIFIED TOOL NOTES</p><h2>${esc(data.tools[slug][2])}</h2><p>${esc(data.ui.sourceNote)}</p></div>${officialFigure(mediaIndex, data.tools[slug][2])}</section>`;
  }
  return `<section class="section tool-guide"><div class="tool-guide-layout"><div><p class="kicker">HOW TO READ THE RESULT</p><h2>${esc(guide[0])}</h2><p>${esc(guide[1])}</p><p>${esc(guide[2])}</p><div class="tool-source-row"><a href="${STEAM}" target="_blank" rel="noopener">OFFICIAL STEAM REQUIREMENTS ↗</a><a href="/editorial-policy/">METHODOLOGY ↗</a></div></div>${officialFigure(mediaIndex, "Official gameplay context")}</div></section>`;
}

function toolPage(locale, slug) {
  const data = SEO[locale] || SEO.en;
  const lang = languages[locale];
  const tool = data.tools[slug];
  const canonical = localizedUrl(locale, `tools/${slug}`);
  const schema = {"@context":"https://schema.org","@type":"SoftwareApplication",name:tool[0],description:tool[1],applicationCategory:"GameApplication",operatingSystem:"Web",url:canonical};
  return `<!doctype html><html lang="${locale}" dir="${lang.dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(tool[0])}</title><meta name="description" content="${esc(tool[1])}"><meta name="robots" content="index,follow"><link rel="canonical" href="${canonical}">${iconLinks()}${alternateLinks(`tools/${slug}`)}<link rel="alternate" hreflang="x-default" href="${localizedUrl("en", `tools/${slug}`)}"><meta property="og:title" content="${esc(tool[0])}"><meta property="og:description" content="${esc(tool[1])}"><meta property="og:image" content="${HERO}"><script type="application/ld+json">${JSON.stringify(schema)}</script><style>${styles()}</style></head><body>
  ${pageHeader(locale,`tools/${slug}`)}<main class="inner-main tool-main"><section class="article-hero tool-hero"><div class="article-hero-bg"></div><div class="breadcrumbs"><a href="${localizedPath(locale)}">${esc(data.ui.home)}</a><span>/</span><span>Tools</span><span>/</span><span>${esc(tool[2])}</span></div><p class="eyebrow"><i></i>INTERACTIVE PLAYER TOOL</p><h1>${esc(tool[0])}</h1><p>${esc(tool[1])}</p><div class="article-meta"><span>${esc(data.ui.updated)} · ${LAST_CHECKED}</span><span>NO LOGIN · NO DATA STORED</span></div></section>
  <section class="tool-stage">${toolMarkup(locale,slug)}</section>
  ${toolGuide(locale,slug)}
  <div class="section compact-section tool-semantic">${semanticLinks(locale, `tool:${slug}`, data.ui.related)}</div>
  <section class="section compact-section"><div class="section-head"><p class="kicker">EXPLORE THE INTELLIGENCE HUB</p><h2>${esc(data.ui.related)}</h2><p>${esc(data.ui.sourceNote)}</p></div>${relatedGrid(locale)}</section></main>${pageFooter(locale)}
  <script>document.querySelector('.menu-button').addEventListener('click',()=>document.querySelector('.header nav').classList.toggle('open'));${toolScript(locale,slug)}</script></body></html>`;
}

function styles() {
  return `

*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#06101a;color:#f5f7fa;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow-x:hidden}a{color:inherit;text-decoration:none}button,select,input{font:inherit}img{display:block;max-width:100%}.ticker{height:31px;background:#ff9f0a;color:#06101a;overflow:hidden;font-size:9px;font-weight:900;letter-spacing:.2em}.ticker div{display:flex;align-items:center;gap:38px;width:max-content;height:100%;animation:marquee 24s linear infinite}.ticker span{white-space:nowrap}.ticker b{font-size:7px}@keyframes marquee{to{transform:translateX(-33.333%)}}.header{height:82px;display:grid;grid-template-columns:260px 1fr 120px;align-items:center;gap:24px;padding:0 clamp(24px,5vw,82px);position:absolute;top:31px;left:0;right:0;z-index:20;border-bottom:1px solid rgba(255,255,255,.12);background:linear-gradient(180deg,rgba(2,9,16,.82),rgba(2,9,16,.2));backdrop-filter:blur(8px)}.brand{display:flex;align-items:center;gap:12px}.brand>span{display:grid;place-items:center;width:40px;height:40px;border:1px solid rgba(255,255,255,.24);border-radius:50%;font-size:30px;line-height:1;color:#ff9f0a;font-weight:300;transform:rotate(45deg)}.brand>b{font-size:12px;letter-spacing:.08em}.brand small{display:block;color:#738092;font-size:7px;letter-spacing:.16em;margin-top:4px}.header nav{display:flex;justify-content:center;gap:32px}.header nav a{font-size:11px;color:#b5bec9;position:relative}.header nav a:after{content:"";position:absolute;left:0;right:100%;bottom:-10px;height:1px;background:#ff9f0a;transition:.25s}.header nav a:hover{color:white}.header nav a:hover:after{right:0}.language{position:relative;justify-self:end}.language>button{width:92px;height:38px;border:1px solid rgba(255,255,255,.22);background:rgba(4,13,22,.6);color:#fff;font-size:9px;font-weight:800;letter-spacing:.14em}.language>div{display:none;position:absolute;right:0;top:42px;width:160px;background:#07131f;border:1px solid #27333f;padding:7px}.language:hover>div,.language:focus-within>div{display:grid}.language a{padding:9px 11px;font-size:11px;color:#aeb7c2}.language a:hover,.language a[aria-current=page]{background:#ff9f0a;color:#07131f}.menu-button{display:none}.hero{min-height:880px;position:relative;display:flex;align-items:center;padding:160px clamp(24px,5.6vw,90px) 120px;isolation:isolate}.hero-bg{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(1,8,15,.98) 0%,rgba(2,10,18,.88) 30%,rgba(2,10,18,.25) 66%,rgba(2,10,18,.55) 100%),linear-gradient(0deg,#06101a 0%,transparent 38%),url("${HERO}");background-size:cover;background-position:center;z-index:-3}.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:80px 80px;mask-image:linear-gradient(to bottom,black,transparent 88%);z-index:-2}.hero-copy{width:min(820px,69vw);position:relative;z-index:2}.eyebrow,.kicker{font-size:9px;letter-spacing:.2em;font-weight:800;text-transform:uppercase;color:#93a0ad}.eyebrow{display:flex;align-items:center;gap:10px}.eyebrow i{width:8px;height:8px;background:#2ee6a6;border-radius:50%;box-shadow:0 0 14px #2ee6a6}.hero h1{font-size:clamp(76px,9.2vw,150px);line-height:.72;letter-spacing:-.075em;margin:32px 0 36px;text-transform:uppercase}.hero h1 span{display:block;font-size:.46em;line-height:1.08;letter-spacing:-.04em}.lead{max-width:640px;color:#aab5c0;font-size:17px;line-height:1.75}.actions{display:flex;gap:12px;margin-top:34px}.primary,.secondary{min-width:205px;height:56px;display:flex;justify-content:space-between;align-items:center;padding:0 20px;font-size:10px;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.primary{background:#ff9f0a;color:#07111b}.secondary{border:1px solid rgba(255,255,255,.65);background:rgba(3,12,20,.38)}.primary:hover{background:#ffb43e}.secondary:hover{background:white;color:#07111b}.capsule{position:absolute;right:5vw;top:150px;width:255px;padding:7px 7px 11px;background:rgba(4,12,20,.7);border:1px solid rgba(255,255,255,.18);transform:rotate(2deg);box-shadow:0 24px 60px rgba(0,0,0,.34)}.capsule span{display:block;color:#ff9f0a;font-size:7px;letter-spacing:.14em;margin:9px 5px 0}.hero-facts{position:absolute;right:5vw;bottom:88px;width:375px;border:1px solid rgba(255,255,255,.16);background:rgba(2,10,18,.72);backdrop-filter:blur(12px)}.hero-facts>div{height:62px;display:grid;grid-template-columns:1fr 1.2fr 10px;align-items:center;padding:0 18px;border-bottom:1px solid rgba(255,255,255,.1)}.hero-facts>div:last-child{border:0}.hero-facts small{font-size:7px;color:#6f7b89;letter-spacing:.14em}.hero-facts b{font-size:10px}.hero-facts i{width:4px;height:4px;border-radius:50%;background:#2ee6a6;box-shadow:0 0 8px #2ee6a6}.hero-facts i.amber{background:#ff9f0a;box-shadow:0 0 8px #ff9f0a}.hero-facts i.muted{background:#647180;box-shadow:none}.media-credit{position:absolute;left:5.6vw;bottom:25px;color:#596572;font-size:6px;letter-spacing:.13em}.section{padding:115px clamp(24px,7vw,112px)}.section-head{max-width:760px;margin-bottom:48px}.section-head h2,.media-copy h2,.crew-layout h2,.final h2{font-size:clamp(42px,5vw,78px);line-height:.95;letter-spacing:-.045em;margin:16px 0 22px}.section-head>p:last-child,.media-copy>p,.crew-layout>div>p:last-child,.final p{color:#9ba8b5;line-height:1.7}.section-head.split{max-width:none;display:grid;grid-template-columns:1.15fr .85fr;gap:100px;align-items:end}.status{background:#081521}.status-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #263441;border-left:1px solid #263441}.status-card{min-height:210px;padding:25px;border-right:1px solid #263441;border-bottom:1px solid #263441;display:flex;flex-direction:column;position:relative;background:linear-gradient(135deg,rgba(255,255,255,.025),transparent)}.status-card>span{position:absolute;right:22px;top:20px;font-size:9px;color:#53616e}.status-card p{font-size:9px;color:#7d8995;letter-spacing:.12em;text-transform:uppercase;margin:0}.status-card strong{font-size:clamp(24px,2.4vw,38px);margin:auto 0 8px}.status-card small{color:#7f8c99}.source-link{display:block;margin-top:24px;color:#ff9f0a;font-size:8px;letter-spacing:.14em}.questions{background:#06101a}.question-list{border-top:1px solid #263441}.question{border-bottom:1px solid #263441}.question summary{list-style:none;cursor:pointer;min-height:92px;display:grid;grid-template-columns:54px 1fr 28px;align-items:center;font-size:clamp(18px,2vw,28px);font-weight:750}.question summary::-webkit-details-marker{display:none}.question summary b{font-size:9px;color:#ff9f0a}.question summary i{font-style:normal;font-size:24px;color:#74818e;transition:.2s}.question[open] summary i{transform:rotate(45deg)}.question p{max-width:780px;padding:0 0 32px 54px;margin:0;color:#9ba8b5;line-height:1.75}.media{padding-top:50px;padding-bottom:50px;background:#ff9f0a;color:#07111b}.media-grid{display:grid;grid-template-columns:1.3fr .7fr;min-height:570px}.video{position:relative;box-shadow:0 30px 80px rgba(0,0,0,.25)}.video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.media-copy{padding:60px;background:#f3f1ec}.media-copy .kicker{color:#94600b}.media-copy h2{font-size:clamp(38px,4vw,62px)}.media-copy>p{color:#46515b}.media-copy ul{list-style:none;padding:20px 0 0;margin:0;display:grid;gap:16px}.media-copy li{font-size:12px;font-weight:700;display:flex;align-items:center;gap:12px}.media-copy li i{width:7px;height:7px;border-radius:50%;background:#ff9f0a}.gameplay{background:#07121d}.game-shot{height:590px;position:relative;overflow:hidden}.game-shot:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,12,20,.08),rgba(4,12,20,.72))}.game-shot img{width:100%;height:100%;object-fit:cover}.game-shot>div{position:absolute;z-index:2;right:6%;bottom:10%;text-align:right}.game-shot span{font-size:8px;letter-spacing:.18em;color:#ff9f0a}.game-shot b{display:block;font-size:clamp(36px,4.8vw,75px);line-height:.82;letter-spacing:-.06em;margin-top:12px}.features{display:grid;grid-template-columns:repeat(3,1fr);border-left:1px solid #263441}.feature{padding:32px;border-right:1px solid #263441;border-bottom:1px solid #263441;min-height:235px}.feature span{font-size:9px;color:#ff9f0a}.feature h3{font-size:28px;margin:38px 0 12px}.feature p{color:#8c99a6;line-height:1.65;margin:0}.crew{background:#e8e6df;color:#07111b}.crew-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:90px}.crew-layout .kicker{color:#8a5b10}.crew-form{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;align-content:start}.crew-form label{font-size:9px;text-transform:uppercase;letter-spacing:.12em;font-weight:800}.crew-form select{display:block;width:100%;height:58px;margin-top:10px;border:1px solid #a6a6a0;background:transparent;padding:0 13px;color:#07111b}.crew-form button{grid-column:1/-1;height:58px;border:0;background:#ff9f0a;color:#07111b;font-size:10px;font-weight:900;text-transform:uppercase;display:flex;justify-content:space-between;align-items:center;padding:0 20px;cursor:pointer}.result{grid-column:1/-1;display:none;padding:24px;border:1px solid #a6a6a0}.result.show{display:block}.result span{font-size:11px;font-weight:900;letter-spacing:.08em}.result span i{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:10px;background:#2f8f68}.result.waiting span i{background:#d17b00}.result.partial span i{background:#ff9f0a}.result p{margin:8px 0 0;color:#515960;line-height:1.6}.evidence{background:#06101a}.timeline{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #263441}.timeline-item{min-height:260px;padding:28px;border-right:1px solid #263441}.timeline-item:last-child{border-right:0}.timeline-item span{font-size:9px;color:#ff9f0a;text-transform:uppercase;letter-spacing:.14em}.timeline-item h3{font-size:28px;margin:65px 0 14px}.timeline-item p{color:#8996a3;line-height:1.65}.final{min-height:650px;position:relative;display:flex;align-items:center;padding:100px clamp(24px,7vw,112px);overflow:hidden}.final>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}.final:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,11,18,.97),rgba(3,11,18,.78) 50%,rgba(3,11,18,.22));z-index:-1}.final>div{max-width:720px}.final p{max-width:620px}.final .primary{margin-top:30px;width:260px}footer{min-height:150px;padding:45px clamp(24px,5vw,82px);display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;border-top:1px solid #263441;background:#040c14}footer p{font-size:8px;color:#697684;letter-spacing:.1em;text-align:center}footer p:last-child{text-align:right}.reveal{opacity:0;transform:translateY(22px);transition:opacity .65s,transform .65s}.reveal.seen{opacity:1;transform:none}[dir=rtl] .hero-copy,[dir=rtl] .section-head,[dir=rtl] .media-copy,[dir=rtl] .crew-layout>div{text-align:right}[dir=rtl] .capsule{right:auto;left:5vw}[dir=rtl] .hero-facts{right:auto;left:5vw}[dir=rtl] .game-shot>div{right:auto;left:6%;text-align:left}[dir=rtl] .result span i{margin-right:0;margin-left:10px}.resource-hub{background:#081521}.resource-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #263441;border-left:1px solid #263441}.resource-card{min-height:235px;padding:27px;border-right:1px solid #263441;border-bottom:1px solid #263441;display:flex;flex-direction:column;background:linear-gradient(145deg,rgba(255,255,255,.035),transparent 70%);transition:.25s}.resource-card:hover{transform:translateY(-4px);background:#0b1b28}.resource-card>span,.mini-link>span{font-size:9px;color:#ff9f0a;letter-spacing:.15em}.resource-card h3{font-size:28px;line-height:1.02;margin:44px 0 12px}.resource-card p{color:#8694a2;line-height:1.6;margin:0}.resource-card b{margin-top:auto;padding-top:25px;color:#ff9f0a;font-size:18px}.resource-card.tool-card{background:linear-gradient(145deg,rgba(255,159,10,.09),rgba(255,255,255,.015))}.resource-card.authority-card{background:linear-gradient(145deg,rgba(46,230,166,.09),rgba(255,255,255,.015))}.inner-header{position:fixed;background:rgba(4,12,20,.9)}.inner-main{padding-top:113px}.article-hero{min-height:610px;padding:112px clamp(24px,7vw,112px) 76px;position:relative;display:flex;flex-direction:column;justify-content:flex-end;isolation:isolate;overflow:hidden}.article-hero-bg{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(1,8,15,.97),rgba(2,10,18,.7) 52%,rgba(2,10,18,.25)),linear-gradient(0deg,#06101a,transparent 55%),url("${HERO}");background-size:cover;background-position:center 35%;z-index:-1;filter:saturate(.85)}.breadcrumbs{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:54px;color:#7e8a97;font-size:10px}.breadcrumbs a{color:#ff9f0a}.article-hero h1,.tool-hero h1{max-width:1050px;font-size:clamp(58px,8vw,126px);line-height:.82;letter-spacing:-.065em;text-transform:uppercase;margin:24px 0}.article-hero>p:not(.eyebrow){max-width:800px;color:#b5c0ca;font-size:18px;line-height:1.7}.article-meta{display:flex;flex-wrap:wrap;gap:24px;margin-top:24px;font-size:8px;font-weight:800;letter-spacing:.14em;color:#8b98a5}.answer-strip{display:grid;grid-template-columns:220px minmax(0,1fr);gap:28px;padding:42px clamp(24px,7vw,112px);background:#ff9f0a;color:#07111b;align-items:center}.answer-strip span{font-size:9px;font-weight:900;letter-spacing:.16em}.answer-strip strong{font-size:clamp(23px,3vw,43px);line-height:1.15}.article-body{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:80px;padding:105px clamp(24px,7vw,112px);background:#f0eee8;color:#07111b}.article-body article>section{padding-bottom:74px;margin-bottom:74px;border-bottom:1px solid #b6b4ad}.article-body h2{font-size:clamp(35px,4.6vw,66px);line-height:.96;letter-spacing:-.045em;margin:10px 0 30px}.article-body h3{font-size:24px}.article-body p,.article-body li{color:#46515a;line-height:1.78}.long-copy{font-size:18px;max-width:850px}.evidence-list{list-style:none;padding:0;margin:0;display:grid;gap:12px}.evidence-list li{padding:18px 20px;border:1px solid #b6b4ad;background:#faf9f5;display:grid;grid-template-columns:86px 1fr;gap:16px;align-items:start}.evidence-list i{font-style:normal;font-size:8px;font-weight:900;letter-spacing:.1em}.evidence-list .ok i{color:#167954}.evidence-list .unknown i{color:#a45e00}.article-body aside{align-self:start;display:grid;gap:16px}.aside-card{padding:25px;background:#071521;color:#f4f7f9;border-top:3px solid #ff9f0a}.aside-card span{font-size:8px;color:#ff9f0a;letter-spacing:.15em}.aside-card h3{margin:28px 0 12px}.aside-card p{color:#9ba7b3}.sources-card a{display:block;padding:13px 0;border-bottom:1px solid #263441;color:#dbe2e8;font-size:12px}.source-ledger a{position:relative;padding-right:18px}.source-ledger a span{display:block;color:#71808e;margin-bottom:6px}.source-ledger a strong{display:block;line-height:1.35}.source-ledger a b{position:absolute;right:0;top:18px;color:#ff9f0a}.authority-bullets{list-style:none;padding:0;margin:30px 0 0;display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.authority-bullets li{padding:16px 18px;background:#fff;border-left:3px solid #ff9f0a;font-weight:700}.compact-section{padding-top:82px;padding-bottom:82px}.mini-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #263441;border-left:1px solid #263441}.mini-link{min-height:155px;padding:22px;border-right:1px solid #263441;border-bottom:1px solid #263441;display:flex;flex-direction:column;transition:.2s}.mini-link strong{font-size:19px;line-height:1.2;margin:auto 0 8px}.mini-link small{color:#7c8996}.mini-link:hover{background:#0c1c29}.tool-link{background:rgba(255,159,10,.055)}.log-section{padding-top:0}.update-log{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #263441}.update-log article{padding:24px;border-right:1px solid #263441}.update-log article:last-child{border-right:0}.update-log time{font-size:9px;color:#ff9f0a}.update-log p{color:#8a97a4;line-height:1.55}.source-note{color:#697684;font-size:8px;letter-spacing:.08em}.deep-index{background:#07121d}.authority-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #263441;border-left:1px solid #263441}.authority-tile{min-height:300px;padding:28px;border-right:1px solid #263441;border-bottom:1px solid #263441;display:flex;flex-direction:column;background:linear-gradient(145deg,rgba(46,230,166,.055),transparent);transition:.2s}.authority-tile:hover{background:#0d1d2a;transform:translateY(-3px)}.authority-tile time,.authority-tile>span{font-size:8px;letter-spacing:.14em;color:#2ee6a6}.authority-tile h3{font-size:28px;line-height:1.05;margin:48px 0 14px}.authority-tile p{color:#8996a3;line-height:1.6}.authority-tile b{margin-top:auto;color:#ff9f0a;font-size:10px;letter-spacing:.1em}.wiki-tile{background:linear-gradient(145deg,rgba(255,159,10,.06),transparent)}.media-archive{background:#081521;padding-top:70px}.authority-video{margin-bottom:80px}.media-wall{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;background:#263441}.media-tile{margin:0;background:#07121d;overflow:hidden}.media-tile a{display:block;position:relative}.media-tile img{width:100%;aspect-ratio:16/9;object-fit:cover;transition:.45s}.media-tile:hover img{transform:scale(1.025);filter:brightness(.72)}.media-tile span{position:absolute;left:18px;top:18px;padding:8px 10px;background:#07121d;color:#ff9f0a;font-size:8px;letter-spacing:.12em}.media-tile figcaption{padding:18px 20px;font-weight:800}.tool-stage{padding:92px clamp(24px,7vw,112px);background:#e8e6df;color:#07111b}.interactive-tool{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;max-width:1050px;margin:auto}.interactive-tool.three{grid-template-columns:repeat(3,minmax(0,1fr))}.interactive-tool label{font-size:9px;font-weight:900;letter-spacing:.11em;text-transform:uppercase}.interactive-tool select,.interactive-tool input{display:block;width:100%;height:60px;margin-top:10px;border:1px solid #999b97;background:#f7f5f0;color:#07111b;padding:0 15px}.interactive-tool button{grid-column:1/-1;height:62px;border:0;background:#ff9f0a;color:#07111b;padding:0 22px;display:flex;align-items:center;justify-content:space-between;font-size:10px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.tool-result{grid-column:1/-1;display:none;padding:26px;border:1px solid #999b97;background:#f7f5f0}.tool-result.show{display:block}.tool-result span{font-size:22px;font-weight:900}.tool-result p{margin-bottom:0;color:#4d575f}.tool-result.pass{border-color:#268663}.tool-result.fail{border-color:#bb3b31}.tool-result.partial{border-color:#d8870a}.countdown-tool{text-align:center;max-width:980px;margin:auto}.countdown-tool strong{display:block;font-size:clamp(100px,18vw,250px);line-height:.75;letter-spacing:-.09em}.countdown-tool>span{display:block;margin-top:30px;font-size:10px;font-weight:900;letter-spacing:.2em}.countdown-tool p{color:#5d666c;line-height:1.7}.window-line{height:6px;background:linear-gradient(90deg,#ff9f0a 0 75%,#b5b6b2 75%);margin:45px 0}.compare-table{max-width:1100px;margin:auto;border-top:1px solid #999b97;border-left:1px solid #999b97}.compare-table>div{display:grid;grid-template-columns:.6fr 1fr 1fr}.compare-table b,.compare-table span{padding:18px;border-right:1px solid #999b97;border-bottom:1px solid #999b97}.compare-table>div:first-child{background:#071521;color:white}.compare-table p{padding:10px 18px;color:#5b6369}.tracker-board{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.tracker-board article{min-height:230px;padding:25px;background:#071521;color:#f4f7f9;border-top:4px solid #8c98a4}.tracker-board article.green{border-color:#2ee6a6}.tracker-board article.amber{border-color:#ff9f0a}.tracker-board span{font-size:8px;letter-spacing:.15em;color:#84919d}.tracker-board strong{display:block;font-size:25px;margin:60px 0 12px}.tracker-board p{color:#9aa6b1;line-height:1.6}[dir=rtl] .article-hero,[dir=rtl] .article-body,[dir=rtl] .tool-stage{text-align:right}
@media(max-width:980px){.header{grid-template-columns:1fr auto auto}.header nav{display:none;position:absolute;top:82px;left:0;right:0;background:#07131f;padding:25px;flex-direction:column}.header nav.open{display:flex}.menu-button{display:block;border:0;background:transparent;color:#fff;font-size:9px;letter-spacing:.14em}.hero{min-height:820px;padding-top:150px;align-items:flex-start}.hero-copy{width:100%;padding-top:145px}.capsule{top:135px;right:6vw;width:210px}.hero-facts{right:6vw;bottom:55px}.status-grid{grid-template-columns:repeat(2,1fr)}.media-grid,.crew-layout{grid-template-columns:1fr}.video{min-height:480px}.crew-layout{gap:45px}.section-head.split{grid-template-columns:1fr;gap:10px}.game-shot{height:480px}.resource-grid,.mini-grid,.authority-grid{grid-template-columns:repeat(2,1fr)}.article-body{grid-template-columns:1fr;gap:25px}.article-body aside{grid-template-columns:repeat(2,1fr)}.interactive-tool.three{grid-template-columns:1fr 1fr}.tracker-board{grid-template-columns:1fr}.update-log{grid-template-columns:1fr}.update-log article{border-right:0;border-bottom:1px solid #263441}}
@media(max-width:680px){.ticker{height:27px}.header{top:27px;height:68px;padding:0 18px}.brand>span{width:34px;height:34px}.brand>b{font-size:10px}.language>button{width:64px}.hero{min-height:850px;padding:115px 20px 130px}.hero-bg{background-image:linear-gradient(0deg,#06101a 2%,rgba(2,10,18,.38) 55%,rgba(2,10,18,.8)),url("${HERO}");background-position:center}.hero-copy{padding-top:190px}.hero h1{font-size:19vw;margin:22px 0 24px}.lead{font-size:14px}.actions{display:grid}.primary,.secondary{width:100%;min-width:0}.capsule{top:112px;left:20px!important;right:auto!important;width:205px;transform:rotate(-2deg)}.hero-facts{left:20px!important;right:20px!important;bottom:32px;width:auto}.media-credit{display:none}.section{padding:78px 20px}.section-head{margin-bottom:34px}.section-head h2,.media-copy h2,.crew-layout h2,.final h2{font-size:42px}.status-grid{grid-template-columns:1fr}.status-card{min-height:165px}.question summary{grid-template-columns:36px 1fr 24px;font-size:18px}.question p{padding-left:36px}.media{padding:0}.media-grid{display:block}.video{min-height:240px}.media-copy{padding:55px 20px}.game-shot{height:370px}.game-shot>div{left:20px!important;right:20px!important;bottom:25px;text-align:left!important}.game-shot b{font-size:38px}.features{grid-template-columns:1fr}.feature{min-height:190px}.crew-form{grid-template-columns:1fr}.timeline{grid-template-columns:1fr}.timeline-item{min-height:200px;border-right:0;border-bottom:1px solid #263441}.timeline-item h3{margin-top:38px}.final{min-height:620px;padding:75px 20px}.final:after{background:linear-gradient(0deg,rgba(3,11,18,.98),rgba(3,11,18,.55))}footer{grid-template-columns:1fr;gap:24px;text-align:center}footer .brand{justify-content:center}footer p,footer p:last-child{text-align:center}.reveal{opacity:1;transform:none}.resource-grid,.mini-grid,.authority-grid,.media-wall{grid-template-columns:1fr}.resource-card{min-height:205px}.inner-main{padding-top:95px}.article-hero{min-height:520px;padding:85px 20px 50px}.article-hero h1,.tool-hero h1{font-size:52px}.article-hero>p:not(.eyebrow){font-size:15px}.breadcrumbs{margin-bottom:34px}.answer-strip{grid-template-columns:1fr;padding:34px 20px;gap:14px}.article-body{padding:72px 20px}.article-body article>section{padding-bottom:50px;margin-bottom:50px}.article-body aside{grid-template-columns:1fr}.evidence-list li{grid-template-columns:1fr}.authority-bullets{grid-template-columns:1fr}.authority-tile{min-height:230px}.media-archive{padding-top:30px}.tool-stage{padding:65px 20px}.interactive-tool,.interactive-tool.three{grid-template-columns:1fr}.compare-table{overflow-x:auto}.compare-table>div{min-width:650px}.tracker-board article{min-height:190px}.countdown-tool strong{font-size:32vw}}
.feed-section{background:#040c14}.feed-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;background:#263441}.feed-card{position:relative;min-height:410px;overflow:hidden;background:#07121d}.feed-card:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(2,9,15,.98),rgba(2,9,15,.04) 65%)}.feed-card img{width:100%;height:100%;object-fit:cover;transition:.45s}.feed-card:hover img{transform:scale(1.025)}.feed-card span,.feed-card strong,.feed-card small{position:absolute;z-index:2;left:28px;right:28px}.feed-card span{top:24px;color:#2ee6a6;font-size:8px;font-weight:800;letter-spacing:.14em}.feed-card strong{bottom:46px;font-size:clamp(25px,3vw,42px);line-height:1}.feed-card small{bottom:23px;color:#ff9f0a;font-size:8px;letter-spacing:.12em}.manifest-section{background:#e8e6df;color:#07111b}.manifest-section .section-head>p:last-child{color:#56616a}.manifest-layout{display:grid;grid-template-columns:1.25fr .75fr;border:1px solid #9fa19d}.spec-board{display:grid;grid-template-columns:repeat(2,1fr)}.spec-board>div{min-height:135px;padding:25px;border-right:1px solid #9fa19d;border-bottom:1px solid #9fa19d;display:flex;flex-direction:column;justify-content:space-between}.spec-board span,.language-board .kicker{font-size:8px;font-weight:900;letter-spacing:.14em;color:#8a5b10}.spec-board strong{font-size:20px}.language-board{padding:42px;background:#071521;color:#f5f7fa}.language-board h3{font-size:42px;line-height:.95;margin:22px 0}.language-board p:not(.kicker){color:#9ba7b3;line-height:1.7}.language-board .primary,.language-board .secondary{margin-top:14px;width:100%}.dark-button{border-color:#53616e}.dispatch-section{background:#07121d}.dispatch-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #263441;border-left:1px solid #263441}.dispatch-card{min-height:350px;padding:28px;border-right:1px solid #263441;border-bottom:1px solid #263441;display:flex;flex-direction:column;background:linear-gradient(145deg,rgba(255,159,10,.06),transparent)}.dispatch-card time,.dispatch-card>span{font-size:8px;letter-spacing:.13em;color:#2ee6a6}.dispatch-card h3{font-size:28px;line-height:1.05;margin:48px 0 15px}.dispatch-card p{color:#8b98a5;line-height:1.65}.dispatch-card b{margin-top:auto;color:#ff9f0a;font-size:9px;letter-spacing:.12em}.source-manifest{background:#081521}.source-manifest-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid #263441;border-left:1px solid #263441}.source-manifest-grid>a{min-height:235px;padding:28px;border-right:1px solid #263441;border-bottom:1px solid #263441;display:flex;flex-direction:column}.source-manifest-grid span{font-size:8px;color:#2ee6a6;letter-spacing:.14em}.source-manifest-grid strong{font-size:26px;margin:35px 0 10px}.source-manifest-grid p{color:#8996a3;line-height:1.55}.source-manifest-grid b{margin-top:auto;color:#ff9f0a;font-size:9px}.article-figure{margin:38px 0 8px;background:#071521;color:#f5f7fa}.article-figure a{display:block;overflow:hidden}.article-figure img{width:100%;aspect-ratio:16/9;object-fit:cover;transition:.4s}.article-figure:hover img{transform:scale(1.018)}.article-figure figcaption{display:grid;grid-template-columns:150px 1fr;gap:8px 20px;padding:20px}.article-figure figcaption span{color:#ff9f0a;font-size:8px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.article-figure figcaption strong{font-size:18px}.article-figure figcaption small{grid-column:2;color:#81909e}.intent-depth>.depth-block{padding:0 0 62px;margin-bottom:62px;border-bottom:1px solid #b6b4ad}.intent-depth>.depth-block:last-child{padding-bottom:0;margin-bottom:0;border-bottom:0}.tool-guide{background:#081521}.tool-guide-layout{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.tool-guide h2{font-size:clamp(38px,5vw,72px);line-height:.95;letter-spacing:-.045em;margin:18px 0 28px}.tool-guide p{color:#98a5b2;line-height:1.8;font-size:17px}.tool-guide .article-figure{margin:0}.tool-source-row{display:flex;flex-wrap:wrap;gap:24px;margin-top:30px}.tool-source-row a{color:#ff9f0a;font-size:9px;font-weight:900;letter-spacing:.1em}
@media(max-width:980px){.manifest-layout,.tool-guide-layout{grid-template-columns:1fr}.dispatch-grid{grid-template-columns:1fr}.dispatch-card{min-height:260px}.language-board{min-height:430px}}
@media(max-width:680px){.feed-grid,.source-manifest-grid{grid-template-columns:1fr}.feed-card{min-height:280px}.spec-board{grid-template-columns:1fr}.language-board{padding:32px 22px}.article-figure figcaption{grid-template-columns:1fr}.article-figure figcaption small{grid-column:1}.tool-guide-layout{gap:35px}}
.semantic-section>p:not(.kicker){max-width:760px;color:#6c7780;line-height:1.7}.semantic-list{list-style:none!important;padding:0!important;margin:34px 0 0!important;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-top:1px solid #aeb1ad;border-left:1px solid #aeb1ad}.semantic-list li{padding:0!important;margin:0!important}.semantic-link{min-height:145px;padding:22px;border-right:1px solid #aeb1ad;border-bottom:1px solid #aeb1ad;background:#faf9f5;display:grid;grid-template-columns:1fr 22px;align-content:center;transition:.2s}.semantic-link:hover{background:#fff;transform:translateY(-2px)}.semantic-link strong{font-size:19px;line-height:1.2;color:#071521}.semantic-link span{grid-column:1;display:block;margin-top:10px;color:#65717a;font-size:13px;line-height:1.55}.semantic-link b{grid-column:2;grid-row:1/3;color:#d67e00;align-self:center}.tool-semantic,.media-semantic{background:#e8e6df;color:#07111b}.tool-semantic .semantic-section,.media-semantic .semantic-section{max-width:1180px;margin:auto}.tool-semantic .semantic-section h2,.media-semantic .semantic-section h2{font-size:clamp(38px,5vw,72px);line-height:.95;letter-spacing:-.045em;margin:15px 0 25px}.site-footer{display:block;min-height:0;padding:0;background:#040c14;border-top:1px solid #263441}.footer-top{display:grid;grid-template-columns:1.35fr repeat(4,minmax(130px,1fr));gap:48px;padding:70px clamp(24px,5vw,82px)}.footer-intro p{max-width:300px;text-align:left!important;color:#7c8996!important;font-size:10px!important;line-height:1.7;letter-spacing:.04em!important;margin-top:24px}.site-footer nav{display:grid;align-content:start;gap:12px}.site-footer nav>strong{color:#ff9f0a;font-size:8px;letter-spacing:.15em;margin-bottom:10px}.site-footer nav>a{color:#9aa6b2;font-size:11px;line-height:1.35}.site-footer nav>a:hover{color:#fff}.footer-bottom{min-height:64px;padding:18px clamp(24px,5vw,82px);border-top:1px solid #263441;display:flex;align-items:center;justify-content:space-between;gap:24px;color:#64717e;font-size:8px;letter-spacing:.12em}.footer-bottom a:hover{color:#ff9f0a}
@media(max-width:1100px){.footer-top{grid-template-columns:1.4fr repeat(2,1fr)}}
@media(max-width:680px){.semantic-list{grid-template-columns:1fr}.semantic-link{min-height:125px}.footer-top{grid-template-columns:1fr;gap:38px;padding:55px 20px}.site-footer nav{grid-template-columns:repeat(2,1fr)}.site-footer nav>strong{grid-column:1/-1}.footer-bottom{align-items:flex-start;flex-direction:column;padding:25px 20px}}
.hero h1 .hero-title-main{font-size:1em;line-height:.72;letter-spacing:-.075em}.game-overview{background:#f0eee8;color:#07111b}.overview-layout{display:grid;grid-template-columns:minmax(300px,.78fr) minmax(0,1.22fr);gap:clamp(55px,8vw,130px);align-items:start}.overview-heading{position:sticky;top:140px}.overview-heading h2{font-size:clamp(48px,6.5vw,96px);line-height:.88;letter-spacing:-.06em;margin:20px 0 42px}.overview-heading .kicker{color:#8a5b10}.overview-stamp{padding:24px;border:1px solid #aeb0ab;border-left:5px solid #ff9f0a;display:grid;gap:8px;background:#faf9f5}.overview-stamp span{font-size:8px;font-weight:900;letter-spacing:.15em;color:#8a5b10}.overview-stamp strong{font-size:18px;line-height:1.35}.overview-stamp small{color:#68727a}.overview-copy{max-width:820px}.overview-copy p{font-size:17px;line-height:1.88;color:#46515a;margin:0 0 25px}.overview-copy .overview-lead{font-size:clamp(22px,2.3vw,32px);line-height:1.48;color:#07111b;letter-spacing:-.02em}.overview-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-top:1px solid #aaaca8;border-left:1px solid #aaaca8;margin-top:45px}.overview-actions a{min-height:145px;padding:22px;border-right:1px solid #aaaca8;border-bottom:1px solid #aaaca8;display:grid;grid-template-columns:1fr 22px;align-content:center;background:#faf9f5;transition:.2s}.overview-actions a:hover{background:#fff;transform:translateY(-2px)}.overview-actions span{font-size:8px;font-weight:900;letter-spacing:.13em;color:#a45e00}.overview-actions strong{margin-top:12px;line-height:1.35}.overview-actions b{grid-column:2;grid-row:1/3;align-self:center;color:#d67e00}.search-briefings{background:#040c14}.briefing-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-top:1px solid #263441;border-left:1px solid #263441}.briefing-card{min-height:410px;padding:clamp(25px,3vw,42px);border-right:1px solid #263441;border-bottom:1px solid #263441;display:flex;flex-direction:column;background:linear-gradient(145deg,rgba(255,159,10,.045),transparent 60%)}.briefing-card>span{font-size:8px;font-weight:900;letter-spacing:.15em;color:#2ee6a6}.briefing-card h3{font-size:clamp(28px,3vw,44px);line-height:1.02;letter-spacing:-.035em;margin:55px 0 20px;max-width:560px}.briefing-card p{color:#95a2af;line-height:1.8;margin:0;max-width:650px}.briefing-card>div{display:flex;flex-wrap:wrap;gap:18px;margin-top:auto;padding-top:32px}.briefing-card a{color:#ff9f0a;font-size:9px;font-weight:900;letter-spacing:.08em}.editorial-note{margin:28px 0 0;padding:22px 24px;border:1px solid #263441;color:#8f9ca9;line-height:1.75}.editorial-note strong{color:#fff}.search-briefings .section-head>p{color:#9ba8b5;line-height:1.7}
@media(max-width:980px){.overview-layout{grid-template-columns:1fr;gap:50px}.overview-heading{position:static}.briefing-card{min-height:370px}}
@media(max-width:680px){.hero h1 .hero-title-main{font-size:1em}.overview-actions,.briefing-grid{grid-template-columns:1fr}.overview-copy p{font-size:16px}.overview-copy .overview-lead{font-size:23px}.briefing-card{min-height:0;padding:30px 22px}.briefing-card h3{margin:38px 0 18px}.briefing-card>div{margin-top:25px}.editorial-note{padding:20px}}

/* 2026 visual system: official artwork + animated airline-chaos presentation */
body{background:radial-gradient(circle at 80% 10%,#12233a 0,#07111e 34%,#040a12 72%);color:#f8fbff}.ticker{background:linear-gradient(90deg,#ff7a1a,#ffad28 50%,#ffd463);box-shadow:0 1px 0 rgba(255,255,255,.22) inset}.header{top:49px;left:clamp(14px,4.5vw,72px);right:clamp(14px,4.5vw,72px);height:78px;padding:0 16px;grid-template-columns:minmax(245px,310px) 1fr 94px;border:1px solid rgba(255,255,255,.16);border-radius:23px;background:linear-gradient(135deg,rgba(7,17,31,.9),rgba(8,26,43,.73));box-shadow:0 24px 65px rgba(0,0,0,.32),0 1px 0 rgba(255,255,255,.1) inset;backdrop-filter:blur(18px) saturate(1.2)}.inner-header{position:fixed}.brand{gap:13px}.brand>span.brand-mark{width:52px;height:52px;border:1px solid rgba(255,190,66,.48);border-radius:15px;overflow:hidden;transform:none;display:block;background:#0c2e65;box-shadow:0 9px 24px rgba(0,0,0,.32)}.brand-mark img{display:block;height:100%;width:auto;max-width:none;object-fit:cover;object-position:left center}.brand>b{font-size:12px;letter-spacing:.075em}.brand small{color:#ffb12c}.header nav{gap:clamp(18px,2.5vw,38px)}.header nav a{font-size:10px;font-weight:800;letter-spacing:.04em}.language>button{height:44px;border-radius:13px;border-color:rgba(255,255,255,.18);background:rgba(255,255,255,.055)}.language>div{top:50px;border-radius:14px;box-shadow:0 24px 50px rgba(0,0,0,.35)}
.hero{min-height:980px;margin:0 14px 14px;padding-top:190px;border-radius:0 0 44px 44px;overflow:hidden;box-shadow:0 35px 90px rgba(0,0,0,.28)}.hero:before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 68% 30%,rgba(95,190,255,.23),transparent 26%),radial-gradient(circle at 83% 72%,rgba(255,149,34,.2),transparent 29%);pointer-events:none}.hero-bg{background-image:linear-gradient(90deg,rgba(2,8,16,.98) 0%,rgba(2,10,19,.87) 32%,rgba(2,10,19,.14) 69%,rgba(2,10,19,.4) 100%),linear-gradient(0deg,#06101a 0%,transparent 35%),url("${HERO}");filter:saturate(1.18) contrast(1.03);transform:scale(1.012)}.hero-grid{background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:96px 96px;opacity:.65}.hero-copy{width:min(900px,70vw)}.hero h1,.section-head h2,.media-copy h2,.crew-layout h2,.final h2,.overview-heading h2,.briefing-card h3,.article-hero h1,.tool-hero h1{font-family:Impact,Haettenschweiler,"Arial Narrow Bold","Arial Narrow",sans-serif;font-weight:400}.hero h1{font-size:clamp(84px,10.4vw,174px);line-height:.73;letter-spacing:-.045em;margin:30px 0 26px;text-shadow:0 9px 45px rgba(0,0,0,.4)}.hero h1>span:first-child{font-size:.43em;letter-spacing:.015em;color:#fff}.hero h1 .hero-title-main{background:linear-gradient(90deg,#fff 0 38%,#ffb12c 78%,#ff7a1a 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 12px 28px rgba(0,0,0,.28))}.hero-shout{display:flex;align-items:center;gap:14px;margin:0 0 18px;color:#dce7f1}.hero-shout span{padding:8px 11px;border-radius:999px;background:#ff9f0a;color:#07111b;font-size:8px;font-weight:950;letter-spacing:.13em}.hero-shout strong{font-size:16px;letter-spacing:.075em}.lead{font-size:18px;color:#d2dce5;text-shadow:0 2px 15px rgba(0,0,0,.65)}.primary,.secondary{height:60px;border-radius:15px}.primary{background:linear-gradient(135deg,#ff7b19,#ffb52e);box-shadow:0 14px 32px rgba(255,132,25,.22)}.secondary{background:rgba(8,19,32,.62);backdrop-filter:blur(12px)}.capsule{top:164px;width:274px;padding:9px 9px 13px;border-radius:21px;border-color:rgba(255,255,255,.24);background:rgba(7,18,31,.72);transform:rotate(3.5deg);box-shadow:0 30px 90px rgba(0,0,0,.45)}.capsule img{border-radius:14px}.hero-facts{bottom:65px;border-radius:22px;overflow:hidden;border-color:rgba(255,255,255,.23);background:linear-gradient(135deg,rgba(8,22,37,.84),rgba(4,13,24,.68));box-shadow:0 25px 70px rgba(0,0,0,.35)}.hero-facts>div{height:69px}.floating-baggage{position:absolute;right:31%;top:155px;width:210px;height:300px;z-index:1;pointer-events:none}.floating-baggage i{position:absolute;display:block;width:42px;height:52px;border:3px solid rgba(255,198,83,.75);border-radius:10px;background:linear-gradient(135deg,rgba(255,148,31,.86),rgba(174,67,26,.78));box-shadow:0 18px 30px rgba(0,0,0,.32);animation:baggageFloat 5.5s ease-in-out infinite}.floating-baggage i:before{content:"";position:absolute;left:11px;top:-12px;width:14px;height:9px;border:3px solid rgba(255,198,83,.75);border-bottom:0;border-radius:6px 6px 0 0}.floating-baggage i:nth-child(1){right:10px;top:0;transform:rotate(17deg)}.floating-baggage i:nth-child(2){left:25px;top:108px;width:32px;height:42px;transform:rotate(-13deg);animation-delay:-1.7s;background:linear-gradient(135deg,rgba(46,143,214,.9),rgba(29,67,134,.8));border-color:rgba(117,206,255,.72)}.floating-baggage i:nth-child(3){right:28px;bottom:0;width:35px;height:45px;transform:rotate(28deg);animation-delay:-3.1s;background:linear-gradient(135deg,rgba(244,81,77,.9),rgba(128,36,49,.82));border-color:rgba(255,148,116,.75)}@keyframes baggageFloat{0%,100%{translate:0 0;rotate:-2deg}50%{translate:0 15px;rotate:4deg}}
.section{padding-top:125px;padding-bottom:125px}.section-head h2,.media-copy h2,.crew-layout h2,.final h2{letter-spacing:.005em}.game-overview,.media,.gameplay,.crew{margin:14px;border-radius:38px;overflow:hidden}.game-overview{background:linear-gradient(145deg,#f9f5eb,#dedbd0)}.overview-stamp,.overview-actions a{border-radius:17px}.overview-actions{gap:12px;border:0}.overview-actions a{border:1px solid #b7b5ae;box-shadow:0 12px 30px rgba(20,34,43,.06)}.search-briefings{margin:14px;border-radius:38px;background:radial-gradient(circle at 100% 0,rgba(44,142,218,.17),transparent 32%),#050d17}.briefing-grid{gap:16px;border:0}.briefing-card{border:1px solid rgba(255,255,255,.13);border-radius:25px;background:linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.018));box-shadow:0 18px 50px rgba(0,0,0,.12)}.briefing-card:nth-child(1){background:linear-gradient(145deg,rgba(255,139,24,.17),rgba(255,255,255,.02))}.briefing-card:nth-child(2){background:linear-gradient(145deg,rgba(45,151,225,.16),rgba(255,255,255,.02))}.briefing-card:nth-child(3){background:linear-gradient(145deg,rgba(47,219,169,.11),rgba(255,255,255,.02))}.status{background:radial-gradient(circle at 80% 10%,rgba(42,137,207,.16),transparent 32%),#07131f}.status-grid{gap:16px;border:0}.status-card{border:1px solid rgba(255,255,255,.12);border-radius:24px;background:linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.018));box-shadow:0 18px 55px rgba(0,0,0,.12);transition:.3s}.status-card:hover{transform:translateY(-7px);border-color:rgba(255,175,43,.55)}.status-card:nth-child(1),.status-card:nth-child(4){background:linear-gradient(145deg,rgba(255,145,28,.16),rgba(255,255,255,.018))}.status-card:nth-child(2),.status-card:nth-child(6){background:linear-gradient(145deg,rgba(54,163,232,.14),rgba(255,255,255,.018))}.questions{background:#050c15}.question-list{display:grid;gap:12px;border:0}.question{border:1px solid #253545;border-radius:18px;padding:0 22px;background:linear-gradient(135deg,rgba(255,255,255,.045),rgba(255,255,255,.012))}.question[open]{border-color:rgba(255,159,10,.55);background:linear-gradient(135deg,rgba(255,159,10,.08),rgba(255,255,255,.012))}.media{padding:18px;background:linear-gradient(135deg,#ff7a19,#ffb629)}.media-grid{overflow:hidden;border-radius:27px}.video{overflow:hidden;border-radius:27px 0 0 27px}.media-copy{border-radius:0 27px 27px 0}.gameplay{background:radial-gradient(circle at 10% 20%,rgba(53,154,224,.16),transparent 30%),#07121d}.game-shot{border-radius:30px;box-shadow:0 30px 80px rgba(0,0,0,.28)}.features{gap:14px;border:0;margin-top:14px}.feature{border:1px solid #263746;border-radius:21px;background:linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.015))}.feed-grid{gap:16px;background:transparent}.feed-card{border-radius:25px;box-shadow:0 22px 55px rgba(0,0,0,.22)}.manifest-section{background:linear-gradient(145deg,#f5f0e5,#dcd9cf)}.manifest-layout,.spec-board>div,.language-board{border-radius:20px}.manifest-layout{gap:16px;border:0}.spec-board{gap:12px}.spec-board>div{border:1px solid #adaaa3;background:rgba(255,255,255,.35)}.language-board{box-shadow:0 25px 55px rgba(0,0,0,.18)}.dispatch-grid,.source-manifest-grid,.resource-grid,.authority-grid{gap:14px;border:0}.dispatch-card,.source-manifest-grid>a,.resource-card,.authority-tile{border:1px solid #263746;border-radius:22px}.crew{background:linear-gradient(145deg,#f7f2e7,#dedbd1)}.crew-form select,.crew-form button,.result{border-radius:14px}.final{margin:14px;border-radius:38px;overflow:hidden}.site-footer{margin:14px;border-radius:34px 34px 0 0;overflow:hidden}
@media(max-width:980px){.header{left:18px;right:18px;grid-template-columns:1fr auto auto}.header nav{top:86px;left:0;right:0;border-radius:18px;background:rgba(5,15,27,.97);box-shadow:0 24px 55px rgba(0,0,0,.38)}.hero{min-height:910px;margin:0 8px 8px}.floating-baggage{right:16%;opacity:.55}.capsule{top:152px}.hero-copy{width:100%}.game-overview,.media,.gameplay,.crew,.search-briefings,.final,.site-footer{margin-left:8px;margin-right:8px}.video{border-radius:24px 24px 0 0}.media-copy{border-radius:0 0 24px 24px}}
@media(max-width:680px){.header{top:38px;left:10px;right:10px;height:66px;padding:0 9px;border-radius:18px}.brand>span.brand-mark{width:46px;height:46px;border-radius:13px}.brand b{font-size:9px}.brand small{font-size:6px}.language>button{width:58px;height:42px}.menu-button{padding:12px 7px}.hero{min-height:910px;padding-left:20px;padding-right:20px;border-radius:0 0 29px 29px}.hero-bg{background-image:linear-gradient(0deg,#06101a 1%,rgba(2,10,18,.3) 52%,rgba(2,10,18,.88)),url("${HERO}");background-position:58% center}.hero-copy{padding-top:225px}.hero h1{font-size:19vw;line-height:.77;margin:22px 0 18px}.hero h1>span:first-child{font-size:.5em}.hero-shout{align-items:flex-start;flex-direction:column;gap:8px}.hero-shout strong{font-size:13px}.lead{font-size:14px;color:#e0e7ed}.capsule{top:120px;left:20px!important;width:205px;border-radius:17px}.floating-baggage{display:none}.hero-facts{bottom:28px;border-radius:18px}.hero-facts>div{height:58px}.section{padding-top:82px;padding-bottom:82px}.game-overview,.media,.gameplay,.crew,.search-briefings,.final,.site-footer{margin-left:6px;margin-right:6px;border-radius:25px}.status-grid{gap:11px}.status-card{border-radius:19px}.question{border-radius:15px;padding:0 14px}.media{padding:8px}.briefing-grid{gap:11px}.briefing-card{border-radius:20px}.overview-stamp,.overview-actions a{border-radius:14px}.game-shot{border-radius:22px}.feed-card{border-radius:19px}.site-footer{border-radius:25px 25px 0 0}}
/* Editorial flight-dossier system: long-form rhythm, clear hierarchy, restrained cards */
body{font-family:"Manrope",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.chapter-sand{background:#dfd5c5;color:#0b1729}
.hero h1,.section-head h2,.media-copy h2,.crew-layout h2,.final h2,.overview-heading h2,.briefing-card h3,.article-hero h1,.tool-hero h1,.chapter-copy h2,.chapter-copy h3,.article-body h2,.article-body h3{font-family:"Barlow Condensed","Arial Narrow",sans-serif;font-weight:700}
.hero h1{font-weight:800;letter-spacing:-.035em;line-height:.78}.hero h1 .hero-title-main{letter-spacing:-.035em;line-height:.76}.hero-shout strong{font-family:"Barlow Condensed","Arial Narrow",sans-serif;font-size:20px;font-weight:700}.lead{max-width:690px}
.verification-bar{width:min(1180px,calc(100% - 48px));min-height:112px;margin:28px auto;display:grid;grid-template-columns:1fr 1.3fr .65fr auto;align-items:center;gap:28px;padding:22px 28px;background:#fffdf7;color:#0b1729;border:1px solid #d8d1c5;border-radius:3px;box-shadow:0 20px 60px rgba(0,0,0,.18)}.verification-bar>div{display:grid;gap:7px}.verification-bar span{font-size:8px;letter-spacing:.16em;color:#8a5b10;font-weight:800}.verification-bar strong{font-size:12px;line-height:1.45}.verification-bar a{padding:15px 18px;border:1px solid #b9b2a6;color:#8a4c05;font-size:9px;font-weight:800;letter-spacing:.08em;text-align:center}
.editorial-chapter{display:grid;grid-template-columns:150px minmax(0,790px);justify-content:center;gap:70px;padding:120px clamp(24px,7vw,112px)}.chapter-light{background:#f4efe4;color:#0b1729}.chapter-dark{background:#09182a;color:#f8fbff}.chapter-rail{display:flex;flex-direction:column;align-items:center;padding-top:8px;border-right:1px solid currentColor;opacity:.42}.chapter-rail b{font-family:"Barlow Condensed","Arial Narrow",sans-serif;font-size:104px;line-height:.8;font-weight:600}.chapter-rail span{margin-top:44px;font-size:8px;letter-spacing:.22em;writing-mode:vertical-rl}.chapter-copy{max-width:790px}.chapter-copy h2{font-size:clamp(58px,6vw,86px);line-height:.9;letter-spacing:-.025em;margin:18px 0 36px}.chapter-copy h3{font-size:35px;line-height:1.05;margin:48px 0 16px}.chapter-copy p{font-size:16px;line-height:1.86;margin:0 0 24px;color:#46515a}.chapter-dark .chapter-copy p{color:#aeb9c5}.chapter-copy .chapter-lead{font-size:22px;line-height:1.55;color:inherit}.chapter-copy p a{color:#b85b00;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px}.chapter-dark .chapter-copy p a{color:#ffaf2e}.chapter-links{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid #aaa399;border-left:1px solid #aaa399;margin-top:48px}.chapter-links a{min-height:126px;padding:22px;border-right:1px solid #aaa399;border-bottom:1px solid #aaa399;display:grid;grid-template-columns:1fr 20px;align-content:center}.chapter-links span{font-size:8px;letter-spacing:.14em;color:#9a570d}.chapter-links strong{margin-top:10px}.chapter-links b{grid-column:2;grid-row:1/3;align-self:center;color:#d67e00}.intent-lines{margin-top:52px;border-top:1px solid #324153}.intent-lines article{display:grid;grid-template-columns:70px 1fr;gap:24px;padding:32px 0;border-bottom:1px solid #324153}.intent-lines article>span{font-family:"Barlow Condensed","Arial Narrow",sans-serif;font-size:31px;color:#ff9f0a}.intent-lines h3{margin:0 0 12px;font-size:34px}.intent-lines p{margin:0}
.status,.questions,.feed-section,.dispatch-section,.source-manifest,.evidence,.resource-hub{border-radius:0!important;margin:0!important}.status{padding-top:105px;padding-bottom:105px}.questions .section-head,.questions .question-list{max-width:980px;margin-left:auto;margin-right:auto}.questions .question{border-left:0;border-right:0;border-radius:0;background:transparent}.questions .question[open]{background:transparent}.questions .question p{font-size:16px;max-width:790px}.feed-section{background:#f4efe4;color:#0b1729}.feed-section .section-head>p,.feed-section .feed-card small{color:#59636d}.feed-grid{gap:2px}.feed-card{border-radius:0;box-shadow:none}.feed-card img{filter:saturate(.92)}.manifest-section{border-radius:0!important;margin:0!important}.dispatch-card,.source-manifest-grid>a{border-radius:2px}.compact-directory{padding-top:105px;padding-bottom:105px}.directory-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border-top:1px solid #2c3a49;border-left:1px solid #2c3a49}.directory-group{padding:24px;border-right:1px solid #2c3a49;border-bottom:1px solid #2c3a49;display:flex;flex-direction:column;min-width:0}.directory-group>strong{min-height:38px;color:#ff9f0a;font-size:8px;letter-spacing:.14em}.directory-group a{display:grid;grid-template-columns:1fr 12px;gap:8px;padding:13px 0;border-top:1px solid #1f2d3a;color:#a9b4bf;font-size:11px;line-height:1.35}.directory-group a:hover{color:#fff}.directory-group a b{color:#ff9f0a}
.inner-main{padding-top:0}.inner-header{z-index:50}.article-hero{min-height:760px;padding-top:190px;padding-bottom:82px}.article-hero h1{max-width:960px;font-size:clamp(66px,7.3vw,112px);line-height:.88;letter-spacing:-.025em}.article-hero>p:not(.eyebrow){max-width:780px;line-height:1.75}.article-toc{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:0;padding:22px clamp(24px,7vw,112px);background:#fffdf7;color:#0b1729;border-bottom:1px solid #d2cabd;position:relative;z-index:2}.article-toc strong,.article-toc a{padding:9px 16px;border-right:1px solid #d2cabd;font-size:9px;line-height:1.25}.article-toc strong{color:#9a570d;letter-spacing:.14em}.article-toc a:hover{color:#b85b00}.article-body{grid-template-columns:minmax(0,790px) 286px;justify-content:center;gap:90px;padding-top:95px;padding-bottom:95px;background:#f4efe4}.article-body article{max-width:790px}.article-body article>section{padding-bottom:74px;margin-bottom:74px}.article-body h2{font-size:clamp(48px,5.2vw,72px);line-height:.94;letter-spacing:-.02em}.article-body h3{font-size:31px}.article-body p,.article-body li{font-size:16px;line-height:1.88}.long-copy{font-size:16px;max-width:790px}.current-answer h2{font-size:clamp(42px,4.4vw,62px);line-height:1}.answer-status{margin-top:34px;padding:22px 24px;display:grid;grid-template-columns:150px 1fr auto;gap:18px;align-items:center;background:#0b1729;color:#fff;border-left:5px solid #ff9f0a}.answer-status span{font-size:8px;color:#ffb132;letter-spacing:.13em}.answer-status strong{font-size:12px}.answer-status a{font-size:9px;color:#ffb132}.intent-depth{padding:0!important;border-bottom:0!important}.depth-block{position:relative;padding:0 0 78px;margin:0 0 78px;border-bottom:1px solid #b6b0a7}.depth-block .section-number{display:block;font-family:"Barlow Condensed","Arial Narrow",sans-serif;font-size:60px;line-height:1;color:#c56a09}.depth-block h2{margin-top:12px}.article-figure{margin:42px 0 0}.article-figure img{aspect-ratio:16/9;object-fit:cover}.article-body aside{position:sticky;top:145px}.aside-card{border-radius:0}.fact-columns{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}.fact-columns>div{min-width:0}.fact-columns h3{margin-top:0}.fact-columns .evidence-list li{display:block;padding:15px 16px;font-size:13px;line-height:1.55}.fact-columns .evidence-list i{display:block;margin-bottom:6px}.semantic-list{grid-template-columns:1fr}.semantic-link{min-height:0;padding:20px 0;border-left:0;border-right:0}.compact-section{padding-top:78px;padding-bottom:78px}.compact-section .mini-grid{max-width:1180px;margin:auto}.compact-section .section-head{max-width:1180px;margin-left:auto;margin-right:auto}.mini-link{min-height:132px}.log-section{padding-top:0}
@media(max-width:1100px){.verification-bar{grid-template-columns:1fr 1fr}.editorial-chapter{grid-template-columns:100px minmax(0,790px);gap:45px}.directory-grid{grid-template-columns:repeat(3,1fr)}.article-body{grid-template-columns:minmax(0,720px);gap:45px}.article-body aside{position:static;grid-template-columns:repeat(3,1fr)}}
@media(max-width:760px){.verification-bar{width:calc(100% - 24px);grid-template-columns:1fr;padding:22px}.editorial-chapter{grid-template-columns:1fr;padding:82px 22px}.chapter-rail{display:none}.chapter-copy h2{font-size:56px}.chapter-copy h3{font-size:31px}.chapter-copy .chapter-lead{font-size:20px}.chapter-links{grid-template-columns:1fr}.intent-lines article{grid-template-columns:45px 1fr;gap:12px}.directory-grid{grid-template-columns:1fr}.directory-group{padding:22px}.article-hero{min-height:700px;padding:170px 22px 70px}.article-hero h1{font-size:58px}.article-toc{justify-content:flex-start;overflow:auto;flex-wrap:nowrap;padding:14px 12px}.article-toc strong,.article-toc a{white-space:nowrap}.article-body{padding:72px 22px}.article-body aside{grid-template-columns:1fr}.answer-status{grid-template-columns:1fr}.fact-columns{grid-template-columns:1fr}.authority-bullets{grid-template-columns:1fr}.hero h1{font-size:21vw}.hero h1 .hero-title-main{line-height:.82}}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;animation:none!important;transition:none!important}.reveal{opacity:1;transform:none}}

`;
}
function sitemap() {
  const entries = [];
  Object.keys(languages).forEach((locale) => {
    entries.push([localizedUrl(locale), locale === "en" ? "1.0" : "0.8"]);
    PAGE_SLUGS.forEach((slug) => entries.push([localizedUrl(locale, slug), "0.9"]));
    TOOL_SLUGS.forEach((slug) => entries.push([localizedUrl(locale, `tools/${slug}`), "0.8"]));
  });
  AUTHORITY_SLUGS.forEach((slug) => entries.push([localizedUrl("en", slug), "0.9"]));
  WIKI_SLUGS.forEach((slug) => entries.push([localizedUrl("en", `wiki/${slug}`), "0.8"]));
  NEWS_SLUGS.forEach((slug) => entries.push([localizedUrl("en", `news/${slug}`), "0.8"]));
  STATIC_SLUGS.forEach((slug) => entries.push([localizedUrl("en", slug), "0.5"]));
  entries.push([localizedUrl("en", "media"), "0.8"]);
  const urls = entries.map(([loc, priority]) => `<url><loc>${loc}</loc><lastmod>${LAST_CHECKED}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname === "www.dearpassengerscrew.com") {
      return Response.redirect(`https://dearpassengerscrew.com${url.pathname}${url.search}`, 301);
    }
    if (url.pathname === "/robots.txt") {
      return new Response(`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`, { headers: { "content-type": "text/plain; charset=utf-8" } });
    }
    if (url.pathname === "/sitemap.xml") {
      return new Response(sitemap(), { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public,max-age=3600" } });
    }
    if (url.pathname === "/favicon.svg") {
      const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#071521"/><path d="M17 32h30M32 17v30" stroke="#ff9f0a" stroke-width="7" stroke-linecap="round" transform="rotate(45 32 32)"/><circle cx="32" cy="32" r="27" fill="none" stroke="#2ee6a6" stroke-width="2"/></svg>`;
      return new Response(icon, { headers: { "content-type": "image/svg+xml", "cache-control": "public,max-age=86400" } });
    }
    if (url.pathname === "/favicon.ico") {
      return Response.redirect(`${SITE}/favicon.svg`, 301);
    }
    const originalPathParts = url.pathname.split("/").filter(Boolean);
    if (originalPathParts[0]?.toLowerCase() === "en") {
      const rest = originalPathParts.slice(1).join("/");
      const target = rest ? `${SITE}/${rest}/` : `${SITE}/`;
      return Response.redirect(`${target}${url.search}`, 301);
    }
    if (url.pathname !== "/" && !url.pathname.endsWith("/") && !url.pathname.split("/").pop()?.includes(".")) {
      return Response.redirect(`${SITE}${url.pathname}/${url.search}`, 301);
    }
    const pathParts = url.pathname.split("/").filter(Boolean);
    if (pathParts.length === 0) {
      return new Response(page("en"), {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public,max-age=300,s-maxage=3600",
          "x-content-type-options": "nosniff",
          "referrer-policy": "strict-origin-when-cross-origin",
          "permissions-policy": "camera=(), microphone=(), geolocation=()"
        }
      });
    }
    const explicitLocale = languages[pathParts[0]?.toLowerCase()] && pathParts[0]?.toLowerCase() !== "en"
      ? pathParts[0].toLowerCase()
      : null;
    const locale = explicitLocale || "en";
    const routeParts = explicitLocale ? pathParts.slice(1) : pathParts;
    let html;
    if (routeParts.length === 0) {
      html = page(locale);
    } else if (routeParts.length === 1 && PAGE_SLUGS.includes(routeParts[0])) {
      html = intentPage(locale, routeParts[0]);
    } else if (locale === "en" && routeParts.length === 1 && AUTHORITY_SLUGS.includes(routeParts[0])) {
      html = deepContentPage("authority", routeParts[0]);
    } else if (locale === "en" && routeParts.length === 1 && STATIC_SLUGS.includes(routeParts[0])) {
      html = deepContentPage("static", routeParts[0]);
    } else if (locale === "en" && routeParts.length === 1 && routeParts[0] === "media") {
      html = mediaPage();
    } else if (locale === "en" && routeParts.length === 2 && routeParts[0] === "wiki" && WIKI_SLUGS.includes(routeParts[1])) {
      html = deepContentPage("wiki", routeParts[1]);
    } else if (locale === "en" && routeParts.length === 2 && routeParts[0] === "news" && NEWS_SLUGS.includes(routeParts[1])) {
      html = deepContentPage("news", routeParts[1]);
    } else if (routeParts.length === 2 && routeParts[0] === "tools" && TOOL_SLUGS.includes(routeParts[1])) {
      html = toolPage(locale, routeParts[1]);
    } else {
      return new Response("Not Found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });
    }
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public,max-age=300,s-maxage=3600",
        "x-content-type-options": "nosniff",
        "referrer-policy": "strict-origin-when-cross-origin",
        "permissions-policy": "camera=(), microphone=(), geolocation=()"
      }
    });
  }
};
