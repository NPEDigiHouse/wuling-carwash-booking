import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { BookingServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useConfirmationCustomerBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [CLIENT_KEY.BOOKINGS.CONFIRMATION_CUSTOMER_BOOKING],
    mutationFn: BookingServiceApi.confirmationBooking,
    onSuccess(data) {
      if (!data.data) {
        NotificationAuth({
          message: `Gagal Konfirmasi booking customer`,
          status: "FAILED",
          title: "Gagal Konfirmasi",
        });
      } else {
        NotificationAuth({
          message: `Berhasil konfirmasi pesanan booking ${data.data.name}`,
          status: "SUCCESS",
          title: "Booking melakukan konfirmasi",
        });
      }
      queryClient.invalidateQueries({
        queryKey: [CLIENT_KEY.BOOKINGS.GET_ALL_BOOKING],
      });
      queryClient.invalidateQueries({
        queryKey: [CLIENT_KEY.UI.GET_CONFIRMATION_MODAL_BOOKING_DATA],
      });
    },
  });
};
