import { useMutation } from "@tanstack/react-query";
import { BookingServiceApi } from "services";

export const useUploadReceipt = () => {
  const { mutate, isSuccess } = useMutation({
    mutationFn: BookingServiceApi.uploadReceiptBooking,
  });

  return { mutate, isSuccess };
};
