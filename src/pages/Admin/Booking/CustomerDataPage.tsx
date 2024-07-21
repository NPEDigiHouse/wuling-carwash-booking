import { Button, Group, Table } from "@mantine/core";

import TableLayout from "features/Admin/layouts/Table/TableLayout";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useQueryAllCustomers } from "shared/hooks/api/Customer/useQueryAllCustomers";

const BookingCustomerDataPage = () => {
  const queryAllCustomers = useQueryAllCustomers();

  const rows = queryAllCustomers.customersData?.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.user.username}</Table.Td>
      <Table.Td>{element.phoneNumber}</Table.Td>
      <Table.Td>{element.user.email}</Table.Td>
      <Table.Td className="rounded-br-xl rounded-tr-xl">
        <Group>
          <Link to={`/admin/create/booking/${element.id}`} reloadDocument>
            <Button
              color="indigo"
              radius={"lg"}
              leftSection={<FaPlus className="text-white" />}
            >
              Booking
            </Button>
          </Link>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <TableLayout
      title="Customer Data untuk Tambah Booking"
      totalData={
        !queryAllCustomers.customersData
          ? 0
          : queryAllCustomers.customersData.length
      }
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>No</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Username</Table.Th>
          <Table.Th>No. Telp</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </TableLayout>
  );
};

export default BookingCustomerDataPage;
