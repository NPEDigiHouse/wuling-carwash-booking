import { Button, Flex, Group, LoadingOverlay, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ModalActionDelete from "features/Admin/components/Modal/ModalActionDelete";
import TableLayout from "features/Admin/layouts/Table/TableLayout";
import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { IPromoServiceResponseParams } from "services/Promo/PromoServiceInterface";
import { useDeletePromo } from "shared/hooks/api/Promo/useDeletePromo";
import { useQueryAllPromo } from "shared/hooks/api/Promo/useQueryAllPromo";
import moment from "moment";
import { Link } from "react-router-dom";

const PromoPage = () => {
  const [opened, { open, close }] = useDisclosure();
  // const navigate = useNavigate();

  const [promoData, setPromosData] = useState<IPromoServiceResponseParams[]>(
    [],
  );
  const [promoId, setPromoId] = useState<number | null>(null);

  const queryPromos = useQueryAllPromo();
  const deleteMutationPromo = useDeletePromo();

  const elements = promoData.map((promo, index) => {
    return {
      id: promo.id,
      no: index + 1,
      discount: promo.discount,
      promoName: promo.promoName,
      statertedDate: promo.startedDate,
      endDate: promo.endDate,
    };
  });

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.no}</Table.Td>
      <Table.Td>{element.promoName}</Table.Td>
      <Table.Td>{element.discount}</Table.Td>
      <Table.Td>
        {moment(element.statertedDate).format("DD MMMM YYYY")}
      </Table.Td>
      <Table.Td>{moment(element.endDate).format("DD MMMM YYYY")}</Table.Td>
      <Table.Td>
        <Group>
          <Link to={`/admin/promo/edit/${element.id}`} reloadDocument>
            <MdOutlineEdit
              className="text-xl text-blue-500"
              // onClick={() => handleNavigateEditPage(element.id)}
            />
          </Link>
          <IoTrashOutline
            className="text-xl text-red-500"
            onClick={() => handleOpenModalDelete(element.id)}
          />
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  const handleOpenModalDelete = (promoId?: number) => {
    if (promoId) {
      setPromoId(promoId);

      open();
    }
  };

  // const handleNavigateEditPage = (promoId?: number) => {
  //   if (promoId) {
  //     setPromoId(promoId);

  //     navigate(`/admin/promo/edit/${promoId}`);
  //   }
  // };

  const handleDeleteTimeslot = () => {
    if (promoId) {
      deleteMutationPromo.mutate(promoId);
    }
  };

  useEffect(() => {
    if (deleteMutationPromo.isSuccess) {
      close();
    }
  }, [deleteMutationPromo.isSuccess, close]);

  useEffect(() => {
    if (!queryPromos.isFetching && !queryPromos.isLoading) {
      if (queryPromos.isSuccess && queryPromos.data) {
        setPromosData(queryPromos.data.data);
      }
    }
  }, [
    queryPromos.isSuccess,
    queryPromos.isFetching,
    queryPromos.isLoading,
    queryPromos,
  ]);

  if (!queryPromos.isSuccess) {
    return <LoadingOverlay visible={queryPromos.isFetching} />;
  }

  return (
    <>
      <ModalActionDelete
        opened={opened}
        onClose={close}
        title="Hapus Promo"
        description="Apakah anda yakin ingin menghapus Promo"
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
        title="Tabel Promo"
        totalData={promoData.length}
        urlPage="/admin/promo/create"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>No</Table.Th>
            <Table.Th>Promo</Table.Th>
            <Table.Th>Diskon</Table.Th>
            <Table.Th>Tanggal Mulai</Table.Th>
            <Table.Th>Tanggal Berakhir</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </TableLayout>
    </>
  );
};

export default PromoPage;
