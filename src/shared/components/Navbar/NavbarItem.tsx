import { Link } from "react-router-dom";

const NavbarItem = () => {
  return (
    <ul className="">
      <li className="flex gap-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/booking"}>Booking</Link>
        <Link to={"/order"}>Order</Link>
      </li>
    </ul>
  );
};

export default NavbarItem;
