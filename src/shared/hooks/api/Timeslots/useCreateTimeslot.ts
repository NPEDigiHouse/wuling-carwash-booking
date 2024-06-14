import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { TimeslotServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useCreateTimeslot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CLIENT_KEY.TIMESLOTS.CREATE_TIMESLOT],
    mutationFn: TimeslotServiceApi.createTimeslot,
    onSuccess(data) {
      if (!data.data) {
        NotificationAuth({
          message: "Data Timeslot Gagal Ditambah",
          status: "FAILED",
          title: "Timeslot Gagal Ditambah",
        });
      } else {
        NotificationAuth({
          message: "Data Timeslot Berhasil Terhapus",
          status: "SUCCESS",
          title: "Timeslot Berhasil Ditambah",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.TIMESLOTS.GET_ALL_TIMESLOTS],
        });
      }
    },
  });
};
