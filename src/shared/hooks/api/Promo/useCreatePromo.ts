import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationService from "features/Admin/components/Notifications/NotificationService";
import { PromoServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useCreatePromo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CLIENT_KEY.PROMO.CREATE_PROMO],
    mutationFn: PromoServiceApi.createPromo,
    onSuccess(data) {
      if (!data.data) {
        NotificationService({
          message: "Data Promo gagal ditambah",
          status: "FAILED",
          title: "Promo Gagal Ditambah",
        });
      } else {
        NotificationService({
          message: "Data Promo berhasil ditambah",
          status: "SUCCESS",
          title: "Promo Berhasil Ditambah",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.PROMO.GET_ALL_PROMO],
        });
      }
    },
  });
};
