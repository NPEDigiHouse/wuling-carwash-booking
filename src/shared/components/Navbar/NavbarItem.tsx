import { NavLink } from "@mantine/core";
import { Link } from "react-router-dom";

const NavbarItem = () => {
  return (
    <ul className="">
      <li className="flex gap-10">
        <NavLink
          label="Home"
          component={Link}
          to={"/"}
          className="hover:bg-transparent"
          classNames={{
            label: `text-base`,
          }}
        />

        <NavLink
          label="Booking"
          classNames={{
            children: ``,
            root: ` relative h-[56px] hover:bg-transparent`,
            label: `text-base`,
          }}
        >
          <NavLink label="Home" component={Link} to={"/"} />

          <NavLink label="Home" component={Link} to={"/"} />
        </NavLink>

        <NavLink
          label="Order"
          component={Link}
          to={"/order"}
          className="hover:bg-transparent"
          classNames={{
            label: `text-base`,
          }}
        />
      </li>
    </ul>
  );
};

export default NavbarItem;
