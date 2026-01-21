// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // 1. Identidad oficial
  site: 'https://meloclaps.com',
  output: 'static',

  // 3. SEO: Forzamos la barra final para que Google no vea contenido duplicado.
  trailingSlash: 'always',

  integrations: [react(), tailwind(), sitemap()],

  image: {
    // Evita errores de memoria en el plan gratuito de Vercel.
    service: { entrypoint: 'astro/assets/services/noop' },
  },

  server: {
    host: true,
    port: 4321,
  },

  // 4. Conexión con el motor de Vercel y sus analíticas.
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
