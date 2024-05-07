import { TextInput, TextInputProps } from "@mantine/core";

interface ICustomTextInputProps extends TextInputProps {}

const CustomTextInput = ({ ...props }: ICustomTextInputProps) => {
  return (
    <TextInput
      classNames={{
        input: `bg-[#F2F2F2] h-12 rounded-full placeholder:font-poppins px-7`,
        label: `font-poppins mb-2.5 text-base font-medium`,
      }}
      {...props}
    />
  );
};

export default CustomTextInput;
