import { Button, Group, Text } from "@mantine/core";
import NavbarItem from "./NavbarItem";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigateButtonRegister = () => {
    navigate("/register");
  };

  return (
    <nav className="mt-8 ">
      <Group justify="space-between" align="center">
        <Text className="text-3xl font-bold text-primary">
          <span className="text-black">We</span>Wash
        </Text>
        <NavbarItem />
        <Group>
          <Link to={"/login"}>Sign In</Link>
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
      </Group>
    </nav>
  );
};

export default Navbar;
