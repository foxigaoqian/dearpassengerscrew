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

function alternateLinks() {
  return Object.keys(languages).map((locale) => `<link rel="alternate" hreflang="${locale}" href="${SITE}/${locale}/">`).join("");
}

function page(locale) {
  const t = copy[locale] || copy.en;
  const lang = languages[locale];
  const statusCards = t.cards.map(([k, v, note], index) => `<article class="status-card reveal"><span>0${index + 1}</span><p>${esc(k)}</p><strong>${esc(v)}</strong><small>${esc(note)}</small></article>`).join("");
  const questions = t.questions.map(([q, a], index) => `<details class="question reveal"${index === 0 ? " open" : ""}><summary><b>0${index + 1}</b>${esc(q)}<i>+</i></summary><p>${esc(a)}</p></details>`).join("");
  const evidence = t.evidence.map((item) => `<li><i></i>${esc(item)}</li>`).join("");
  const features = t.features.map(([n, title, body]) => `<article class="feature reveal"><span>${n}</span><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join("");
  const timeline = t.timeline.map(([state, source, body]) => `<article class="timeline-item reveal"><span>${esc(state)}</span><h3>${esc(source)}</h3><p>${esc(body)}</p></article>`).join("");
  const langMenu = Object.entries(languages).map(([code, value]) => `<a href="/${code}/" ${code === locale ? 'aria-current="page"' : ""}>${esc(value.name)}</a>`).join("");
  const options = (items) => items.map((item, index) => `<option value="${index}">${esc(item)}</option>`).join("");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoGame",
        name: "Dear Passengers",
        url: `${SITE}/${locale}/`,
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
  <link rel="canonical" href="${SITE}/${locale}/">
  ${alternateLinks()}
  <link rel="alternate" hreflang="x-default" href="${SITE}/en/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(t.title)}">
  <meta property="og:description" content="${esc(t.description)}">
  <meta property="og:url" content="${SITE}/${locale}/">
  <meta property="og:image" content="${HERO}">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  <style>${styles()}</style>
</head>
<body>
  <div class="ticker" aria-hidden="true"><div>${[...t.ticker, ...t.ticker, ...t.ticker].map((x) => `<span>${esc(x)}</span><b>✦</b>`).join("")}</div></div>
  <header class="header">
    <a class="brand" href="/${locale}/"><span>×</span><b>DEAR PASSENGERS<small>CREW INTELLIGENCE</small></b></a>
    <button class="menu-button" aria-label="Menu">MENU</button>
    <nav>${t.nav.map((item, i) => `<a href="#${["status","questions","gameplay","crew"][i]}">${esc(item)}</a>`).join("")}</nav>
    <div class="language"><button>${esc(lang.label)}⌄</button><div>${langMenu}</div></div>
  </header>

  <main>
    <section class="hero">
      <div class="hero-bg"></div><div class="hero-grid"></div>
      <div class="hero-copy">
        <p class="eyebrow"><i></i>${esc(t.eyebrow)}</p>
        <h1><span>DEAR</span>PASSENGERS</h1>
        <p class="lead">${esc(t.intro)}</p>
        <div class="actions"><a class="primary" href="#status">${esc(t.cta1)} <b>↓</b></a><a class="secondary" href="#crew">${esc(t.cta2)} <b>↗</b></a></div>
      </div>
      <a class="capsule" href="${STEAM}" rel="noopener" target="_blank"><img src="${CAPSULE}" alt="Dear Passengers official Steam artwork"><span>OFFICIAL STEAM APP · 4534960</span></a>
      <div class="hero-facts"><div><small>RELEASE</small><b>2026</b><i></i></div><div><small>PUBLIC DEMO</small><b>${esc(t.cards[2][1])}</b><i class="amber"></i></div><div><small>MAX PLAYERS</small><b>${esc(t.cards[3][1])}</b><i class="muted"></i></div></div>
      <small class="media-credit">OFFICIAL FLEXUS GAME MEDIA · © FLEXUS</small>
    </section>

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

    <section class="final">
      <img src="${TRAILER_ART}" alt="Dear Passengers official trailer artwork">
      <div><p class="kicker">JOIN THE CREW</p><h2>${esc(t.finalTitle)}</h2><p>${esc(t.finalText)}</p><a class="primary" href="${STEAM}" target="_blank" rel="noopener">${esc(t.steam)} <b>↗</b></a></div>
    </section>
  </main>

  <footer><a class="brand" href="/${locale}/"><span>×</span><b>DEAR PASSENGERS<small>CREW INTELLIGENCE</small></b></a><p>${esc(t.footer)}</p><p>${esc(t.last)}</p></footer>
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

function styles() {
  return `
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#06101a;color:#f5f7fa;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow-x:hidden}a{color:inherit;text-decoration:none}button,select{font:inherit}img{display:block;max-width:100%}.ticker{height:31px;background:#ff9f0a;color:#06101a;overflow:hidden;font-size:9px;font-weight:900;letter-spacing:.2em}.ticker div{display:flex;align-items:center;gap:38px;width:max-content;height:100%;animation:marquee 24s linear infinite}.ticker span{white-space:nowrap}.ticker b{font-size:7px}@keyframes marquee{to{transform:translateX(-33.333%)}}.header{height:82px;display:grid;grid-template-columns:260px 1fr 120px;align-items:center;gap:24px;padding:0 clamp(24px,5vw,82px);position:absolute;top:31px;left:0;right:0;z-index:20;border-bottom:1px solid rgba(255,255,255,.12);background:linear-gradient(180deg,rgba(2,9,16,.82),rgba(2,9,16,.2));backdrop-filter:blur(8px)}.brand{display:flex;align-items:center;gap:12px}.brand>span{display:grid;place-items:center;width:40px;height:40px;border:1px solid rgba(255,255,255,.24);border-radius:50%;font-size:30px;line-height:1;color:#ff9f0a;font-weight:300;transform:rotate(45deg)}.brand>b{font-size:12px;letter-spacing:.08em}.brand small{display:block;color:#738092;font-size:7px;letter-spacing:.16em;margin-top:4px}.header nav{display:flex;justify-content:center;gap:32px}.header nav a{font-size:11px;color:#b5bec9;position:relative}.header nav a:after{content:"";position:absolute;left:0;right:100%;bottom:-10px;height:1px;background:#ff9f0a;transition:.25s}.header nav a:hover{color:white}.header nav a:hover:after{right:0}.language{position:relative;justify-self:end}.language>button{width:92px;height:38px;border:1px solid rgba(255,255,255,.22);background:rgba(4,13,22,.6);color:#fff;font-size:9px;font-weight:800;letter-spacing:.14em}.language>div{display:none;position:absolute;right:0;top:42px;width:160px;background:#07131f;border:1px solid #27333f;padding:7px}.language:hover>div,.language:focus-within>div{display:grid}.language a{padding:9px 11px;font-size:11px;color:#aeb7c2}.language a:hover,.language a[aria-current=page]{background:#ff9f0a;color:#07131f}.menu-button{display:none}.hero{min-height:880px;position:relative;display:flex;align-items:center;padding:160px clamp(24px,5.6vw,90px) 120px;isolation:isolate}.hero-bg{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(1,8,15,.98) 0%,rgba(2,10,18,.88) 30%,rgba(2,10,18,.25) 66%,rgba(2,10,18,.55) 100%),linear-gradient(0deg,#06101a 0%,transparent 38%),url("${HERO}");background-size:cover;background-position:center;z-index:-3}.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:80px 80px;mask-image:linear-gradient(to bottom,black,transparent 88%);z-index:-2}.hero-copy{width:min(820px,69vw);position:relative;z-index:2}.eyebrow,.kicker{font-size:9px;letter-spacing:.2em;font-weight:800;text-transform:uppercase;color:#93a0ad}.eyebrow{display:flex;align-items:center;gap:10px}.eyebrow i{width:8px;height:8px;background:#2ee6a6;border-radius:50%;box-shadow:0 0 14px #2ee6a6}.hero h1{font-size:clamp(76px,9.2vw,150px);line-height:.72;letter-spacing:-.075em;margin:32px 0 36px;text-transform:uppercase}.hero h1 span{display:block;font-size:.46em;line-height:1.08;letter-spacing:-.04em}.lead{max-width:640px;color:#aab5c0;font-size:17px;line-height:1.75}.actions{display:flex;gap:12px;margin-top:34px}.primary,.secondary{min-width:205px;height:56px;display:flex;justify-content:space-between;align-items:center;padding:0 20px;font-size:10px;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.primary{background:#ff9f0a;color:#07111b}.secondary{border:1px solid rgba(255,255,255,.65);background:rgba(3,12,20,.38)}.primary:hover{background:#ffb43e}.secondary:hover{background:white;color:#07111b}.capsule{position:absolute;right:5vw;top:150px;width:255px;padding:7px 7px 11px;background:rgba(4,12,20,.7);border:1px solid rgba(255,255,255,.18);transform:rotate(2deg);box-shadow:0 24px 60px rgba(0,0,0,.34)}.capsule span{display:block;color:#ff9f0a;font-size:7px;letter-spacing:.14em;margin:9px 5px 0}.hero-facts{position:absolute;right:5vw;bottom:88px;width:375px;border:1px solid rgba(255,255,255,.16);background:rgba(2,10,18,.72);backdrop-filter:blur(12px)}.hero-facts>div{height:62px;display:grid;grid-template-columns:1fr 1.2fr 10px;align-items:center;padding:0 18px;border-bottom:1px solid rgba(255,255,255,.1)}.hero-facts>div:last-child{border:0}.hero-facts small{font-size:7px;color:#6f7b89;letter-spacing:.14em}.hero-facts b{font-size:10px}.hero-facts i{width:4px;height:4px;border-radius:50%;background:#2ee6a6;box-shadow:0 0 8px #2ee6a6}.hero-facts i.amber{background:#ff9f0a;box-shadow:0 0 8px #ff9f0a}.hero-facts i.muted{background:#647180;box-shadow:none}.media-credit{position:absolute;left:5.6vw;bottom:25px;color:#596572;font-size:6px;letter-spacing:.13em}.section{padding:115px clamp(24px,7vw,112px)}.section-head{max-width:760px;margin-bottom:48px}.section-head h2,.media-copy h2,.crew-layout h2,.final h2{font-size:clamp(42px,5vw,78px);line-height:.95;letter-spacing:-.045em;margin:16px 0 22px}.section-head>p:last-child,.media-copy>p,.crew-layout>div>p:last-child,.final p{color:#9ba8b5;line-height:1.7}.section-head.split{max-width:none;display:grid;grid-template-columns:1.15fr .85fr;gap:100px;align-items:end}.status{background:#081521}.status-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #263441;border-left:1px solid #263441}.status-card{min-height:210px;padding:25px;border-right:1px solid #263441;border-bottom:1px solid #263441;display:flex;flex-direction:column;position:relative;background:linear-gradient(135deg,rgba(255,255,255,.025),transparent)}.status-card>span{position:absolute;right:22px;top:20px;font-size:9px;color:#53616e}.status-card p{font-size:9px;color:#7d8995;letter-spacing:.12em;text-transform:uppercase;margin:0}.status-card strong{font-size:clamp(24px,2.4vw,38px);margin:auto 0 8px}.status-card small{color:#7f8c99}.source-link{display:block;margin-top:24px;color:#ff9f0a;font-size:8px;letter-spacing:.14em}.questions{background:#06101a}.question-list{border-top:1px solid #263441}.question{border-bottom:1px solid #263441}.question summary{list-style:none;cursor:pointer;min-height:92px;display:grid;grid-template-columns:54px 1fr 28px;align-items:center;font-size:clamp(18px,2vw,28px);font-weight:750}.question summary::-webkit-details-marker{display:none}.question summary b{font-size:9px;color:#ff9f0a}.question summary i{font-style:normal;font-size:24px;color:#74818e;transition:.2s}.question[open] summary i{transform:rotate(45deg)}.question p{max-width:780px;padding:0 0 32px 54px;margin:0;color:#9ba8b5;line-height:1.75}.media{padding-top:50px;padding-bottom:50px;background:#ff9f0a;color:#07111b}.media-grid{display:grid;grid-template-columns:1.3fr .7fr;min-height:570px}.video{position:relative;box-shadow:0 30px 80px rgba(0,0,0,.25)}.video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.media-copy{padding:60px;background:#f3f1ec}.media-copy .kicker{color:#94600b}.media-copy h2{font-size:clamp(38px,4vw,62px)}.media-copy>p{color:#46515b}.media-copy ul{list-style:none;padding:20px 0 0;margin:0;display:grid;gap:16px}.media-copy li{font-size:12px;font-weight:700;display:flex;align-items:center;gap:12px}.media-copy li i{width:7px;height:7px;border-radius:50%;background:#ff9f0a}.gameplay{background:#07121d}.game-shot{height:590px;position:relative;overflow:hidden}.game-shot:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,12,20,.08),rgba(4,12,20,.72))}.game-shot img{width:100%;height:100%;object-fit:cover}.game-shot>div{position:absolute;z-index:2;right:6%;bottom:10%;text-align:right}.game-shot span{font-size:8px;letter-spacing:.18em;color:#ff9f0a}.game-shot b{display:block;font-size:clamp(36px,4.8vw,75px);line-height:.82;letter-spacing:-.06em;margin-top:12px}.features{display:grid;grid-template-columns:repeat(3,1fr);border-left:1px solid #263441}.feature{padding:32px;border-right:1px solid #263441;border-bottom:1px solid #263441;min-height:235px}.feature span{font-size:9px;color:#ff9f0a}.feature h3{font-size:28px;margin:38px 0 12px}.feature p{color:#8c99a6;line-height:1.65;margin:0}.crew{background:#e8e6df;color:#07111b}.crew-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:90px}.crew-layout .kicker{color:#8a5b10}.crew-form{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;align-content:start}.crew-form label{font-size:9px;text-transform:uppercase;letter-spacing:.12em;font-weight:800}.crew-form select{display:block;width:100%;height:58px;margin-top:10px;border:1px solid #a6a6a0;background:transparent;padding:0 13px;color:#07111b}.crew-form button{grid-column:1/-1;height:58px;border:0;background:#ff9f0a;color:#07111b;font-size:10px;font-weight:900;text-transform:uppercase;display:flex;justify-content:space-between;align-items:center;padding:0 20px;cursor:pointer}.result{grid-column:1/-1;display:none;padding:24px;border:1px solid #a6a6a0}.result.show{display:block}.result span{font-size:11px;font-weight:900;letter-spacing:.08em}.result span i{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:10px;background:#2f8f68}.result.waiting span i{background:#d17b00}.result.partial span i{background:#ff9f0a}.result p{margin:8px 0 0;color:#515960;line-height:1.6}.evidence{background:#06101a}.timeline{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #263441}.timeline-item{min-height:260px;padding:28px;border-right:1px solid #263441}.timeline-item:last-child{border-right:0}.timeline-item span{font-size:9px;color:#ff9f0a;text-transform:uppercase;letter-spacing:.14em}.timeline-item h3{font-size:28px;margin:65px 0 14px}.timeline-item p{color:#8996a3;line-height:1.65}.final{min-height:650px;position:relative;display:flex;align-items:center;padding:100px clamp(24px,7vw,112px);overflow:hidden}.final>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}.final:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,11,18,.97),rgba(3,11,18,.78) 50%,rgba(3,11,18,.22));z-index:-1}.final>div{max-width:720px}.final p{max-width:620px}.final .primary{margin-top:30px;width:260px}footer{min-height:150px;padding:45px clamp(24px,5vw,82px);display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;border-top:1px solid #263441;background:#040c14}footer p{font-size:8px;color:#697684;letter-spacing:.1em;text-align:center}footer p:last-child{text-align:right}.reveal{opacity:0;transform:translateY(22px);transition:opacity .65s,transform .65s}.reveal.seen{opacity:1;transform:none}[dir=rtl] .hero-copy,[dir=rtl] .section-head,[dir=rtl] .media-copy,[dir=rtl] .crew-layout>div{text-align:right}[dir=rtl] .capsule{right:auto;left:5vw}[dir=rtl] .hero-facts{right:auto;left:5vw}[dir=rtl] .game-shot>div{right:auto;left:6%;text-align:left}[dir=rtl] .result span i{margin-right:0;margin-left:10px}
@media(max-width:980px){.header{grid-template-columns:1fr auto auto}.header nav{display:none;position:absolute;top:82px;left:0;right:0;background:#07131f;padding:25px;flex-direction:column}.header nav.open{display:flex}.menu-button{display:block;border:0;background:transparent;color:#fff;font-size:9px;letter-spacing:.14em}.hero{min-height:820px;padding-top:150px;align-items:flex-start}.hero-copy{width:100%;padding-top:145px}.capsule{top:135px;right:6vw;width:210px}.hero-facts{right:6vw;bottom:55px}.status-grid{grid-template-columns:repeat(2,1fr)}.media-grid,.crew-layout{grid-template-columns:1fr}.video{min-height:480px}.crew-layout{gap:45px}.section-head.split{grid-template-columns:1fr;gap:10px}.game-shot{height:480px}}
@media(max-width:680px){.ticker{height:27px}.header{top:27px;height:68px;padding:0 18px}.brand>span{width:34px;height:34px}.brand>b{font-size:10px}.language>button{width:64px}.hero{min-height:850px;padding:115px 20px 130px}.hero-bg{background-image:linear-gradient(0deg,#06101a 2%,rgba(2,10,18,.38) 55%,rgba(2,10,18,.8)),url("${HERO}");background-position:center}.hero-copy{padding-top:190px}.hero h1{font-size:19vw;margin:22px 0 24px}.lead{font-size:14px}.actions{display:grid}.primary,.secondary{width:100%;min-width:0}.capsule{top:112px;left:20px!important;right:auto!important;width:205px;transform:rotate(-2deg)}.hero-facts{left:20px!important;right:20px!important;bottom:32px;width:auto}.media-credit{display:none}.section{padding:78px 20px}.section-head{margin-bottom:34px}.section-head h2,.media-copy h2,.crew-layout h2,.final h2{font-size:42px}.status-grid{grid-template-columns:1fr}.status-card{min-height:165px}.question summary{grid-template-columns:36px 1fr 24px;font-size:18px}.question p{padding-left:36px}.media{padding:0}.media-grid{display:block}.video{min-height:240px}.media-copy{padding:55px 20px}.game-shot{height:370px}.game-shot>div{left:20px!important;right:20px!important;bottom:25px;text-align:left!important}.game-shot b{font-size:38px}.features{grid-template-columns:1fr}.feature{min-height:190px}.crew-form{grid-template-columns:1fr}.timeline{grid-template-columns:1fr}.timeline-item{min-height:200px;border-right:0;border-bottom:1px solid #263441}.timeline-item h3{margin-top:38px}.final{min-height:620px;padding:75px 20px}.final:after{background:linear-gradient(0deg,rgba(3,11,18,.98),rgba(3,11,18,.55))}footer{grid-template-columns:1fr;gap:24px;text-align:center}footer .brand{justify-content:center}footer p,footer p:last-child{text-align:center}.reveal{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;animation:none!important;transition:none!important}.reveal{opacity:1;transform:none}}
`;
}

function sitemap() {
  const urls = Object.keys(languages).map((locale) => `<url><loc>${SITE}/${locale}/</loc><lastmod>2026-07-31</lastmod><changefreq>weekly</changefreq><priority>${locale === "en" ? "1.0" : "0.8"}</priority></url>`).join("");
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
    if (url.pathname === "/favicon.ico") {
      return new Response(null, { status: 204 });
    }
    const pathParts = url.pathname.split("/").filter(Boolean);
    if (pathParts.length === 0) {
      const accept = request.headers.get("accept-language") || "";
      const detected = accept.toLowerCase().startsWith("zh") ? "zh-cn" : accept.toLowerCase().startsWith("ja") ? "ja" : accept.toLowerCase().startsWith("ar") ? "ar" : accept.toLowerCase().startsWith("tr") ? "tr" : accept.toLowerCase().startsWith("uk") ? "uk" : "en";
      return Response.redirect(`${SITE}/${detected}/`, 302);
    }
    const locale = localeFromPath(url.pathname);
    if (!languages[pathParts[0]?.toLowerCase()]) {
      return new Response("Not Found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });
    }
    return new Response(page(locale), {
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
