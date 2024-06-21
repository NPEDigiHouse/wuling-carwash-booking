import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { BookingServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CLIENT_KEY.BOOKINGS.DELETE_BOOKING],
    mutationFn: BookingServiceApi.deleteBooking,
    onSuccess(data) {
      if (!data.data) {
        NotificationAuth({
          message: "Booking gagal dihapus",
          status: "FAILED",
          title: "Gagal Hapus Booking",
        });
      } else {
        NotificationAuth({
          message: "Berhasil menghapus booking",
          status: "SUCCESS",
          title: "Booking berhasil dihapus",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.BOOKINGS.GET_ALL_BOOKING],
        });
      }
    },
  });
};
