import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CustomerServiceApi } from "services";
import { ICustomerDetailResponseParams } from "services/Customer/CustomerServiceInterface";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryAllCustomers = (id?: string) => {
  const [loading, setLoading] = useState(false);
  const [customersData, setCustomersData] = useState<
    ICustomerDetailResponseParams[] | null
  >(null);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [CLIENT_KEY.CUSTOMER.GET_ALL_CUSTOMERS, id],
    queryFn: ({ signal }) => CustomerServiceApi.getAllCustomers(signal),
  });

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      if (isSuccess) {
        setCustomersData(data.data);
      } else {
        setCustomersData(null);
      }
    } else {
      setLoading(true);
    }
  }, [isSuccess, isLoading, data]);

  return { customersData, isSuccess, loading };
};
