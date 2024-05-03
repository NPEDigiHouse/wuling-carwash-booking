import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/Home/Home";
import Login from "pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const BaseRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default BaseRouterProvider;
