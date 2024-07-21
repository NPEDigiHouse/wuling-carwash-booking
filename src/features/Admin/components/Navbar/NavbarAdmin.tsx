import { Button, Flex, NavLink, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoIosListBox } from "react-icons/io";
import { IoCarSport, IoLogOut, IoPeople, IoTime } from "react-icons/io5";
import { MdDashboard, MdDiscount } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import LogoutModal from "shared/components/Modal/LogoutModal";
import TokenConfig from "shared/config/TokenConfig";

const NavbarAdmin = () => {
  const [opened, { open, close }] = useDisclosure();
  const navigate = useNavigate();

  const handleOpenModalLogout = () => {
    open();
  };

  const handleLogoutAction = () => {
    TokenConfig.removeToken();
    navigate("/admin/auth/login");
  };

  return (
    <Stack
      gap={30}
      justify="space-between"
      className="h-full pb-5 font-poppins"
    >
      <LogoutModal
        title="Keluar Akun?"
        description="Anda dapat login kembali"
        opened={opened}
        onClose={close}
      >
        <Flex gap={20} className="w-full">
          <Button
            onClick={handleLogoutAction}
            fullWidth
            variant="filled"
            bg={"red"}
            radius={"md"}
            fw={400}
            classNames={{
              root: ` h-[40px]`,
            }}
          >
            Konfirmasi
          </Button>
          <Button
            variant="outline"
            color="red"
            fullWidth
            radius={"md"}
            fw={400}
            classNames={{
              root: ` h-[40px]`,
            }}
            onClick={() => close()}
          >
            Batal
          </Button>
        </Flex>
      </LogoutModal>

      <Stack gap={30}>
        <NavLink
          label="Admin Carwash"
          component={Link}
          to={"/admin"}
          classNames={{
            label: `text-xl font-medium text-white`,
            root: `gap-1.5`,
          }}
        />

        <NavLink
          label="Dashboard"
          component={Link}
          to={"/admin"}
          leftSection={<MdDashboard className="text-2xl text-white" />}
          classNames={{
            label: `text-base text-white`,
            root: `gap-1.5`,
          }}
        />

        <NavLink
          label="Timeslots"
          component={Link}
          to={"/admin/timeslot"}
          leftSection={<IoTime className="text-2xl text-white" />}
          classNames={{
            label: `text-base text-white`,
            root: `gap-1.5`,
          }}
        />

        {/* <NavLink
        label="Orders"
        component={Link}
        to={"/admin/orders"}
        leftSection={<IoCart className="text-2xl text-white" />}
        classNames={{
          label: `text-base text-white`,
          root: `gap-1.5`,
        }}
      /> */}

        <NavLink
          label="Promo"
          component={Link}
          to={"/admin/promo"}
          leftSection={<MdDiscount className="text-2xl text-white" />}
          classNames={{
            label: `text-base text-white`,
            root: `gap-1.5`,
          }}
        />

        <NavLink
          label="Products"
          component={Link}
          to={"/admin/products"}
          leftSection={<IoIosListBox className="text-2xl text-white" />}
          classNames={{
            label: `text-base text-white`,
            root: `gap-1.5`,
          }}
        />

        <NavLink
          label="Booking"
          component={Link}
          to={"/admin/booking"}
          leftSection={<IoCarSport className="text-2xl text-white" />}
          classNames={{
            label: `text-base text-white`,
            root: `gap-1.5`,
          }}
        />

        <NavLink
          label="Customer"
          component={Link}
          to={"/admin/customers"}
          leftSection={<IoPeople className="text-2xl text-white" />}
          classNames={{
            label: `text-base text-white`,
            root: `gap-1.5`,
          }}
        />
      </Stack>

      <NavLink
        label="Logout"
        bg={"transparent"}
        component={Button}
        onClick={handleOpenModalLogout}
        h={40}
        leftSection={<IoLogOut className="text-2xl text-white" />}
        classNames={{
          label: `text-lg text-nowrap pl-1.5 text-white font-normal `,
          root: `gap-1.5`,
        }}
      />
    </Stack>
  );
};

export default NavbarAdmin;
