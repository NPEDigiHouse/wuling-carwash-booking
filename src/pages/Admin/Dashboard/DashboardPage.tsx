import {
  Box,
  Button,
  Card,
  Container,
  Divider,
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
import CustomAdminCard from "features/Admin/components/Card/CustomAdminCard";
import { IoCard, IoPeople } from "react-icons/io5";
// import AdminLayout from "shared/layouts/AdminLayout";
import CustomAreaChart from "../../../features/Admin/components/Chart/CustomAreaChart";
import { Porsche03 } from "shared/constant/Images";
import { useGetTotalBooking } from "shared/hooks/ui/Dashboard/useGetTotalBooking";
import { MdDiscount } from "react-icons/md";
import { useState } from "react";
import ModalActionConfirm from "features/Admin/components/Modal/ModalConfirm";
import { useDisclosure } from "@mantine/hooks";
import { useFilterUnconfirmationBooking } from "shared/hooks/ui/Dashboard/useFilterUnconfirmationBook";
import { useConfirmationCustomerBooking } from "shared/hooks/api/Booking/useConfirmationCustomerBooking";

const DashboardPage = () => {
  const amount = useGetTotalBooking();

  const [bookingId, setBookingId] = useState<string | null>(null);
  const [openedConfirm, { open: openConfirm, close: closeConfirm }] =
    useDisclosure();

  const queryUnconfirmBook = useFilterUnconfirmationBooking();
  const queryConfirmBook = useConfirmationCustomerBooking();

  const handleOpenConfirmationBooking = (bookingId?: string) => {
    if (bookingId) {
      setBookingId(bookingId);
    }

    openConfirm();
  };

  const handleChangeConfirmationStatus = () => {
    if (bookingId) {
      queryConfirmBook.mutate({ status: "CONFIRMATION", bookingId });
    }
  };

  return (
    // <AdminLayout>
    <Container size={"xl"}>
      <ModalActionConfirm
        title="Ingin konfirmasi booking"
        description="Apakah anda ingin konfirmasi booking customer ini?"
        opened={openedConfirm}
        onClose={closeConfirm}
      >
        <Flex gap={20} className="w-full">
          <Button
            onClick={handleChangeConfirmationStatus}
            fullWidth
            variant="filled"
            bg={"red"}
            radius={"md"}
            fw={400}
            classNames={{
              root: ` h-[40px]`,
            }}
          >
            Konfirmasi
          </Button>
          <Button
            variant="outline"
            color="red"
            fullWidth
            radius={"md"}
            fw={400}
            classNames={{
              root: ` h-[40px]`,
            }}
            onClick={() => close()}
          >
            Batal
          </Button>
        </Flex>
      </ModalActionConfirm>
      <SimpleGrid cols={4} spacing={20}>
        <CustomAdminCard
          classNames={{
            root: ``,
          }}
        >
          <Group justify="space-between">
            <Stack gap={10}>
              <Text className="text-xl font-medium">Booking</Text>
              <Text className="text-lg">{amount.totalData?.amountBooking}</Text>
            </Stack>

            <Box>
              <IoCard className="text-3xl text-pink-600" />
            </Box>
          </Group>
        </CustomAdminCard>

        <CustomAdminCard
          classNames={{
            root: ` `,
          }}
        >
          <Group justify="space-between">
            <Stack gap={10}>
              <Text className="text-xl font-medium">Promo</Text>
              <Text className="text-lg">{amount.totalData?.amountPromo}</Text>
            </Stack>

            <Box>
              <MdDiscount className="text-3xl text-teal-500" />
            </Box>
          </Group>
        </CustomAdminCard>

        <CustomAdminCard
          classNames={{
            root: ` `,
          }}
        >
          <Group justify="space-between">
            <Stack gap={10}>
              <Text className="text-xl font-medium">Customers</Text>
              <Text className="text-lg">
                {amount.totalData?.amountCustomer}
              </Text>
            </Stack>

            <Box>
              <IoPeople className="text-3xl text-amber-400" />
            </Box>
          </Group>
        </CustomAdminCard>
      </SimpleGrid>

      <Space h={70} />

      <Grid gutter={30}>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack
            bg={"white"}
            gap={30}
            className="rounded-lg border border-gray-200 px-5 py-6 font-poppins shadow-sm"
          >
            <Text className="text-lg font-medium">Total Order</Text>
            <CustomAreaChart
              data={[
                {
                  date: "Mar 22",
                  Apples: 2890,
                  Oranges: 2338,
                  Tomatoes: 2452,
                },
                {
                  date: "Mar 23",
                  Apples: 2756,
                  Oranges: 2103,
                  Tomatoes: 2402,
                },
                {
                  date: "Mar 24",
                  Apples: 3322,
                  Oranges: 986,
                  Tomatoes: 1821,
                },
                {
                  date: "Mar 25",
                  Apples: 3470,
                  Oranges: 2108,
                  Tomatoes: 2809,
                },
                {
                  date: "Mar 26",
                  Apples: 3129,
                  Oranges: 1726,
                  Tomatoes: 2290,
                },
              ]}
              dataKey="date"
              series={[
                { name: "Apples", color: "indigo.6" },
                { name: "Oranges", color: "blue.6" },
                { name: "Tomatoes", color: "teal.6" },
              ]}
            />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            withBorder
            shadow="sm"
            radius={"md"}
            classNames={{ root: `bg-white px-5 font-poppins` }}
          >
            <Image src={Porsche03} className="mx-auto w-56 py-7" />

            <Space h={10} />

            <Text className="text-xl font-medium">Need Confirmation</Text>

            <Space h={20} />

            <Divider />

            <Space h={20} />

            <Stack>
              {queryUnconfirmBook.unconfirmBook.map((book) => {
                return (
                  <Paper shadow="none">
                    <Group justify="space-between">
                      <Stack gap={10}>
                        <Text className="text-base">{book.name}</Text>
                        <Text className="text-sm font-medium text-gray-400">
                          {book.carPlate}
                        </Text>
                      </Stack>

                      <Stack gap={10}>
                        <Text className="text-sm font-medium text-cyan-500">
                          {book.service}
                        </Text>
                        <Button
                          bg={"red"}
                          fw={400}
                          onClick={() => handleOpenConfirmationBooking(book.id)}
                        >
                          {book.status.toUpperCase().slice(0, 1)}
                          {book.status
                            .toLowerCase()
                            .slice(1, book.status.length)}
                        </Button>
                      </Stack>
                    </Group>

                    <Space h={10} />

                    <Divider />
                  </Paper>
                );
              })}
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
    // </AdminLayout>
  );
};

export default DashboardPage;
