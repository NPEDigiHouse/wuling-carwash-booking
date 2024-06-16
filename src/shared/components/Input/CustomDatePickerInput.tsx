/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateInputSharedProps, DatePickerInput } from "@mantine/dates";

interface ICustomDatePickerPropsType extends DateInputSharedProps {
  gridSize?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  valueFormat: any;
}

const CustomDatePickerInput = ({
  gridSize,
  valueFormat,
  ...props
}: ICustomDatePickerPropsType) => {
  return (
    <DatePickerInput
      valueFormat={valueFormat}
      classNames={{
        input: `bg-[#F2F2F2] h-12 placeholder:font-poppins  font-poppins`,
        label: `font-poppins mb-2.5 text-base font-medium`,
        calendarHeader: `font-poppins`,
        month: `font-poppins`,
        day: `font-poppins`,
      }}
      radius={"md"}
      {...gridSize}
      {...props}
    />
  );
};

export default CustomDatePickerInput;
