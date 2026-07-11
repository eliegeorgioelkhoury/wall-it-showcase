// @ts-check
import { defineConfig } from 'astro/config';

// Static landing site for Wall it. Deploys to Cloudflare Pages (build output: dist/).
// `site` is used only for canonical/OG absolute URLs; set it to the live URL at deploy time.
export default defineConfig({
  site: 'https://wall-it-showcase.pages.dev',
  compressHTML: true,
  build: { assets: 'assets' },
  devToolbar: { enabled: false },
});
