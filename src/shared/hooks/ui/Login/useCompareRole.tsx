import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useCompareRole = () => {
  const navigate = useNavigate();
  const token = TokenConfig.getToken();

  const [loading, setLoading] = useState(false);

  const {
    data: queryRole,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: [CLIENT_KEY.AUTH.GET_USER_CREDENTIAL, token],
    queryFn: ({ signal }) => AuthServiceApi.credential(signal),
    enabled: !!token,
    select(data) {
      return {
        role: data.data.role,
      };
    },
  });

  useEffect(() => {
    if (!isLoading) {
      console.log("loading query : ", isLoading);

      setLoading(false);
      if (isSuccess) {
        if (queryRole.role === "ADMIN") {
          navigate("/admin");
        } else if (queryRole.role === "CUSTOMER") {
          navigate("/");
        }
      } else {
        console.log("is success role : ", queryRole?.role);
      }
    } else {
      setLoading(true);
    }
  }, [isSuccess, queryRole, navigate, isLoading]);

  return { loading };
};
