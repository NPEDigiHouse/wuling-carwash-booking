import { Divider, Grid, Stack, Text } from "@mantine/core";
import React, { Children, ReactNode } from "react";

interface IFormBookingLayoutProps extends React.DOMAttributes<HTMLFormElement> {
  children: ReactNode;
  headerTitle: string;
}

const FormBookingLayout = ({
  children,
  headerTitle,
}: IFormBookingLayoutProps) => {
  return (
    <Stack
      gap={30}
      className="border  border-solid border-gray-200  bg-white px-7 py-7  shadow-md md:rounded-3xl md:px-10"
    >
      <Text className="text-xl font-medium">{headerTitle}</Text>

      <Divider size={"sm"} />

      <Grid gutter={30}>
        {Children.map(children, (child, index) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const spanProps = (child as any).props?.gridSize || {
            base: 12,
          };
          return (
            <Grid.Col key={index} span={spanProps}>
              {child}
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default FormBookingLayout;
