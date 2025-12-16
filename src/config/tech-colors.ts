// src/config/tech-colors.ts

export const defaultTechColor = '#a1a1aa'; // Zinc-400

export const techColorMap: Record<string, string> = {
  // --- FRONTEND ---
  react: '#61DAFB',
  astro: '#FF5D01',
  typescript: '#3178C6',
  ts: '#3178C6', // Alias alineado con icon-map
  javascript: '#F7DF1E', // Ajustado al amarillo oficial JS (más legible)
  js: '#F7DF1E', // Alias alineado con icon-map
  html: '#E34F26',
  css: '#1572B6',
  tailwind: '#06B6D4',
  sass: '#CC6699',
  vite: '#646CFF',

  // --- BACKEND ---
  // Usamos tus colores personalizados solicitados
  '.net': '#7246ff',
  'c#': '#9a4a92',

  python: '#3776AB',

  // --- BASES DE DATOS ---
  mysql: '#4479A1',
  sql: '#003B57',

  // --- HERRAMIENTAS & PLATAFORMAS ---
  git: '#F05032',
  github: '#75808F', // Gris acero (funciona en light/dark)
  gitlab: '#FC6D26', // Naranja oficial GitLab
  docker: '#2496ED',
  figma: '#F24E1E',

  // --- LIBRERÍAS & CONCEPTOS ---
  bootstrap: '#7952B3', // Violeta oficial Bootstrap
  'entity framework': '#512BD4', // Usamos el violeta de .NET
  jwt: '#D63AFF', // Pink/Purple distintivo para JWT
};
