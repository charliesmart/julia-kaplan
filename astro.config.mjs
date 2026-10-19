// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain serves from the root, so no `base` is set.
  site: 'https://julia-kaplan.com',
  integrations: [sitemap()]
});