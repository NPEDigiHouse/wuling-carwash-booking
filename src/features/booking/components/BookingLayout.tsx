import { Box, Group, Image, Stack } from "@mantine/core";
import { PorscheWash } from "shared/constant/Images";
import { IBookingLayout } from "../interfaces/BookingLayout";
import { useLocation } from "react-router-dom";
import CustomBreadcrumbs from "shared/components/Breadcrumbs/CustomBreadcrumbs";

const BookingLayout = ({ children }: IBookingLayout) => {
  const { pathname } = useLocation();

  return (
    <Stack align="center" justify="center" gap={50}>
      <Group className="w-full">
        <CustomBreadcrumbs
          items={[
            { title: "Home", href: "/" },
            { title: "Booking", href: "/booking" },
          ]}
          pathname={pathname}
        />
      </Group>

      <Box className="  w-fit   lg:w-[800px]">
        <Image src={PorscheWash} />
      </Box>
      {children}
    </Stack>
  );
};

export default BookingLayout;
