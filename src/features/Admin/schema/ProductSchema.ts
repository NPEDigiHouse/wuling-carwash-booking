import { z } from "zod";

export const ProductFormSchema = z.object({
  productName: z.string().min(1, { message: "Layanan harus diisi" }),
  price: z.number().min(1000, { message: "Harga harus diisi" }),
});
