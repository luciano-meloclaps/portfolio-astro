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
export const techIconMap: Record<string, astroHTML.JSX.Element> = {
  react: IconBrandReact,
  astro: IconBrandAstro,
  typescript: IconBrandTypescript,
  tailwind: IconBrandTailwind,
  dotnet: IconHexagons,
  git: IconBrandGit,
  docker: IconBrandDocker,
  github: IconBrandGithub,
  mysql: IconBrandMysql,
  vite: IconBrandVite,
  'node.js': IconBrandNodejs,
  aws: IconHexagons, // Usamos un icono genérico para la nube
  postgresql: IconBrandMysql, // Reutilizamos el de MySQL
};
