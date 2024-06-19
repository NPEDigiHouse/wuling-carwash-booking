import { Badge, Card, Group, Image, Stack, Text } from "@mantine/core";
import { ICustomerBookingCardProps } from "../interfaces/BookingCard";
import { CustomerBookingCar } from "shared/constant/Images";
// import { IoCalendarNumberOutline, IoTimeOutline } from "react-icons/io5";

const CustomerBookingCard = (props: ICustomerBookingCardProps) => {
  return (
    <Card
      withBorder
      radius={"lg"}
      shadow="sm"
      my={10}
      classNames={{ root: `cursor-pointer hover:bg-stone-100` }}
      component="a"
      href="/my-booking/detail"
    >
      <Group align="center" justify="space-between" className="px-7">
        <Group gap={30}>
          <Image src={CustomerBookingCar} className="w-[250px]" />
          <Stack gap={30} className="h-full ">
            <Stack gap={5}>
              <Text className="text-xl font-medium">
                {props?.carType} - {props?.carPlate}
              </Text>
              <Group>
                <Text className="text-base font-medium text-gray-400">
                  {props?.name}
                </Text>
              </Group>
            </Stack>

            <Group gap={50}>
              <Stack gap={0}>
                <Text className="text-lg font-semibold text-black">
                  {props?.bookingDate}
                </Text>
                <Text className="text-gray-400">Tanggal Booking</Text>
              </Stack>

              <Stack gap={0}>
                <Text className="text-lg font-semibold text-black">
                  {props?.bookingTime}
                </Text>
                <Text className="text-gray-400">Jam Booking</Text>
              </Stack>

              <Stack gap={0}>
                <Text className="text-lg font-semibold text-black">
                  {props?.service}
                </Text>
                <Text className="text-gray-400">Layanan dipilih</Text>
              </Stack>

              <Stack gap={0}>
                <Text className="text-lg font-semibold text-black">
                  Rp.{props?.amount}
                </Text>
                <Text className="text-gray-400">Harga</Text>
              </Stack>
            </Group>
          </Stack>
        </Group>

        <Stack className="h-full" justify="space-between">
          <Stack gap={5} align="end">
            <Text>Konfirmasi Status : </Text>
            {props.status === "UNCONFIRMATION" ? (
              <Text className="font-medium text-red-500">
                Belum Dikonfirmasi
              </Text>
            ) : (
              <Text className="font-medium text-green-500">
                Sudah Dikonfirmasi
              </Text>
            )}
          </Stack>

          <Stack gap={10} align="end">
            <Text>Promo digunakan : </Text>
            <Badge classNames={{ root: `bg-third` }}>
              <Text>{props.promo}</Text>
            </Badge>
          </Stack>
        </Stack>
      </Group>
    </Card>
  );
};

export default CustomerBookingCard;
