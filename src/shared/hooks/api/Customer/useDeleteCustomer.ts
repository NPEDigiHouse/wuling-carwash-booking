import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { CustomerServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useDeleteCustomer = (id?: string) => {
  const queryClient = useQueryClient();

  const { mutate, isSuccess } = useMutation({
    mutationKey: [CLIENT_KEY.CUSTOMER.DELETE_CUSTOMER, id],
    mutationFn: CustomerServiceApi.deleteCustomer,
    onSuccess(data) {
      if (!data.data) {
        NotificationAuth({
          message: "Customer gagal dihapus",
          status: "FAILED",
          title: "Gagal Hapus Customer",
        });
      } else {
        NotificationAuth({
          message: "Berhasil menghapus Customer",
          status: "SUCCESS",
          title: "Customer berhasil dihapus",
        });
      }
      queryClient.invalidateQueries({
        queryKey: [CLIENT_KEY.CUSTOMER.GET_ALL_CUSTOMERS],
      });
    },
  });

  return { mutate, isSuccess };
};
