import { Button, Group, SimpleGrid, Space } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import BaseNumberInput from "features/Admin/components/Inpu/BaseNumberInput";
import { PromoFormSchema } from "features/Admin/schema/PromoFormSchema";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import { DatePickerInput } from "@mantine/dates";
import dayjs from "dayjs";
import { IPromoFormPropsType } from "features/Admin/interfaces/PromoFormInterface";

interface IPromoInitialValues {
  initialValues?: IPromoFormPropsType;
  isLoading?: boolean;
  onSubmit: (values: IPromoFormPropsType) => void;
}

const BasePromoForm = ({ initialValues, onSubmit }: IPromoInitialValues) => {
  const form = useForm({
    initialValues: {
      promoName: initialValues?.promoName || "",
      discount: initialValues?.discount || 0,
      startedDate: dayjs(initialValues?.startedDate).toDate() || new Date(),
      endDate: dayjs(initialValues?.endDate).toDate() || new Date(),
    },
    validate: zodResolver(PromoFormSchema),
  });

  console.log("initial values : ", initialValues);

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <CustomTextInput
          label="Nama Promo"
          placeholder="Masukkan Nama Promo"
          radius={"md"}
          {...form.getInputProps("promoName")}
        />
        <BaseNumberInput
          label="Potongan Harga (Diskon)"
          placeholder="Masukkan Potongan Harga"
          radius={"md"}
          {...form.getInputProps("discount")}
        />

        <DatePickerInput
          label="Pilih Tanggal Mulai"
          placeholder="Pilih Tanggal Mulai"
          valueFormat={"DD MMMM YYYY"}
          radius={"md"}
          classNames={{
            input: `bg-[#F2F2F2] h-12 font-poppins`,
            label: `font-poppins mb-2.5 text-base font-medium`,
            placeholder: `font-poppins`,
          }}
          {...form.getInputProps("startedDate")}
        />

        <DatePickerInput
          label="Pilih Tanggal Berakhir"
          placeholder="Pilih Tanggal Berakhir"
          valueFormat={"DD MMMM YYYY"}
          radius={"md"}
          classNames={{
            input: `bg-[#F2F2F2] h-12 font-poppins`,
            label: `font-poppins mb-2.5 text-base font-medium`,
            placeholder: `font-poppins`,
          }}
          {...form.getInputProps("endDate")}
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

export default BasePromoForm;
