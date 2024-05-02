import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const BaseRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default BaseRouterProvider;
