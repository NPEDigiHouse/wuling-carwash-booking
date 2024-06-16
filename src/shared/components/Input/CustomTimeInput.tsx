import { TimeInput, TimeInputProps } from "@mantine/dates";

interface ICustomTimeInputPropsType extends TimeInputProps {
  gridSize?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  ref?: React.LegacyRef<HTMLInputElement>;
}

const CustomTimeInput = (props: ICustomTimeInputPropsType) => {
  return (
    <TimeInput
      classNames={{
        input: `bg-[#F2F2F2] h-12 placeholder:font-poppins  font-poppins`,
        label: `font-poppins mb-2.5 text-base font-medium`,
      }}
      radius={"md"}
      ref={props.ref}
      {...props?.gridSize}
      {...props}
    />
  );
};

export default CustomTimeInput;
