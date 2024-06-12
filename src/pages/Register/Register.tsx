import {
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  PasswordInput,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { MdOutlineMail, MdPermIdentity, MdPhoneIphone } from "react-icons/md";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import { PorscheRegister } from "shared/constant/Images";

const RegisterPage = () => {
  return (
    <Container
      className="mx-auto h-screen bg-gray-900 font-poppins md:px-0"
      size={"100%"}
    >
      {/* <NavLogo /> */}
      <Container size={"xl"} className="flex h-screen flex-col justify-center">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={100}>
          <form>
            <Flex
              direction={"column"}
              bg={"transparent"}
              gap={{ base: 50 }}
              className="py-5"
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
                      input: `bg-[#F2F2F2] h-14 rounded-xl font-poppins`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    //   {...form.getInputProps("password")}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12 }}>
                  <CustomTextInput
                    label="Email"
                    placeholder="example@gmail.com"
                    rightSection={<MdOutlineMail />}
                    classNames={{
                      input: `bg-[#F2F2F2] h-14 rounded-xl font-poppins`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    //   {...form.getInputProps("email")}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12 }}>
                  <PasswordInput
                    label="Password"
                    placeholder="********"
                    classNames={{
                      input: `bg-[#F2F2F2] h-14 rounded-xl font-poppins`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    //   {...form.getInputProps("password")}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <CustomTextInput
                    label="Username"
                    placeholder="Masukkan username"
                    classNames={{
                      input: `bg-[#F2F2F2] h-14 rounded-xl font-poppins`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    //   {...form.getInputProps("email")}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <CustomTextInput
                    label="No.telp / Whatsapp"
                    placeholder="Masukkan nomor aktif"
                    type="number"
                    rightSection={<MdPhoneIphone />}
                    classNames={{
                      input: `bg-[#F2F2F2] h-14 rounded-xl font-poppins`,
                      label: `font-poppins mb-2.5 text-white font-normal text-sm`,
                    }}
                    //   {...form.getInputProps("password")}
                  />
                </Grid.Col>
              </Grid>

              <Button
                fullWidth
                className="h-14  bg-blue-600 px-7 text-base font-medium drop-shadow-2xl"
                type="submit"
                radius={"xl"}
              >
                Daftar
              </Button>
            </Flex>
          </form>

          <Group>
            <Image src={PorscheRegister} />
          </Group>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default RegisterPage;
