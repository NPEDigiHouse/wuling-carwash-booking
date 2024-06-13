import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email({ message: "Masukkan input dalam bentuk email" }),
    username: z.string().min(1, { message: "Username tidak boleh kosong" }),
    password: z.string().min(1, { message: "Password tidak boleh kosong" }),
    name: z.string().min(1, { message: "Nama tidak boleh kosong" }),
    phoneNumber: z
      .string()
      .min(1, { message: "Nomor telepon tidak boleh kosong" }),
  })
  .partial({
    email: true,
    username: true,
    password: true,
    name: true,
    phoneNumber: true,
  });
