import DashboardPage from "pages/Admin/Dashboard/DashboardPage";
import BookingCarservicePage from "pages/BookingCarservice/BookingCarservice";
import BookingCarwashPage from "pages/BookingCarwash/BookingCarwash";
import HomePage from "pages/Home/Home";
import Login from "pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ADMIN_HOME,
  BOOKING_CARSERVICE,
  BOOKING_CARWASH,
  LOGIN,
  ORDER,
} from "shared/utils/Route";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={BOOKING_CARWASH} element={<BookingCarwashPage />} />
        <Route path={BOOKING_CARSERVICE} element={<BookingCarservicePage />} />
        <Route path={ORDER} />
        <Route path={ADMIN_HOME} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
