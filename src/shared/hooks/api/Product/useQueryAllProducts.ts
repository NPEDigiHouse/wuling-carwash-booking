import { useQuery } from "@tanstack/react-query";
import { ProductServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryAllProducts = () => {
  return useQuery({
    queryKey: [CLIENT_KEY.PRODUCT.GET_ALL_PRODUCTS],
    queryFn: ({ signal }) => ProductServiceApi.getAllProducts(signal),
  });
};
