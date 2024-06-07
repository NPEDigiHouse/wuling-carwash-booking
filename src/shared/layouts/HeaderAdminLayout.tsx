import { Group, Text } from "@mantine/core";
import CustomMenu from "shared/components/Menu/CustomMenu";
import ProfileBadge from "../../features/Admin/components/Badge/ProfileBadge";

const HeaderAdminLayout = () => {
  return (
    <Group justify="space-between" ff={"poppins"} align="center">
      <Text>Admin Carwash</Text>

      <CustomMenu>
        <ProfileBadge name="Rafly Masloman" role="Admin" />
      </CustomMenu>
    </Group>
  );
};

export default HeaderAdminLayout;
