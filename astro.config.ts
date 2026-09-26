import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // The whole stylesheet is small; inlining it removes a render-blocking request.
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});
