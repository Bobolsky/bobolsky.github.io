import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies: one Markdown file per project in src/content/case-studies/
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(100),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    role: z.string().optional(),
    context: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Starter packages: one Markdown file per package in src/content/services/
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    code: z.string(), // e.g. "A"
    title: z.string(),
    tagline: z.string(),
    order: z.number().default(100),
    scope: z.string(),
    deliverables: z.array(z.string()),
    duration: z.string(),
    price: z.string().default('[PRICE TBD]'),
  }),
});

// Page copy (home, about, services intro, contact) in src/content/pages/
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }).passthrough(),
});

export const collections = { caseStudies, services, pages };
