import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationService from "features/Admin/components/Notifications/NotificationService";
import { ProductServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ProductServiceApi.deleteProduct,
    onSuccess(data) {
      if (!data.data) {
        NotificationService({
          message: "Data Product gagal dihapus",
          status: "FAILED",
          title: "Product Gagal terhapus",
        });
      } else {
        NotificationService({
          message: "Data Product berhasil dihapus",
          status: "SUCCESS",
          title: "Product Berhasil terhapus",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.PRODUCT.GET_ALL_PRODUCTS],
        });
      }
    },
  });
};
