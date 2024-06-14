import { useMutation, useQueryClient } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { AuthServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [CLIENT_KEY.AUTH.LOGIN_MUTATION],
    mutationFn: AuthServiceApi.login,
    onSuccess(data) {
      console.log("data : ", data);

      if (!data.data) {
        NotificationAuth({
          message: "Login gagal email atau password salah",
          status: "FAILED",
          title: "Login Gagal",
        });
      } else {
        TokenConfig.setToken(data.data);

        NotificationAuth({
          message: "Login berhasil siap masuk ke akun",
          status: "SUCCESS",
          title: "Login Berhasil",
        });

        queryClient.invalidateQueries({
          queryKey: [CLIENT_KEY.AUTH.GET_USER_CREDENTIAL],
        });
      }
    },
    onError() {
      console.log("error : ");

      NotificationAuth({
        message: "Login gagal email atau password salah",
        status: "FAILED",
        title: "Login Gagal",
      });
    },
  });
};
