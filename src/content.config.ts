import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Articles de la rubrique « Conseils » (src/content/conseils/*.md)
const conseils = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/conseils' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    excerpt: z.string(),
    solutions: z.array(z.string()).default([]),
    order: z.number().default(100),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { conseils };
