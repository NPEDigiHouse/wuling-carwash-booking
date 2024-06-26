import { useEffect, useState } from "react";
import { IPromoServiceResponseParams } from "services/Promo/PromoServiceInterface";
import { useQueryDetailPromo } from "shared/hooks/api/Promo/useQueryDetailPromo";

export const useGetPromoInitialData = (promoId?: string) => {
  const [promoInitialValues, setPromoInitialValues] =
    useState<IPromoServiceResponseParams | null>(null);

  const [loading, setLoading] = useState(true);
  const { data, isLoading, isSuccess, refetch } = useQueryDetailPromo(promoId);
  //   console.log("data : ", data.data);

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);

      if (isSuccess) {
        if (data?.data) {
          console.log("is success : ", isSuccess);

          setPromoInitialValues(data?.data);
        }
      } else {
        console.log("is success : ", isSuccess);

        setPromoInitialValues(null);
      }
    } else {
      setLoading(true);
    }
  }, [data, isSuccess, isLoading]);

  return { promoInitialValues, loading, refetch };
};
