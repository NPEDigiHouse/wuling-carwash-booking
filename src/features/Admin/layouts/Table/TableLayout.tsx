import { Box, Space, Stack, Table, Text } from "@mantine/core";
import { ReactNode } from "react";

interface ITableLayoutPropsType {
  title: string;
  totalData: number;
  children: ReactNode;
}

const TableLayout = ({ title, totalData, children }: ITableLayoutPropsType) => {
  return (
    <Box
      bg={"white"}
      className="rounded-lg border  border-gray-200   px-7 py-5 shadow-sm"
    >
      <Stack gap={5} className="w-fit  font-poppins">
        <Text className="text-lg font-medium">{title}</Text>
        <Text className="text-base">Total Data : {totalData}</Text>
      </Stack>

      <Space h={15} />

      <Table
        striped
        withTableBorder
        withColumnBorders
        ff={"poppins"}
        classNames={{
          thead: `bg-neutral-300 text-black `,
          th: `font-medium text-base py-2.5`,
        }}
      >
        {children}
      </Table>
    </Box>
  );
};

export default TableLayout;
