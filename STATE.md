# Wall it (showcase) — STATE

**Status:** ✅ **GATE 5 complete** — landing page + case study shipped, CI-green,
deploy-ready. **Paused before wiring hosting**, as requested.
**Web demo:** deferred (documented) — the app doesn't run on the web without
adapting the private source, which is intentionally not touched.

_Living doc. Update after each milestone: what shipped, what's in flight, what's blocked._

## Now
- **Landing page (M1) — done.** Astro static site: local-first thesis, the on-device data-orbit signature, scroll reveals, `prefers-reduced-motion` honoured. Pine/Mint/Ink/Honey/Coin-silver tokens; General Sans + Inter self-hosted (no runtime font CDN). Responsive desktop + mobile, visible focus, contrast-checked. `npm run build` is clean; verified in the browser (no console errors).
- **Case-study README (M3) — done.** The four architecture pillars in prose + Mermaid/ASCII diagrams, no proprietary code.
- **Hygiene (M4) — done.** MIT (showcase code only), CI landing build, topics set. Homepage + pin wait on the live demo URL (hosting is paused).
- **Web demo (M2) — deferred.** See below.

## Done
- **GATE 1** — repository hygiene, CI, living docs.
- **M1** — landing page (Astro + tokens + data-orbit + reveals + a11y).
- **M3** — case-study README.
- **M4** — hygiene (license, CI, topics).

## Deferred
- **Web demo (M2).** Built from a **throwaway copy** of the private app (original
  never modified — verified same HEAD + clean tree). With web-only config in the
  copy (`wasm` assetExt, `web.output: "single"`, `baseUrl: /demo/`) and a keyless
  `.env`, the export **succeeds and sanitizes clean** (no source-maps, no source,
  no keys). But the app **renders blank in a browser**: it's local-first on
  SQLite, and that layer doesn't come up on web. `expo-sqlite`'s WASM needs
  cross-origin isolation (COOP/COEP — a hosting fix, confirmed to enable
  `SharedArrayBuffer`), and even then the DB/migration init hangs, which needs
  web-specific shims **inside the private app** (out of scope). Rather than ship a
  broken demo, `/demo/` shows a branded "demo coming soon" holding page. Full
  findings + the path to finish it: [`web-demo/`](web-demo/README.md).

## Blocked
- _none._

## Deploy
- **Target:** Cloudflare Pages (commercial use permitted; not Vercel). Build command `npm run build`, output `dist/`. Node 20 (`.nvmrc`).
- **Homepage:** TODO — set to the Cloudflare Pages URL once hosting is wired.
- App source stays private (`wallet-app`); only a bundled web build would ever be served here.
