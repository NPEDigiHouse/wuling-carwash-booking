import { useMutation } from "@tanstack/react-query";
import { AuthServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: [CLIENT_KEY.AUTH.LOGIN_MUTATION],
    mutationFn: AuthServiceApi.login,
    onSuccess(data) {
      console.log("data : ", data.data);

      TokenConfig.setToken(data.data);
    },
  });
};
