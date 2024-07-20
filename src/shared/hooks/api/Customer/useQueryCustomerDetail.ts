import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CustomerServiceApi } from "services";
import { ICustomerDetailResponseParams } from "services/Customer/CustomerServiceInterface";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryCustomerDetail = (id?: string) => {
  const [loading, setLoading] = useState(false);
  const [customerDetail, setCustomerDetail] =
    useState<ICustomerDetailResponseParams | null>(null);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [CLIENT_KEY.CUSTOMER.GET_CUSTOMER_DETAIL, id],
    queryFn: ({ signal }) => CustomerServiceApi.getDetailCustomer(id, signal),
  });

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess) {
        setCustomerDetail(data.data);
      } else {
        setCustomerDetail(null);
      }
    } else {
      setLoading(true);
    }
  }, [isSuccess, isLoading, data]);

  return { customerDetail, isSuccess, loading };
};
