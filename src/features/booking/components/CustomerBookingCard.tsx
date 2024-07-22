import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { ICustomerBookingCardProps } from "../interfaces/BookingCard";
import { CustomerBookingCar } from "shared/constant/Images";
import { FaTrashCan } from "react-icons/fa6";
import ModalActionDelete from "features/Admin/components/Modal/ModalActionDelete";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useCancelCustomerBooking } from "shared/hooks/api/Booking/useCancelBooking";
import { Link } from "react-router-dom";
// import { IoCalendarNumberOutline, IoTimeOutline } from "react-icons/io5";

const CustomerBookingCard = (props: ICustomerBookingCardProps) => {
  const [opened, { open, close }] = useDisclosure();

  const [bookingId, setBookingId] = useState<string | undefined>(undefined);

  const cancelBooking = useCancelCustomerBooking();

  const handleOpenModalDelete = (bookingId?: string) => {
    if (bookingId) {
      setBookingId(bookingId);

      open();
    }
  };

  const handleDeleteBooking = () => {
    if (bookingId) {
      cancelBooking.mutate(bookingId);
    }
  };
  return (
    <>
      <ModalActionDelete
        opened={opened}
        onClose={close}
        title="Hapus Product"
        description="Apakah anda yakin ingin menghapus product"
      >
        <Flex gap={20} className="w-full">
          <Button
            onClick={handleDeleteBooking}
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
      </ModalActionDelete>

      <Card
        withBorder
        radius={"lg"}
        shadow="sm"
        my={10}
        classNames={{ root: `cursor-pointer hover:bg-stone-100 relative` }}
      >
        <Link to={`/my-booking/detail/${props.id}`}>
          <Group justify="space-between" className="px-7">
            <Group gap={30}>
              <Image src={CustomerBookingCar} className="w-[250px]" />
              <Stack gap={30} className="h-full ">
                <Group justify="space-between" align="start">
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

                  <Stack gap={10} align="end">
                    <Text>Promo digunakan : </Text>
                    <Badge classNames={{ root: `bg-third` }}>
                      <Text>{props.promo}</Text>
                    </Badge>
                  </Stack>
                </Group>

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

            <Stack className="h-full" align="start" justify="start">
              <Stack gap={5}>
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
            </Stack>
          </Group>
        </Link>

        <Button
          variant="light"
          color="gray"
          leftSection={<FaTrashCan />}
          className="absolute bottom-5 right-5"
          radius={"md"}
          onClick={() => handleOpenModalDelete(props.id)}
        >
          Batalkan Booking
        </Button>
      </Card>
    </>
  );
};

export default CustomerBookingCard;
