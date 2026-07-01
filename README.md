# Wall it — case study & web demo

[![CI](https://github.com/eliegeorgioelkhoury/wall-it-showcase/actions/workflows/ci.yml/badge.svg)](https://github.com/eliegeorgioelkhoury/wall-it-showcase/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **Local-first personal finance. Your data never leaves your device.** This is the public case study and web demo for Wall it, a React Native + Expo app. The app source stays private — only the bundled web build and this write-up are public.

**Status:** 🚧 Scaffolding (GATE 1). See [STATE.md](STATE.md) · [ROADMAP.md](ROADMAP.md).

<!-- TODO: replace with a looping capture of the app; drop the file at docs/demo.gif. Same GIF goes at the top of the landing page. -->
![Wall it demo — coming soon](https://placehold.co/1200x600/0f3d3e/f8fafc?text=Wall+it+demo+GIF+coming+soon)

- 🔗 **Try the web demo** — _coming soon_ (Cloudflare Pages) <!-- TODO: set once deployed -->
- 📱 **On the App Store** — _coming soon_ <!-- TODO: set once published -->

## Screenshots
<!-- TODO: add real captures under docs/ and swap these placeholders -->
| Home | Budgets | Achievements | Privacy |
|---|---|---|---|
| ![Home](https://placehold.co/300x200?text=Home) | ![Budgets](https://placehold.co/300x200?text=Budgets) | ![Achievements](https://placehold.co/300x200?text=Achievements) | ![Privacy](https://placehold.co/300x200?text=On-device) |

## Thesis
Wall it is **local-first**: budgets, transactions, and achievements live on-device. No account required, no cloud sync of your financial data — privacy by architecture, not by policy.

## How it works
A prose-and-diagrams case study — no proprietary code.

- **Local-first data model.** The device is the single source of truth. Reads and writes are on-device and instant; there is no server round-trip for your financial data.
- **Rule-based budgeting engine.** Deterministic rules classify and roll up transactions into budgets, so results are predictable and explainable.
- **Append-only achievements store.** Achievement events are appended, never mutated; current state is derived by folding the log — an auditable history you can replay.
- **Single-source-of-truth premium entitlement.** One authoritative entitlement gates premium features; the UI derives from it rather than tracking state in multiple places.

```
        ●   ●        on-device data-orbit — points circle the phone,
     ●   ┌─────┐  ●   nothing leaves for the cloud
         │  📱 │
     ●   └─────┘  ●
        ●   ●
```

## Design
- **Tokens:** Pine · Mint · Ink · Honey · Coin silver.
- **Type:** General Sans (display) + Inter (text).
- **Signature motion:** on-device data-orbit (points circling a phone, no cloud) plus gentle scroll reveals. Honors `prefers-reduced-motion`.

## Stack
- **App (private):** React Native · Expo
- **This repo (public):** landing page + bundled Expo web export, deployed to Cloudflare Pages
- **CI:** GitHub Actions — landing build

## Architecture (presentation)
```
Private source (React Native + Expo)
        │  expo export --platform web
        ▼
   static bundle ──▶ Cloudflare Pages   (this repo serves the landing + web demo)
```
Only the bundled web build is served here. **No proprietary app code lives in this repo.** The app source is the private `wallet-app` repo and is intentionally kept off the public profile.

## Run locally (landing site)
> Not scaffolded yet — GATE 1 is repo hygiene + CI. These are the intended steps; they firm up in milestone 1.

```bash
git clone git@github.com:eliegeorgioelkhoury/wall-it-showcase.git && cd wall-it-showcase
npm ci
npm run dev
```

## Repo layout
```
wall-it-showcase/
├── src/         # landing page source           (milestone 1)
├── public/      # static assets
├── web-demo/    # bundled Expo web export        (milestone 2) — build artifact only, no source
└── docs/        # demo GIF, screenshots, diagrams
```

## License
[MIT](LICENSE) — applies to the landing / showcase code in this repo only. © 2026 Elie El Khoury
