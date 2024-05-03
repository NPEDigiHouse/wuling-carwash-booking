import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import Navbar from "../../shared/components/Navbar/Navbar";
import { Porsche01, Porsche02 } from "shared/constant/Images";
import { IoIosWater } from "react-icons/io";
import { IoCarSport, IoTimerOutline } from "react-icons/io5";
import {
  MdDateRange,
  MdSendTimeExtension,
  MdChecklist,
  MdFileOpen,
  MdOutlineWbSunny,
} from "react-icons/md";

const bookingStepData = [
  {
    icon: <MdChecklist className="text-3xl text-primary" />,
    title: "Daftar Akun",
    description:
      "Masukkan data anda seperti nama anda, mobil, email, no.telp, dan lain-lain",
  },
  {
    icon: <MdDateRange className="text-3xl text-primary" />,
    title: "Hari & Jam",
    description:
      "Pilih dan sesuaikan waktu, hari dan tanggal yang anda inginkan",
  },
  {
    icon: <MdSendTimeExtension className="text-3xl text-primary" />,
    title: "Selesaikan Booking",
    description: "Tekan tombol selesai untuk menyelesaikan pesanan anda",
  },
  {
    icon: <MdFileOpen className="text-3xl text-primary" />,
    title: "Booking Detail",
    description:
      "Lihat Detail booking melalui email, whatsapp  atau halaman order detail",
  },
];

const serviceData = [
  {
    icon: <MdOutlineWbSunny className="text-3xl text-primary" />,
    title: "Shine Bright Your Car",
    description:
      "Bersihkan dan kilapkan mobil anda sehingga dapat terlihat seperti baru dengan pelayanan cucian kami",
  },
  {
    icon: <IoTimerOutline className="text-3xl text-primary" />,
    title: "Saving Your Time",
    description:
      "Hemat waktu anda dengan sistem booking kami, dapat memilih jam dan hari untuk mencuci mobil anda",
  },
];

const HomePage = () => {
  return (
    <Container size={"xl"} className="font-poppins">
      <Navbar />

      <Space h={"100"} />

      <Box className="relative flex justify-center ">
        <Text className="absolute -top-7 -z-10 text-nowrap text-left text-[60px] font-bold uppercase leading-tight text-[#E3E3E3] opacity-80 lg:-top-16 lg:text-[180px] lg:tracking-wide">
          Make Your <br /> Car Shine
        </Text>
        <Image src={Porsche01} className="w-[800px]" />
      </Box>

      <Space h={"50"} />

      <Box className="flex justify-center">
        <Group
          className="h-fit w-[800px] rounded-xl border border-solid border-[#CFCFCF] bg-white px-4 py-5 drop-shadow-lg"
          justify="space-around"
        >
          <Group>
            <IoCarSport className="text-3xl text-primary" />
            <Stack gap={0}>
              <Text className="text-lg font-medium">Working Day</Text>
              <Text className="text-neutral-600">Senin - Minggu</Text>
            </Stack>
          </Group>

          <div className="h-[50px] w-0.5 bg-gray-300"></div>

          <Group>
            <IoIosWater className="text-3xl text-primary" />

            <Stack gap={0}>
              <Text className="text-lg font-medium">Wash Time</Text>
              <Text className="text-neutral-600">08:00 AM - 17:00 PM</Text>
            </Stack>
          </Group>

          <div className="h-[50px] w-0.5 bg-gray-300"></div>

          <Button className=" h-12 w-fit rounded-full bg-primary px-7 text-base font-medium drop-shadow-2xl">
            Book Now
          </Button>
        </Group>
      </Box>

      <Space h={"120"} />

      <Box>
        <Text className="text-center text-xl font-medium text-secondary">
          How to book?
        </Text>

        <Space h={"xl"} />

        <SimpleGrid
          cols={{ base: 2, lg: 4 }}
          spacing={{ base: 10, md: 40, lg: 50 }}
        >
          {bookingStepData.map((booking) => {
            return (
              <Card
                bg={"white"}
                shadow="sm"
                radius={"lg"}
                withBorder
                classNames={{
                  root: `py-10 px-2.5 md:px-5 w-fit`,
                }}
              >
                <Card.Section>
                  <Group align="center" justify="center">
                    {booking.icon}
                  </Group>
                </Card.Section>

                <Space h={"lg"} />

                <Stack align="center" gap={10}>
                  <Text className="text-sm font-medium md:text-xl ">
                    {booking.title}
                  </Text>
                  <Text className="text-text_gray text-center text-xs md:text-base">
                    {booking.description}
                  </Text>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Box>

      <Space h={"120"} />

      <Box>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={Porsche02} className="hidden md:block" />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack align="start" gap={30}>
              <Text className="text-center text-xl font-medium text-secondary">
                Services
              </Text>

              <Text className=" text-2xl font-medium ">
                Shine your car with <br /> ours luxury services
              </Text>

              <Flex
                classNames={{
                  root: `flex-col md:flex-row gap-5`,
                }}
              >
                {serviceData.map((service) => {
                  return (
                    <Card
                      bg={"white"}
                      shadow="sm"
                      radius={"lg"}
                      withBorder
                      classNames={{
                        root: `py-10 px-5 w-fit`,
                      }}
                    >
                      <Group
                        align="start"
                        className="h-fit w-fit rounded-lg  border border-solid border-gray-300 bg-white p-2.5"
                      >
                        {service.icon}
                      </Group>

                      <Space h={"lg"} />

                      <Stack align="start" gap={10}>
                        <Text className="text-lg font-medium md:text-xl ">
                          {service.title}
                        </Text>
                        <Text className="text-text_gray  text-sm md:text-base ">
                          {service.description}
                        </Text>
                      </Stack>
                    </Card>
                  );
                })}
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>

      <Space h={"120"} />

      <Box></Box>

      <Space h={"120"} />
    </Container>
  );
};

export default HomePage;
