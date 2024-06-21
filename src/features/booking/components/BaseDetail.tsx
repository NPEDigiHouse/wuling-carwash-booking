import { Divider, Flex, Paper, PaperProps, Stack, Text } from "@mantine/core";
import { ReactNode } from "react";

interface IBaseDetailProps extends PaperProps {
  title: string;
  description?: string;
  headerIcon?: ReactNode;
  children: ReactNode;
}
const BaseDetail = ({
  title,
  description,
  headerIcon,
  children,
  ...props
}: IBaseDetailProps) => {
  return (
    <Paper
      className="flex flex-col gap-y-5 rounded-lg bg-stone-50 p-7"
      withBorder
      shadow="sm"
      {...props}
    >
      <Stack className="gap-y-7">
        {!headerIcon ? (
          <>
            <Text className="text-xl font-medium text-black">{title}</Text>
            <Divider className="border-gray-400" />
          </>
        ) : (
          <Flex direction={{ base: "row" }} gap={{ base: 20 }} align="center">
            <div>{headerIcon}</div>
            <Stack gap={5}>
              <Text className="text-lg font-semibold text-green-500 md:text-2xl">
                {title}
              </Text>
              <Text className="text-sm text-green-600 md:text-base">
                {description}
              </Text>
            </Stack>
          </Flex>
        )}
        {children}
      </Stack>
    </Paper>
  );
};

export default BaseDetail;
