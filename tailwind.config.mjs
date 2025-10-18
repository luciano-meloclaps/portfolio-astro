/** @type {import('tailwindcss').Config} */
export default {
  // Le decimos a Tailwind dónde buscar clases para optimizar el CSS.
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  // Activamos el modo oscuro basado en clases, crucial para nuestro theming.
  darkMode: 'class', 
  theme: {
    extend: {
      // Extendemos la fuente para que 'Tomorrow' sea la fuente principal.
      fontFamily: {
        sans: ['Tomorrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}