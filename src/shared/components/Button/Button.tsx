import { Button } from "@mantine/core";
import { IBaseButtonProps } from "./ButtonInterface";

const BaseButton = ({ variants, type, ...props }: IBaseButtonProps) => {
  return (
    <Button
      classNames={{
        inner: ``,
      }}
    ></Button>
  );
};
