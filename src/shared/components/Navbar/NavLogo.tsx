import { Group, Image, Stack, Text } from "@mantine/core";
import { WulingLogo } from "shared/constant/Images";

interface INavLogoProps {
  variant?: "light" | "dark";
}

const NavLogo = ({ variant }: INavLogoProps) => {
  return (
    // <Text
    //   className={`text-3xl font-bold ${variant === "primary" || variant === "third" ? "text-white" : "text-black"}`}
    // >
    //   <span
    //     className={`${variant === "primary" ? "text-third" : variant === "secondary" ? "text-primary" : "text-blue-500"}`}
    //   >
    //     Wuling
    //   </span>
    //   AutoCare
    // </Text>

    <Group gap={10}>
      <Image src={WulingLogo} className="h-12 w-fit" />
      <Stack gap={0}>
        <Text className={`text-2xl font-bold text-third`}>Wuling</Text>
        <Text
          className={`text-2xl font-bold ${variant === "dark" ? "text-black" : "text-white"}`}
        >
          AutoCare
        </Text>
      </Stack>
    </Group>
  );
};

export default NavLogo;
