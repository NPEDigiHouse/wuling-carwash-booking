import { Avatar, Button, Flex, Group, Stack, Text } from "@mantine/core";
import NavbarItem from "./NavbarItem";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "./NavLogo";
import { useContext } from "react";
import { UserRoleContext } from "context/UserRoleContext";
import ProfileMenu from "../Menu/ProfileMenu";

const Navbar = () => {
  const navigate = useNavigate();

  const userRole = useContext(UserRoleContext);

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
        {!userRole ? (
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
        ) : (
          <ProfileMenu
            profileBadge={
              <Group>
                <Avatar size={"md"} />
                <Stack gap={5}>
                  <Text className="text-sm">{userRole.customer.name}</Text>
                  <Text className="text-xs text-gray-500">{userRole.role}</Text>
                </Stack>
              </Group>
            }
          />
        )}
      </Flex>
    </nav>
  );
};

export default Navbar;
