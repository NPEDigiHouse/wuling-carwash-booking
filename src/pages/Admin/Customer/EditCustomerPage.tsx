import FormLayout from "features/Admin/layouts/Form/FormLayout";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingOverlay } from "@mantine/core";
import { useEffect } from "react";
import BaseCustomerForm from "features/Admin/components/Form/BaseCustomerForm";
import { ICustomerFormPropsType } from "features/Admin/interfaces/CustomerFormInterface";
import { useQueryCustomerDetail } from "shared/hooks/api/Customer/useQueryCustomerDetail";
import { useUpdateCustomer } from "shared/hooks/api/Customer/useUpdateCustomer";

const EditCustomerPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const editCustomer = useUpdateCustomer();
  const customerData = useQueryCustomerDetail(params.id);

  const handleSubmitForms = (values: ICustomerFormPropsType) => {
    const payload = {
      name: values.name,
      username: values.username,
      email: values.email,
      phoneNumber: values.phoneNumber,
      id: customerData.customerDetail?.user.id,
    };

    editCustomer.mutate({ payload, id: params.id! });

    console.log("customer : ", payload);
  };

  useEffect(() => {
    if (editCustomer.isSuccess && !editCustomer.isPending) {
      navigate("/admin/customers");
    }
  }, [editCustomer.isSuccess, editCustomer.isPending, navigate]);

  if (!customerData.customerDetail) {
    return <LoadingOverlay />;
  }

  return (
    <FormLayout title="Edit Customer">
      <BaseCustomerForm
        onSubmit={handleSubmitForms}
        initialValues={{
          username: customerData.customerDetail?.user.username,
          phoneNumber: customerData.customerDetail?.phoneNumber,
          email: customerData.customerDetail?.user.email,
          name: customerData.customerDetail?.name,
        }}
        isLoading={customerData.loading}
      />
    </FormLayout>
  );
};

export default EditCustomerPage;
