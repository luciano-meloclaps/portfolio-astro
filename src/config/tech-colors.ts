// Este objeto mapea el nombre de una tecnología (en minúsculas) a su color de marca oficial.
// Es nuestra "fuente de verdad". Añadir una nueva tecnología es tan fácil como añadir una nueva línea aquí.
export const techColorMap: Record<string, string> = {
  react: '#61DAFB',
  astro: '#FF5D01',
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  html: '#E34F26',
  css: '#1572B6',
  tailwind: '#06B6D4',
  dotnet: '#512BD4',
  csharp: '#239120',
  git: '#F05032',
  figma: '#F24E1E',
  // Añade más tecnologías y sus colores aquí...
};
// Un color por defecto para tecnologías que no estén en el mapa.
export const defaultTechColor = 'var(--color-text-secondary)';
