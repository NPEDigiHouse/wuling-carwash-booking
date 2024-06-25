import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationService from "features/Admin/components/Notifications/NotificationService";
import { PromoServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useUpdatePromo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CLIENT_KEY.PROMO.EDIT_PROMO],
    mutationFn: PromoServiceApi.updatePromo,
    onSuccess(data) {
      if (!data.data) {
        NotificationService({
          message: "Data Promo gagal diubah",
          status: "FAILED",
          title: "Promo Gagal Diubah",
        });
      } else {
        NotificationService({
          message: "Data Promo berhasil diubah",
          status: "SUCCESS",
          title: "Promo Berhasil Diubah",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.PROMO.GET_ALL_PROMO],
        });
        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.PROMO.GET_DETAIL_PROMO],
        });
      }
    },
  });
};
