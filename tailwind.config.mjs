/** @type {import('tailwindcss').Config} */
export default {
  // Le decimos a Tailwind dónde buscar clases para optimizar el CSS.
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // Activamos el modo oscuro basado en clases, crucial para nuestro theming.
  darkMode: 'class',
  theme: {
    extend: {
      // Extendemos la fuente para que 'Tomorrow' sea la fuente principal.
      colors: {
        background: 'var(--color-background)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'border-color': 'var(--color-border)',
      },
      fontFamily: {
        sans: ['Tomorrow', 'sans-serif'],
      },
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
    },
  },
  plugins: [],
};
