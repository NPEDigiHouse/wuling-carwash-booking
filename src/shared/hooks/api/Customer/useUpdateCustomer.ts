import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationService from "features/Admin/components/Notifications/NotificationService";
import { CustomerServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CLIENT_KEY.CUSTOMER.UPDATE_CUSTOMER],
    mutationFn: CustomerServiceApi.updateCustomer,
    onSuccess(data) {
      console.log("data : ", data.data);

      if (!data.data) {
        NotificationService({
          message: "Data Customer gagal diubah",
          status: "FAILED",
          title: "Customer Gagal Diubah",
        });
      } else {
        NotificationService({
          message: "Data Customer berhasil diubah",
          status: "SUCCESS",
          title: "Customer Berhasil Diubah",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.CUSTOMER.GET_ALL_CUSTOMERS],
        });
      }
    },
  });
};
