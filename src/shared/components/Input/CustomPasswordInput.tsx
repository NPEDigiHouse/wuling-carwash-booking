import { PasswordInput, PasswordInputProps } from "@mantine/core";

interface ICustomPasswordInputProps extends PasswordInputProps {
  gridSize?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const CustomPasswordInput = ({
  gridSize,
  ...props
}: ICustomPasswordInputProps) => {
  return (
    <PasswordInput
      classNames={{
        input: `bg-[#F2F2F2] h-12 placeholder:font-poppins  font-poppins`,
        label: `font-poppins mb-2.5 text-base font-medium`,
      }}
      radius={"md"}
      {...gridSize}
      {...props}
    />
  );
};

export default CustomPasswordInput;
