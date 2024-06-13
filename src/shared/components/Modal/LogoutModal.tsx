import {
  Flex,
  Group,
  Modal,
  ModalProps,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import ICWarning from "../Icon/WarningIcon";

interface ILogoutModalPropsType extends ModalProps {
  title: string;
  description: string;
  opened: boolean;
  onClose: () => void;
}
const LogoutModal = ({
  opened,
  onClose,
  title,
  description,
  ...props
}: ILogoutModalPropsType) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      radius={"lg"}
      shadow="md"
      classNames={{
        body: `py-6  `,
      }}
      {...props}
    >
      <Flex align={"start"} gap={20}>
        <div>
          <ICWarning width="40" height="40" />
        </div>

        <Stack ff={"poppins"} gap={0} className="w-full">
          <Text className="text-xl font-semibold">{title}</Text>
          <Text className="text-gray-400">{description}</Text>

          <Space h={20} />

          <Group>{props.children}</Group>
        </Stack>
      </Flex>
    </Modal>
  );
};

export default LogoutModal;
