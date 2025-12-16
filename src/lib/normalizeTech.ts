// src/lib/normalizeTech.ts

/**
 * Normalizador Central de Tecnologías
 * Convierte variaciones de nombres a las claves exactas usadas en tech-icon-map.ts
 */

const TECH_ALIASES: Record<string, string> = {
  // .NET Ecosystem -> '.net'
  dotnet: '.net',
  'asp.net': '.net',
  'asp.net core': '.net',
  aspnet: '.net',
  'ef core': 'entity framework',
  entityframework: 'entity framework',

  // Lenguajes
  csharp: 'c#',
  'c-sharp': 'c#',
  javascripts: 'javascript',
  typescript: 'typescript',

  // Pseudolenguajes
  html5: 'html',
  css3: 'css',

  // Herramientas
  sql: 'sql',
  trello: 'trello',

  // Librerías
  'framer-motion': 'framer motion',
  tailwind: 'tailwind',
};

export function normalizeTechName(techName: string): string {
  if (!techName) return '';

  const cleaned = techName.toLowerCase().trim();

  // Si existe un alias, lo devolvemos. Si no, devolvemos el nombre limpio.
  return TECH_ALIASES[cleaned] || cleaned;
}

export function normalizeTechArray(techs: string[]): string[] {
  return Array.from(new Set(techs.map(normalizeTechName).filter(Boolean)));
}
