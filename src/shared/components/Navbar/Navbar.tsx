import { Button, Flex, Group } from "@mantine/core";
import NavbarItem from "./NavbarItem";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigateButtonRegister = () => {
    navigate("/register");
  };

  return (
    <nav className="mt-8 text-white">
      <Flex
        direction={"row"}
        justify="space-between"
        align={"center"}
        className="w-full"
        wrap={"nowrap"}
      >
        <NavLogo />
        <NavbarItem />
        <Group className="w-fit text-nowrap ">
          <Link to={"/login"} className="">
            Sign In
          </Link>
          <Button
            classNames={{
              root: `bg-primary h-12 w-fit px-7 rounded-full text-base font-medium`,
              inner: ``,
            }}
            onClick={handleNavigateButtonRegister}
          >
            Sign Up
          </Button>
        </Group>
      </Flex>
    </nav>
  );
};

export default Navbar;
