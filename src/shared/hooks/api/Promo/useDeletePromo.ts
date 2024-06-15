import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationService from "features/Admin/components/Notifications/NotificationService";
import { PromoServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useDeletePromo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: PromoServiceApi.deletePromo,
    onSuccess(data) {
      if (!data.data) {
        NotificationService({
          message: "Data Promo gagal dihapus",
          status: "FAILED",
          title: "Promo Gagal terhapus",
        });
      } else {
        NotificationService({
          message: "Data Promo berhasil dihapus",
          status: "SUCCESS",
          title: "Promo Berhasil terhapus",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.PROMO.GET_ALL_PROMO],
        });
      }
    },
  });
};
