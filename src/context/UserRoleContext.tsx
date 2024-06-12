import { ReactNode, createContext, useEffect, useState } from "react";
import { useCredentialQuery } from "shared/hooks/api/Auth/useCredentialQuery";

interface IUserProviderPropsType {
  children: ReactNode;
}

export const UserRoleContext = createContext(null);

const UserProvider = (params: IUserProviderPropsType) => {
  const [userRoleDetail, setUserRoleDetail] = useState(null);

  const { data: credential } = useCredentialQuery();

  useEffect(() => {
    setUserRoleDetail(credential);
  }, [userRoleDetail, credential]);

  return (
    <UserRoleContext.Provider value={userRoleDetail}>
      {params.children}
    </UserRoleContext.Provider>
  );
};

export default UserProvider;
