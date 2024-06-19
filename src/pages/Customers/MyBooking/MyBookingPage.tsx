import {
  Button,
  Container,
  Flex,
  Image,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { UserRoleContext } from "context/UserRoleContext";
import { useContext } from "react";
import { MdOutlineArrowDownward } from "react-icons/md";
import Navbar from "shared/components/Navbar/Navbar";
import {
  BMW,
  HeroImage,
  //   MyBookingBG,
  //   MyBookingBGFirst,
  //   MyBookingBGSecond,
  //   MyBookingBGThird,
} from "shared/constant/Images";
import { useQueryCustomerBookings } from "shared/hooks/api/Booking/useQueryCustomerBookings";

const MyBookingPage = () => {
  const userDetail = useContext(UserRoleContext);
  const { customerBooking } = useQueryCustomerBookings(
    userDetail?.userDetail?.id,
  );

  console.log("user detail : ", userDetail?.userDetail);
  console.log("customer detail : ", customerBooking);

  return (
    <Container fluid mx={0} px={0}>
      <Image
        src={HeroImage}
        className="absolute left-0 top-0 -z-20 h-[560px] w-screen md:h-[610px] "
      />

      {/* <div className="absolute right-56 top-24 -z-10 h-[400px] w-[500px] rounded-lg bg-[#111213] opacity-95"></div> */}
      <Container size={"xl"} px={0}>
        <Navbar />

        <Space h={50} />

        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: 20 }}
          justify="space-between"
          align="start"
        >
          <Stack className="w-fit" gap={30}>
            <Text className="text-2xl font-semibold text-white sm:text-4xl md:text-nowrap md:text-5xl lg:text-6xl">
              Your Premium <br className="hidden md:inline-block" /> Booking
              List
            </Text>
            <Text className="text-sm text-white md:text-base">
              List daftar booking Halaman untuk melihat layanan{" "}
              <br className="hidden md:inline-block" /> apa saja yang telah anda
              booking
            </Text>

            <Space h={10} className="hidden sm:block" />

            <Button
              rightSection={
                <MdOutlineArrowDownward className="text-xl md:text-2xl" />
              }
              className=" h-10 w-fit rounded-full bg-[#d1d8e0] px-7 text-sm font-medium text-black drop-shadow-2xl md:h-12 md:text-base"
            >
              Lihat Booking
            </Button>
          </Stack>

          {/* <Flex gap={10}>
            <Image
              src={MyBookingBGFirst}
              className="h-[340px] w-fit rounded-lg border border-gray-700 shadow-lg"
            />
            <Image
              src={MyBookingBGSecond}
              className="h-[340px] w-fit rounded-lg border border-gray-700 shadow-lg"
            />
            <Image
              src={MyBookingBGThird}
              className="h-[340px] w-fit rounded-lg border border-gray-700 shadow-lg"
            />
          </Flex> */}

          <Image
            src={BMW}
            className="h-[150px] w-fit sm:h-[20px] md:h-[320px] "
          />
        </Flex>
      </Container>

      <Space className="h-[70px] sm:h-[120px] md:h-[200px]" />

      <Container size={"xl"} px={0}>
        <Text className="text-lg font-semibold uppercase text-black  md:text-xl lg:text-2xl">
          Daftar Booking
        </Text>
      </Container>
    </Container>
  );
};

export default MyBookingPage;
