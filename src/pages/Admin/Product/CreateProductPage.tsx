import { Button, Group, SimpleGrid, Space } from "@mantine/core";
import FormLayout from "features/Admin/layouts/Form/FormLayout";
import { useForm, zodResolver } from "@mantine/form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomSelectInput from "shared/components/Input/CustomSelectInput";
import BaseNumberInput from "features/Admin/components/Inpu/BaseNumberInput";
import { ProductFormSchema } from "features/Admin/schema/ProductSchema";
import { useCreateProducts } from "shared/hooks/api/Product/useCreateProducts";

const CreateProductPage = () => {
  const navigate = useNavigate();

  const createProduct = useCreateProducts();

  const form = useForm({
    validate: zodResolver(ProductFormSchema),

    initialValues: {
      productName: "",
      price: 0,
    },
  });

  const handleSubmitForm = form.onSubmit((values) => {
    const params = {
      productName: values.productName,
      price: values.price,
    };

    console.log("values : ", params);
    createProduct.mutate(params);
  });

  useEffect(() => {
    if (createProduct.isSuccess && !createProduct.isPending) {
      navigate("/admin/products");
    }
  }, [createProduct.isSuccess, createProduct.isPending, navigate]);

  return (
    <FormLayout title="Tambah Product">
      <form onSubmit={handleSubmitForm}>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <CustomSelectInput
            label="Pilih Layanan"
            placeholder="Pilih Layanan"
            radius={"md"}
            data={["SERVICE", "WASH"]}
            {...form.getInputProps("productName")}
          />
          <BaseNumberInput
            label="Harga Layanan"
            placeholder="Masukkan Harga"
            radius={"md"}
            {...form.getInputProps("price")}
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

export default CreateProductPage;
