// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://meloclaps.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react(), tailwind(), sitemap()],
  server: {
    host: true,
    port: 4321,
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
