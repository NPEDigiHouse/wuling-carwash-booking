import { z } from "zod";

export const PromoFormSchema = z.object({
  promoName: z.string().min(1, { message: "Nama promo harus dimasukkan" }),
  discount: z
    .number()
    .min(1, { message: "Diskon harus dimasukkan" })
    .max(100, { message: "Maksimal Input Promo adalah 100" }),
  startedDate: z.coerce.date({ message: "Tanggal dimulai harus dimasukkan" }),
  endDate: z.coerce.date({ message: "Tanggal berakhir harus dimasukan" }),
});
