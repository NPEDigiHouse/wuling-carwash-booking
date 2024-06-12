import { Avatar, Menu } from "@mantine/core";
import CustomMenu from "./CustomMenu";
import { ReactNode } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdExitToApp, MdModeEditOutline } from "react-icons/md";
import TokenConfig from "shared/config/TokenConfig";

interface IProfileMenuPropsType {
  profileBadge: ReactNode;
  children?: ReactNode;
}

const ProfileMenu = ({ profileBadge }: IProfileMenuPropsType) => {
  const handleLogout = () => {
    TokenConfig.removeToken();
  };
  return (
    <CustomMenu>
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
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </CustomMenu>
  );
};

export default ProfileMenu;
