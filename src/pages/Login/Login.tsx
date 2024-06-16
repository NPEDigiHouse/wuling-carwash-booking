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
import { useForm } from "@mantine/form";
import { UserRoleContext } from "context/UserRoleContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "shared/components/Navbar/NavLogo";
import { COLORS } from "shared/constant/Colors";
import { Porsche01 } from "shared/constant/Images";
import { useLoginMutation } from "shared/hooks/api/Auth/useLoginMutation";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const userRole = useContext(UserRoleContext);

  const navigate = useNavigate();

  const login = useLoginMutation();

  const handleSubmitLogin = form.onSubmit((values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    login.mutate(payload);
  });

  if (login.isSuccess && !login.isPending) {
    console.log("is success : ", login.isSuccess);

    if (userRole?.userDetail?.role === "CUSTOMER") {
      navigate("/");
    } else if (userRole?.userDetail?.role === "ADMIN") {
      navigate("/admin");
    }
    // else {
    //   return <LoadingOverlay />;
    // }
  }

  return (
    <Container className="font-poppins md:px-0" size={"100%"}>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Stack className="h-screen " justify="center" align="center" gap={30}>
          <NavLogo variant="secondary" />
          <form className="lg:w-[400px]" onSubmit={handleSubmitLogin}>
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
                    input: `bg-[#F2F2F2] h-12 rounded-lg font-poppins`,
                    label: `font-poppins mb-2.5 text-base`,
                  }}
                  {...form.getInputProps("email")}
                />
                <PasswordInput
                  label="Password"
                  placeholder="********"
                  classNames={{
                    input: `bg-[#F2F2F2] h-12 rounded-lg font-poppins`,
                    label: `font-poppins mb-2.5 text-base`,
                  }}
                  {...form.getInputProps("password")}
                />
              </Stack>

              <Button
                fullWidth
                className="h-12   rounded-md bg-primary px-7 text-base font-medium drop-shadow-2xl"
                type="submit"
              >
                Login
              </Button>

              <Text className="text-center text-sm text-gray-400">
                Don’t have an account?{" "}
                <Link to={"/register"} className="font-medium text-primary">
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </form>
        </Stack>

        <Box
          bg={COLORS.primary}
          className="relative hidden items-center  lg:flex"
        >
          {/* <div className=""> */}
          <Image
            src={Porsche01}
            className="absolute right-12 md:h-fit md:w-[450px] lg:h-fit lg:w-fit"
          />
          {/* </div> */}
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Login;
