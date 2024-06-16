import {
  Box,
  Button,
  Card,
  Container,
  Divider,
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
import { IoCard, IoCart, IoPeople } from "react-icons/io5";
// import AdminLayout from "shared/layouts/AdminLayout";
import CustomAreaChart from "../../../features/Admin/components/Chart/CustomAreaChart";
import { Porsche03 } from "shared/constant/Images";

const DashboardPage = () => {
  return (
    // <AdminLayout>
    <Container size={"xl"}>
      <SimpleGrid cols={4} spacing={20}>
        <CustomAdminCard
          classNames={{
            root: ``,
          }}
        >
          <Group justify="space-between">
            <Stack gap={10}>
              <Text className="text-xl font-medium">Booking</Text>
              <Text className="text-lg">20</Text>
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
              <Text className="text-xl font-medium">Orders</Text>
              <Text className="text-lg">7</Text>
            </Stack>

            <Box>
              <IoCart className="text-3xl text-teal-500" />
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
              <Text className="text-lg">7</Text>
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

            <Text className="text-xl font-medium">Confirmation Booking</Text>

            <Space h={20} />

            <Divider />

            <Space h={20} />

            <Stack>
              <Paper shadow="none">
                <Group justify="space-between">
                  <Stack gap={10}>
                    <Text className="text-base">Bayu Ajid</Text>
                    <Text className="text-sm font-medium text-gray-400">
                      DD 1782 BY
                    </Text>
                  </Stack>

                  <Stack gap={10}>
                    <Text className="text-sm font-medium text-cyan-500">
                      Car Service
                    </Text>
                    <Button bg={"green"}>Confirm</Button>
                  </Stack>
                </Group>

                <Space h={10} />

                <Divider />
              </Paper>

              <Paper shadow="none">
                <Group justify="space-between">
                  <Stack gap={10}>
                    <Text className="text-base">Muh Ikhsan</Text>
                    <Text className="text-sm   font-medium text-gray-400">
                      DD 1475 TW
                    </Text>
                  </Stack>

                  <Stack gap={10}>
                    <Text className="text-sm font-medium text-cyan-500">
                      Car Wash
                    </Text>
                    <Button bg={"green"}>Confirm</Button>
                  </Stack>
                </Group>

                <Space h={10} />

                <Divider />
              </Paper>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
    // </AdminLayout>
  );
};

export default DashboardPage;
