import { z } from "zod"

export const userInSchema = z.object({
  fullName: z.string({
    required_error: "`fullName` is required",
  }),
  username: z.string({
    required_error: "`username` is required",
  }),
  publicKey: z.string({
    required_error: "`publicKey` is required",
  }),
  summary: z.string().optional(),
  webSite: z.string().url().optional(),
})

export type UserIn = z.TypeOf<typeof userInSchema>
