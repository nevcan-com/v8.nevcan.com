// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.nevcan.com',
  output: 'static',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'always', format: 'file' },
  // lists the site's pages; the 404 page and the files in public/ (the two v7 redirects) stay out
  integrations: [sitemap()],
});
