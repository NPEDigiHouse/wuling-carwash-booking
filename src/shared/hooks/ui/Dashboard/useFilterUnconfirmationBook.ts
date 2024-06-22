import { useEffect, useState } from "react";
import { IBookingResponseParams } from "services/Booking/BookingServiceInterface";
import { useQueryAllBooking } from "shared/hooks/api/Booking/useQueryAllBookings";

export const useFilterUnconfirmationBooking = () => {
  const [unconfirmBook, setUnconfirmBook] = useState<IBookingResponseParams[]>(
    [],
  );
  const { data, isSuccess } = useQueryAllBooking();

  useEffect(() => {
    if (isSuccess) {
      const filterData = data.data.filter(
        (book) => book.status === "UNCONFIRMATION",
      );

      setUnconfirmBook(filterData);
      console.log("data : ", unconfirmBook);

      //   if (!filterData) {
      //   }
    }
  }, [isSuccess, data]);

  return { unconfirmBook };
};
