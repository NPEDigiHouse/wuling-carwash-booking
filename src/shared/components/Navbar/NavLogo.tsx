import { Text } from "@mantine/core";

interface INavLogoProps {
  variant?: "primary" | "secondary" | "third";
}

const NavLogo = ({ variant }: INavLogoProps) => {
  return (
    <Text
      className={`text-3xl font-bold ${variant === "primary" || variant === "third" ? "text-white" : "text-black"}`}
    >
      <span
        className={`${variant === "primary" ? "text-third" : variant === "secondary" ? "text-primary" : "text-blue-500"}`}
      >
        We
      </span>
      Wash
    </Text>
  );
};

export default NavLogo;
