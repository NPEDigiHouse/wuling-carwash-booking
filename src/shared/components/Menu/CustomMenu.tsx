import { Menu, MenuProps } from "@mantine/core";
import { ReactNode } from "react";

interface ICustomMenuPropsType extends MenuProps {
  children: ReactNode;
}

const CustomMenu = ({ children, ...props }: ICustomMenuPropsType) => {
  return (
    <Menu shadow="sm" {...props}>
      {children}
    </Menu>
  );
};

export default CustomMenu;
