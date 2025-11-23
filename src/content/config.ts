import { defineCollection, z } from 'astro:content';

// --- COLECCIÓN "PROJECTS" (CON ESQUEMA DE IMAGEN CORRECTO) ---
const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(), // NUEVO: La frase corta y contundente.
      status: z.enum(['Completed', 'In Progress', 'Archived']), // NUEVO: El estado del proyecto.
      cover: image(), // NUEVO: La imagen de portada, optimizada por Astro.
      description: z.string(),
      images: z.array(image()),
      keyFeatures: z.array(z.string()),
      techStack: z.array(z.string()),
      publishDate: z.date(),
      repoUrl: z.string().url().optional(),
      figmaUrl: z.string().url().optional(),
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
    level: z.string().optional(),
    issueDate: z.date(),
    expiryDate: z.date().optional(),
    description: z.string(),
    keySkills: z.array(z.string()),
    techStack: z.array(z.string()).optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  career: careerCollection,
  certifications: certificationsCollection,
};
