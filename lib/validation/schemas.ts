import { z } from 'zod'
export const emailSchema = z.string().trim().email('Enter a valid email address.')
export const onboardingSchema = z.object({ goals: z.array(z.string()).min(1, 'Choose at least one focus area.') })
export type OnboardingInput = z.infer<typeof onboardingSchema>
