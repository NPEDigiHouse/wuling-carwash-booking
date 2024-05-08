import { Container } from "@mantine/core";
import { ReactNode } from "react";

interface IMainLayoutPropsType {
  children: ReactNode;
}
const MainLayout = ({ children }: IMainLayoutPropsType) => {
  return (
    <Container fluid mx={0} px={0} className="font-poppins">
      {children}
    </Container>
  );
};

export default MainLayout;
