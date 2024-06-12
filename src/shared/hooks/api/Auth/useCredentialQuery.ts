import { useQuery } from "@tanstack/react-query";
import { AuthServiceApi } from "services";

export const useCredentialQuery = () => {
  return useQuery({
    queryKey: [""],
    queryFn: () => AuthServiceApi.credential(),
  });
};
