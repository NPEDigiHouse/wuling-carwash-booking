import { Card, CardProps } from "@mantine/core";
import { ReactNode } from "react";

interface ICustomAdminCard extends CardProps {
  children: ReactNode;
}

const CustomAdminCard = ({ children, ...props }: ICustomAdminCard) => {
  return (
    <Card radius={"md"} shadow="md" withBorder {...props} ff={"poppins"}>
      {children}
    </Card>
  );
};

export default CustomAdminCard;
