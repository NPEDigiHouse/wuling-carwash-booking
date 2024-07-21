import {
  Button,
  Container,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import NavLogo from "shared/components/Navbar/NavLogo";
// import { useCredentialQuery } from "shared/hooks/api/Auth/useCredentialQuery";
import { useLoginMutation } from "shared/hooks/api/Auth/useLoginMutation";
import { useCompareRole } from "shared/hooks/ui/Login/useCompareRole";

const AdminLogin = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const login = useLoginMutation();
  const { loading } = useCompareRole();

  const handleSubmitLogin = form.onSubmit((values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    login.mutate(payload);
  });

  return (
    <Container
      className="relative overflow-hidden font-poppins md:px-0 "
      size={"100%"}
    >
      <Stack className="min-h-screen pt-12" align="center" gap={30}>
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
                Hi! Admin Wuling Autocare
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
          </Flex>
        </form>
      </Stack>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -bottom-16 -z-10"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,202.7C840,203,960,181,1080,170.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </Container>
  );
};

export default AdminLogin;
