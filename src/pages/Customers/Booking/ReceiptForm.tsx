/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  //   Avatar,
  FileButton,
  Flex,
  Stack,
  Text,
} from "@mantine/core";
import {
  // useEffect,
  useRef,
  useState,
} from "react";
import {
  IoCloudUploadOutline,
  IoCloudUploadSharp,
  IoTrashBinOutline,
} from "react-icons/io5";
import { FaFileImage } from "react-icons/fa6";
import { useUploadReceipt } from "shared/hooks/api/Booking/useUploadReceipt";
import { useParams } from "react-router-dom";

const ReceiptForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const params = useParams();
  //   const [imgReceiptSrc, setImgReceiptSrc] = useState<string | null>(null);

  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  const uploadReceipt = useUploadReceipt();

  const handleUploadReceipt = () => {
    const formData = new FormData();

    formData.set("receipt", file as any);

    uploadReceipt.mutate({ receipt: formData, bookingId: params.id });

    console.log("payload : ", formData.get("receipt"));
  };

  //   useEffect(() => {
  //     const temp = file;
  //     if (temp) {
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         if (e.target) {
  //           setImgReceiptSrc(e.target.result as string);
  //         }
  //       };
  //       reader.readAsDataURL(temp);
  //     }
  //   }, [file]);

  return (
    <form onSubmit={handleUploadReceipt}>
      <Stack gap={30} className="w-full px-5">
        <Text className="font-medium text-gray-400">
          Upload bukti pembayaran
        </Text>
        <Flex direction={"column"} gap={10}>
          <FileButton
            resetRef={resetRef}
            onChange={setFile}
            accept="image/png,image/jpeg"
          >
            {(props) => (
              <Stack
                align="center"
                justify="center"
                className="h-[150px] w-full cursor-pointer rounded-lg border-2 border-dashed border-neutral-300 hover:border-neutral-500"
                {...props}
              >
                <IoCloudUploadOutline className="text-6xl text-neutral-400" />
                <Text className="text-neutral-400">Pilih File Gambar</Text>
              </Stack>
            )}
          </FileButton>
        </Flex>

        {file && (
          <Stack
            className="w-full rounded-xl border-2 border-neutral-300 bg-white px-3.5 pb-3.5 pt-5"
            gap={20}
          >
            <Flex direction={"row"} align={"center"} gap={16}>
              {/* <Avatar
              src={imgReceiptSrc}
              size={30}
              className="h-fit"
              alt="Receipt Image"
            /> */}
              <FaFileImage className="cursor-pointer text-4xl text-indigo-300 hover:text-indigo-500" />
              <Text className="text-sm md:text-base">{file.name}</Text>

              <IoTrashBinOutline
                onClick={clearFile}
                className="cursor-pointer text-2xl text-rose-400 hover:text-rose-700"
              />
            </Flex>
            <Button
              type="button"
              onClick={handleUploadReceipt}
              rightSection={
                <IoCloudUploadSharp className="text-lg text-white" />
              }
              bg={"primary"}
              radius={"md"}
              h={48}
            >
              Upload Image
            </Button>
          </Stack>
        )}
      </Stack>
    </form>
  );
};

export default ReceiptForm;
