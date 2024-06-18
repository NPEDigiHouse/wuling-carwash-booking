import { Button, Flex, Group, LoadingOverlay, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ModalActionDelete from "features/Admin/components/ModalActionDelete";
import TableLayout from "features/Admin/layouts/Table/TableLayout";
import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { IProductResponseParams } from "services/Product/ProductServiceInterface";
import { useDeleteProduct } from "shared/hooks/api/Product/useDeleteProduct";
import { useQueryAllProducts } from "shared/hooks/api/Product/useQueryAllProducts";

const ProductPage = () => {
  const [opened, { open, close }] = useDisclosure();

  const [productsData, setProductsData] = useState<IProductResponseParams[]>(
    [],
  );
  const [productId, setProductId] = useState<number | null>(null);

  const queryProducts = useQueryAllProducts();
  const deleteMutationProduct = useDeleteProduct();

  const elements = productsData.map((product, index) => {
    return {
      id: product.id,
      no: index + 1,
      productName: product.productName,
      price: product.price,
    };
  });

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.no}</Table.Td>
      <Table.Td>{element.productName}</Table.Td>
      <Table.Td>{element.price}</Table.Td>
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

  const handleOpenModalDelete = (productId?: number) => {
    if (productId) {
      setProductId(productId);

      open();
    }
  };

  const handleDeleteTimeslot = () => {
    if (productId) {
      deleteMutationProduct.mutate(productId);
    }
  };

  console.log("products : ", productsData);
  console.log("products : ", queryProducts.data?.data);

  useEffect(() => {
    if (deleteMutationProduct.isSuccess) {
      close();
    }
  }, [deleteMutationProduct.isSuccess, close]);

  useEffect(() => {
    if (!queryProducts.isFetching && !queryProducts.isLoading) {
      if (queryProducts.isSuccess && queryProducts.data) {
        setProductsData(queryProducts.data.data);
      }
    }
  }, [
    queryProducts.isSuccess,
    queryProducts.isFetching,
    queryProducts.isLoading,
    queryProducts,
  ]);

  if (!queryProducts.isSuccess) {
    return <LoadingOverlay visible={queryProducts.isFetching} />;
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
        title="Tabel Produk"
        totalData={productsData.length}
        urlPage="/admin/products/create"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>No</Table.Th>
            <Table.Th>Tipe Layanan</Table.Th>
            <Table.Th>Harga</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </TableLayout>
    </>
  );
};

export default ProductPage;
