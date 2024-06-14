import { Button, Flex, Group, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ModalActionDelete from "features/Admin/components/ModalActionDelete";
import TableLayout from "features/Admin/layouts/Table/TableLayout";
import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { ITimeslotApiResponseParams } from "services/Timeslot/TimeslotServiceInterface";
import { useDeleteTimeslot } from "shared/hooks/api/Timeslots/useDeleteTimeslot";
import { useQueryTimeslots } from "shared/hooks/api/Timeslots/useQueryTimeslots";
import AdminLayout from "shared/layouts/AdminLayout";
import moment from "moment";

const TimeslotPage = () => {
  const [timeslotsRows, setTimeslotsRows] = useState<
    ITimeslotApiResponseParams[]
  >([]);
  const [timeslotId, setTimeslotId] = useState<string | null>(null);

  const timeslots = useQueryTimeslots();
  const deleteTimeslot = useDeleteTimeslot();

  const [opened, { open, close }] = useDisclosure();

  const elements = timeslotsRows.map((timeslot, index) => {
    return {
      id: timeslot.id,
      no: index + 1,
      day: moment(timeslot.date).format("dddd"),
      date: timeslot.date,
      time: timeslot.time,
      avaiableTime: timeslot.avaiableTime,
    };
  });

  const handleOpenModalDelete = (timeslotId?: number) => {
    if (timeslotId) {
      console.log("timeslot id : ", timeslotId);

      setTimeslotId(timeslotId.toString());

      open();
    }
  };

  const handleDeleteTimeslot = () => {
    if (timeslotId) {
      deleteTimeslot.mutate(timeslotId);
    }
  };

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.no}</Table.Td>
      <Table.Td>{element.day}</Table.Td>
      <Table.Td>
        {moment(element.date.toString()).format("DD MMMM YY")}
      </Table.Td>
      <Table.Td>{element.time}</Table.Td>
      <Table.Td>
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

  useEffect(() => {
    if (deleteTimeslot.isSuccess) {
      close();
    }
  }, [deleteTimeslot.isSuccess, close]);

  useEffect(() => {
    if (timeslots.data) {
      setTimeslotsRows(timeslots?.data?.data);
    }
  }, [timeslots.isSuccess, timeslots.data]);

  return (
    <AdminLayout>
      <ModalActionDelete
        opened={opened}
        onClose={close}
        title="Hapus Timeslot"
        description="Apakah anda yakin ingin menghapus timeslot"
      >
        <Flex gap={20} className="w-full">
          <Button
            onClick={handleDeleteTimeslot}
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
      <TableLayout
        title="Customer Table"
        totalData={200}
        urlPage="/admin/timeslot/create"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>No</Table.Th>
            <Table.Th>Hari</Table.Th>
            <Table.Th>Tanggal</Table.Th>
            <Table.Th>Waktu Tersedia</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </TableLayout>
    </AdminLayout>
  );
};

export default TimeslotPage;
