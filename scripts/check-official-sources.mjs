import fs from "node:fs/promises";

const APP_ID = 4534960;
const API = `https://store.steampowered.com/api/appdetails?appids=${APP_ID}&l=english`;
const SNAPSHOT_URL = new URL("../data/official-status.json", import.meta.url);

const clean = (value = "") =>
  String(value)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

const languageNames = (value = "") =>
  clean(value)
    .replace(/\*languages with full audio support/gi, "")
    .split(",")
    .map((item) => item.replace(/\*/g, "").trim())
    .filter(Boolean)
    .sort();

const minimumLines = (value = "") => {
  const text = String(value)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
  return text
    .split(/\n/)
    .map((line) => line.replace(/^(Minimum:|OS:|Processor:|Memory:|Graphics:|DirectX:|Storage:)\s*/i, "").trim())
    .filter(Boolean);
};

const response = await fetch(API, {
  headers: { "user-agent": "DearPassengersCrewSourceMonitor/1.0" }
});

if (!response.ok) {
  throw new Error(`Steam source check failed with HTTP ${response.status}`);
}

const payload = await response.json();
const record = payload[String(APP_ID)];
if (!record?.success || !record.data) {
  throw new Error("Steam source check returned no app data");
}

const data = record.data;
const live = {
  appId: APP_ID,
  name: data.name,
  comingSoon: Boolean(data.release_date?.coming_soon),
  releaseDateText: clean(data.release_date?.date),
  isFree: Boolean(data.is_free),
  platforms: {
    windows: Boolean(data.platforms?.windows),
    mac: Boolean(data.platforms?.mac),
    linux: Boolean(data.platforms?.linux)
  },
  categories: (data.categories || []).map((item) => clean(item.description)).filter(Boolean).sort(),
  interfaceLanguages: languageNames(data.supported_languages),
  minimumRequirements: minimumLines(data.pc_requirements?.minimum)
};

const stored = JSON.parse(await fs.readFile(SNAPSHOT_URL, "utf8"));
const baseline = Object.fromEntries(
  Object.entries(stored).filter(([key]) => !["verifiedAt", "source"].includes(key))
);
const changedFields = Object.keys(live).filter(
  (key) => JSON.stringify(live[key]) !== JSON.stringify(baseline[key])
);
const changed = changedFields.length > 0;

console.log(JSON.stringify({ changed, changedFields, baseline, live }, null, 2));

if (process.env.GITHUB_OUTPUT) {
  await fs.appendFile(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
  await fs.appendFile(process.env.GITHUB_OUTPUT, `changed_fields=${changedFields.join(",")}\n`);
}
