import {
  Avatar,
  Badge,
  Button,
  Flex,
  Group,
  LoadingOverlay,
  Table,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ModalConfirmationBooking from "features/Admin/components/Modal/ModalConfirmationBooking";
import ModalActionDelete from "features/Admin/components/Modal/ModalActionDelete";
import TableLayout from "features/Admin/layouts/Table/TableLayout";
import { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoImageOutline, IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { IBookingResponseParams } from "services/Booking/BookingServiceInterface";
import { useDeleteBooking } from "shared/hooks/api/Booking/useDeleteBooking";
import { useQueryAllBooking } from "shared/hooks/api/Booking/useQueryAllBookings";
import { useGetBookingConfirmData } from "shared/hooks/ui/Booking/useGetBookingConfirmData";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [opened, { open, close }] = useDisclosure();
  const [openedConfirm, { open: openConfirm, close: closeConfirm }] =
    useDisclosure();

  const [bookingId, setBookingId] = useState<string | undefined>(undefined);
  const [bookingsData, setBookingsData] = useState<IBookingResponseParams[]>(
    [],
  );

  const queryBooking = useQueryAllBooking();
  const queryBookingDetail = useGetBookingConfirmData(bookingId);
  const deleteBooking = useDeleteBooking();

  const elements = bookingsData.map((booking, index) => {
    return {
      id: booking.id,
      no: index + 1,
      name: booking.name,
      phoneNumber: booking.phoneNumber,
      carType: booking.carType,
      carPlate: booking.carPlate,
      status: booking.status,
      amount: booking.amount,
      bookingDate: booking.bookingDate,
      bookingTime: booking.bookingTime,
      service: booking.service,
      receipt: booking.receipt,
      promo: booking.promo,
    };
  });

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td className="rounded-bl-xl rounded-tl-xl">{element.no}</Table.Td>
      <Table.Td>
        <Group gap={10}>
          <Avatar size={"sm"} />
          {element.name}
        </Group>
      </Table.Td>
      <Table.Td>{element.phoneNumber}</Table.Td>

      <Table.Td>Rp. {element.amount}</Table.Td>
      <Table.Td>
        {element.bookingDate} : {element.bookingTime}
      </Table.Td>
      <Table.Td>
        <Link
          to={`${import.meta.env.VITE_LOCALHOST_URL}/uploads/booking/${element.receipt}`}
          target="_blank"
        >
          <Button
            variant="outline"
            className="border-primary font-normal text-primary"
            rightSection={<IoImageOutline className="text-2xl text-primary" />}
          >
            Lihat Gambar
          </Button>
        </Link>
      </Table.Td>
      <Table.Td>
        <Badge
          onClick={() => handleOpenConfirmationBookingModal(element.id)}
          radius={"sm"}
          variant="filled"
          classNames={{
            section: `bg-blue-400`,
            root: `${element.status === "UNCONFIRMATION" ? "bg-red-200" : "bg-green-200"} cursor-pointer`,
          }}
        >
          <Group gap={5} align="center">
            <Text
              className={`${`text-xs font-medium capitalize ${element.status === "UNCONFIRMATION" ? "text-red-600" : "text-green-600"}`}`}
            >
              {element.status === "UNCONFIRMATION" ? "Need Confirm" : "Confirm"}
            </Text>
            <IoMdArrowDropright
              className={`text-sm ${element.status === "UNCONFIRMATION" ? "text-red-500" : "text-green-500"} `}
            />
          </Group>
        </Badge>
      </Table.Td>

      <Table.Td className="rounded-br-xl rounded-tr-xl">
        <Group>
          <MdOutlineEdit className="text-xl text-blue-500" />
          <IoTrashOutline
            className="text-xl text-red-500"
            onClick={() => handleOpenModalDelete(element.id)}
          />
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  const handleOpenModalDelete = (bookingId?: string) => {
    if (bookingId) {
      setBookingId(bookingId);

      open();
    }
  };

  const handleOpenConfirmationBookingModal = (bookingId?: string) => {
    if (bookingId) {
      setBookingId(bookingId);
    }

    openConfirm();
  };

  const handleDeleteBooking = () => {
    if (bookingId) {
      deleteBooking.mutate(bookingId);
    }
  };

  //   useEffect(() => {
  //     if (deleteMutationProduct.isSuccess) {
  //       close();
  //     }
  //   }, [deleteMutationProduct.isSuccess, close]);

  useEffect(() => {
    if (!queryBooking.isFetching && !queryBooking.isLoading) {
      if (queryBooking.isSuccess && queryBooking.data) {
        setBookingsData(queryBooking.data.data);
      }
    }
  }, [
    queryBooking.isSuccess,
    queryBooking.isFetching,
    queryBooking.isLoading,
    queryBooking,
  ]);

  if (!queryBooking.isSuccess) {
    return <LoadingOverlay visible={queryBooking.isFetching} />;
  }

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

      <ModalConfirmationBooking
        isFetchingData={queryBookingDetail.bookingModalDetail === null}
        bookingData={{
          id: bookingId,
          carPlate: queryBookingDetail.bookingModalDetail?.carPlate,
          carType: queryBookingDetail.bookingModalDetail?.carType,
          name: queryBookingDetail.bookingModalDetail?.name,
          service: queryBookingDetail.bookingModalDetail?.service,
          status: queryBookingDetail.bookingModalDetail?.status,
        }}
        opened={openedConfirm}
        onClose={closeConfirm}
      />

      <TableLayout
        title="Customer Table"
        totalData={bookingsData.length}
        urlPage="/admin/bookings/create"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="rounded-bl-xl rounded-tl-xl">No</Table.Th>
            <Table.Th>Nama Customer</Table.Th>
            <Table.Th>No.Telp</Table.Th>
            <Table.Th>Harga</Table.Th>
            <Table.Th>Tanggal & Waktu</Table.Th>
            <Table.Th>Bukti Pembayaran</Table.Th>
            <Table.Th>Konfirmasi</Table.Th>
            <Table.Th className="rounded-br-xl rounded-tr-xl">Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </TableLayout>
    </>
  );
};

export default BookingPage;
