Este repositorio contiene el código fuente de un portfolio personal, construido con una filosofía de rendimiento y un diseño inspirado en la precisión de "Palantir". El proyecto está siendo desarrollado utilizando **Astro** como framework principal, aprovechando su arquitectura para lograr tiempos de carga casi instantáneos y un performance impecable en SEO.

---

### 🏛️ Arquitectura y Filosofía

Este proyecto se basa en un conjunto de principios estrictos para garantizar la máxima calidad:

1.  **Astro-Nativo Primero:** La base de todo es HTML estático. El JavaScript del lado del cliente se considera un "coste" y solo se utiliza cuando es absolutamente indispensable para la interactividad, principalmente a través de "islas de script" de Astro.
2.  **Rendimiento como Característica:** Cada decisión, desde la elección de dependencias hasta la optimización de activos, se toma con el objetivo de lograr una puntuación perfecta en Core Web Vitals.
3.  **Diseño Atómico y "Tailwind-first":** La interfaz se construye a partir de un sistema de componentes bien definidos. La **única fuente de verdad** para los tokens de diseño (colores, tipografía, etc.) es `tailwind.config.mjs`.
4.  **SEO y Accesibilidad Integrados:** La semántica HTML, los metadatos y las directrices de accesibilidad (WCAG) no son una ocurrencia tardía, sino una parte integral del proceso de desarrollo.

---

### 🚀 Estructura del Proyecto

La estructura de carpetas sigue un patrón de **Component Colocation**, donde todos los componentes de la UI viven dentro de `src/components`, organizados semánticamente por su responsabilidad y escala.

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/              # Átomos de UI (Button, Card, ChipTech...)
│   │   ├── modules/         # Moléculas (ensamblajes como Navbar, MobileMenu)
│   │   ├── sections/        # Organismos (secciones de página como Hero, About)
│   │   ├── icons/           # Iconos SVG personalizados
│   │
│   ├── layouts/             # Plantillas de página globales (Layout.astro)
│   └── ...                  # (config, pages, styles)
│
├── astro.config.mjs
├── tailwind.config.mjs    # Única fuente de verdad para el sistema de diseño
└── package.json
```

---

### 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en una terminal:

| Comando        | Acción                                                 |
| :------------- | :----------------------------------------------------- |
| `pnpm install` | Instala todas las dependencias del proyecto.           |
| `pnpm dev`     | Inicia el servidor de desarrollo local en `localhost:4321`. |
| `pnpm build`   | Compila el sitio para producción en la carpeta `./dist/`. |
| `pnpm preview` | Previsualiza el build de producción localmente.        |
| `pnpm astro ...`| Ejecuta comandos de la CLI de Astro.                   |

---

### 🛠️ Stack Tecnológico Principal

*   **Framework:** [Astro](https://astro.build/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animaciones:** [GSAP (GreenSock Animation Platform)](https://gsap.com/)
*   **Iconografía:** [Tabler Icons](https://tabler-icons.io/)
*   **UI Framework (para Islas Potenciales):** [React](https://react.dev/)
*   **SEO:** [Astro SEO](https://github.com/astro-community/astro-seo) & [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
