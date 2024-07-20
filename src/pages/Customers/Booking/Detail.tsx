/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import {
  Avatar,
  Button,
  Container,
  Divider,
  FileButton,
  Flex,
  Grid,
  Group,
  List,
  Space,
  Stack,
  Text,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { UserRoleContext } from "context/UserRoleContext";
import BaseDetail from "features/Booking/components/BaseDetail";
import ImageDialog from "features/Booking/components/ImageDialog";
import { useContext, useState } from "react";
import {
  IoCalendarOutline,
  IoCarSport,
  IoCheckmark,
  IoCheckmarkCircle,
  IoPerson,
} from "react-icons/io5";
import {
  MdOutlineAttachMoney,
  MdOutlineDiscount,
  MdWhatsapp,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import InstructionIcon from "shared/components/Icon/InstructionIcon";
import ProfileMenu from "shared/components/Menu/ProfileMenu";
import Navbar from "shared/components/Navbar/Navbar";
// import { CustomerBookingCar } from "shared/constant/Images";
import { useQueryBookingDetail } from "shared/hooks/api/Booking/useQueryBookingDetail";

const DetailBookingPage = () => {
  const params = useParams();

  const booking = useQueryBookingDetail(params.id);
  const userRole = useContext(UserRoleContext);

  const [file, setFile] = useState<File | null>(null);

  // const getDiscountPrice = () => {
  //   if (booking.bookingDetail) {
  //     const countDiscountPrice =
  //       booking.bookingDetail?.productPrice *
  //       (booking.bookingDetail?.discount / 100);
  //     const priceDiscount =
  //       booking.bookingDetail?.productPrice - countDiscountPrice;

  //     return priceDiscount;
  //   }
  // };

  console.log(
    "params id : ",
    `${import.meta.env.VITE_LOCALHOST_URL}/uploads/booking/${booking.bookingDetail?.receipt}`,
  );
  return (
    <Container fluid mx={0} px={0} className="font-poppins">
      <Container size={"xl"} px={0} className="my-10">
        <Navbar variant="dark">
          <ProfileMenu
            profileBadge={
              <Group>
                <Avatar size={"md"} />
                <Stack gap={5}>
                  <Text className="text-sm">
                    {userRole?.userDetail?.customer?.name}
                  </Text>
                  <Text className="text-xs text-gray-500">
                    {userRole?.userDetail?.role}
                  </Text>
                </Stack>
              </Group>
            }
          />
        </Navbar>
        {/* <Space h={30} />

        <Group>
          <IoIosArrowDropleft className="text-3xl text-third" />
          <Text className="text-xl font-medium">Kembali</Text>
        </Group> */}
      </Container>

      <Container size={"xl"} px={0}>
        {/* <Stack align="center" gap={0}>
          <Image src={CustomerBookingCar} className="h-[400px] w-[400px]" />
          <Text className="text-xl font-medium">Scroll Down</Text>
        </Stack> */}

        <Text className="text-center text-2xl font-medium">Detail Pesanan</Text>

        <Space h={20} />

        <Grid gutter={{ base: 10, md: 25 }}>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <BaseDetail
              headerIcon={
                <IoCheckmarkCircle className="text-3xl text-green-600 md:text-4xl" />
              }
              title="Booking Sudah Dikonfirmasi"
              description="Silahkan liat status booking anda dan datang pada jam yang telah dipilih"
            >
              <Stack gap={30}>
                <Group justify="space-between" align="center">
                  <Stack gap={5}>
                    <Text className="font-medium text-gray-400">
                      Location :{" "}
                    </Text>
                    <Text className="text-lg font-medium">Wuling Bandung </Text>
                    <Text className="text-base">
                      Jl. BKR No.27, Pasirluyu, Kec. Regol, Kota Bandung, Jawa
                      Barat 40253
                    </Text>
                  </Stack>

                  <Button variant="outline">Lihat Lokasi</Button>
                </Group>

                <Group
                  align="start"
                  className="gap-x-32 gap-y-7 sm:gap-y-10 md:gap-y-40"
                >
                  <Stack gap={5}>
                    <Text className="font-medium text-gray-400">
                      Booked for :{" "}
                    </Text>
                    <Group>
                      <IoPerson className="text-lg text-primary" />
                      <Text className="text-base font-medium">
                        {booking.bookingDetail?.name}
                      </Text>
                    </Group>

                    <Group>
                      <IoCarSport className="text-lg text-primary" />
                      <Text className="text-base font-medium">
                        {booking.bookingDetail?.carType} -{" "}
                        {booking.bookingDetail?.carPlate}
                      </Text>
                    </Group>
                  </Stack>

                  <Stack gap={5}>
                    <Text className="font-medium text-gray-400">
                      Booked ID :{" "}
                    </Text>
                    <Group>
                      <Text className="text-base font-medium">
                        {booking.bookingDetail?.id}
                      </Text>
                    </Group>
                  </Stack>
                </Group>

                <Group
                  align="start"
                  className="gap-x-32 gap-y-7 sm:gap-y-10 md:gap-y-40"
                >
                  <Stack gap={5}>
                    <Text className="font-medium text-gray-400">
                      Tanggal & Waktu
                    </Text>
                    <Group>
                      <IoCalendarOutline className="text-xl text-primary " />
                      <Text className="text-base font-medium">
                        {booking.bookingDetail?.bookingDate},{" "}
                        {booking.bookingDetail?.bookingTime}
                      </Text>
                    </Group>
                  </Stack>

                  {!booking.bookingDetail?.receipt ? (
                    <Stack gap={5}>
                      <Text className="font-medium text-gray-400">
                        Upload bukti pembayaran
                      </Text>
                      <Flex direction={"row"} gap={10}>
                        <FileButton
                          onChange={setFile}
                          accept="image/png,image/jpeg"
                        >
                          {(props) => <Button {...props}>Upload image</Button>}
                        </FileButton>

                        {file && (
                          <Text size="sm" ta="center" mt="sm">
                            {file.name}
                          </Text>
                        )}
                      </Flex>
                    </Stack>
                  ) : (
                    <Stack gap={5}>
                      <Text className="font-medium text-gray-400">
                        Gambar bukti pembayaran
                      </Text>
                      <Flex direction={"row"} gap={10}>
                        <ImageDialog imgName={booking.bookingDetail?.receipt} />
                        <Stack gap={0}>
                          <Text className="text-xs">
                            Klik gambar icon di sebelah kiri, untuk melihat
                            bukti pembayaran
                          </Text>
                          <Text>{booking.bookingDetail?.receipt}</Text>
                        </Stack>
                      </Flex>
                    </Stack>
                  )}
                </Group>
              </Stack>
            </BaseDetail>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <BaseDetail title="Detail Pembayaran">
              <Stack gap={10}>
                <Text className=" text-gray-400">Produk dipilih / Paket</Text>

                <Group justify="space-between">
                  <Text>{booking.bookingDetail?.service}</Text>
                  <Group gap={10}>
                    <Text className="font-medium text-green-500">1x</Text>
                    <Text>Rp.{booking.bookingDetail?.productPrice}</Text>
                  </Group>
                </Group>
              </Stack>

              <Divider className="border-neutral-400" />

              <Stack gap={10}>
                <Group gap={10}>
                  <MdOutlineDiscount className="text-xl text-green-500" />
                  <Text className=" text-gray-400">
                    Promo / Voucher dipakai
                  </Text>
                </Group>

                <Group justify="space-between">
                  <Text>Voucher {booking.bookingDetail?.promo}</Text>
                  <Text>{booking.bookingDetail?.discount}%</Text>
                </Group>

                <Group justify="space-between">
                  <Text>Potongan Harga</Text>
                  <Text className="text-red-500">
                    -{" "}
                    {booking.bookingDetail?.productPrice! *
                      (booking.bookingDetail?.discount! / 100)}
                  </Text>
                </Group>
              </Stack>

              <Divider className="border-neutral-400" />

              <Stack gap={10}>
                <Group justify="space-between">
                  <Group gap={5}>
                    <MdOutlineAttachMoney className="text-xl text-green-500" />
                    <Text className=" text-lg text-gray-400">Total Harga</Text>
                  </Group>
                  <Text>Rp.{booking.bookingDetail?.amount}</Text>
                </Group>
              </Stack>
            </BaseDetail>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <BaseDetail title="Cara Pembayaran">
              <Flex
                direction={{ base: "column", md: "row" }}
                // gap={{ base: 10, md: 20 }}
              >
                <InstructionIcon width="150" height="150" />
                <List
                  spacing={"sm"}
                  icon={
                    <ThemeIcon color="teal" size={20} radius="xl">
                      <IoCheckmark
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Cari tombol upload bukti pembayaran</List.Item>
                  <List.Item>Pilih foto bukti pembayaran</List.Item>
                  <List.Item>Lanjutkan submit foto bukti</List.Item>
                  <List.Item>
                    Silahkan tunggu sampai admin konfirmasi booking anda
                  </List.Item>
                  <List.Item>
                    Cek halaman pemesanan untuk melihat detail pesanan
                  </List.Item>
                </List>
              </Flex>
            </BaseDetail>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <BaseDetail title="Kontak kami" description="">
              <Group gap={20} align="start">
                <MdWhatsapp className="text-5xl text-green-500" />

                <Stack gap={10}>
                  <Text className=" text-base font-medium md:text-lg">
                    Kami bisa membantu
                  </Text>
                  <Text className=" text-sm text-gray-500 md:text-base">
                    Silahkan hubungi kami jika mengalami masalah
                  </Text>
                  <Button
                    variant="outline"
                    fw={400}
                    classNames={{
                      root: `w-48 border-green-500 border-2`,
                      label: `text-green-500 font-medium`,
                    }}
                  >
                    Hubungi Kami
                  </Button>
                </Stack>
              </Group>
            </BaseDetail>
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};

export default DetailBookingPage;
