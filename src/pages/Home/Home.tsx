import {
  Avatar,
  BackgroundImage,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import Navbar from "../../shared/components/Navbar/Navbar";
import {
  AboutHeroImage,
  ContactCard,
  HeroImage,
  Porsche01,
  Porsche02,
  PorscheService,
  PorscheWash,
  WulingAlmaz,
} from "shared/constant/Images";
import { IoIosWater } from "react-icons/io";
import { IoCarSport, IoTimerOutline } from "react-icons/io5";
import {
  MdDateRange,
  MdSendTimeExtension,
  MdChecklist,
  MdFileOpen,
  MdOutlineWbSunny,
  MdOutlineArrowRightAlt,
  MdStar,
} from "react-icons/md";
import { COLORS } from "shared/constant/Colors";
import CardProduct from "shared/components/Card/CardProduct";
import { useContext, useEffect, useState } from "react";
import { IProductResponseParams } from "services/Product/ProductServiceInterface";
import { UserRoleContext } from "context/UserRoleContext";
import ProfileMenu from "shared/components/Menu/ProfileMenu";
import { useQueryProductsHomepage } from "shared/hooks/ui/Home/useQueryProductsHomepage";

const bookingStepData = [
  {
    icon: <MdChecklist className="text-2xl text-primary md:text-3xl" />,
    title: "Daftar Akun",
    description:
      "Masukkan data anda seperti nama anda, mobil, email, no.telp, dan lain-lain",
  },
  {
    icon: <MdDateRange className="text-2xl text-primary md:text-3xl" />,
    title: "Hari & Jam",
    description:
      "Pilih dan sesuaikan waktu, hari dan tanggal yang anda inginkan",
  },
  {
    icon: <MdSendTimeExtension className="text-2xl text-primary md:text-3xl" />,
    title: "Selesaikan Booking",
    description: "Tekan tombol selesai untuk menyelesaikan pesanan anda",
  },
  {
    icon: <MdFileOpen className="text-2xl text-primary md:text-3xl" />,
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
  const [products, setProducts] = useState<IProductResponseParams[]>([]);

  const queryProducts = useQueryProductsHomepage();

  const userRole = useContext(UserRoleContext);

  console.log("products : ", queryProducts.data);

  useEffect(() => {
    if (queryProducts?.data) {
      setProducts([]);
      setProducts(queryProducts?.data.data);
    }
  }, [queryProducts.isSuccess, queryProducts.isFetching, queryProducts.data]);

  return (
    <Container fluid className="font-poppins" px={0}>
      {/* <BackgroundImage src={HeroImage}> */}

      <Image
        src={HeroImage}
        className="absolute left-0 top-0 -z-20 h-[610px] w-screen "
      />
      <Container size={"xl"}>
        <Navbar>
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
      </Container>

      <Space h={"100"} />

      <Container className="relative flex justify-center ">
        <Text className="absolute -top-7 z-10 text-nowrap text-left text-[60px] font-bold uppercase leading-tight text-[#E3E3E3] opacity-20  lg:-top-16 lg:text-[180px] lg:tracking-wide">
          Make Your <br /> Car Shine
        </Text>
        <Image src={Porsche01} className="z-20 w-[800px]" />
      </Container>
      {/* </BackgroundImage> */}

      <Space h={"50"} />

      <Container className="flex justify-center">
        <Group
          className="h-fit w-[800px] rounded-xl border border-solid border-[#CFCFCF] bg-white px-4 py-5 drop-shadow-lg"
          justify="space-around"
        >
          <Group>
            <IoCarSport className="text-3xl text-primary" />
            <Stack gap={0}>
              <Text className="text-lg font-medium">Service Car</Text>
              <Text className="text-neutral-600">Book to service your car</Text>
            </Stack>
          </Group>

          <div className="h-[50px] w-0.5 bg-gray-300"></div>

          <Group>
            <IoIosWater className="text-3xl text-primary" />

            <Stack gap={0}>
              <Text className="text-lg font-medium">Carwash</Text>
              <Text className="text-neutral-600">Book to wash your car</Text>
            </Stack>
          </Group>

          <div className="h-[50px] w-0.5 bg-gray-300"></div>

          <Button
            rightSection={
              <MdOutlineArrowRightAlt className="text-xl md:text-2xl" />
            }
            className=" h-12 w-fit rounded-full bg-primary px-7 text-base font-medium drop-shadow-2xl"
          >
            Book Now
          </Button>
        </Group>
      </Container>

      <Space h={"120"} />

      <Container size={"xl"}>
        <Text className="text-center text-xl font-medium text-secondary">
          How to book?
        </Text>

        <Space h={"xl"} />

        <SimpleGrid
          cols={{ base: 2, lg: 4 }}
          spacing={{ base: 10, md: 40, lg: 50 }}
        >
          {bookingStepData.map((booking, index) => {
            return (
              <Card
                key={index}
                bg={"white"}
                shadow="sm"
                radius={"lg"}
                withBorder
                classNames={{
                  root: `py-10 px-2 md:px-5 w-fit`,
                }}
              >
                <Card.Section>
                  <Group align="center" justify="center">
                    {booking.icon}
                  </Group>
                </Card.Section>

                <Space h={"lg"} />

                <Stack align="center" gap={10}>
                  <Text className="text-center text-sm font-medium md:text-xl ">
                    {booking.title}
                  </Text>
                  <Text className="text-center text-xs text-text_gray md:text-base">
                    {booking.description}
                  </Text>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>

      <Space h={"120"} />

      <Container size={"xl"} px={16}>
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
                {serviceData.map((service, index) => {
                  return (
                    <Card
                      bg={"white"}
                      shadow="sm"
                      radius={"lg"}
                      withBorder
                      key={index}
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
                        <Text className="text-sm  text-text_gray md:text-base ">
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
      </Container>

      <Space h={"120"} />

      <Container size={"xl"}>
        <Stack gap={20}>
          <Text className="text-center text-xl font-medium text-secondary">
            Booking
          </Text>

          <Text className="text-center text-base font-light text-text_gray">
            Booking untuk mendapatkan pelayanan berkualitas yang kami sediakan
          </Text>
        </Stack>

        <Space h={30} />

        <Box className="flex flex-col justify-center gap-20 md:w-full  md:flex-row">
          <CardProduct
            id={products[0]?.id}
            title={products[0]?.productName}
            description="Booking carwash dan dapatkan tempat untuk mencuci mobil anda"
            productPrice={products[0]?.price}
            bg={"#0055FE"}
            headerIcon={<MdStar className="text-blue-700 " />}
            thumbnail={PorscheWash}
          />

          <CardProduct
            id={products[1]?.id}
            title={products[1]?.productName}
            description="Booking carwash dan dapatkan tempat untuk mencuci mobil anda"
            productPrice={products[1]?.price}
            bg={"#9D9D9D"}
            headerIcon={<MdStar className="text-gray-500 " />}
            thumbnail={PorscheService}
          />
        </Box>

        <Space h={"xl"} />
      </Container>

      <Space h={"150"} />

      <Container fluid bg={COLORS.primary} className="relative">
        <Container size={"xl"} className="flex items-center py-12 md:py-32">
          <Stack gap={30} className="text-white">
            <Text className="text-xl ">About us</Text>
            <Stack gap={10}>
              <Text className="text-2xl font-medium md:text-3xl">
                We do the best for your car
              </Text>
              <Text className="text-justify font-light md:w-2/4">
                Monitoring sejauh mana progress Project anda melalui Task,
                Milestone, Teams, dan fitur-fitur keren lainnya.
              </Text>
            </Stack>
          </Stack>

          <div className="right-0 hidden w-fit md:absolute md:block ">
            <Image
              src={AboutHeroImage}
              className="h-[500px] w-full rounded-bl-3xl rounded-tl-3xl drop-shadow-xl"
            />
          </div>
        </Container>
      </Container>

      <Space h={"150"} />

      <Container className="flex w-fit justify-center" size={"xl"}>
        <BackgroundImage
          src={ContactCard}
          radius={"xl"}
          className="w-full md:w-10/12"
        >
          <Paper bg={"transparent"} className="px-5 py-10 md:px-10 lg:px-16 ">
            <Flex
              direction={{ base: "column", sm: "row", md: "row" }}
              align={"center"}
            >
              <Stack gap={40} className="items-center md:items-start">
                <Stack gap={30}>
                  <Text className="text-nowrap text-2xl font-semibold text-white md:text-3xl lg:text-4xl xl:text-5xl">
                    Booking Sekarang
                  </Text>
                  <Text className="text-justify text-white">
                    Booking hari & jam agar menghemat waktu anda untuk mencuci
                    mobile dengan pelayanan terbaik dari kami
                  </Text>
                </Stack>

                <Button className=" h-12 w-fit rounded-full bg-yellow px-7 text-base font-medium text-neutral-700 drop-shadow-2xl">
                  Book Now
                </Button>
              </Stack>

              <Image
                src={WulingAlmaz}
                className="order-first w-full md:order-last md:w-7/12
              "
              />
            </Flex>
          </Paper>
        </BackgroundImage>
      </Container>

      <Space h={"150"} />
    </Container>
  );
};

export default HomePage;
