import { useQuery } from "@tanstack/react-query";
import { BookingServiceApi } from "services";
import TokenConfig from "shared/config/TokenConfig";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useQueryAllBooking = () => {
  const token = TokenConfig.getToken();
  return useQuery({
    queryKey: [CLIENT_KEY.BOOKINGS.GET_ALL_BOOKING],
    queryFn: ({ signal }) => BookingServiceApi.getAllBookings(signal),
    enabled: !!token,
  });
};
