import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationService from "features/Admin/components/Notifications/NotificationService";
import { ProductServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useCreateProducts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CLIENT_KEY.PRODUCT.CREATE_PRODUCTS],
    mutationFn: ProductServiceApi.createProducts,
    onSuccess(data) {
      if (!data.data) {
        NotificationService({
          message: "Data Product gagal ditambah",
          status: "FAILED",
          title: "Product Gagal Ditambah",
        });
      } else {
        NotificationService({
          message: "Data Product berhasil ditambah",
          status: "SUCCESS",
          title: "Product Berhasil Ditambah",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.PRODUCT.GET_ALL_PRODUCTS],
        });
      }
    },
  });
};
