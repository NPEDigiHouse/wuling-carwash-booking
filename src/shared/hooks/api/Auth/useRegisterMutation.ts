import { useMutation } from "@tanstack/react-query";
import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { AuthServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: [CLIENT_KEY.AUTH.REGISTER_MUTATION],
    mutationFn: AuthServiceApi.register,
    onSuccess(data) {
      if (!data.data) {
        NotificationAuth({
          message: "Pendaftaran akun tidak berhasil",
          status: "FAILED",
          title: "Registrasi Gagal",
        });
      } else {
        NotificationAuth({
          message: "Pendaftaran akun berhasil",
          status: "SUCCESS",
          title: "Registrasi Berhasil",
        });
      }
    },
  });
};
