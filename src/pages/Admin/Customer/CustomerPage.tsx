import { Button, Flex, Group, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ModalActionDelete from "features/Admin/components/Modal/ModalActionDelete";

import TableLayout from "features/Admin/layouts/Table/TableLayout";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDeleteCustomer } from "shared/hooks/api/Customer/useDeleteCustomer";
import { useQueryAllCustomers } from "shared/hooks/api/Customer/useQueryAllCustomers";

const CustomerPage = () => {
  const [customerId, setCustomerId] = useState<string | undefined>(undefined);

  const [opened, { open, close }] = useDisclosure();

  const queryAllCustomers = useQueryAllCustomers();
  const deleteCustomer = useDeleteCustomer(customerId);

  console.log("customers : ", queryAllCustomers.customersData);

  const handleOpenModalDelete = (customerId?: string) => {
    if (customerId) {
      setCustomerId(customerId);

      open();
    }
  };

  const handleDeleteCustomer = () => {
    if (customerId) {
      console.log("customer id : ", customerId);

      deleteCustomer.mutate(customerId);
    }
  };

  const rows = queryAllCustomers.customersData?.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.user.username}</Table.Td>
      <Table.Td>{element.phoneNumber}</Table.Td>
      <Table.Td>{element.user.email}</Table.Td>
      <Table.Td className="rounded-br-xl rounded-tr-xl">
        <Group>
          <Link to={`/admin/customers/edit/${element.id}`} reloadDocument>
            <MdOutlineEdit className="text-xl text-blue-500" />
          </Link>
          <IoTrashOutline
            className="text-xl text-red-500"
            onClick={() => handleOpenModalDelete(element.id)}
          />
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

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
            onClick={handleDeleteCustomer}
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
    </>
  );
};

export default CustomerPage;
