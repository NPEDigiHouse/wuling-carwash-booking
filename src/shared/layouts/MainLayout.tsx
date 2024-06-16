import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container fluid mx={0} px={0} className="font-poppins">
      <Outlet />
    </Container>
  );
};

export default MainLayout;
