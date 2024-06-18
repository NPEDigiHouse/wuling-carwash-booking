import { useQuery } from "@tanstack/react-query";
import { IModalConfirmationBookingResponse } from "features/Admin/interfaces/ModalConfirmBookInterface";
import { useEffect, useState } from "react";
import { BookingServiceApi } from "services";
import { CLIENT_KEY } from "shared/constant/ClientKey";

export const useGetBookingConfirmData = (bookingId?: string) => {
  console.log("booking id : ", bookingId);

  const [bookingModalDetail, setBookingModalDetail] =
    useState<IModalConfirmationBookingResponse | null>(null);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [CLIENT_KEY.UI.GET_CONFIRMATION_MODAL_BOOKING_DATA, bookingId],
    queryFn: ({ signal }) =>
      BookingServiceApi.getBookingDetail(bookingId, signal),
    select(data) {
      return {
        id: data.data.id,
        carType: data.data.carType,
        carPlate: data.data.carPlate,
        name: data.data.name,
        service: data.data.service,
        status: data.data.status,
      };
    },
  });

  useEffect(() => {
    if (!isSuccess) {
      setBookingModalDetail(null);
    } else if (isSuccess && !isLoading) {
      setBookingModalDetail(data);
    }
  }, [isSuccess, data, isLoading]);

  return { data, isSuccess, isLoading, bookingModalDetail };
};
