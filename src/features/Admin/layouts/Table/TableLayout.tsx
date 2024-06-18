import { Box, Button, Group, Space, Stack, Table, Text } from "@mantine/core";
import { ReactNode } from "react";
import { IoMdAdd } from "react-icons/io";

interface ITableLayoutPropsType {
  title: string;
  totalData: number;
  children: ReactNode;
  urlPage?: string;
}

const TableLayout = ({
  title,
  totalData,
  urlPage,
  children,
}: ITableLayoutPropsType) => {
  return (
    <Box
      bg={"white"}
      className="rounded-lg border  border-gray-200   px-7 py-5 shadow-sm"
    >
      <Group justify="space-between">
        <Stack gap={5} className="w-fit  font-poppins">
          <Text className="text-lg font-medium">{title}</Text>
          <Text className="text-base">Total Data : {totalData}</Text>
        </Stack>

        <Button
          component={"a"}
          leftSection={<IoMdAdd className="h-5 w-5" />}
          classNames={{
            root: `bg-blue-900`,
            label: `text-sm font-poppins font-normal`,
          }}
          radius={"md"}
          href={urlPage}
        >
          Tambah
        </Button>
      </Group>

      <Space h={15} />

      <Table
        // striped
        withTableBorder={false}
        // withColumnBorders
        withRowBorders={false}
        ff={"poppins"}
        classNames={{
          thead: ` text-black bg-neutral-200`,
          tbody: ``,

          th: `font-medium text-base py-3.5`,
          tr: ``,
          td: `py-7  text-sm`,
        }}
      >
        {children}
      </Table>
    </Box>
  );
};

export default TableLayout;
