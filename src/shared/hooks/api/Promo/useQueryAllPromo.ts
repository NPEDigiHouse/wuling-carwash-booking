import { useQuery } from "@tanstack/react-query";
import { PromoServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryAllPromo = () => {
  const token = TokenConfig.getToken();
  return useQuery({
    queryKey: [CLIENT_KEY.PROMO.GET_ALL_PROMO],
    queryFn: ({ signal }) => PromoServiceApi.getAllPromo(signal),

    enabled: !!token,
    // select(data) {
    //   console.log("data : ", data);
    //   return data?.data;
    // },
  });
};
