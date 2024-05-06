import { Box, Flex, Image } from "@mantine/core";
import { Porsche01 } from "shared/constant/Images";
import { IBookingLayout } from "../interfaces/BookingLayout";

const BookingLayout = ({ children }: IBookingLayout) => {
  return (
    <Flex>
      {children}

      <Box>
        <Image src={Porsche01} />
      </Box>
    </Flex>
  );
};

export default BookingLayout;
