import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()).optional(),
    keyFeatures: z.array(z.string()),
    techStack: z.array(z.string()),
    publishDate: z.date(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
