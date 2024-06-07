import { Box, Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import { IBookingLayout } from "../../booking/Interfaces/BookingLayout";
import { useLocation } from "react-router-dom";
import CustomBreadcrumbs from "shared/components/Breadcrumbs/CustomBreadcrumbs";

const BookingLayout = ({ children, thumbnail, title }: IBookingLayout) => {
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

      <Box className="relative w-fit lg:w-[800px]">
        <Image src={thumbnail} />

        <Text className="absolute -bottom-16 left-0 right-0 -z-10 mx-auto w-fit font-bold  uppercase text-gray-500 text-opacity-55 lg:text-[120px]">
          {title}
        </Text>
      </Box>

      <SimpleGrid
        cols={{ base: 1, md: 1 }}
        spacing={{ base: 30 }}
        className="w-full"
      >
        {children}
      </SimpleGrid>
    </Stack>
  );
};

export default BookingLayout;
