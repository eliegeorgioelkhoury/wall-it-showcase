# Wall it (showcase) — ROADMAP

Public presentation for the existing Wall it app. **Do not rebuild the app; keep its source private.** All presentation lives in this repo, which contains no app source. Seeded from the portfolio build plan.

- [ ] **1 — Landing page.** Thesis: "local-first, your data never leaves your device." Tokens Pine / Mint / Ink / Honey / Coin silver, General Sans + Inter. Signature: on-device data-orbit animation (points circling a phone, no cloud) + gentle scroll reveals. Honor reduced-motion.
- [ ] **2 — Web demo.** Build `expo export --platform web` from the private source; deploy the static output to Cloudflare Pages. Working "Try the web demo" link. Source stays private; only the bundled build is served.
- [ ] **3 — Case-study README.** Local-first data model, rule-based budgeting engine, append-only achievements store, single-source-of-truth premium entitlement. Prose and diagrams only, no proprietary code. Demo GIF at the top of both the landing page and the README, plus screenshots. Add an "On the App Store" link (placeholder until published).
- [ ] **4 — Hygiene.** MIT for the landing / showcase code only, topics, homepage set to the live demo URL, CI for the landing build, pin. Keep the private app repo off the public profile.
