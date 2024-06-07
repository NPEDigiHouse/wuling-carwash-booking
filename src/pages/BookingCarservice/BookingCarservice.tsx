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
import CustomSelectInput from "shared/components/Input/CustomSelectInput";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import Navbar from "shared/components/Navbar/Navbar";
import { HeroImage, Porsche03, PorscheService } from "shared/constant/Images";

const BookingCarservicePage = () => {
  return (
    <Container fluid mx={0} px={0} className="font-poppins">
      <Image
        src={HeroImage}
        className="absolute left-0 top-0 -z-20 h-[610px] w-screen "
      />

      <Container size={"xl"} px={0}>
        <Navbar />
      </Container>

      <Space h={50} />

      <Container size={"xl"} classNames={{ root: `px-0` }}>
        <BookingLayout thumbnail={PorscheService} title="Car Service">
          <form>
            <FormBookingLayout headerTitle="Lengkapi Data">
              <CustomTextInput
                label="Nama Lengkap"
                placeholder="Masukkan Nama Lengkap"
                withAsterisk
              />

              <CustomTextInput
                label="Tipe Mobil"
                placeholder="Contoh : Avanza"
                withAsterisk
                gridSize={{ base: 12, sm: 6 }}
              />

              <CustomTextInput
                label="Plat Nomor"
                placeholder="Masukkan Plat Nomor"
                withAsterisk
                gridSize={{ base: 12, sm: 6 }}
              />

              <CustomTextInput
                label="No. Telp / Whatsapp"
                placeholder="Masukkan Nomor Telepon"
                withAsterisk
              />

              <CustomSelectInput
                label="Hari"
                data={["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]}
                placeholder="Pilih Hari"
                withAsterisk
                gridSize={{ base: 12, sm: 6 }}
              />

              <CustomSelectInput
                label="Waktu / Jam"
                data={["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]}
                placeholder="Pilih Waktu"
                withAsterisk
                gridSize={{ base: 12, sm: 6 }}
              />
            </FormBookingLayout>

            <Space h={30} />

            <FormBookingLayout headerTitle="Metode Pembayaran">
              <CustomSelectInput
                classNames={{
                  input: `bg-transparent h-14 placeholder:font-poppins placeholder:px-3  rounded-none border-t-transparent border-r-transparent  border-l-transparent border-b`,
                }}
                rightSection={<MdKeyboardArrowRight className="text-xl" />}
                data={["Promo hari senin"]}
                leftSection={
                  <Group className="rounded-full bg-green-100 p-1.5">
                    <IoTicketSharp className="text-xl text-green-500" />
                  </Group>
                }
                placeholder="Bayar hemat pakai promo"
                label="Diskon"
                gridSize={{ base: 12 }}
              />

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
          </form>

          <Stack
            gap={30}
            className="h-fit w-full border  border-solid border-gray-200  bg-white px-5 py-7 shadow-md md:rounded-3xl md:px-10"
          >
            <Text className="text-xl font-medium">Rincian Booking Service</Text>

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
                Kamu tidak dapat melakukan pembatalan atau perubahan apapun pada
                pesanan setelah melakukan pembayaran
              </Alert>
            </Stack>
            <Button
              fullWidth
              className=" h-12 rounded-xl bg-primary px-7 text-base font-medium drop-shadow-2xl"
            >
              Lanjutkan
            </Button>
          </Stack>
        </BookingLayout>
      </Container>

      <Space h={50} />
    </Container>
  );
};

export default BookingCarservicePage;
