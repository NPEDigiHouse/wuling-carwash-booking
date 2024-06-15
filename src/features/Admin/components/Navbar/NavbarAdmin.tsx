import { NavLink, Stack } from "@mantine/core";
import { IoIosListBox } from "react-icons/io";
import { IoCarSport, IoPeople, IoTime } from "react-icons/io5";
import { MdDashboard, MdDiscount } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <Stack gap={30} className="font-poppins ">
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
  );
};

export default NavbarAdmin;
