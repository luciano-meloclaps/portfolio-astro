// src/config/tech-colors.ts

export const defaultTechColor = '#a1a1aa';

export const techColorMap: Record<string, string> = {
  // --- FRONTEND ---
  react: '#61DAFB',
  astro: '#FF5D01',
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  html: '#E34F26',
  css: '#1572B6',
  tailwind: '#06B6D4',
  sass: '#CC6699',
  vite: '#646CFF',
  nextjs: '#FFFFFF',

  // --- BACKEND ---
  // Claves normalizadas y variantes de visualización
  dotnet: '#512BD4',
  '.net': '#512BD4', // <--- CLAVE AGREGADA PARA MATCH EXACTO

  csharp: '#9a4a92',
  'c#': '#9a4a92', // <--- CLAVE AGREGADA PARA MATCH EXACTO

  python: '#3776AB',
  mysql: '#5f96d7',
  sql: '#003B57',

  // --- TOOLS ---
  git: '#F05032',

  // COLOR GITHUB EQUILIBRADO (Gris Acero)
  // Funciona en Light (se ve gris medio) y Dark (se ve plata)
  github: '#75808F',

  docker: '#2496ED',
  figma: '#00e87b',
  trello: '#0052CC',
};
