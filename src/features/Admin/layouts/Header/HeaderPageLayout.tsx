import { Group, Text } from "@mantine/core";
import ProfileBadge from "features/Admin/components/Badge/ProfileBadge";
import CustomMenu from "shared/components/Menu/CustomMenu";

interface IHeaderPageLayoutPropsType {
  title: string;
}

const HeaderPageLayout = ({ title }: IHeaderPageLayoutPropsType) => {
  return (
    <Group
      bg={"white"}
      justify="space-between"
      className="py- rounded-xl border border-gray-200 px-5 font-poppins shadow-sm"
    >
      <Text className="font-poppins text-lg font-medium">{title}</Text>

      <CustomMenu>
        <ProfileBadge name="Rafly Masloman" role="Admin" />
      </CustomMenu>
    </Group>
  );
};

export default HeaderPageLayout;
