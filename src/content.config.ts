import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  label: z.string(), // shown as the row label, e.g. "Paper"
  href: z.string().url(),
  text: z.string().optional(), // link text; defaults to the URL without https://
});

// Credit line for a third-party (or own-repo) image used on the page.
const credit = z.object({
  src: z.string(), // path under public/, e.g. /work/photo.jpg (credit is hidden if the file is missing)
  title: z.string(), // what the image is
  author: z.string().optional(),
  license: z.string(),
  licenseHref: z.string().url().optional(),
  source: z.string(), // where it comes from
  href: z.string().url(),
});

// Case studies: one Markdown file per project in src/content/case-studies/
// The file name becomes the URL: /work/<file-name>/
// Figures go inline in the Markdown body as <figure class="figure">…</figure>.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(), // full title on the case-study page
    cardTitle: z.string(), // shorter title on Home and Work cards
    summary: z.string(), // one-line teaser on cards
    attribution: z.string(), // shown under the title on the case-study page
    order: z.number().default(100),
    tags: z.array(z.string()).default([]), // short labels drawn from existing copy, shown as pills
    repo: z.string().url().optional(),
    links: z.array(link).default([]), // extra public links shown under the title
    cardImage: z.string().optional(), // path under public/, shown on cards
    cardImageAlt: z.string().optional(),
    cardImageFallback: z.string().optional(), // used if cardImage is missing from public/
    cardImageCredit: z.string().optional(), // short credit, shown under card grids for third-party card images
    cardImageCreditHref: z.string().url().optional(),
    credits: z.array(credit).default([]), // "Image credits" list at the bottom of the page
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
