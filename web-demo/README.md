# web-demo/ — bundled Expo web export

This directory holds the **compiled web build** of Wall it (the output of
`expo export --platform web`). It is a **build artifact only** — no application
source lives here, and nothing here is hand-written.

> Status: **slot prepared.** The bundle is generated from the private app and
> dropped in here. See the notes below for how it's produced and hosted.

## How the bundle is produced

From the private `wallet-app` repo, the web build is exported and copied here —
**source-maps stripped**, so no source is exposed:

```sh
# in the private app (produces a static web bundle; no source is published)
npx expo export --platform web --output-dir dist-web

# then copy ONLY the compiled output into this folder, without any *.map files
```

Two things the private app needs for a clean web export (kept in the private
repo, never here):

1. **`wasm` asset resolution** — `expo-sqlite`'s web backend loads a
   `wa-sqlite.wasm` asset, so `wasm` must be in Metro's `assetExts` and the web
   build served with the cross-origin isolation headers SQLite/OPFS needs.
2. **A demo-only `.env`** — the export inlines `EXPO_PUBLIC_*` values into the
   bundle, so the demo is built with a `.env` that contains **no third-party API
   keys** (a public bundle must not carry private keys).

## Hosting

Served as static files. Because the export uses absolute asset paths, host the
bundle at a **root** (its own Cloudflare Pages project or a subdomain) and point
the landing page's "Try the web demo" links at that URL. Until then, those links
resolve to the holding page at [`/demo/`](../public/demo/index.html).

## What must never land here

- No `*.ts` / `*.tsx` or any application source.
- No `*.map` source-map files.
- No `.env` or real API keys.
