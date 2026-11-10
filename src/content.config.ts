import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies: one Markdown file per project in src/content/case-studies/
// The file name becomes the URL: /work/<file-name>/
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(), // full title on the case-study page
    cardTitle: z.string(), // shorter title on Home and Work cards
    summary: z.string(), // one-line teaser on cards
    attribution: z.string(), // shown under the title on the case-study page
    order: z.number().default(100),
    repo: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

// Page copy (home, about, contact) in src/content/pages/
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }).passthrough(),
});

export const collections = { caseStudies, pages };
