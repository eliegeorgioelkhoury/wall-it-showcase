# Wall it (showcase) — STATE

**Status:** landing page + case study shipped; **deploy-ready, paused before hosting.**
**Blocked:** the web demo (see below) — a clean export needs changes the "don't touch the private app" rule forbids.

_Living doc. Update after each milestone: what shipped, what's in flight, what's blocked._

## Now
- **Landing page (M1) — done.** Astro static site: local-first thesis, the on-device data-orbit signature, scroll reveals, `prefers-reduced-motion` honoured. Pine/Mint/Ink/Honey/Coin-silver tokens; General Sans + Inter self-hosted (no runtime font CDN). Responsive desktop + mobile, visible focus, contrast-checked. `npm run build` is clean; verified in the browser (no console errors).
- **Case-study README (M3) — done.** The four architecture pillars in prose + Mermaid/ASCII diagrams, no proprietary code.
- **Hygiene (M4) — mostly done.** MIT (showcase code only), CI landing build, topics. Homepage + pin wait on the live demo URL.

## Next
- Decide how to produce the **web demo (M2)** given the no-touch rule (see Blocked), then wire hosting.

## Done
- **GATE 1** — repository hygiene, CI, living docs.
- **M1** — landing page (Astro + tokens + data-orbit + reveals + a11y).
- **M3** — case-study README.

## Blocked
- **Web demo (M2).** `expo export --platform web` from the private app fails out of the box: `expo-sqlite`'s web backend needs `wasm` added to Metro's `assetExts`, and static SSG would try to run SQLite in Node (so `web.output` likely needs to be `"single"`). Both are edits **inside the private `wallet-app`**, which the hard rule forbids. Separately, the export inlines `EXPO_PUBLIC_*` third-party API keys (Finnhub, Logo.dev) into what would be a public bundle. The slot + exact procedure are prepared in [`web-demo/`](web-demo/README.md); the landing's demo links point to a holding page at `/demo/` for now.

## Deploy
- **Target:** Cloudflare Pages (commercial use permitted; not Vercel). Build command `npm run build`, output `dist/`. Node 20 (`.nvmrc`).
- **Homepage:** TODO — set to the Cloudflare Pages URL once hosting is wired.
- **Web demo:** host the bundle at its own root (separate Pages project / subdomain), then repoint the landing's "Try the web demo" links.
- App source stays private (`wallet-app`); only the bundled web build is ever served here.
