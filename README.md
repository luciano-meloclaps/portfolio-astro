# Luciano Stefano Melo Claps — Developer Portfolio

A high-performance, architect-first developer portfolio built with **Astro**, **React**, and **GSAP**. Engineered to showcase fullstack expertise in **.NET & React** with a focus on performance, accessibility, and semantic SEO optimization.

![Astro](https://img.shields.io/badge/Astro-5.16.11-FF5D01?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C3?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?logo=gsap&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white)

---

## Overview

This portfolio is **not** a template. It is a production-grade, fully custom implementation built to demonstrate advanced frontend architecture, performance optimization, and thoughtful UX/UI design. Every component, animation, and interaction has been carefully engineered.

**Core Philosophy:**

- **Astro-Native First:** Static HTML by default. JavaScript is a deliberate choice, not an afterthought.
- **Zero-Layout Shift:** All critical assets are optimized for Core Web Vitals compliance.
- **Accessible & Semantic:** WCAG 2.1 compliance throughout. Proper heading hierarchy, ARIA labels, and keyboard navigation.
- **Production-Ready:** Configured for deployment on Vercel with integrated analytics.

---

## Core Features

### Performance & Optimization

- **Static-First Architecture:** 100% pre-rendered HTML with selective client-side interactivity via Astro Islands.
- **Image Optimization:** Automatic WebP conversion and responsive sizing through Astro's native Image component.
- **CSS-in-JS:** Tailwind CSS with aggressive tree-shaking. Zero runtime overhead.
- **Analytics Integration:** Vercel Web Analytics for production performance monitoring.

### Animation & Interactivity

- **GSAP Integration:** Advanced timeline orchestration for:
  - Scroll-triggered reveals with ScrollTrigger plugin.
  - Text scramble effects for dynamic hero sections.
  - Smooth modal transitions and parallax effects.
  - Reduced motion preferences respected throughout.
- **Atomic Interactions:** Button hover states, icon rotations, and theme toggles with GPU-accelerated transforms.

### Content Management & Email

- **Content Collections:** Type-safe Astro collections for projects, career history, and certifications with Zod validation.
- **Email Integration:** Resend API for reliable contact form submissions with real-time feedback.
- **Dynamic Content:** Automatic generation of detail pages for projects with syntax highlighting.

### SEO & Accessibility

- **Semantic HTML5:** Proper use of `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>`.
- **JSON-LD Structured Data:** Person schema for knowledge graph integration.
- **Meta Tags & Open Graph:** Dynamic title/description generation. Twitter Card support.
- **Sitemap Generation:** Automatic XML sitemap via `@astrojs/sitemap`.
- **Mobile-First Responsive Design:** Tested across breakpoints (mobile, tablet, desktop).

### Dark Mode Support

- **CSS Variables System:** Color tokens synced between Tailwind config and runtime.
- **Persistent Theme Storage:** LocalStorage-backed theme preference.
- **Smooth Transitions:** Theme toggle with GSAP opacity animations.

---

## Architecture

### Directory Structure

```
src/
├── components/
│   ├── ui/                    # Atomic components (Button, Card, Badge, etc.)
│   ├── modules/               # Composite molecules (Navbar, ProjectCard, ExperienceCard)
│   ├── sections/              # Page-level organisms (Hero, About, Projects, Career, etc.)
│   └── icons/                 # Custom SVG icons (IconDotNet, IconCSharp)
├── config/
│   ├── site.ts                # Global site configuration (profile, links)
│   ├── tech-icon-map.ts       # Technology stack icon registry
│   └── filter-list.ts         # Project filter taxonomy
├── content/
│   ├── projects/              # Markdown collection for portfolio projects
│   ├── career/                # Markdown collection for work & education history
│   ├── certifications/        # Markdown collection for professional credentials
│   └── config.ts              # Content collection schemas (Zod validation)
├── layouts/
│   └── Layout.astro           # Global page template (head, SEO, theme manager)
├── pages/
│   ├── index.astro            # Home page (all sections)
│   ├── projects/[slug].astro  # Dynamic project detail pages
│   └── api/
│       └── send-email.ts      # Contact form API endpoint (Resend)
├── lib/
│   ├── animations.ts          # GSAP utility functions (scrambleText, etc.)
│   ├── formValidation.ts      # Client-side form validation logic
│   ├── domUtils.ts            # DOM manipulation helpers
│   └── normalizeTech.ts       # Tech stack normalization helpers
└── styles/
    └── global.css             # CSS variables, reset, utility classes

public/
├── robots.txt
└── [assets]

.astro/                       # Auto-generated type definitions
```

### Technology Stack

| Layer            | Technology       | Purpose                                    |
| ---------------- | ---------------- | ------------------------------------------ |
| **Framework**    | Astro 5.16.11    | Static site generation & partial hydration |
| **Styling**      | Tailwind CSS 3.4 | Utility-first CSS framework                |
| **Animations**   | GSAP 3.13.0      | Timeline-based animation library           |
| **UI Framework** | React 19.2       | Interactive island components              |
| **Language**     | TypeScript 5.9   | Type safety and developer experience       |
| **Icons**        | Tabler Icons     | 4800+ customizable SVG icons               |
| **Email**        | Resend           | Transactional email API                    |
| **SEO**          | astro-seo        | Metadata & structured data management      |
| **Deployment**   | Vercel           | Edge deployment with analytics             |

---

## Getting Started

### Prerequisites

- **Node.js:** v18.20.8, v20.3.0+, or v22.0.0+
- **Package Manager:** pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/luciano-stefano-meloclaps/portfolioLanding.git
cd portfolioLanding

# Install dependencies with pnpm
pnpm install

# Or, with npm
npm install
```

### Development

```bash
# Start the dev server (http://localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview the production build locally
pnpm preview
```

### Project Commands

| Command          | Action                                      |
| ---------------- | ------------------------------------------- |
| `pnpm dev`       | Start the local development server          |
| `pnpm build`     | Compile the site for production (`./dist/`) |
| `pnpm preview`   | Preview the production build locally        |
| `pnpm astro ...` | Run any Astro CLI command                   |

---

## Content Management

This portfolio uses **Astro Content Collections** for structured, type-safe content management with schema validation.

### Collections

#### 1. **Projects** (`src/content/projects/`)

Showcase portfolio work with rich metadata:

- **Status:** Completed, In Progress, Archived
- **Tech Stack:** Normalized technology tags with automatic icon mapping
- **Media:** Cover image + gallery of project screenshots
- **Links:** Repository URLs (GitHub/GitLab) and Figma design links
- **Features:** Key accomplishments and technical highlights

#### 2. **Career** (`src/content/career/`)

Timeline of professional experience and education:

- **Type:** Work or Education
- **Dates:** Start and end dates (optional for current roles)
- **Achievements:** Bullet-point list of key impacts
- **Location:** Geographic context for roles/institutions
- **Tech Stack:** Tools and languages used

#### 3. **Certifications** (`src/content/certifications/`)

Professional credentials and course completions:

- **Issuer:** Organization name
- **Category:** Development, IA, UX/UI, etc.
- **Key Skills:** Normalized competency tags
- **Credential URL:** Verification link (LinkedIn, Google Drive, etc.)

All collections are validated with **Zod schemas** in `src/content/config.ts`.

---

## Key Implementation Details

### Animations

**GSAP Integration:**

- **ScrollTrigger:** Section reveals triggered at `75%` viewport visibility.
- **Timeline Orchestration:** Staggered animations for cards and list items.
- **Text Scramble Effect:** Custom animation for hero profession titles (scrambleText utility).
- **Reduced Motion Support:** All animations degrade gracefully for users with `prefers-reduced-motion: reduce`.

**Example:** Hero section sequential fade-in:

```typescript
import { scrambleText } from '@/lib/animations';

const element = document.querySelector('.hero-profession');
const timeline = scrambleText(
  element,
  'Fullstack Developer',
  1.2,
  'power3.out'
);
```

### Component Architecture

**Atomic Design Methodology:**

1. **Atoms** (`ui/`): Button, Card, Badge, StatusChip, FormField, etc.
2. **Molecules** (`modules/`): Navbar, ProjectCard, ExperienceCard, ContactForm
3. **Organisms** (`sections/`): Hero, Projects, Career, Certifications, Contact, Footer

Each component:

- Is fully typed with TypeScript interfaces.
- Uses Tailwind for styling (no CSS-in-JS overhead).
- Respects accessibility standards (semantic HTML, ARIA labels).
- Supports dark mode via CSS variables.

### Filtering & Interactivity

**Project Filter System:**

- Technology-based filtering with smooth GSAP animation transitions.
- Filter state persists across interactions.
- Counter displays active filter count.
- Defined in `src/config/filter-list.ts`.

**Modal Interactions:**

- Project detail modals overlay with backdrop blur.
- Keyboard support: `Escape` to close.
- Click outside modal also closes (except on interactive elements).
- Smooth scale & opacity transitions via GSAP.

### SEO Configuration

**Global SEO:**

- Canonical URLs configured in `astro.config.mjs`.
- Trailing slashes enforced for consistency (`trailingSlash: 'always'`).
- Dynamic meta tags in `Layout.astro` using astro-seo.

**Structured Data:**

- Person schema (JSON-LD) for knowledge graph integration.
- Open Graph tags for social media sharing.
- Twitter Card metadata.

**Sitemap:**
Auto-generated and submitted to search engines via `@astrojs/sitemap`.

### Email Integration

**Contact Form + Resend:**

- Form submissions validated on the client with custom validators.
- Server-side validation at `src/pages/api/send-email.ts`.
- Uses Resend API for reliable email delivery.
- Non-prerendered route (dynamic at runtime).
- Real-time error handling and success feedback.

### Performance Optimizations

1. **Image Optimization:**
   - Automatic WebP conversion.
   - Responsive sizing with `widths` and `sizes` attributes.
   - Lazy loading for below-fold images.

2. **Code Splitting:**
   - GSAP plugins loaded on-demand (ScrollTrigger, TextPlugin).
   - React islands only hydrate when needed.

3. **Styling:**
   - Single Tailwind CSS bundle (no duplication).
   - PurgeCSS removes unused classes.

4. **Static Build:**
   - 100% static HTML output (except `/api/` routes).
   - Pre-rendered pages for instant load times.

---

## Deployment

### Vercel (Recommended)

This project is pre-configured for Vercel via `@astrojs/vercel`:

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

**Configuration:**

- Build command: `astro build`
- Output directory: `dist/`
- Web Analytics enabled automatically.
- Environment variables: `RESEND_API_KEY` for email functionality.

**Live Site:** [meloclaps.com](https://meloclaps.com)

### Alternative: Static Hosting

Since the output is 100% static (except `/api/`), it can be deployed to:

- **Netlify:** Drag-and-drop or Git integration.
- **GitHub Pages:** Push to `gh-pages` branch.
- **AWS S3 + CloudFront:** For enterprise deployments.

**Build Output:**

```bash
pnpm build
# Output: ./dist/
```

---

## Development Workflow

### Adding a New Project

1. Create `src/content/projects/my-project.md`:

```markdown
---
title: 'Project Name'
tagline: 'One-liner description'
status: 'Completed'
cover: '@/assets/images/projects/my-project/cover.webp'
description: 'Detailed project description...'
images:
  - '@/assets/images/projects/my-project/img1.webp'
  - '@/assets/images/projects/my-project/img2.webp'
keyFeatures:
  - 'Feature 1'
  - 'Feature 2'
  - 'Feature 3'
techStack:
  - 'React'
  - 'TypeScript'
  - 'Tailwind CSS'
publishDate: 2025-01-15
repoUrl: 'https://github.com/user/repo'
figmaUrl: 'https://figma.com/...'
---

Project content in Markdown goes here...
```

2. Add project images to `src/assets/images/projects/my-project/`.
3. Ensure images are optimized (use WebP when possible).
4. Restart dev server. New project appears automatically in the portfolio.
5. Content collection schema validates all required fields.

### Customization

**Theme Colors:** Edit color tokens in `src/styles/global.css` (CSS variables) and `tailwind.config.mjs`.

**Site Metadata:** Update `src/config/site.ts` with contact info and links. Update `src/layouts/Layout.astro` for SEO defaults.

**Tech Icons:** Add entries to `src/config/tech-icon-map.ts` to map technology names to Tabler Icons.

**Project Filters:** Edit `src/config/filter-list.ts` to add or remove filter categories.

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge) with ES2020+ support.
- Mobile-first responsive design (320px and up).
- Graceful degradation for users with JavaScript disabled (static content remains accessible).

---

## Performance Targets

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO).
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Bundle Size:** ~15KB CSS, ~50KB JS (gzipped).

---

## Accessibility

- **WCAG 2.1 AA Compliance:** Semantic HTML, ARIA labels, sufficient color contrast.
- **Keyboard Navigation:** All interactive elements accessible via Tab key.
- **Screen Reader Support:** Proper heading hierarchy, descriptive alt text, skip links.
- **Motion Preferences:** All animations respect `prefers-reduced-motion: reduce`.
- **Focus Management:** Visible focus indicators on all focusable elements.

---

## License

This portfolio is custom-built and not available for reuse. All code, design, and content are proprietary.

---

## Author

**Luciano Stefano Melo Claps**

Técnico Universitario en Programación | Fullstack Developer (.NET & React)

- **Portfolio:** [meloclaps.com](https://meloclaps.com)
- **GitHub:** [luciano-stefano-meloclaps](https://github.com/luciano-stefano-meloclaps)
- **LinkedIn:** [luciano-stefano-melo-claps](https://linkedin.com/in/luciano-stefano-melo-claps)
- **Email:** dev@meloclaps.com

---

**Built with Astro, GSAP, React, and Tailwind CSS. Deployed on Vercel with Web Analytics.**
