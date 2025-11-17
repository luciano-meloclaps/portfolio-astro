import { defineCollection, z } from 'astro:content';

// --- COLECCIÓN "PROJECTS" (CON ESQUEMA DE IMAGEN CORRECTO) ---
const projectsCollection = defineCollection({
  type: 'content',
  // 1. LA SOLUCIÓN: Usamos el `image` helper que viene con el `schema`.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // 2. `images` ahora es un array de `image()`.
      //    Astro validará que la ruta exista y preparará la imagen.
      images: z.array(image()),
      keyFeatures: z.array(z.string()),
      techStack: z.array(z.string()),
      publishDate: z.date(),
      liveUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
    }),
});

// --- NUEVA COLECCIÓN "CAREER" ---
const careerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['Work', 'Education']), // Tipo de hito
    title: z.string(), // Ej: "Senior Full Stack Developer" o "Ingeniería en Sistemas"
    entity: z.string(), // Ej: "TechCorp Solutions" o "Universidad Nacional"
    location: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(), // Opcional para el trabajo actual
    contractType: z.string().optional(), // Ej: "Full-Time", "Contract"
    achievements: z.array(z.string()),
    techStack: z.array(z.string()).optional(),
  }),
});

const certificationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    category: z.string(),
    level: z.enum(['Expert', 'Advanced', 'Intermediate', 'Fundamental']),
    issueDate: z.date(),
    expiryDate: z.date().optional(),
    description: z.string(),
    keySkills: z.array(z.string()),
    techStack: z.array(z.string()).optional(), // <-- CAMPO AÑADIDO Y OPCIONAL
    credentialId: z.string().optional(),
    credentialUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  career: careerCollection,
  certifications: certificationsCollection,
};
