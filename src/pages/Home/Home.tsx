import {
  Box,
  Button,
  Container,
  Group,
  Image,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import Navbar from "../../shared/components/Navbar/Navbar";
import { Porsche01 } from "shared/constant/Images";
import { IoIosWater } from "react-icons/io";
import { IoCarSport } from "react-icons/io5";

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
    </Container>
  );
};

export default HomePage;
