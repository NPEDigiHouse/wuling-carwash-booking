import { useMutation } from "@tanstack/react-query";
import { AuthServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: [CLIENT_KEY.AUTH.REGISTER_MUTATION],
    mutationFn: AuthServiceApi.register,
    onSuccess(data) {
      TokenConfig.setToken(data.data);
    },
  });
};
