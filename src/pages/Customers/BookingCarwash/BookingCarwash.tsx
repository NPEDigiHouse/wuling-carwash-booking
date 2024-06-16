import {
  Alert,
  Button,
  Checkbox,
  Container,
  Divider,
  Group,
  Image,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import BookingLayout from "features/Booking/components/BookingLayout";
import FormBookingLayout from "features/Booking/components/FormLayout";
import { IoAlertCircle, IoTicketSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
// import StepperMode from "features/booking/components/StepperMode";
import CustomSelectInput from "shared/components/Input/CustomSelectInput";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import Navbar from "shared/components/Navbar/Navbar";
import { HeroImage, Porsche03, PorscheWash } from "shared/constant/Images";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useQueryAllPromo } from "shared/hooks/api/Promo/useQueryAllPromo";
import { useDisclosure } from "@mantine/hooks";
import ModalPromo from "features/Booking/components/ModalPromo";
import { IPromoServiceResponseParams } from "services/Promo/PromoServiceInterface";
import CustomDatePickerInput from "shared/components/Input/CustomDatePickerInput";
import { useQueryTimeslots } from "shared/hooks/api/Timeslots/useQueryTimeslots";
import moment from "moment";

const BookingCarwashPage = () => {
  const [promoOption, setPromoOption] = useState<
    { label: string; value: string }[]
  >([]);
  const [timeslotOption, setTimeslotOption] = useState<
    { label: string; value: string }[] | null
  >([]);

  const [promo, setPromo] = useState<IPromoServiceResponseParams[]>([]);

  const queryPromo = useQueryAllPromo();
  const queryTimeslot = useQueryTimeslots();

  const [opened, { open, close }] = useDisclosure();

  const carwashForm = useForm({
    initialValues: {
      name: "",
      carType: "",
      licensePlat: "",
      phoneNumber: "",
      promo: 0,
      date: new Date(),
      timeslotId: "",
    },
  });

  const getDiscount = queryPromo.data?.data.find((discount) => {
    return discount.id === Number(carwashForm.values.promo);
  });

  const handleSubmit = carwashForm.onSubmit((values) => {
    const params = {
      name: values.name,
      carType: values.carType,
      licensePlat: values.licensePlat,
      promo: values.promo,
      phoneNumber: values.phoneNumber,
      date: moment(values.date).format(),
      timeslotId: values.timeslotId,
    };

    console.log("params : ", params);
  });

  useEffect(() => {
    if (queryPromo.isSuccess && !queryPromo.isFetching) {
      // setPromoOption(queryPromo.data.data);
      const promoOptionData = queryPromo.data.data.map((promo) => {
        return {
          label: promo.promoName,
          value: promo.id.toString(),
        };
      });

      setPromo(queryPromo.data.data);
      setPromoOption(promoOptionData);
    }
  }, [queryPromo.isSuccess, queryPromo.isFetching, queryPromo.data?.data]);

  useEffect(() => {
    if (queryTimeslot.isSuccess && !queryTimeslot.isFetching) {
      if (carwashForm.values.date) {
        const getTime = queryTimeslot.data?.data.filter((timeslot) => {
          return (
            timeslot.date.toString() ===
            moment(carwashForm.values.date).format("DD MMMM YYYY")
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
    carwashForm.values.date,
  ]);

  return (
    <Container fluid mx={0} px={0} className="font-poppins">
      <Image
        src={HeroImage}
        className="absolute left-0 top-0 -z-20 h-[610px] w-screen "
      />

      <ModalPromo opened={opened} onClose={close} promoData={promo} />

      <Container size={"xl"} px={0}>
        <Navbar />
      </Container>

      <Space h={50} />

      <Container size={"xl"} classNames={{ root: `px-0` }}>
        <BookingLayout thumbnail={PorscheWash} title="Carwash">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-16 md:flex-row"
          >
            <Stack>
              <FormBookingLayout headerTitle="Lengkapi Data">
                <CustomTextInput
                  label="Nama Lengkap"
                  placeholder="Masukkan Nama Lengkap"
                  withAsterisk
                  {...carwashForm.getInputProps("name")}
                />

                <CustomTextInput
                  label="Tipe Mobil"
                  placeholder="Contoh : Avanza"
                  withAsterisk
                  gridSize={{ base: 12, sm: 6 }}
                  {...carwashForm.getInputProps("carType")}
                />

                <CustomTextInput
                  label="Plat Nomor"
                  placeholder="Masukkan Plat Nomor"
                  withAsterisk
                  gridSize={{ base: 12, sm: 6 }}
                  {...carwashForm.getInputProps("licensePlat")}
                />

                <CustomTextInput
                  label="No. Telp / Whatsapp"
                  placeholder="Masukkan Nomor Telepon"
                  withAsterisk
                  {...carwashForm.getInputProps("phoneNumber")}
                />

                <CustomDatePickerInput
                  dropdownType="modal"
                  label="Tanggal Booking"
                  placeholder="Pilih tanggal booking"
                  gridSize={{ base: 12, sm: 6 }}
                  valueFormat={"DD MMMM YY"}
                  {...carwashForm.getInputProps("date")}
                />

                <CustomSelectInput
                  label="Pilih Waktu"
                  placeholder="Pilih Waktu tersedia"
                  gridSize={{ base: 12, sm: 6 }}
                  data={timeslotOption!}
                  {...carwashForm.getInputProps("time")}
                />
              </FormBookingLayout>

              <Space h={30} />

              <FormBookingLayout headerTitle="Metode Pembayaran">
                <Stack>
                  <CustomSelectInput
                    classNames={{
                      input: `bg-transparent h-14 placeholder:font-poppins placeholder:px-3 px-12 font-poppins placeholder:text-base text-lg rounded-none border-t-transparent border-r-transparent  border-l-transparent border-b`,
                    }}
                    rightSection={<MdKeyboardArrowRight className="text-xl" />}
                    data={promoOption}
                    leftSection={
                      <Group className="rounded-full bg-green-100 p-1.5">
                        <IoTicketSharp className="text-xl text-green-500" />
                      </Group>
                    }
                    placeholder="Bayar hemat pakai promo"
                    label="Diskon"
                    gridSize={{ base: 12 }}
                    {...carwashForm.getInputProps("discount")}
                  />

                  {!getDiscount ? null : (
                    <Text className="text-orange-400">
                      Potongan sebesar {getDiscount.discount}% di claim
                    </Text>
                  )}

                  <Text
                    className="text-sm font-medium text-teal-600"
                    onClick={open}
                  >
                    Lihat Semua promo
                  </Text>
                </Stack>

                <Stack gap={10} className="w-full">
                  <Text>Pilih metode pembayaran</Text>
                  <Group>
                    <Checkbox
                      classNames={{
                        body: `bg-[#F2F2F2] rounded-full px-5  py-2.5`,
                        input: `rounded-full `,
                        root: `w-full md:w-fit`,
                      }}
                      defaultChecked
                      label="Cash"
                    />

                    <Checkbox
                      classNames={{
                        body: `bg-[#F2F2F2] rounded-full px-5  py-2.5`,
                        input: ` rounded-full `,
                        root: `w-full md:w-fit`,
                      }}
                      defaultChecked
                      label="Bayar di tempat"
                    />
                  </Group>
                </Stack>
              </FormBookingLayout>
            </Stack>

            <Stack
              gap={30}
              className="h-fit w-full border  border-solid border-gray-200  bg-white px-5 py-7 shadow-md md:rounded-3xl md:px-10"
            >
              <Text className="text-xl font-medium">
                Rincian Booking Carwash
              </Text>

              <Divider size={"sm"} />

              <Stack>
                <Image
                  src={Porsche03}
                  className="m-auto w-full md:h-2/3 md:w-2/3 "
                />
                <Text className="text-center text-xs">
                  <span className="text-red-500">Note</span> : gambar tersebut
                  hanya pemanis
                </Text>
              </Stack>

              <Stack gap={20}>
                <Stack gap={10}>
                  <Group justify="space-between">
                    <Text>Harga</Text>
                    <Text>Rp 60.000</Text>
                  </Group>

                  <Group justify="space-between">
                    <Text>Potongan Promo</Text>
                    <Text className="text-red-500">- 6000</Text>
                  </Group>
                </Stack>

                <Divider variant="dashed" size={"sm"} />

                <Group justify="space-between" className="text-green-600 ">
                  <Text className="font-medium">Total Pembayaran</Text>
                  <Text className="font-medium">Rp 56.000</Text>
                </Group>

                <Alert
                  variant="light"
                  color="yellow"
                  title="Kebijakan Pembatalan"
                  icon={<IoAlertCircle />}
                  radius={"lg"}
                  classNames={{
                    message: `text-xs  md:text-sm`,
                  }}
                >
                  Kamu tidak dapat melakukan pembatalan atau perubahan apapun
                  pada pesanan setelah melakukan pembayaran
                </Alert>
              </Stack>
              <Button
                type="submit"
                fullWidth
                className=" h-12 rounded-xl bg-primary px-7 text-base font-medium drop-shadow-2xl"
              >
                Lanjutkan
              </Button>
            </Stack>
          </form>
        </BookingLayout>
      </Container>

      <Space h={50} />
    </Container>
  );
};

export default BookingCarwashPage;
