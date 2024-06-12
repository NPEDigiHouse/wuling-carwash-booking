import { Menu, MenuProps } from "@mantine/core";
import { ReactNode } from "react";

interface ICustomMenuPropsType extends MenuProps {
  children: ReactNode;
}

const CustomMenu = ({ children, ...props }: ICustomMenuPropsType) => {
  return (
    <Menu
      shadow="sm"
      classNames={{
        item: `font-poppins`,
        label: `font-poppins text-sm`,
        dropdown: `gap-10 pt-3`,
        itemSection: `my-2.5`,
        itemLabel: `my-1`,
      }}
      {...props}
    >
      {children}
    </Menu>
  );
};

export default CustomMenu;
