import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BookingServiceApi } from "services";
import { ICustomerBookingResponseParams } from "services/Booking/BookingServiceInterface";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryCustomerBookings = (customerId?: string) => {
  const [loading, setLoading] = useState(false);
  const [customerBooking, setCustomerBooking] = useState<
    ICustomerBookingResponseParams[] | null
  >(null);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [CLIENT_KEY.CUSTOMER.GET_CUSTOMER_BOOKINGS, customerId],
    queryFn: () => BookingServiceApi.getCustomerBooking(customerId),
  });

  useEffect(() => {
    if (!isLoading) {
      setLoading(true);
      if (isSuccess) {
        setCustomerBooking(data.data);
      } else {
        setCustomerBooking(null);
      }
    } else {
      setLoading(false);
    }
  }, [isSuccess, isLoading, data]);

  return { customerBooking, isSuccess, loading };
};
