import FormLayout from "features/Admin/layouts/Form/FormLayout";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingOverlay } from "@mantine/core";
import { useUpdatePromo } from "shared/hooks/api/Promo/useUpdatePromo";
import { useEffect } from "react";
import BaseCustomerForm from "features/Admin/components/Form/BaseCustomerForm";
import { ICustomerFormPropsType } from "features/Admin/interfaces/CustomerFormInterface";
import { useQueryCustomerDetail } from "shared/hooks/api/Customer/useQueryCustomerDetail";

const EditCustomerPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const editPromo = useUpdatePromo();
  const customerData = useQueryCustomerDetail(params.id);

  const handleSubmitForms = (values: ICustomerFormPropsType) => {
    const payload = {
      username: values.username,
      password: values.password,
      email: values.email,
      phoneNumber: values.phoneNumber,
      name: values.name,
    };

    // editPromo.mutate({ data: payload, promoId: params.id! });

    console.log("customer : ", payload);
  };

  console.log("customer : ", !customerData.customerDetail);

  useEffect(() => {
    if (editPromo.isSuccess && !editPromo.isPending) {
      navigate("/admin/promo");
    }
  }, [editPromo.isSuccess, editPromo.isPending, navigate]);

  if (!customerData.customerDetail) {
    return <LoadingOverlay />;
  }

  return (
    <FormLayout title="Edit Customer">
      <BaseCustomerForm
        initialValues={{
          username: customerData.customerDetail?.user.username,
          phoneNumber: customerData.customerDetail?.phoneNumber,
          email: customerData.customerDetail?.user.email,
          name: customerData.customerDetail?.name,
        }}
        onSubmit={handleSubmitForms}
        isLoading={customerData.loading}
      />
    </FormLayout>
  );
};

export default EditCustomerPage;
