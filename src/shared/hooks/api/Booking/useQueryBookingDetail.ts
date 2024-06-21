import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BookingServiceApi } from "services";
import { IBookingResponseParams } from "services/Booking/BookingServiceInterface";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryBookingDetail = (bookingId?: string) => {
  const [loading, setLoading] = useState(false);
  const [bookingDetail, setBookingDetail] =
    useState<IBookingResponseParams | null>(null);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [CLIENT_KEY.BOOKINGS.GET_BOOKING_DETAIL],
    queryFn: () => BookingServiceApi.getBookingDetail(bookingId),
  });

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      if (isSuccess) {
        setBookingDetail(data.data);
      } else {
        setBookingDetail(null);
      }
    } else {
      setLoading(true);
    }
  }, [isSuccess, isLoading, data]);

  return { bookingDetail, loading };
};
