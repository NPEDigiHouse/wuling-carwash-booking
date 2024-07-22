import { Button, Grid, Stepper } from "@mantine/core";
import { useState } from "react";
import BookingLayout from "./BookingLayout";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import { COLORS } from "shared/constant/Colors";
import CustomSelectInput from "shared/components/Input/CustomSelectInput";

const StepperMode = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  //   const prevStep = () =>
  //     setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      classNames={{
        steps: `px-5 lg:px-32 xl:px-56 mt-10 mb-[50px]`,
        stepIcon: `border-4  border-solid border-[#BBD2FF] bg-primary text-white font-normal`,
      }}
    >
      <Stepper.Step label="Fill Booking Form">
        <BookingLayout>
          <Grid
            gutter={30}
            className="w-[600px] rounded-3xl  border border-solid border-gray-300 bg-white px-5 py-7 shadow-md"
          >
            <Grid.Col span={{ base: 12 }}>
              <CustomTextInput
                label="Nama Lengkap"
                placeholder="Masukkan Nama Lengkap"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <CustomTextInput
                label="Tipe Mobil"
                placeholder="Contoh : Avanza"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <CustomTextInput
                label="Plat Nomor"
                placeholder="Masukkan Plat Nomor"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <CustomTextInput
                label="No. Telp / Whatsapp"
                placeholder="Masukkan Nomor Telepon"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <CustomSelectInput
                label="Hari"
                data={["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]}
                placeholder="Pilih Hari"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <CustomSelectInput
                label="Waktu / Jam"
                data={["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]}
                placeholder="Pilih Waktu"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <Button
                onClick={nextStep}
                fullWidth
                bg={COLORS.primary}
                radius={"xl"}
                className="h-12 text-base"
              >
                Lanjutkan
              </Button>
            </Grid.Col>
          </Grid>
        </BookingLayout>
      </Stepper.Step>

      <Stepper.Step label="Payment">
        <BookingLayout>
          <Grid
            gutter={30}
            className="w-[600px] rounded-3xl border border-solid border-gray-300 bg-white px-5 py-7 shadow-md"
          >
            <Grid.Col span={12}>
              <CustomSelectInput
                label="Promo"
                data={["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]}
                placeholder="Pilih Promo"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <CustomSelectInput
                label="Metode Pembayaran"
                data={["Cash", "Bayar ditempat"]}
                placeholder="Pilih Metode Pembayaran"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <Button
                onClick={nextStep}
                fullWidth
                bg={COLORS.primary}
                radius={"xl"}
                className="h-12 text-base"
              >
                Lanjutkan
              </Button>
            </Grid.Col>
          </Grid>
        </BookingLayout>
      </Stepper.Step>

      <Stepper.Step label="Booking Detail">
        <p>tes3</p>
      </Stepper.Step>
    </Stepper>
  );
};

export default StepperMode;
