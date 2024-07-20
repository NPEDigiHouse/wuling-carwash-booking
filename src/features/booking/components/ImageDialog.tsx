import { Dialog, Group, Image, Overlay, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { IoClose, IoImageOutline } from "react-icons/io5";

const ImageDialog = ({ imgName }: { imgName?: string }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [visible, setVisible] = useState(false);

  console.log("image name : ", imgName);

  const handleOpenImageDialog = () => {
    setVisible(true);

    open();
  };

  const handleCloseImageDialog = () => {
    setVisible(false);

    close();
  };

  return (
    <>
      {visible && (
        <Overlay
          backgroundOpacity={0.5}
          className="absolute z-0 overflow-hidden"
        />
      )}
      <Group>
        <IoImageOutline
          className="text-xl text-primary"
          onClick={handleOpenImageDialog}
        />
      </Group>
      <Dialog
        opened={opened}
        shadow="0"
        radius={"0"}
        className="overflow-hidden bg-transparent bg-opacity-0"
        // size={"100%"}
        position={{ top: 0, left: 0, right: 0 }}
        classNames={{
          root: `w-screen md:mx-auto overflow-hidden `,
        }}
      >
        <Stack className="h-full w-full  " align="center" justify="flex-end">
          <Group className="w-full" justify="end">
            <IoClose
              className="cursor-pointer text-xl text-white hover:text-neutral-300 md:text-3xl lg:text-4xl"
              onClick={handleCloseImageDialog}
            />
          </Group>
          <Image
            src={`${import.meta.env.VITE_LOCALHOST_URL}/uploads/booking/${imgName}`}
            className=" h-72 w-72 md:h-fit md:w-fit"
          />
        </Stack>
      </Dialog>
    </>
  );
};

export default ImageDialog;
