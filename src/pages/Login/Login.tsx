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
import { Link } from "react-router-dom";
import NavLogo from "shared/components/Navbar/NavLogo";
import { Porsche01 } from "shared/constant/Images";
// import { useCredentialQuery } from "shared/hooks/api/Auth/useCredentialQuery";
import { useLoginMutation } from "shared/hooks/api/Auth/useLoginMutation";
import { useCompareRole } from "shared/hooks/ui/Login/useCompareRole";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  // const credential = useCredentialQuery();

  // const navigate = useNavigate();

  const login = useLoginMutation();
  const { loading } = useCompareRole();

  const handleSubmitLogin = form.onSubmit((values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    login.mutate(payload);
  });

  // if (login.isSuccess && !login.isPending) {
  //   if (credential?.isSuccess) {
  //     console.log("role : ", credential?.userRoleDetail?.role);

  //     if (credential.userRoleDetail?.role === "ADMIN") {
  //       console.log("role : ", credential?.userRoleDetail.role);
  //       navigate("/admin");
  //     } else if (credential.userRoleDetail?.role === "CUSTOMER") {
  //       console.log("role : ", credential?.userRoleDetail.role);
  //       navigate("/");
  //     }
  //   } else {
  //     console.log("is success role : ", credential?.isSuccess);
  //   }
  // }

  return (
    <Container className="font-poppins md:px-0" size={"100%"}>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Stack className="h-screen " justify="center" align="center" gap={30}>
          <NavLogo variant="dark" />
          <form className="lg:w-[400px]" onSubmit={handleSubmitLogin}>
            <Flex
              direction={"column"}
              gap={{ base: 30, md: 40 }}
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
                className="h-12   rounded-md bg-third px-7 text-base font-medium drop-shadow-2xl"
                type="submit"
                loading={loading}
              >
                Login
              </Button>

              <Text className="text-center text-sm text-black">
                Don’t have an account?{" "}
                <Link to={"/register"} className="font-medium text-third">
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </form>
        </Stack>

        <Box
          // bg={COLORS.primary}
          className="relative hidden items-center bg-third  lg:flex"
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
