import { Box, Group, Text } from "@mantine/core";
import { ReactNode } from "react";

interface IFormLayoutPropsType {
  title: string;
  totalData: number;
  children: ReactNode;
}

const FormLayout = ({ title, totalData, children }: IFormLayoutPropsType) => {
  return (
    <Box>
      <Group>
        <Text>{title}</Text>
        <Text>{totalData}</Text>
      </Group>
      {children}
    </Box>
  );
};

export default FormLayout;
