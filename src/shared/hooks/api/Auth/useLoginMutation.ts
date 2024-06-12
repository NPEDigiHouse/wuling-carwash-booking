import { useMutation } from "@tanstack/react-query";
import { AuthServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: [],
    mutationFn: AuthServiceApi.login,
    onSuccess(data) {
      console.log("data : ", data.data);

      TokenConfig.setToken(data.data);
    },
  });
};
