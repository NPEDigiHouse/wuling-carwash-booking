import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { TimeslotServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useUpdateTimeslot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CLIENT_KEY.TIMESLOTS.UPDATE_TIMESLOT],
    mutationFn: TimeslotServiceApi.updateTimeslot,
    onSuccess(data) {
      if (!data.data) {
        NotificationAuth({
          message: "Data Timeslot Gagal Diubah",
          status: "FAILED",
          title: "Timeslot Gagal Diubah",
        });
      } else {
        NotificationAuth({
          message: "Data Timeslot Berhasil Diubah",
          status: "SUCCESS",
          title: "Timeslot Berhasil Diubah",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.TIMESLOTS.GET_ALL_TIMESLOTS],
        });
      }
    },
  });
};
