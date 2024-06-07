import { Group, Text } from "@mantine/core";
import CustomMenu from "shared/components/Menu/CustomMenu";
import ProfileBadge from "../Badge/ProfileBadge";

const HeaderAdmin = () => {
  return (
    <Group justify="space-between" ff={"poppins"} align="center">
      <Text>Admin Carwash</Text>

      <CustomMenu>
        <ProfileBadge name="Rafly Masloman" role="Admin" />
      </CustomMenu>
    </Group>
  );
};

export default HeaderAdmin;
