import { Button, Flex, Group } from "@mantine/core";
import NavbarItem from "./NavbarItem";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "./NavLogo";
import { ReactNode } from "react";
import TokenConfig from "shared/config/TokenConfig";

interface INavbarPropsType {
  children?: ReactNode;
}
const Navbar = ({ children }: INavbarPropsType) => {
  const navigate = useNavigate();

  const token = TokenConfig.getToken();

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
        {!token ? (
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
          // <ProfileMenu
          //   profileBadge={
          //     <Group>
          //       <Avatar size={"md"} />
          //       <Stack gap={5}>
          //         <Text className="text-sm">
          //           {userRole.userDetail?.customer.name}
          //         </Text>
          //         <Text className="text-xs text-gray-500">
          //           {userRole.userDetail?.role}
          //         </Text>
          //       </Stack>
          //     </Group>
          //   }
          // />
          children
        )}
      </Flex>
    </nav>
  );
};

export default Navbar;
