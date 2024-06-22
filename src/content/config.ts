import { defineCollection, reference, z } from 'astro:content'

const texts = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    banner: z.string(),
    theme: z.string(),
    see_more: z.string(),
    copy: z.string()
  })
})

const sections = defineCollection({
  schema: z.object({
    name: z.string(),
    index: z.number().default(999),
    indexed: z.boolean().default(true)
  })
})

const projects = defineCollection({
  schema: z.object({
    name: z.string().optional(),
    explanation: z.string(),
    relevant: z.boolean().default(false),
    tech: z.array(reference('tech')).default([])
  })
})


const tech = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string()
  })
})
export const collections = { sections, texts, projects, tech }
