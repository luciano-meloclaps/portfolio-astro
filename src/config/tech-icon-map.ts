// src/config/tech-icon-map.ts
import {
  IconBrandReact,
  IconBrandAstro,
  IconBrandTypescript,
  IconBrandTailwind,
  IconHexagons,
  IconBrandGit,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandMysql,
  IconBrandVite,
  IconBrandNodejs,
} from '@tabler/icons-react';

// Un mapa central para asociar un string de tecnología con su componente de icono.
// IMPORTANTE: Las claves deben estar NORMALIZADAS (usa la función normalizeTechName)
export const techIconMap: Record<string, astroHTML.JSX.Element> = {
  react: IconBrandReact,
  astro: IconBrandAstro,
  typescript: IconBrandTypescript,
  tailwind: IconBrandTailwind,
  dotnet: IconHexagons, // Normalizado: '.NET', 'ASP.NET' -> 'dotnet'
  git: IconBrandGit,
  github: IconBrandGithub,
  mysql: IconBrandMysql,
  vite: IconBrandVite,
  aws: IconHexagons, // Usamos un icono genérico para la nube
};
