import { z } from "zod";

export const CustomerSchema = z.object({
  username: z.string().min(1, { message: "Username tidak boleh kosong" }),
  email: z
    .string()
    .email({ message: "Masukkan dengan format email" })
    .min(1, { message: "Email tidak boleh kosong" }),
  name: z.string().min(1, { message: "Nama tidak boleh kosong" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Nomor telepon tidak boleh kosong" }),
});
