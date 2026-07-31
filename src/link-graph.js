export const LINK_TARGETS = {
  "page:release-date": ["Release date tracker", "See what the official 2026 window does and does not confirm."],
  "page:demo": ["Public demo status", "Check the Gamescom build, later public-demo plan and current download status."],
  "page:multiplayer": ["Multiplayer and online co-op", "Separate confirmed online play from unannounced networking features."],
  "page:how-many-players": ["Maximum player count", "See why a precise crew limit remains unconfirmed."],
  "page:platforms": ["PC and console platforms", "Check Windows, PlayStation, Xbox, Switch, macOS and Linux status."],
  "page:gameplay": ["Complete gameplay loop", "Follow the flight from manifest choices to cabin emergencies."],
  "page:trailer": ["Official trailer evidence", "Review what the footage shows without treating edits as specifications."],
  "page:characters": ["Crew roles and passenger types", "Understand visible jobs without inventing a character roster."],
  "page:system-requirements": ["Official PC requirements", "Compare the published minimum with the details still missing."],
  "page:news": ["Verified news archive", "Track dated announcements and source-backed changes."],
  "page:wiki": ["Dear Passengers wiki", "Explore systems-first entries with speculation clearly marked."],
  "tool:can-i-run-it": ["Check whether your PC can run it", "Compare a device with the official minimum specification."],
  "tool:crew-check": ["Check your planned crew", "Test platform, mode and party-size assumptions."],
  "tool:countdown": ["Track the 2026 release window", "Use a year-window tracker instead of a fabricated launch date."],
  "tool:system-compare": ["Compare minimum and planning hardware", "See official requirements beside a labelled editorial target."],
  "tool:status-tracker": ["Open the live status board", "Scan confirmed, attributed and unknown fields in one place."],
  "tool:role-quiz": ["Find a likely crew role", "Match your working style to visible crew responsibilities."],
  "authority:price": ["Price and free-to-play status", "Check why no exact launch price can be confirmed yet."],
  "authority:download": ["Safe download guide", "Avoid fake installers, APK claims and unofficial launchers."],
  "authority:steam": ["Official Steam record", "Review App ID, store features, languages and wishlist reports."],
  "authority:solo": ["Single-player status", "See what Steam confirms and what solo crew management has not explained."],
  "authority:crossplay": ["Crossplay and split-screen status", "Separate online co-op from unannounced cross-platform features."],
  "authority:languages": ["Supported language table", "Check interface support without assuming full audio or subtitles."],
  "authority:developer": ["FLEXUS developer profile", "Understand who is developing and publishing Dear Passengers."],
  "authority:confirmed-features": ["Confirmed feature checklist", "Scan the evidence-backed feature set and open questions."],
  "wiki:pilot-role": ["Pilot role field guide", "Connect cockpit decisions with cabin consequences."],
  "wiki:cabin-crew": ["Cabin crew field guide", "Review service, passenger and emergency responsibilities."],
  "wiki:flight-flow": ["Flight-flow walkthrough", "Follow the known sequence before, during and after takeoff."],
  "wiki:passengers": ["Passenger systems", "See how needs, risk and physical behavior shape a flight."],
  "wiki:cargo-and-payouts": ["Cargo and payout systems", "Understand the visible risk-versus-reward loop."],
  "wiki:weather-and-turbulence": ["Weather and turbulence", "Connect outside flight conditions with cabin physics."],
  "wiki:emergency-handling": ["Emergency handling", "Organize visible incident response without inventing procedures."],
  "wiki:items-and-aircraft-areas": ["Items and aircraft areas", "Map observed spaces and objects without creating fake item stats."],
  "news:steam-reveal-2026": ["Steam reveal report", "Read the dated record of the store launch and 2026 window."],
  "news:700k-wishlists": ["700,000-wishlist report", "Review the developer-reported first milestone."],
  "news:one-million-wishlists": ["One-million-wishlist report", "See how the two-day milestone was reported."],
  "news:one-point-five-million-wishlists": ["1.5-million-wishlist report", "Read the later developer-reported milestone and its limits."],
  "news:gamescom-demo-plans": ["Gamescom and public-demo report", "Trace the demo plan to the attributed developer statement."],
  "static:about": ["About this independent guide", "Understand the site’s purpose and relationship to the game."],
  "static:editorial-policy": ["Editorial and corrections policy", "See how evidence labels, updates and corrections work."],
  "static:corrections": ["Report or review a correction", "Use the documented factual-correction process."],
  "media:media": ["Official media archive", "Browse the trailer and ten full-resolution Steam screenshots."]
};

