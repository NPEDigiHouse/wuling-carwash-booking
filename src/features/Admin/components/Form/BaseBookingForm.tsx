import { Button, Group, SimpleGrid, Space, Stack, Text } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IAdminBookingFormPropsType } from "features/Admin/interfaces/BookingFormInterface";
import { bookingFormSchema } from "features/Admin/schema/BookingFormSchema";
import ModalPromo from "features/Booking/components/ModalPromo";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IPromoServiceResponseParams } from "services/Promo/PromoServiceInterface";
import CustomDatePickerInput from "shared/components/Input/CustomDatePickerInput";
import CustomSelectInput from "shared/components/Input/CustomSelectInput";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import { useQueryAllProducts } from "shared/hooks/api/Product/useQueryAllProducts";
import { useQueryAllPromo } from "shared/hooks/api/Promo/useQueryAllPromo";
import { useQueryTimeslots } from "shared/hooks/api/Timeslots/useQueryTimeslots";
// import { useFilterPromoDiscount } from "shared/hooks/ui/Booking/useFilterPromoDiscount";

interface IBookingInitialValues {
  initialValues?: IAdminBookingFormPropsType;
  isLoading?: boolean;
  onSubmit: (values: IAdminBookingFormPropsType) => void;
}

const BaseBookingForm = ({
  initialValues,
  onSubmit,
}: IBookingInitialValues) => {
  const bookingForm = useForm({
    initialValues: {
      name: initialValues?.name || "",
      carType: initialValues?.carType || "",
      licensePlat: initialValues?.licensePlat || "",
      phoneNumber: initialValues?.phoneNumber || "",
      promo: initialValues?.promo || 0,
      date: initialValues?.date || new Date(),
      timeslotId: initialValues?.timeslotId || "",
      customerId: initialValues?.customerId || "",
      productId: initialValues?.productId || 0,
      amount: initialValues?.amount || 0,
    },
    validate: zodResolver(bookingFormSchema),
  });

  // const [promoOption, setPromoOption] = useState<
  //   { label: string; value: string; discount?: number }[]
  // >([]);
  const [timeslotOption, setTimeslotOption] = useState<
    { label: string; value: string }[] | null
  >([]);

  const [promo, setPromo] = useState<IPromoServiceResponseParams[]>([]);
  // const [productsOption, setProductsOption] = useState([]);
  const [opened, { open, close }] = useDisclosure();
  const [productPrice, setProductPrice] = useState(0);

  const queryPromo = useQueryAllPromo();
  const queryTimeslot = useQueryTimeslots();
  const queryProduct = useQueryAllProducts();

  useEffect(() => {
    const getProductPrice = queryProduct.data?.data.find((product) => {
      console.log("product id : ", bookingForm.values.productId);

      if (product.id === Number(bookingForm.values.productId)) {
        return product.price;
      }

      return 0;
    });

    if (getProductPrice) {
      setProductPrice(getProductPrice?.price);
    } else {
      setProductPrice(0);
    }
  }, [queryProduct.data?.data, bookingForm.values.productId]);

  console.log("product price : ", productPrice);

  useEffect(() => {
    if (queryPromo.isSuccess && !queryPromo.isFetching) {
      setPromo(queryPromo.data.data);
    }
  }, [queryPromo.isSuccess, queryPromo.isFetching, queryPromo.data?.data]);

  useEffect(() => {
    if (queryTimeslot.isSuccess && !queryTimeslot.isFetching) {
      if (bookingForm.values.date) {
        const getTime = queryTimeslot.data?.data.filter((timeslot) => {
          return (
            timeslot.date.toString() ===
            moment(bookingForm.values.date).format("DD MMMM YYYY")
          );
        });

        const timeslotOptionData = getTime?.map((timeslot) => {
          return {
            label: timeslot.time,
            value: timeslot.id.toString(),
          };
        });

        setTimeslotOption(timeslotOptionData);
      } else {
        setTimeslotOption(null);
      }
    }
  }, [
    queryTimeslot.isSuccess,
    queryTimeslot.isFetching,
    queryTimeslot.data?.data,
    bookingForm.values.date,
  ]);

  // const { promoDiscount, priceOff, amount } = useFilterPromoDiscount(
  //   promoOption,
  //   bookingForm.values.promo,
  //   queryDetailProduct.productDetail?.price,
  // );

  return (
    <form onSubmit={bookingForm.onSubmit((values) => onSubmit(values))}>
      <ModalPromo opened={opened} onClose={close} promoData={promo} />

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
        <CustomTextInput
          label="Tipe Mobil"
          placeholder="Contoh : Avanza"
          withAsterisk
          gridSize={{ base: 12, sm: 6 }}
          {...bookingForm.getInputProps("carType")}
        />

        <CustomTextInput
          label="Plat Nomor"
          placeholder="Masukkan Plat Nomor"
          withAsterisk
          gridSize={{ base: 12, sm: 6 }}
          {...bookingForm.getInputProps("licensePlat")}
        />

        <CustomTextInput
          label="No. Telp / Whatsapp"
          placeholder="Masukkan Nomor Telepon"
          withAsterisk
          {...bookingForm.getInputProps("phoneNumber")}
        />

        <CustomSelectInput
          label="Layanan Produk"
          placeholder="Pilih Layanan"
          gridSize={{ base: 12, sm: 6 }}
          data={queryProduct.data?.data.map((product) => {
            return {
              label: `${product.productName}`,
              value: `${product.id}`,
            };
          })}
          {...bookingForm.getInputProps("productId")}
        />

        <CustomDatePickerInput
          dropdownType="modal"
          label="Tanggal Booking"
          placeholder="Pilih tanggal booking"
          gridSize={{ base: 12, sm: 6 }}
          valueFormat={"DD MMMM YY"}
          {...bookingForm.getInputProps("date")}
        />

        <CustomSelectInput
          label="Pilih Waktu"
          placeholder="Pilih Waktu tersedia"
          gridSize={{ base: 12, sm: 6 }}
          data={!timeslotOption ? [] : timeslotOption}
          {...bookingForm.getInputProps("timeslotId")}
        />

        <Stack>
          <CustomSelectInput
            classNames={{
              input: `bg-transparent h-14 placeholder:font-poppins placeholder:px-3 px-12 font-poppins placeholder:text-base text-lg rounded-none border-t-transparent border-r-transparent  border-l-transparent border-b`,
            }}
            rightSection={<MdKeyboardArrowRight className="text-xl" />}
            data={queryPromo.data?.data.map((promo) => {
              return {
                label: promo.promoName,
                value: promo.id.toString(),
              };
            })}
            leftSection={
              <Group className="rounded-full bg-green-100 p-1.5">
                <IoTicketSharp className="text-xl text-green-500" />
              </Group>
            }
            placeholder="Bayar hemat pakai promo"
            label="Diskon"
            gridSize={{ base: 12 }}
            {...bookingForm.getInputProps("promo")}
          />

          {/* {!promoDiscount ? null : (
            <Text className="text-orange-400">
              Potongan sebesar {promoDiscount}% di claim
            </Text>
          )} */}

          <Text className="text-sm font-medium text-teal-600" onClick={open}>
            Lihat Semua promo
          </Text>
        </Stack>
      </SimpleGrid>

      <Space h={30} />

      <Button
        type="submit"
        leftSection={<FaPlus />}
        className=" h-12 rounded-xl bg-primary px-7 font-poppins text-base font-medium drop-shadow-2xl"
      >
        Tambah
      </Button>
    </form>
  );
};

export default BaseBookingForm;
