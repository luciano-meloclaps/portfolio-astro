/**
 * Normalizador Central de Tecnologías
 * ===================================
 * Función única responsable de normalizar nombres de tecnología
 * para garantizar consistencia en todo el sistema.
 *

 * USO:
 * import { normalizeTechName } from '@/lib/normalizeTech';
 * const normalized = normalizeTechName('Node.js'); // 'nodejs'
 */

// Mapa de aliases → forma canónica
const TECH_ALIASES: Record<string, string> = {
  // Node.js variations
  'node.js': 'nodejs',
  nodejs: 'nodejs',
  node: 'nodejs',

  // .NET variations
  '.net': 'dotnet',
  dotnet: 'dotnet',
  'asp.net': 'dotnet',
  aspnet: 'dotnet',
  'c#': 'csharp',
  csharp: 'csharp',

  // React
  react: 'react',
  reactjs: 'react',
  'react.js': 'react',

  // TypeScript
  typescript: 'typescript',
  ts: 'typescript',

  // JavaScript
  javascript: 'javascript',
  js: 'javascript',

  // Astro
  astro: 'astro',

  // CSS/Tailwind
  css: 'css',
  tailwind: 'tailwind',
  tailwindcss: 'tailwind',

  // Docker
  docker: 'docker',

  // Git
  git: 'git',
  github: 'github',

  // Databases
  postgresql: 'postgresql',
  postgres: 'postgresql',
  mysql: 'mysql',

  // Tools
  vite: 'vite',
  figma: 'figma',

  // Cloud
  aws: 'aws',
  azure: 'azure',

  // HTML
  html: 'html',
  html5: 'html',
};

/**
 * Normaliza un nombre de tecnología a su forma canónica
 * @param techName - Nombre de la tecnología (cualquier variación)
 * @returns Nombre normalizado en minúsculas
 */
export function normalizeTechName(techName: string): string {
  if (!techName) return '';

  const cleaned = techName.toLowerCase().trim();
  return TECH_ALIASES[cleaned] || cleaned;
}

/**
 * Normaliza un array de tecnologías
 * @param techs - Array de nombres de tecnología
 * @returns Array normalizado sin duplicados
 */
export function normalizeTechArray(techs: string[]): string[] {
  return Array.from(new Set(techs.map(normalizeTechName).filter(Boolean)));
}

/**
 * Verifica si dos nombres de tecnología son equivalentes
 * @param tech1 - Primera tecnología
 * @param tech2 - Segunda tecnología
 * @returns true si son la misma tras normalizar
 */
export function isSameTech(tech1: string, tech2: string): boolean {
  return normalizeTechName(tech1) === normalizeTechName(tech2);
}
