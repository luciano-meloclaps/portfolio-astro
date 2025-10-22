/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  safelist: ['text-stroke', 'text-fill'],
  theme: {
    extend: {
      // --- SINCRONIZACIÓN DE COLORES ---
      colors: {
        background: 'var(--color-background)',
        panel: 'var(--color-panel-bg)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'border-color': 'var(--color-border)',
        'led-positive': 'var(--color-led-positive)',
        'led-warning': 'var(--color-led-warning)',
        'led-neutral': 'var(--color-led-neutral)',
        'led-active': 'var(--color-led-active)',
      },
      // --- SINCRONIZACIÓN DE FUENTES ---
      fontFamily: {
        sans: ['var(--font-main)', 'sans-serif'],
      },

      // --- ¡LA CORRECCIÓN CRÍTICA! SINCRONIZACIÓN DE ESCALA TIPOGRÁFICA ---
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
      },
      boxShadow: {
        inset: 'var(--shadow-inset)',
        base: 'var(--shadow-base)',
      },
    },
  },
  plugins: [
    // --- PLUGIN PARA TIPOGRAFÍA DUAL ---
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px var(--color-text-secondary)',
          '-moz-text-stroke': '1px var(--color-text-secondary)',
          color: 'transparent',
        },
        '.text-fill': {
          color: 'var(--color-text-primary)',
        },
      });
    },
  ],
};
