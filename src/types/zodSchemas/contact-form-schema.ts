import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters long' })
    .nonempty({ message: 'First name is required' }),

  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty({ message: 'Email is required' }),

  phoneNumber: z.string().optional(),

  message: z.string().optional(),

  agreeToTerms: z.boolean().refine((value) => value, {
    message: 'You must accept the terms'
  })
})
