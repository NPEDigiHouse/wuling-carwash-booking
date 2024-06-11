import { Table } from "@mantine/core";
import TableLayout from "features/Admin/layouts/Table/TableLayout";
import AdminLayout from "shared/layouts/AdminLayout";

const TimeslotPage = () => {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
    </Table.Tr>
  ));

  return (
    <AdminLayout>
      <TableLayout
        title="Customer Table"
        totalData={200}
        urlPage="/admin/timeslot/create"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Hari</Table.Th>
            <Table.Th>Waktu Booking</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </TableLayout>
    </AdminLayout>
  );
};

export default TimeslotPage;
