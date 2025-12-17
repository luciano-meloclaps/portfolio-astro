// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Añade la URL de tu sitio web final aquí para el sitemap.
  site: 'https://www.ejemplo.com',
  integrations: [react(), tailwind(), sitemap()],

  // Image service: usar 'noop' para evitar dependencia de Sharp
  // Las imágenes se sirven sin transformación (mejor performance)
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },

  // --- CONFIGURACIÓN DE SERVIDOR (NUEVO) ---
  // Esto fuerza a Vite a exponer la IP de red (192.168.x.x)
  server: {
    host: true,
    port: 4321,
  },
});
