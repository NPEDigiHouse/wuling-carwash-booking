import { Divider, Group, NavLink } from "@mantine/core";
import { IoIosCar, IoIosWater } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarItem = () => {
  return (
    <>
      <Group className=" w-fit text-nowrap" align="start" justify="center">
        <NavLink
          label="Home"
          component={Link}
          to={"/"}
          className="w-fit hover:bg-transparent  hover:font-medium hover:text-yellow"
          classNames={{
            label: `text-base`,
          }}
        />

        <NavLink
          label="Booking"
          classNames={{
            children: `bg-white absolute  rounded-lg text-black `,
            root: ` h-full  hover:bg-transparent hover:text-yellow hover:font-medium w-fit`,
            label: `text-base`,
          }}
          childrenOffset={0}
        >
          <NavLink
            label="Carwash"
            component={Link}
            to={"/booking-carwash"}
            leftSection={<IoIosWater className="text-lg text-primary" />}
            className="rounded-t-lg bg-white hover:bg-gray-100"
          />

          <Divider />

          <NavLink
            label="Service"
            component={Link}
            leftSection={<IoIosCar className="text-lg text-primary" />}
            to={"/booking-carservice"}
            className="rounded-b-lg bg-white hover:bg-gray-100"
          />
        </NavLink>

        <NavLink
          label="My Booking"
          component={Link}
          to={"/my-booking"}
          className="w-fit hover:bg-transparent hover:font-medium hover:text-yellow"
          classNames={{
            label: `text-base`,
          }}
        />

        <NavLink
          label="Order"
          component={Link}
          to={"/order"}
          className="w-fit hover:bg-transparent hover:font-medium hover:text-yellow"
          classNames={{
            label: `text-base`,
          }}
        />
      </Group>
    </>
  );
};

export default NavbarItem;
