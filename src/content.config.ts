import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Personal projects. Drop a Markdown file in src/content/projects/ to add one.
// Files starting with "_" (like _example.md) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
