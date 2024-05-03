import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import NavLogo from "shared/components/Navbar/NavLogo";
import { COLORS } from "shared/constant/Colors";
import { Porsche01 } from "shared/constant/Images";

const Login = () => {
  return (
    <Container className="font-poppins md:px-0" size={"100%"}>
      <SimpleGrid cols={{ base: 1, lg: 2 }}>
        <Stack className="h-screen " justify="center" align="center" gap={30}>
          <NavLogo />
          <form className="lg:w-[400px]">
            <Flex
              direction={"column"}
              gap={{ base: 30, md: 50 }}
              className="rounded-xl border border-solid border-gray-300 px-6 py-8 shadow-lg"
              bg={"white"}
            >
              <Stack align="center">
                <Text className="text-xl font-medium">Sign In</Text>
                <Text className="text-sm text-gray-400">
                  Hi! welcome back you have been missed
                </Text>
              </Stack>

              <Stack>
                <TextInput
                  label="Email"
                  placeholder="example@gmail.com"
                  classNames={{
                    input: `bg-[#F2F2F2] h-12 rounded-lg`,
                    label: `font-poppins mb-2.5 text-base`,
                  }}
                />
                <PasswordInput
                  label="Password"
                  placeholder="********"
                  classNames={{
                    input: `bg-[#F2F2F2] h-12 rounded-lg`,
                    label: `font-poppins mb-2.5 text-base`,
                  }}
                />
              </Stack>

              <Button
                fullWidth
                className="h-12   rounded-md bg-primary px-7 text-base font-medium drop-shadow-2xl"
              >
                Login
              </Button>

              <Text className="text-center text-sm text-gray-400">
                Don’t have an account?{" "}
                <span className="font-medium text-primary">Sign Up</span>
              </Text>
            </Flex>
          </form>
        </Stack>

        <Box
          bg={COLORS.primary}
          className="relative hidden items-center md:flex"
        >
          {/* <div className=""> */}
          <Image src={Porsche01} className="absolute right-20 h-fit w-fit" />
          {/* </div> */}
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Login;
