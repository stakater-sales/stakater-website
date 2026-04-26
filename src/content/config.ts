import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    industry: z.string(),
    initials: z.string().max(3),
    logo: z.string().optional(),
    outcome: z.string(),
    challenge: z.string(),
    solution: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    services: z.array(z.string()).default([]),
    publishedAt: z.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const authorsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
  }),
});

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    tag: z.string(),
    order: z.number().default(99),
    features: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    cta: z.string().default('Contact Us'),
  }),
});

export const collections = {
  blog: blogCollection,
  'case-studies': caseStudiesCollection,
  authors: authorsCollection,
  products: productsCollection,
};
