import dayjs from "dayjs";
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Space,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { IoMdClock } from "react-icons/io";
import { useRef } from "react";
import { ITimeslotFormPropsType } from "features/Admin/interfaces/TimeslotFormInterface";

interface IPromoInitialValues {
  initialValues?: ITimeslotFormPropsType;
  isLoading?: boolean;
  onSubmit: (values: ITimeslotFormPropsType) => void;
}

const BaseTimeslotForm = ({ initialValues, onSubmit }: IPromoInitialValues) => {
  const ref = useRef<HTMLInputElement>(null);

  const form = useForm({
    initialValues: {
      date: dayjs(initialValues?.date).toDate() || new Date(),
      time: initialValues?.time || "",
    },
  });

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <IoMdClock style={{ width: rem(16), height: rem(16) }} />
    </ActionIcon>
  );

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <DatePickerInput
          label="Pilih Tanggal"
          placeholder="Pilih Hari & Tanggal"
          valueFormat={"YYYY MMM DD"}
          classNames={{
            label: `mb-3 font-poppins`,
            input: `font-poppins rounded-md h-[40px]`,
          }}
          {...form.getInputProps("date")}
        />
        <TimeInput
          label="Pilih Waktu"
          classNames={{
            label: `mb-3 font-poppins`,
            input: `font-poppins rounded-md h-[40px]`,
          }}
          ref={ref}
          rightSection={pickerControl}
          {...form.getInputProps("time")}
        />
      </SimpleGrid>

      <Space h={30} />

      <Group justify="end">
        <Button
          variant="outline"
          color={"indigo"}
          radius={"md"}
          classNames={{
            root: `w-[150px] h-[40px]`,
            label: `font-poppins text-base`,
          }}
        >
          Batal
        </Button>

        <Button
          color={"indigo"}
          radius={"md"}
          classNames={{
            root: `w-[150px] h-[40px]`,
            label: `font-poppins text-base`,
          }}
          type="submit"
        >
          Simpan
        </Button>
      </Group>
    </form>
  );
};

export default BaseTimeslotForm;
