# Portfolio - Astro

Este repositorio contiene el código fuente de un portfolio personal, construido con una filosofía de **rendimiento** y **diseño inspeirado en "Palantir"**. El proyecto está siendo desarrollado utilizando **Astro** como framework principal, aprovechando su arquitectura de "islas" para lograr tiempos de carga casi instantáneos, su ventaja para desarrolar sitios estáticos y performance en SEO.

## 🏛️ Arquitectura y Filosofía

Se basa en un conjunto de principios estrictos para garantizar la máxima calidad:

1.  **Astro-Nativo Primero:** La base de todo es HTML estático. El JavaScript del lado del cliente se considera un "coste" y solo se utiliza cuando es absolutamente indispensable para la interactividad, a través de "Islas de Astro".
2.  **Rendimiento como Característica:** Cada decisión, desde la elección de dependencias hasta la optimización de imágenes, se toma con el objetivo de lograr una puntuación perfecta en Core Web Vitals.
3.  **Diseño Atómico y Reutilizable:** La interfaz se construye a partir de un sistema de componentes bien definidos, gobernados por un sistema de diseño global basado en variables CSS para una consistencia absoluta.
4.  **SEO y Accesibilidad Integrados:** La semántica HTML, los metadatos y las directrices de accesibilidad (WCAG) no son una ocurrencia tardía, sino una parte integral del proceso de desarrollo.

## 🚀 Estructura del Proyecto

La estructura de carpetas ha sido diseñada para la escalabilidad y la claridad semántica, separando los componentes por su responsabilidad y entorno de ejecución.

```text
/
├── public/              # Activos estáticos (favicon, fuentes, etc.)
├── src/
│   ├── components/      # Componentes de UI reutilizables y 100% Astro (.astro)
│   ├── islands/         # Componentes interactivos que requieren JS en el cliente (.tsx, .jsx)
│   ├── layouts/         # Plantillas de página principales (.astro)
│   ├── pages/           # Rutas del sitio (.astro, .md)
│   └── styles/          # Estilos globales (global.css)
├── astro.config.mjs     # Archivo de configuración de Astro
├── tailwind.config.mjs  # Archivo de configuración de Tailwind CSS
└── package.json         # Manifiesto del proyecto y dependencias
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en una terminal:

| Comando          | Acción                                                 |
| :--------------- | :----------------------------------------------------- |
| `pnpm install`   | Instala todas las dependencias del proyecto.           |
| `pnpm dev`       | Inicia el servidor de desarrollo local en `localhost:4321`. |
| `pnpm build`     | Compila el sitio para producción en la carpeta `./dist/`. |
| `pnpm preview`   | Previsualiza el build de producción localmente.        |
| `pnpm astro ...` | Ejecuta comandos de la CLI de Astro.                   |

## 🛠️ Stack Tecnológico Principal

*   **Framework:** [Astro](https://astro.build/)
*   **UI Framework (para Islas):** [React](https://react.dev/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Iconografía:** [Tabler Icons](https://tabler-icons.io/)
*   **SEO:** [Astro SEO](https://github.com/astro-community/astro-seo) & [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
