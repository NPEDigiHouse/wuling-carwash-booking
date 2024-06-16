import { z } from "zod";

export const PromoFormSchema = z.object({
  promoName: z.string().min(1),
  discount: z.number().min(1),
  startedDate: z.coerce.date(),
  endDate: z.coerce.date(),
});
