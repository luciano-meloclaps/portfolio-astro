/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  safelist: ['text-stroke', 'text-fill'],
  theme: {
    extend: {
      // --- SINCRONIZACIÓN DE COLORES ---
      // Conectamos nuestras clases de Tailwind a las variables CSS definidas en `global.css`.
      colors: {
        background: 'var(--color-background)',
        panel: 'var(--color-panel-bg)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
      },

      // --- SINCRONIZACIÓN DE FUENTES ---
      fontFamily: {
        sans: ['var(--font-main)', 'sans-serif'],
      },

      // --- SINCRONIZACIÓN DE ESCALA TIPOGRÁFICA ---
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        h3: 'var(--font-size-h3)',
        h2: 'var(--font-size-h2)',
        h1: 'var(--font-size-h1)',
      },

      // --- SINCRONIZACIÓN DE RADIOS Y EFECTOS ---
      borderRadius: {
        small: 'var(--radius-small)',
        medium: 'var(--radius-medium)',
        large: 'var(--radius-large)',
        pill: 'var(--radius-pill)',
      },
      blur: {
        base: 'var(--blur-base)',
        xl: 'var(--blur-xl)',
      },
      boxShadow: {
        base: 'var(--shadow-base)',
        inset: 'var(--shadow-inset)',
      },

      // --- ELIMINADO: La lógica del gradiente del Hero ya no vive aquí. ---
      // backgroundImage: { ... }
    },
  },
  plugins: [
    // --- PLUGIN PARA TIPOGRAFÍA DUAL ---
    // Este plugin consume correctamente las variables CSS.
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px var(--color-text-secondary)',
          color: 'transparent',
        },
        '.text-fill': {
          color: 'var(--color-text-primary)',
        },
      });
    },
  ],
};
