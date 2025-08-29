import { z } from "zod";

export const CreateGameSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().min(1),
  releaseDate: z.string().date().optional().or(z.literal("").transform(() => undefined)),
  developer: z.string().min(1),
  publisher: z.string().min(1),
  coverImage: z.string().min(1),                     // REQUIRED (path from upload)
  iconImage: z.string().min(1),                      // REQUIRED (path from upload)
  screenshots: z.array(z.string()).default([]),      // optional
});
