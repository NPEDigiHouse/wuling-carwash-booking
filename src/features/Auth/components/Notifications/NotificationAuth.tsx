import { notifications } from "@mantine/notifications";

interface INotificationAuthPropsType {
  title: string;
  message: string;
  status?: "FAILED" | "SUCCESS";
}

const NotificationAuth = ({
  message,
  title,
  status,
}: INotificationAuthPropsType) => {
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
  });
};

export default NotificationAuth;
