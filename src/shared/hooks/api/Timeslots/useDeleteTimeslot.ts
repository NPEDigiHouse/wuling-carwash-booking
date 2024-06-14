import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { TimeslotServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useDeleteTimeslot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CLIENT_KEY.TIMESLOTS.DELETE_TIMESLOT],
    mutationFn: TimeslotServiceApi.deleteTimeslot,
    onSuccess(data) {
      if (!data.data) {
        NotificationAuth({
          message: "Data gagal terhapus",
          status: "FAILED",
          title: "Gagal",
        });
      } else {
        NotificationAuth({
          message: "Data berhasil terhapus",
          status: "SUCCESS",
          title: "Berhasil",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.TIMESLOTS.GET_ALL_TIMESLOTS],
        });
      }
    },
  });
};
