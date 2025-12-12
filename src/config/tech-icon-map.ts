// src/config/tech-icon-map.ts
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandMysql,
  IconBrandGit,
  IconBrandFigma,
  IconDatabase,
  IconLockPassword,
  IconBrandAstro,
  IconBrandTailwind,
  IconBrandDocker,
  IconBrandVite,
  IconBrandGithub,
  IconTerminal2, // Fallback
} from '@tabler/icons-react';

// IMPORTAMOS LOS ICONOS CUSTOM
import IconDotNet from '@/components/icons/IconDotNet';
import IconCSharp from '@/components/icons/IconCSharp';

export const DefaultIcon = IconTerminal2;

export const techIconMap: Record<string, any> = {
  // --- LENGUAJES & FRAMEWORKS ---
  react: IconBrandReact,
  astro: IconBrandAstro,
  typescript: IconBrandTypescript,
  ts: IconBrandTypescript,
  javascript: IconBrandJavascript,
  js: IconBrandJavascript,
  html: IconBrandHtml5,
  html5: IconBrandHtml5,
  css: IconBrandCss3,
  tailwind: IconBrandTailwind,
  'tailwind css': IconBrandTailwind,

  // AQUÍ LA INTEGRACIÓN:
  '.net': IconDotNet,
  dotnet: IconDotNet,
  'asp.net': IconDotNet,
  'asp.net core': IconDotNet,

  'c#': IconCSharp,
  csharp: IconCSharp,
  'c-sharp': IconCSharp,

  // --- HERRAMIENTAS & PLATAFORMAS ---
  mysql: IconBrandMysql,
  sql: IconDatabase,
  git: IconBrandGit,
  github: IconBrandGithub,
  docker: IconBrandDocker,
  vite: IconBrandVite,
  figma: IconBrandFigma,

  // --- CONCEPTOS ---
  'entity framework': IconDatabase,
  'ef core': IconDatabase,
  jwt: IconLockPassword,
};
