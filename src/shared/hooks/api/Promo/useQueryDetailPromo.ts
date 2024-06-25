import { useQuery } from "@tanstack/react-query";
import { PromoServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryDetailPromo = (promoId?: string) => {
  const token = TokenConfig.getToken();
  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: [CLIENT_KEY.PROMO.GET_DETAIL_PROMO, promoId],
    queryFn: ({ signal }) => PromoServiceApi.getDetailPromo(promoId, signal),

    enabled: !!token,
  });

  return { data, isLoading, isSuccess, refetch };
};
