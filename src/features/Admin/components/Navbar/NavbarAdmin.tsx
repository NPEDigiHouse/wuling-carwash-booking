import { NavLink, Stack } from "@mantine/core";
import { IoCarSport, IoCart } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <Stack gap={30} className="font-poppins">
      <NavLink
        label="Dashboard"
        component={Link}
        to={"/admin/dashboard"}
        leftSection={<MdDashboard className="text-2xl text-orange-400" />}
        classNames={{
          label: `text-base`,
          root: `gap-1.5`,
        }}
      />

      <NavLink
        label="Orders"
        component={Link}
        to={"/admin/orders"}
        leftSection={<IoCart className="text-2xl text-sky-500" />}
        classNames={{
          label: `text-base`,
          root: `gap-1.5`,
        }}
      />

      <NavLink
        label="Booking"
        component={Link}
        to={"/admin/booking"}
        leftSection={<IoCarSport className="text-2xl text-emerald-500" />}
        classNames={{
          label: `text-base`,
          root: `gap-1.5`,
        }}
      />
    </Stack>
  );
};

export default NavbarAdmin;