export const LINK_GRAPH = {
  "page:release-date": ["page:demo", "tool:countdown", "page:news", "authority:price", "news:gamescom-demo-plans"],
  "page:demo": ["authority:download", "page:release-date", "page:multiplayer", "page:news", "news:gamescom-demo-plans"],
  "page:multiplayer": ["page:how-many-players", "authority:solo", "authority:crossplay", "page:gameplay", "tool:crew-check"],
  "page:how-many-players": ["page:multiplayer", "tool:crew-check", "authority:solo", "authority:crossplay", "page:gameplay"],
  "page:platforms": ["page:system-requirements", "authority:steam", "authority:crossplay", "tool:can-i-run-it", "authority:languages"],
  "page:gameplay": ["page:characters", "page:trailer", "page:wiki", "wiki:flight-flow", "tool:role-quiz"],
  "page:trailer": ["media:media", "page:gameplay", "page:characters", "authority:confirmed-features", "wiki:items-and-aircraft-areas"],
  "page:characters": ["wiki:pilot-role", "wiki:cabin-crew", "wiki:passengers", "page:gameplay", "tool:role-quiz"],
  "page:system-requirements": ["tool:can-i-run-it", "tool:system-compare", "page:platforms", "authority:steam", "page:demo"],
  "page:news": ["news:steam-reveal-2026", "news:700k-wishlists", "news:gamescom-demo-plans", "news:one-point-five-million-wishlists", "page:release-date", "page:demo", "tool:status-tracker"],
  "page:wiki": ["wiki:flight-flow", "wiki:pilot-role", "wiki:cabin-crew", "wiki:weather-and-turbulence", "page:gameplay"],
  "tool:can-i-run-it": ["page:system-requirements", "tool:system-compare", "page:platforms", "page:demo"],
  "tool:crew-check": ["page:multiplayer", "page:how-many-players", "authority:crossplay", "authority:solo"],
  "tool:countdown": ["page:release-date", "page:news", "page:demo", "tool:status-tracker"],
  "tool:system-compare": ["page:system-requirements", "tool:can-i-run-it", "page:platforms", "page:demo"],
  "tool:status-tracker": ["page:release-date", "page:demo", "page:news", "authority:steam", "static:editorial-policy"],
  "tool:role-quiz": ["page:characters", "wiki:pilot-role", "wiki:cabin-crew", "page:gameplay"],
  "authority:price": ["page:release-date", "page:demo", "authority:steam", "tool:countdown", "tool:status-tracker"],
  "authority:download": ["page:demo", "authority:steam", "page:release-date", "news:gamescom-demo-plans"],
  "authority:steam": ["page:release-date", "page:platforms", "page:system-requirements", "authority:price", "authority:languages", "news:700k-wishlists", "page:news"],
  "authority:solo": ["page:multiplayer", "page:how-many-players", "page:gameplay", "tool:role-quiz"],
  "authority:crossplay": ["page:multiplayer", "page:platforms", "page:how-many-players", "tool:crew-check"],
  "authority:languages": ["authority:steam", "page:platforms", "page:system-requirements", "page:news"],
  "authority:developer": ["authority:steam", "page:news", "news:steam-reveal-2026", "static:about"],
  "authority:confirmed-features": ["page:gameplay", "page:multiplayer", "page:platforms", "page:trailer", "page:wiki"],
  "wiki:pilot-role": ["wiki:cabin-crew", "wiki:flight-flow", "page:gameplay", "tool:role-quiz"],
  "wiki:cabin-crew": ["wiki:pilot-role", "wiki:passengers", "wiki:emergency-handling", "page:characters"],
  "wiki:flight-flow": ["wiki:pilot-role", "wiki:cabin-crew", "wiki:cargo-and-payouts", "page:gameplay"],
  "wiki:passengers": ["wiki:cabin-crew", "wiki:cargo-and-payouts", "wiki:weather-and-turbulence", "page:characters"],
  "wiki:cargo-and-payouts": ["wiki:passengers", "wiki:flight-flow", "wiki:items-and-aircraft-areas", "page:gameplay"],
  "wiki:weather-and-turbulence": ["wiki:emergency-handling", "wiki:pilot-role", "wiki:passengers", "page:trailer"],
  "wiki:emergency-handling": ["wiki:weather-and-turbulence", "wiki:cabin-crew", "wiki:items-and-aircraft-areas", "page:gameplay"],
  "wiki:items-and-aircraft-areas": ["wiki:cargo-and-payouts", "wiki:emergency-handling", "media:media", "page:trailer"],
  "news:steam-reveal-2026": ["page:release-date", "authority:steam", "authority:developer", "page:news"],
  "news:700k-wishlists": ["news:one-million-wishlists", "authority:steam", "page:news", "authority:developer"],
  "news:one-million-wishlists": ["news:700k-wishlists", "news:one-point-five-million-wishlists", "authority:steam", "page:news"],
  "news:one-point-five-million-wishlists": ["news:one-million-wishlists", "authority:steam", "page:news", "authority:developer"],
  "news:gamescom-demo-plans": ["page:demo", "authority:download", "page:release-date", "page:news"],
  "static:about": ["static:editorial-policy", "static:corrections", "authority:developer", "page:news"],
  "static:editorial-policy": ["static:corrections", "static:about", "page:news", "tool:status-tracker"],
  "static:corrections": ["static:editorial-policy", "static:about", "page:news", "tool:status-tracker"],
  "media:media": ["page:trailer", "page:gameplay", "authority:confirmed-features", "page:wiki"]
};

export function targetPath(target, locale = "en") {
  const [kind, slug] = target.split(":");
  if (kind === "page") return `/${locale}/${slug}/`;
  if (kind === "tool") return `/${locale}/tools/${slug}/`;
  if (kind === "wiki" || kind === "news") return `/en/${kind}/${slug}/`;
  if (kind === "media") return "/en/media/";
  return `/en/${slug}/`;
}

export function localizedTargetAllowed(target, locale) {
  if (locale === "en") return true;
  return target.startsWith("page:") || target.startsWith("tool:");
}
