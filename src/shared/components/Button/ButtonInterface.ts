import { ButtonProps } from "@mantine/core";

export interface IBaseButtonProps extends ButtonProps {
  variants: "primary" | "secondary" | string;
  type: string;
}
