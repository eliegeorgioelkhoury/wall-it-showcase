# Wall it (showcase) — ROADMAP

Public presentation for the existing Wall it app. **Do not rebuild the app; keep its source private.** All presentation lives in this repo, which contains no app source. Seeded from the portfolio build plan.

**✅ Shipped & live — https://wall-it-showcase.pages.dev**

- [x] **1 — Landing page.** Astro static site. Thesis "your data never leaves your device"; tokens Pine / Mint / Ink / Honey / Coin silver; General Sans + Inter self-hosted. Signature on-device **data-orbit** (data points circling a phone inside a device boundary, cloud severed) + scroll reveals, all honouring `prefers-reduced-motion`. Responsive (desktop + mobile), visible focus, contrast-checked. Builds clean; verified in the browser.
- [x] **2 — No web demo — by design.** Wall it is a native iOS app backed by on-device SQLite; the data never leaves the phone, so there is deliberately no web build to run in a browser — that constraint is the product. The showcase shows **screenshots** (native-app UI mockups in `public/screens/`) and an **App Store — coming soon** badge instead of a demo. (A web export is technically feasible but would need the private app adapted for the web — cross-origin isolation for `expo-sqlite`'s WASM + web shims for native modules — which is out of scope; the private source is never touched.)
- [x] **3 — Case-study README.** Local-first data model, rule-based budgeting engine, append-only achievements store, single-source-of-truth premium entitlement — prose + Mermaid/ASCII diagrams, **no proprietary code**. "On the App Store" placeholder included.
- [x] **4 — Hygiene.** MIT (landing/showcase code only), CI landing build, repo topics, homepage set to the live URL. _(Profile pin: owner's action.)_
