import { useQuery } from "@tanstack/react-query";
import { AuthServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

// interface IHooksServiceApiParams {
//   option: {
//     onSuccess: () => VoidFunction;
//   };
// }

export const useCredentialQuery = () => {
  const token = TokenConfig.getToken();

  return useQuery({
    queryKey: [CLIENT_KEY.AUTH.GET_USER_CREDENTIAL, token],
    queryFn: ({ signal }) => AuthServiceApi.credential(signal),
    enabled: !!token,
  });
};
