import { useQuery } from "@tanstack/react-query";
import { AuthServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useCredentialQuery = () => {
  return useQuery({
    queryKey: [CLIENT_KEY.AUTH.GET_USER_CREDENTIAL],
    queryFn: ({ signal }) => AuthServiceApi.credential(signal),
  });
};
