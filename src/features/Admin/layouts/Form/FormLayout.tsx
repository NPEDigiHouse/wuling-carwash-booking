import { Box, Divider, Group, Stack, Text } from "@mantine/core";
import { ReactNode } from "react";

interface IFormLayoutPropsType {
  title: string;
  totalData: number;
  children: ReactNode;
}

const FormLayout = ({ title, totalData, children }: IFormLayoutPropsType) => {
  return (
    <Box className="rounded-lg border bg-white px-7 py-7 shadow-sm ">
      <Group w={"100%"} gap={20} align="center" ff={"poppins"}>
        <Text className="text-lg font-medium">{title}</Text>
        <Text>{totalData}</Text>
      </Group>

      <Stack h={20} />

      <Divider classNames={{ root: `border border-dashed border-gray-300` }} />

      <Stack h={20} />

      {children}
    </Box>
  );
};

export default FormLayout;
