import z from 'zod'

const enSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = enSchema.parse(process.env)
