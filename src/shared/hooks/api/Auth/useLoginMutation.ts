import { useMutation } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { AuthServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: [CLIENT_KEY.AUTH.LOGIN_MUTATION],
    mutationFn: AuthServiceApi.login,
    onSuccess(data) {
      TokenConfig.setToken(data.data);

      if (!data.data) {
        NotificationAuth({
          message: "Login gagal email atau password salah",
          status: "FAILED",
          title: "Login Gagal",
        });
      } else {
        NotificationAuth({
          message: "Login berhasil siap masuk ke akun",
          status: "SUCCESS",
          title: "Login Berhasil",
        });
      }
    },
  });
};
