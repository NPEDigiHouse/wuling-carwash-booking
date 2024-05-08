import { Select, SelectProps } from "@mantine/core";

interface ICustomSelectInputProps extends SelectProps {
  gridSize?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const CustomSelectInput = ({ gridSize, ...props }: ICustomSelectInputProps) => {
  return (
    <Select
      classNames={{
        input: `bg-[#F2F2F2] h-12 rounded-full placeholder:font-poppins px-7`,
        label: `font-poppins mb-2.5 text-base font-medium`,
      }}
      {...gridSize}
      {...props}
    />
  );
};

export default CustomSelectInput;
