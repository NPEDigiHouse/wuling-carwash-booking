import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  PasswordInput,
  SimpleGrid,
  Space,
  Text,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
// import NotificationAuth from "features/Auth/components/Notifications/NotificationAuth";
import { RegisterSchema } from "features/Auth/schema/RegisterSchema";
import { MdOutlineMail, MdPermIdentity, MdPhoneIphone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import NavLogo from "shared/components/Navbar/NavLogo";
import { PorscheRegister } from "shared/constant/Images";
import { useRegisterMutation } from "shared/hooks/api/Auth/useRegisterMutation";

const RegisterPage = () => {
  const register = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      username: "",
      name: "",
      phoneNumber: "",
    },
    validate: zodResolver(RegisterSchema),
  });

  const handleSubmitRegister = form.onSubmit((values) => {
    console.log(values);

    const params = {
      email: values.email,
      username: values.username,
      password: values.password,
      customer: {
        name: values.name,
        phoneNumber: values.phoneNumber,
      },
    };

    console.log("params : ", params);

    register.mutate(params);
  });

  if (register.isSuccess && !register.isPending) {
    navigate("/login");
  }

  return (
    <Container
      className="mx-auto  h-screen bg-gradient-to-tr from-zinc-800 to-indigo-950 font-poppins md:px-0"
      size={"100%"}
    >
      <Box className="md:px-10 md:pt-7">
        <Link to={"/"}>
          <NavLogo />
        </Link>
      </Box>

      <Space className="h-[40px]" />

      <Container
        size={"xl"}
        className="flex flex-col items-center justify-center "
      >
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: 20, sm: 70, md: 100 }}
        >
          <Group className="" gap={0}>
            {/* <Text className="text-nowrap text-4xl font-semibold text-white">
              Go get best service for your car
            </Text> */}
            <div className="">
              <Image src={PorscheRegister} className="z-10" />
            </div>{" "}
          </Group>

          <form onSubmit={handleSubmitRegister}>
            <Flex
              direction={"column"}
              bg={"transparent"}
              gap={{ base: 30 }}
              className="py-0"
            >
              <Group gap={5}>
                <Text className="text-3xl font-semibold text-white">
                  Buat akun anda
                </Text>
                <Text className="text-3xl font-medium text-primary">.</Text>
              </Group>

              <Grid>
                <Grid.Col span={{ base: 12 }}>
                  <CustomTextInput
                    label="Nama Lengkap"
                    placeholder="Masukkan Nama"
                    rightSection={<MdPermIdentity />}
                    classNames={{
                      input: ` h-12 rounded-xl font-poppins bg-neutral-200`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    {...form.getInputProps("name")}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12 }}>
                  <CustomTextInput
                    label="Email"
                    placeholder="example@gmail.com"
                    rightSection={<MdOutlineMail />}
                    classNames={{
                      input: ` h-12 rounded-xl font-poppins bg-neutral-200`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    {...form.getInputProps("email")}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12 }}>
                  <PasswordInput
                    label="Password"
                    placeholder="********"
                    classNames={{
                      input: ` h-12 rounded-xl font-poppins bg-neutral-200`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    {...form.getInputProps("password")}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <CustomTextInput
                    label="Username"
                    placeholder="Masukkan username"
                    classNames={{
                      input: ` h-12 rounded-xl font-poppins bg-neutral-200`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    {...form.getInputProps("username")}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <CustomTextInput
                    label="No.telp / Whatsapp"
                    placeholder="Masukkan nomor aktif"
                    type="number"
                    rightSection={<MdPhoneIphone />}
                    classNames={{
                      input: ` h-12 rounded-xl font-poppins bg-neutral-200`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    {...form.getInputProps("phoneNumber")}
                  />
                </Grid.Col>
              </Grid>

              <Button
                fullWidth
                className="mt-2.5  h-14 bg-blue-600 px-7 text-base font-medium drop-shadow-2xl"
                type="submit"
                radius={"xl"}
              >
                Daftar
              </Button>

              {/* <Button
                fullWidth
                className="h-12  bg-blue-600 px-7 text-base font-medium drop-shadow-2xl"
                onClick={() =>
                  NotificationAuth({
                    message: "berhasil",
                    title: "tes",
                    status: "SUCCESS",
                  })
                }
                radius={"xl"}
              >
                Tes notif
              </Button> */}
            </Flex>
          </form>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default RegisterPage;
