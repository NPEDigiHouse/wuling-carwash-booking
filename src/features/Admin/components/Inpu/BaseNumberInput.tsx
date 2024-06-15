import { NumberInput, NumberInputProps } from "@mantine/core";

interface IBaseNumberInputProps extends NumberInputProps {
  gridSize?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const BaseNumberInput = ({ ...props }: IBaseNumberInputProps) => {
  return (
    <NumberInput
      classNames={{
        input: `bg-[#F2F2F2] h-12 placeholder:font-poppins `,
        label: `font-poppins mb-2.5 text-base font-medium`,
      }}
      {...props}
    />
  );
};

export default BaseNumberInput;
