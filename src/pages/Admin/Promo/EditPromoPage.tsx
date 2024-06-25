import FormLayout from "features/Admin/layouts/Form/FormLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPromoInitialData } from "shared/hooks/ui/Promo/useGetPromoInitialData";
import BasePromoForm from "features/Admin/components/Form/BasePromoForm";
import { IPromoFormPropsType } from "features/Admin/interfaces/PromoFormInterface";
import { LoadingOverlay } from "@mantine/core";
import { useUpdatePromo } from "shared/hooks/api/Promo/useUpdatePromo";
import { useEffect } from "react";

const EditPromoPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  console.log("id : ", params.id);

  const editPromo = useUpdatePromo();
  const promoData = useGetPromoInitialData(params.id);

  const handleSubmitForms = (values: IPromoFormPropsType) => {
    const payload = {
      promoName: values.promoName,
      discount: values.discount,
      startedDate: values.startedDate,
      endDate: values.endDate,
    };

    editPromo.mutate({ data: payload, promoId: params.id! });
  };

  useEffect(() => {
    if (editPromo.isSuccess && !editPromo.isPending) {
      navigate("/admin/promo");
    }
  }, [editPromo.isSuccess, editPromo.isPending, navigate]);

  if (promoData.loading) {
    return <LoadingOverlay />;
  }

  return (
    <FormLayout title="Edit Promo">
      {/* <form onSubmit={handleSubmitForm}>
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
            Simpan
          </Button>
        </Group>
      </form> */}
      <BasePromoForm
        initialValues={{
          promoName: promoData.promoInitialValues?.promoName,
          discount: promoData.promoInitialValues?.discount,
          startedDate: promoData.promoInitialValues?.startedDate,
          endDate: promoData.promoInitialValues?.endDate,
        }}
        onSubmit={handleSubmitForms}
        isLoading={promoData.loading}
      />
    </FormLayout>
  );
};

export default EditPromoPage;
