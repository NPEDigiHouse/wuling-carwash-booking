import { Button, Grid, Stepper, TextInput } from "@mantine/core";
import { useState } from "react";
import BookingLayout from "./BookingLayout";

const StepperMode = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  //   const prevStep = () =>
  //     setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Fill Booking Form">
        <BookingLayout>
          <Grid>
            <Grid.Col span={{ base: 12 }}>
              <TextInput
                label="Nama Lengkap"
                placeholder="Masukkan Nama Lengkap"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Tipe Mobil"
                placeholder="Contoh : Avanza"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Plat Nomor"
                placeholder="Masukkan Plat Nomor"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <TextInput
                label="No. Telp / Whatsapp"
                placeholder="Masukkan Nomor Telepon"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Plat Nomor"
                placeholder="Masukkan Plat Nomor"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Plat Nomor"
                placeholder="Masukkan Plat Nomor"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <Button onClick={nextStep}>Lanjutkan</Button>
            </Grid.Col>
          </Grid>
        </BookingLayout>
      </Stepper.Step>

      <Stepper.Step label="Payment"></Stepper.Step>

      <Stepper.Step label="Booking Detail"></Stepper.Step>
    </Stepper>
  );
};

export default StepperMode;
