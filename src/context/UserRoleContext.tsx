import { ReactNode, createContext, useEffect, useState } from "react";
import { ICredentialUserResponsePrams } from "services/Auth/AuthServiceInterface";
import { useCredentialQuery } from "shared/hooks/api/Auth/useCredentialQuery";

interface IUserProviderPropsType {
  children: ReactNode;
}

export const UserRoleContext =
  createContext<ICredentialUserResponsePrams | null>(null);

const UserProvider = (params: IUserProviderPropsType) => {
  const [userRoleDetail, setUserRoleDetail] =
    useState<ICredentialUserResponsePrams | null>(null);

  const { data: credential } = useCredentialQuery();

  console.log("user data : ", credential?.data);

  useEffect(() => {
    if (!credential?.data) {
      setUserRoleDetail(null);
    } else {
      setUserRoleDetail(credential?.data);
    }
  }, [userRoleDetail, credential]);

  return (
    <UserRoleContext.Provider value={userRoleDetail}>
      {params.children}
    </UserRoleContext.Provider>
  );
};

export default UserProvider;
