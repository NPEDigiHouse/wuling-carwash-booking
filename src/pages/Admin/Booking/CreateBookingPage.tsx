import FormLayout from "features/Admin/layouts/Form/FormLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomerCreateBooking } from "shared/hooks/api/Booking/useCustomerCreateBooking";
import { IAdminBookingFormPropsType } from "features/Admin/interfaces/BookingFormInterface";
import BaseBookingForm from "features/Admin/components/Form/BaseBookingForm";
import { Text } from "@mantine/core";

const CreateBookingPage = () => {
  const navigate = useNavigate();

  const createBooking = useCustomerCreateBooking();

  const handleSubmitForm = (values: IAdminBookingFormPropsType) => {
    const params = {
      carType: values.carType,
      licensePlate: values.licensePlat,
      promoId: Number(values.promo),
      phoneNumber: values.phoneNumber,
      timeslotId: Number(values.timeslotId),
      amount: values.amount,
      productId: values.productId,
      customerId: values.customerId,
    };

    createBooking.mutate(params);
  };

  useEffect(() => {
    if (createBooking.isSuccess && !createBooking.isPending) {
      navigate("/admin/promo");
    }
  }, [createBooking.isSuccess, createBooking.isPending, navigate]);

  return (
    <FormLayout title="Tambah Promo">
      <Text>Booking Customer Create</Text>
      <BaseBookingForm onSubmit={handleSubmitForm} />
    </FormLayout>
  );
};

export default CreateBookingPage;
