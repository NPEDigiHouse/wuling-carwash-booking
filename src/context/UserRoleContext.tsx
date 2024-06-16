import { ReactNode, createContext, useEffect, useState } from "react";
import { ICredentialUserResponsePrams } from "services/Auth/AuthServiceInterface";
import { useCredentialQuery } from "shared/hooks/api/Auth/useCredentialQuery";

interface IUserProviderPropsType {
  children: ReactNode;
}

interface IUserContextValueType {
  userDetail: ICredentialUserResponsePrams | null;
  isSuccess: boolean;
}

export const UserRoleContext = createContext<IUserContextValueType | null>(
  null,
);

const UserProvider = (params: IUserProviderPropsType) => {
  const [userRoleDetail, setUserRoleDetail] =
    useState<ICredentialUserResponsePrams | null>(null);

  const credential = useCredentialQuery();

  useEffect(() => {
    if (credential?.data !== undefined) {
      setUserRoleDetail(credential?.data?.data);
    }
  }, [credential.isSuccess, credential.isFetching, credential.data]);

  return (
    <UserRoleContext.Provider
      value={{ userDetail: userRoleDetail, isSuccess: credential.isSuccess }}
    >
      {params.children}
    </UserRoleContext.Provider>
  );
};

export default UserProvider;
