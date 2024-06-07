import {
  Box,
  Button,
  Card,
  CardProps,
  Group,
  Image,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { ReactNode } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

interface ICardProductPropsType extends CardProps {
  title: string;
  description: string;
  thumbnail: string;
  productPrice: number;
  headerIcon: ReactNode;
  btnControl: () => void;
}

const CardProduct = ({
  title,
  description,
  thumbnail,
  productPrice,

  btnControl,
  headerIcon,
  ...props
}: ICardProductPropsType) => {
  return (
    <Card
      shadow="lg"
      classNames={{
        root: `px-7 py-7  md:w-[350px] h-[350px] md:h-[400px] relative`,
      }}
      radius={"xl"}
      //   bg={"#0055FE"}
      {...props}
    >
      <Group justify="end">
        <Box className="rounded-lg border border-solid border-gray-300 bg-gray-400 p-1.5">
          {headerIcon}
        </Box>
      </Group>

      <Space h={16} />

      <Image src={thumbnail} className=" w-full" />

      <Stack
        gap={12}
        align="start"
        justify="center"
        className="h-full  text-white"
      >
        <Text className="text-2xl font-semibold md:text-4xl">{title}</Text>

        <Text className="text-justify text-sm tracking-tight  text-neutral-200  md:text-base ">
          {description}
        </Text>

        <Text className="text-xl   font-semibold  text-white md:text-2xl">
          IDR {productPrice}
        </Text>
      </Stack>

      <Button
        rightSection={
          <MdOutlineArrowRightAlt className="text-xl md:text-2xl" />
        }
        onClick={btnControl}
        className=" absolute bottom-0 right-0 h-14  w-1/2  rounded-t-none rounded-bl-none rounded-tl-3xl bg-white px-7 text-sm font-medium text-black drop-shadow-2xl"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default CardProduct;
