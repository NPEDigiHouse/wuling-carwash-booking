import { Container } from "@mantine/core";
import StepperMode from "features/booking/components/StepperMode";
import NavbarItem from "shared/components/Navbar/NavbarItem";

const BookingPage = () => {
  return (
    <Container fluid>
      <Container size={"xl"}>
        <NavbarItem />
      </Container>

      <Container size={"xl"}>
        <StepperMode />
      </Container>
    </Container>
  );
};

export default BookingPage;
