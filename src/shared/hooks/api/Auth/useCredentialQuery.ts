/* eslint-disable no-extra-boolean-cast */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AuthServiceApi } from "services";
import { ICredentialUserResponsePrams } from "services/Auth/AuthServiceInterface";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

// interface IHooksServiceApiParams {
//   option: {
//     onSuccess: () => VoidFunction;
//   };
// }

export const useCredentialQuery = () => {
  const token = TokenConfig.getToken();

  const [userRoleDetail, setUserRoleDetail] =
    useState<ICredentialUserResponsePrams | null>(null);

  const { data, isSuccess } = useQuery({
    queryKey: [CLIENT_KEY.AUTH.GET_USER_CREDENTIAL, token],
    queryFn: ({ signal }) => AuthServiceApi.credential(signal),
    enabled: !!token,
  });

  useEffect(() => {
    if (isSuccess) {
      if (!!data.data) {
        setUserRoleDetail(data.data);
      } else {
        setUserRoleDetail(null);
      }
    }
  }, [isSuccess, data]);

  return { userRoleDetail };

  // return useQuery({
  //   queryKey: [CLIENT_KEY.AUTH.GET_USER_CREDENTIAL, token],
  //   queryFn: ({ signal }) => AuthServiceApi.credential(signal),
  //   enabled: !!token,
  // });
};
