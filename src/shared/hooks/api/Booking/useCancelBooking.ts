import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { BookingServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useCancelCustomerBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BookingServiceApi.cancelBooking,
    onSuccess(data) {
      if (!data.data) {
        NotificationAuth({
          message: `Gagal Cancel booking customer`,
          status: "FAILED",
          title: "Gagal Cancel",
        });
      } else {
        NotificationAuth({
          message: `Berhasil Cancel pesanan booking ${data.data.name}`,
          status: "SUCCESS",
          title: "Booking tercancel",
        });
      }
      queryClient.invalidateQueries({
        queryKey: [CLIENT_KEY.CUSTOMER.GET_CUSTOMER_BOOKINGS],
      });
    },
  });
};
