import CustomerPage from "pages/Admin/Customer/CustomerPage";
import DashboardPage from "pages/Admin/Dashboard/DashboardPage";
import CreateTimeslotPage from "pages/Admin/Timeslot/CreateTimeslotPage";
import TimeslotPage from "pages/Admin/Timeslot/TimeslotPage";
import BookingCarservicePage from "pages/Customers/BookingCarservice/BookingCarservice";
import BookingCarwashPage from "pages/Customers/BookingCarwash/BookingCarwash";
import HomePage from "pages/Home/Home";
import Login from "pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ADMIN_CREATE_TIMESLOT,
  ADMIN_CUSTOMER,
  ADMIN_HOME,
  ADMIN_TIMESLOT,
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
        <Route path={ADMIN_CUSTOMER} element={<CustomerPage />} />
        <Route path={ADMIN_TIMESLOT} element={<TimeslotPage />} />
        <Route path={ADMIN_CREATE_TIMESLOT} element={<CreateTimeslotPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
