// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { SITE_URL } from './src/config/site';

// Build time: dipakai sebagai <lastmod> sitemap supaya setiap deploy
// memberi tahu crawler bahwa konten berubah.
const buildTime = new Date().toISOString();

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    // Halaman tipis (form) tidak masuk sitemap agar tidak mengencerkan crawl.
    sitemap({
      filter: (page) => !page.includes('/signal'),
      serialize(item) {
        return {
          ...item,
          lastmod: buildTime,
          changefreq: item.url === `${SITE_URL}/` ? 'weekly' : 'monthly',
          priority: item.url === `${SITE_URL}/` ? 1.0 : item.url.includes('/project/') ? 0.8 : 0.6,
        };
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
