# web-demo/ — status: deferred

This directory is the slot for a **compiled web build** of Wall it (the output of
`expo export --platform web`). No application source lives here, and nothing
here is hand-written.

> **Current status: deferred.** A web build was produced and sanitized, but the
> app does not *run* in a browser without web-specific adaptation of the private
> app (which is intentionally not modified). The landing page's "Try the web
> demo" links resolve to a holding page at [`/demo/`](../public/demo/index.html)
> until a running build exists.

## What was tried

The export was built from a **throwaway copy** of the private `wallet-app` — the
original repo was never modified (verified: same HEAD, clean tree before and
after). Only web-build config was changed *in the copy*:

1. `metro.config.js` — added `wasm` to `assetExts` (so `expo-sqlite`'s
   `wa-sqlite.wasm` resolves).
2. `app.json` — `web.output: "single"` (SPA, so SQLite isn't run during Node
   static rendering) + `experiments.baseUrl: "/demo/"`.
3. A **keyless `.env`** so no `EXPO_PUBLIC_*` third-party keys are inlined.

**Result:** the export succeeds and the bundle is clean — verified **no
source-maps, no `.ts`/`.tsx` source, no `.env`, and no API-key values** (the app
simply shows "add a key" states for the optional Finnhub / Logo.dev features).

## Why it's deferred

The app boots in the browser but renders **blank**, because it is **local-first
on SQLite** and that layer doesn't come up on the web without adaptation:

1. **Cross-origin isolation.** `expo-sqlite`'s WASM backend needs
   `SharedArrayBuffer`, which requires `Cross-Origin-Opener-Policy: same-origin`
   + `Cross-Origin-Embedder-Policy: require-corp`. This part is a **hosting**
   fix (a `_headers` rule scoped to `/demo/*`), and it was confirmed to enable
   isolation.
2. **The DB/init gate still hangs.** Even with isolation enabled, the on-device
   database / migration step doesn't complete on web, so the app never leaves
   its loading state. Resolving this needs **web-specific shims inside the app**
   (the SQLite init path, plus native-only modules like `expo-secure-store`,
   `expo-local-authentication`, notifications, and location) — i.e. changes to
   the private source, which is out of scope here.

## To finish it later (in the private app)

1. Make expo-web actually run: the two config changes above, web fallbacks for
   the native-only modules, and a web-capable SQLite init path.
2. Export `--platform web` with a keyless demo `.env`; **strip all `*.map`
   files**; copy only the compiled output here (or serve it at its own root).
3. Serve `/demo/*` with the cross-origin isolation headers above.

## What must never land here

- No `*.ts` / `*.tsx` or any application source.
- No `*.map` source-map files.
- No `.env` or real API keys.
