import { Button, Group, SimpleGrid, Space } from "@mantine/core";
import FormLayout from "features/Admin/layouts/Form/FormLayout";
import { useForm, zodResolver } from "@mantine/form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BaseNumberInput from "features/Admin/components/Inpu/BaseNumberInput";
import { useCreatePromo } from "shared/hooks/api/Promo/useCreatePromo";
import { PromoFormSchema } from "features/Admin/schema/PromoFormSchema";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import { DatePickerInput } from "@mantine/dates";

const CreatePromoPage = () => {
  const navigate = useNavigate();

  const createPromo = useCreatePromo();

  const form = useForm({
    validate: zodResolver(PromoFormSchema),

    initialValues: {
      promoName: "",
      discount: 0,
      startedDate: new Date(),
      endDate: new Date(),
    },
  });

  const handleSubmitForm = form.onSubmit((values) => {
    const params = {
      promoName: values.promoName,
      discount: values.discount,
      startedDate: values.startedDate,
      endDate: values.endDate,
    };

    console.log("values : ", params);
    createPromo.mutate(params);
  });

  useEffect(() => {
    if (createPromo.isSuccess && !createPromo.isPending) {
      navigate("/admin/promo");
    }
  }, [createPromo.isSuccess, createPromo.isPending, navigate]);

  return (
    <FormLayout title="Tambah Promo">
      <form onSubmit={handleSubmitForm}>
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
            valueFormat={"YYYY MMM DD"}
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
            valueFormat={"YYYY MMM DD"}
            radius={"md"}
            classNames={{
              input: `bg-[#F2F2F2] h-12 font-poppins`,
              label: `font-poppins mb-2.5 text-base font-medium`,
              placeholder: `font-poppins`,
            }}
            {...form.getInputProps("startedDate")}
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
  );
};

export default CreatePromoPage;
