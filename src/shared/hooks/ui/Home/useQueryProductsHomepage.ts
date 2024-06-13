import { useQuery } from "@tanstack/react-query";
import { PublicServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryProductsHomepage = () => {
  return useQuery({
    queryKey: [CLIENT_KEY.PUBLIC.GET_ALL_PRODUCTS_HOMEPAGE],
    queryFn: ({ signal }) => PublicServiceApi.getAllPublicProducts(signal),
  });
};
