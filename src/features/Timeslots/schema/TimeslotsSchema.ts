import { z } from "zod";

export const TimeslotsSchema = z.object({
  day: z.string().min(1),
  time: z.string().min(1),
  adminId: z.string().min(1),
});
