# CLAUDE.md — Wall it (showcase)

Guidance for Claude Code when working in this repository.

## What this is
The **public** presentation for Wall it: a marketing landing page, a prose-and-diagrams case study, and a bundled Expo **web demo**. Wall it itself is a local-first React Native + Expo personal-finance app whose thesis is "your data never leaves your device."

## ⚠️ Hard rule: no app source here
This is a public repo. The Wall it app source is **private** (the `wallet-app` repo) and must stay off the public profile. Only prose, diagrams, screenshots, and the **bundled web build** (`expo export --platform web` output) belong here. Never copy application source into this repo.

## Stack
- **This repo (public):** a static landing site (Node toolchain) + the bundled web demo, deployed to Cloudflare Pages (its free tier permits commercial use; the app is a commercial product, so this does not go on Vercel).
- **App (private):** React Native + Expo.

## Layout (target)
- `src/` — landing page source (milestone 1)
- `public/` — static assets
- `web-demo/` — bundled Expo web export (milestone 2); build artifact only
- `docs/` — demo GIF, screenshots, diagrams

> As of GATE 1, only repo hygiene, CI, and docs exist.

## Design language
- Tokens: Pine · Mint · Ink · Honey · Coin silver. Type: General Sans (display) + Inter (text).
- Signature motion: on-device data-orbit animation + gentle scroll reveals. Honor `prefers-reduced-motion`.

## Conventions
- **Commits:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `ci:`, `test:`, `refactor:`).
- **No secrets:** the landing site is static and needs none. Do not introduce secrets or app source.
- **Accessibility & motion:** responsive to mobile, visible keyboard focus, honor `prefers-reduced-motion`.

## Commands (once scaffolded)
- Dev: `npm run dev` · build `npm run build`

## Living docs
- Current status: [STATE.md](STATE.md)
- Plan: [ROADMAP.md](ROADMAP.md)
