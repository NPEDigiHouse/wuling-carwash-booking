import FormLayout from "features/Admin/layouts/Form/FormLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePromo } from "shared/hooks/api/Promo/useCreatePromo";
import BasePromoForm from "features/Admin/components/Form/BasePromoForm";
import { IPromoFormPropsType } from "features/Admin/interfaces/PromoFormInterface";

const CreatePromoPage = () => {
  const navigate = useNavigate();

  const createPromo = useCreatePromo();

  const handleSubmitForm = (values: IPromoFormPropsType) => {
    const params = {
      promoName: values.promoName!,
      discount: values.discount!,
      startedDate: values.startedDate!,
      endDate: values.endDate!,
    };

    createPromo.mutate(params);
  };

  useEffect(() => {
    if (createPromo.isSuccess && !createPromo.isPending) {
      navigate("/admin/promo");
    }
  }, [createPromo.isSuccess, createPromo.isPending, navigate]);

  return (
    <FormLayout title="Tambah Promo">
      <BasePromoForm onSubmit={handleSubmitForm} />
    </FormLayout>
  );
};

export default CreatePromoPage;
