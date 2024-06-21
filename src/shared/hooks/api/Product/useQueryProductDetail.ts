import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ProductServiceApi } from "services";
import { IProductResponseParams } from "services/Product/ProductServiceInterface";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryDetailProduct = (productId?: string) => {
  const token = TokenConfig.getToken();

  const [productDetail, setProductDetail] =
    useState<IProductResponseParams | null>(null);
  const [loading, setLoading] = useState(false);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [CLIENT_KEY.PRODUCT.GET_DETAIL_PRODUCT],
    queryFn: ({ signal }) =>
      ProductServiceApi.getProductDetail(productId, signal),

    enabled: !!token,
  });

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      if (isSuccess) {
        setProductDetail(data.data);
      } else {
        setProductDetail(null);
      }
    } else {
      setLoading(true);
    }
  }, [isSuccess, isLoading, data]);

  return { productDetail, loading };
};
