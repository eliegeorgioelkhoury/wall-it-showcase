# Wall it (showcase) — STATE

**Status:** ✅ **Shipped & live** — https://wall-it-showcase.pages.dev (Cloudflare Pages). Landing page + case study, CI-green.
**Web version:** there isn't one, **by design** — Wall it is a native app whose data lives in on-device SQLite and never leaves the phone.

_Living doc. Update after each milestone: what shipped, what's in flight, what's blocked._

## Now
- **Live** at https://wall-it-showcase.pages.dev. Repo homepage + topics set.
- **Landing page** — Astro static site: local-first thesis, the on-device data-orbit signature, scroll reveals, `prefers-reduced-motion` honoured. Pine/Mint/Ink/Honey/Coin-silver tokens; General Sans + Inter self-hosted. Responsive, visible focus, contrast-checked. A screenshots section (native-app UI mockups) + an "App Store — coming soon" badge; no dead links.
- **Case study** — the four architecture pillars in prose + Mermaid/ASCII diagrams, no proprietary code.

## Done
- **GATE 1** — repository hygiene, CI, living docs.
- **M1** — landing page (Astro + tokens + data-orbit + reveals + a11y).
- **M3** — case-study README (four pillars, prose + diagrams).
- **M4** — hygiene: MIT (showcase code only), CI landing build, topics, homepage.
- **Live** — deployed to Cloudflare Pages; landing reframed around the native app + screenshots.

## No web demo — by design
Wall it is a native iOS app backed by on-device SQLite. The data never leaves the
device, so there is deliberately **no web build** to run in a browser — that
constraint is the product. The showcase points to **screenshots** and the **App
Store** (coming soon) instead. (A web export is technically possible but would
need the app itself adapted for the web — cross-origin isolation for
`expo-sqlite`'s WASM plus web shims for the native modules — which is out of
scope for a public showcase that must not touch the private source.)

## Blocked
- _none._

## Deploy
- **Live:** https://wall-it-showcase.pages.dev — Cloudflare Pages, `npm run build` → `dist/`, Node 20 (`.nvmrc`).
- App source stays private (`wallet-app`); this repo is presentation only.
