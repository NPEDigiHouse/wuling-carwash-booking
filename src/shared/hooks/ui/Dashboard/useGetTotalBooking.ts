import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  BookingServiceApi,
  CustomerServiceApi,
  PromoServiceApi,
} from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useGetTotalBooking = () => {
  const token = TokenConfig.getToken();
  const [totalData, setTotalData] = useState<{
    amountBooking: number;
    amountPromo: number;
    amountCustomer: number;
  } | null>(null);
  const {
    data: amountBooking,
    isSuccess: isSuccessGetBooking,
    // isLoading: isLoadingGetBooking,
  } = useQuery({
    queryKey: [CLIENT_KEY.UI.GET_TOTAL_BOOKING],
    queryFn: ({ signal }) => BookingServiceApi.getAllBookings(signal),
    enabled: !!token,
    select(data) {
      return data.data.length;
    },
  });

  const {
    data: amountPromo,
    isSuccess: isSuccessGetPromo,
    // isLoading: isLoadingGetPromo,
  } = useQuery({
    queryKey: [CLIENT_KEY.UI.GET_TOTAL_PROMO],
    queryFn: () => PromoServiceApi.getAllPromo(),
    enabled: !!token,
    select(data) {
      return data.data.length;
    },
  });

  const {
    data: amountCustomer,
    isSuccess: isSuccessGetCustomer,
    // isLoading: isLoadingGetPromo,
  } = useQuery({
    queryKey: [CLIENT_KEY.UI.GET_TOTAL_CUSTOMER],
    queryFn: () => CustomerServiceApi.getAllCustomers(),
    enabled: !!token,
    select(data) {
      return data.data.length;
    },
  });

  useEffect(() => {
    if (isSuccessGetBooking && isSuccessGetPromo && isSuccessGetCustomer) {
      setTotalData({ amountBooking, amountPromo, amountCustomer });
    } else {
      setTotalData({ amountBooking: 0, amountPromo: 0, amountCustomer: 0 });
    }
  }, [
    isSuccessGetBooking,
    isSuccessGetPromo,
    amountBooking,
    amountPromo,
    isSuccessGetCustomer,
    amountCustomer,
  ]);

  return { totalData };
};
