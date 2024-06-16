import { notifications } from "@mantine/notifications";

interface INotificationServicePropsType {
  title: string;
  message: string;
  status?: "FAILED" | "SUCCESS";
}

const NotificationService = ({
  message,
  title,
  status,
}: INotificationServicePropsType) => {
  return notifications.show({
    title,
    message,
    classNames: {
      closeButton: `text-white`,
      title: `text-white text-lg`,
      loader: `${status === "FAILED" ? "bg-red-500" : "bg-green-500"}`,
      description: `text-white`,
      root: `${status === "FAILED" ? "bg-red-500" : "bg-green-500"} before:bg-white font-poppins`,
    },
    autoClose: 3000,
  });
};

export default NotificationService;
