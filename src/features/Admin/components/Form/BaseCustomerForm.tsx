import { Button, Group, SimpleGrid, Space } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import BaseNumberInput from "features/Admin/components/Inpu/BaseNumberInput";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import { ICustomerFormPropsType } from "features/Admin/interfaces/CustomerFormInterface";
import { CustomerSchema } from "features/Admin/schema/CustomerSchema";
import CustomPasswordInput from "shared/components/Input/CustomPasswordInput";

interface ICustomerInitialValues {
  initialValues?: ICustomerFormPropsType;
  isLoading?: boolean;
  onSubmit: (values: ICustomerFormPropsType) => void;
}

const BaseCustomerForm = ({
  initialValues,
  onSubmit,
}: ICustomerInitialValues) => {
  const form = useForm({
    initialValues: {
      username: initialValues?.username || "",
      password: initialValues?.password || "",
      email: initialValues?.email || "",
      name: initialValues?.name || "",
      phoneNumber: initialValues?.phoneNumber || "",
    },
    validate: zodResolver(CustomerSchema),
  });

  console.log("initial values : ", initialValues);

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <CustomTextInput
          label="Username"
          placeholder="Masukkan Username"
          radius={"md"}
          {...form.getInputProps("username")}
        />
        <CustomPasswordInput
          label="Password"
          placeholder="Masukkan Password"
          radius={"md"}
          {...form.getInputProps("password")}
        />

        <CustomTextInput
          label="Email"
          placeholder="Masukkan Email"
          radius={"md"}
          {...form.getInputProps("email")}
        />

        <BaseNumberInput
          label="No.Telp/Whatsapp"
          placeholder="Masukkan Nomor Telepon Aktif"
          radius={"md"}
          {...form.getInputProps("phoneNumber")}
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

export default BaseCustomerForm;
