import { useMutation } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { BookingServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useCustomerCreateBooking = () => {
  return useMutation({
    mutationKey: [CLIENT_KEY.BOOKINGS.CREATE_CUSTOMER_BOOKING],
    mutationFn: BookingServiceApi.createCustomerBooking,
    onSuccess(data) {
      console.log("data : ", data);

      if (!data.data) {
        NotificationAuth({
          message: "Tidak berhasil melakukan booking, mohon coba lagi",
          status: "FAILED",
          title: "Gagal Booking",
        });
      } else {
        NotificationAuth({
          message:
            "Anda berhasil membuat booking, segera mengarahkan ke halaman detail booking",
          status: "SUCCESS",
          title: "Booking berhasil dibuat",
        });
      }
    },
  });
};
