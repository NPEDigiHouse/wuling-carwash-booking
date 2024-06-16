import { Group, Modal, ModalProps, Space, Stack, Text } from "@mantine/core";
import { IoTicketSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";

interface IModalPromoPropsType extends ModalProps {
  opened: boolean;
  onClose: () => void;
  promoData: {
    discount: number;
    promoName: string;
  }[];
}
const ModalPromo = ({
  opened,
  onClose,
  promoData,
  ...props
}: IModalPromoPropsType) => {
  return (
    <Modal
      title="Daftar Promo"
      ff={"poppins"}
      opened={opened}
      onClose={onClose}
      radius={"lg"}
      {...props}
      classNames={{
        title: `text-lg font-semibold`,
      }}
      closeButtonProps={{
        icon: <MdClose className="text-base" />,
      }}
    >
      <Text className="text-gray-500">
        <span className="text-red-500">Note : </span>Hanya bisa claim 1 promo{" "}
      </Text>

      <Space h={20} />
      {promoData.map((promo, index) => {
        return (
          <Group key={index} className="rounded-xl bg-neutral-100 px-3 py-2.5">
            <Group className="rounded-full bg-green-200 p-1.5">
              <IoTicketSharp className="text-3xl text-green-500" />
            </Group>
            <Stack gap={5}>
              <Text className="text-lg font-medium">
                Promo {promo.promoName}
              </Text>
              <Text className="font-light text-gray-400">
                Potongan harga sebesar {promo.discount}%
              </Text>
            </Stack>
          </Group>
        );
      })}
    </Modal>
  );
};

export default ModalPromo;
