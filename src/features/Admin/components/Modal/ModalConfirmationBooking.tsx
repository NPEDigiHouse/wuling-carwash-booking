import {
  Button,
  Divider,
  Group,
  Image,
  LoadingOverlay,
  Modal,
  ModalProps,
  Paper,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { Porsche03 } from "shared/constant/Images";
import { useConfirmationCustomerBooking } from "shared/hooks/api/Booking/useConfirmationCustomerBooking";

interface IModalConfirmationBookingProps extends ModalProps {
  opened: boolean;
  onClose: () => void;
  isFetchingData: boolean;
  bookingData?: {
    id?: string;
    name?: string;
    carType?: string;
    carPlate?: string;
    service?: string;
    status?: string;
  };
}
const ModalConfirmationBooking = ({
  opened,
  onClose,
  isFetchingData,
  bookingData,
  ...props
}: IModalConfirmationBookingProps) => {
  console.log("status : ", bookingData?.id);

  const updateStatus = useConfirmationCustomerBooking();

  const handleConfirmationModalBooking = () => {
    updateStatus.mutate(bookingData?.id);
  };

  return (
    <Modal
      title="Booking Confirmation"
      onClose={onClose}
      opened={opened}
      radius={"lg"}
      withCloseButton={false}
      classNames={{
        title: `font-poppins text-xl font-semibold text-center`,
        header: `text-center  flex justify-center`,
      }}
      {...props}
    >
      <LoadingOverlay visible={isFetchingData} />

      <Stack ff={"poppins"} gap={0}>
        <Image src={Porsche03} className="mx-auto w-56 py-7" />

        <Space h={10} />

        <Paper shadow="none">
          <Group justify="space-between" align="start">
            <Stack gap={10}>
              <Text className="text-base">{bookingData?.name}</Text>

              <Text className="text-base font-normal text-gray-600">
                {bookingData?.carType} - {bookingData?.carPlate}
              </Text>
            </Stack>

            <Stack gap={10}>
              <Text className="text-sm font-medium text-cyan-500">
                {bookingData?.service}
              </Text>
            </Stack>
          </Group>

          <Space h={20} />

          <Divider />

          <Space h={20} />

          <Button
            bg={bookingData?.status === "UNCONFIRMATION" ? "green" : "red"}
            radius={"md"}
            fullWidth
            onClick={handleConfirmationModalBooking}
          >
            {bookingData?.status === "UNCONFIRMATION"
              ? "Konfirmasi"
              : "Batal Konfirmasi"}
          </Button>

          <Space h={10} />
        </Paper>
      </Stack>

      {props.children}
    </Modal>
  );
};

export default ModalConfirmationBooking;
