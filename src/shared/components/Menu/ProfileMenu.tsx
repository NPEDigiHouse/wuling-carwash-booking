import { Avatar, Button, Flex, Menu } from "@mantine/core";
import CustomMenu from "./CustomMenu";
import { ReactNode } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdExitToApp, MdModeEditOutline } from "react-icons/md";
import TokenConfig from "shared/config/TokenConfig";
import { useDisclosure } from "@mantine/hooks";
import LogoutModal from "../Modal/LogoutModal";

interface IProfileMenuPropsType {
  profileBadge: ReactNode;
  children?: ReactNode;
}

const ProfileMenu = ({ profileBadge }: IProfileMenuPropsType) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleOpenModalLogout = () => {
    open();
  };

  const handleLogoutAction = () => {
    TokenConfig.removeToken();
  };

  return (
    <CustomMenu>
      <LogoutModal
        title="Keluar Akun?"
        description="Anda dapat login kembali"
        opened={opened}
        onClose={close}
      >
        <Flex gap={20} className="w-full">
          <Button
            onClick={handleLogoutAction}
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
      </LogoutModal>
      <Menu.Target>
        <Avatar
          color={"white"}
          c={"white"}
          classNames={{ root: `bg-zinc-600` }}
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>

        <Menu.Item>{profileBadge}</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Settings</Menu.Label>

        <Menu.Item leftSection={<IoPersonCircleOutline className="text-lg" />}>
          Profile
        </Menu.Item>

        <Menu.Item leftSection={<MdModeEditOutline className="text-lg" />}>
          Edit Profile
        </Menu.Item>

        <Menu.Item
          leftSection={<MdExitToApp className="text-lg" />}
          onClick={handleOpenModalLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </CustomMenu>
  );
};

export default ProfileMenu;
