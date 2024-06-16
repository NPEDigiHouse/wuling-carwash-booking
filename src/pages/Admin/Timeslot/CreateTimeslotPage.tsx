import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Space,
  rem,
} from "@mantine/core";
import FormLayout from "features/Admin/layouts/Form/FormLayout";
// import AdminLayout from "shared/layouts/AdminLayout";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IoMdClock } from "react-icons/io";
import { useEffect, useRef } from "react";
import moment from "moment";
import { useCreateTimeslot } from "shared/hooks/api/Timeslots/useCreateTimeslot";
import { useNavigate } from "react-router-dom";

// const daySelectOption = [{
//     value: 'SENIN',
//     label: 'Senin'
// }, {
//     value: 'SELASA',
//     label: 'Selasa'
// }, {
//     value: 'RABU',
//     label: 'Rabu'
// }, {
//     value: 'KAMIS',
//     label: 'Kamis'
// }, {
//     value: 'JUMAT',
//     label: 'Jumat'
// }, {
//     value: 'SABTU',
//     label: 'Sabtu'
// }, {
//     value: 'MINGGU',
//     label: 'Minggu'
// }]

const CreateTimeslotPage = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const postTimeslot = useCreateTimeslot();

  const form = useForm({
    initialValues: {
      date: new Date(),
      time: "",
    },
  });

  const handleSubmitForm = form.onSubmit((values) => {
    const params = {
      date: moment(values.date).format(),
      time: values.time,
    };

    console.log("values : ", params);
    postTimeslot.mutate(params);
  });

  useEffect(() => {
    if (postTimeslot.isSuccess && !postTimeslot.isPending) {
      navigate("/admin/timeslot");
    }
  }, [postTimeslot.isSuccess, postTimeslot.isPending, navigate]);

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
    // <AdminLayout>
    <FormLayout title="Tambah Timeslot">
      <form onSubmit={handleSubmitForm}>
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
            Tambah
          </Button>
        </Group>
      </form>
    </FormLayout>
    // </AdminLayout>
  );
};

export default CreateTimeslotPage;
