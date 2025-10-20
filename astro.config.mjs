// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Añade la URL de tu sitio web final aquí para el sitemap.
  site: 'https://www.ejemplo.com',
  integrations: [react(), tailwind(), sitemap()], // <-- Añade sitemap() aquí
});
