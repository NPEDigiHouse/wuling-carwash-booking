import { z } from "zod";

export const bookingFormSchema = z.object({
  // name: z.string().min(1, { message: "Nama harus dimasukkan" }),
  carType: z.string().min(1, { message: "Tipe mobil harus dimasukkan" }),
  licensePlat: z
    .string()
    .min(1, { message: "Plat nomor mobil harus dimasukkan" }),
  promo: z.string().optional(),
  phoneNumber: z.string().min(1, { message: "Nomor telepon harus dimasukkan" }),
  timeslotId: z.string().min(1, { message: "Tanggal harus dipilih" }),
  date: z.coerce.date({ message: "Jam / Waktu harus dipilih" }),
});
