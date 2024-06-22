import { defineCollection, reference, z } from 'astro:content'

const textsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    banner: z.string(),
    theme: z.string(),
    see_more: z.string(),
    copy: z.string()
  })
})

const sectionsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    index: z.number().default(999),
    indexed: z.boolean().default(true)
  })
})

const projectsCollection = defineCollection({
  schema: z.object({
    name: z.string().optional(),
    explanation: z.string(),
    relevant: z.boolean().default(false),
    tech: z.array(reference('tech')).default([])
  })
})


const techCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string()
  })
})
export const collections = {
  'sections': sectionsCollection,
  'texts': textsCollection,
  'projects': projectsCollection,
  'tech': techCollection
}
