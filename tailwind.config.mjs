/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        panel: 'var(--color-panel-bg)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'border-color': 'var(--color-border)',
      },
      borderRadius: {
        base: 'var(--radius-base)',
      },
      blur: {
        base: 'var(--blur-base)',
      },
      boxShadow: {
        base: 'var(--shadow-base)',
      },
      fontFamily: {
        sans: ['var(--font-main)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
