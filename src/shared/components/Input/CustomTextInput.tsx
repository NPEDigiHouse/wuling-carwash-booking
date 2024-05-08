import { TextInput, TextInputProps } from "@mantine/core";

interface ICustomTextInputProps extends TextInputProps {
  gridSize?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const CustomTextInput = ({ gridSize, ...props }: ICustomTextInputProps) => {
  return (
    <TextInput
      classNames={{
        input: `bg-[#F2F2F2] h-12 rounded-full placeholder:font-poppins px-7 font-poppins`,
        label: `font-poppins mb-2.5 text-base font-medium`,
      }}
      {...gridSize}
      {...props}
    />
  );
};

export default CustomTextInput;
