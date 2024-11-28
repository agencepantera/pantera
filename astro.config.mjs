import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://pantera-agency.fr',
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});