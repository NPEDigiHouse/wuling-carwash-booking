import { useQuery } from "@tanstack/react-query";
import { ProductServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryAllProducts = () => {
  const token = TokenConfig.getToken();
  return useQuery({
    queryKey: [CLIENT_KEY.PRODUCT.GET_ALL_PRODUCTS],
    queryFn: ({ signal }) => ProductServiceApi.getAllProducts(signal),

    enabled: !!token,
    // select(data) {
    //   console.log("data : ", data);
    //   return data?.data;
    // },
  });
};
