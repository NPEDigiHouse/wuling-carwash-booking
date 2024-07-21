import BookingPage from "pages/Admin/Booking/BookingPage";
import CustomerPage from "pages/Admin/Customer/CustomerPage";
import EditCustomerPage from "pages/Admin/Customer/EditCustomerPage";
import DashboardPage from "pages/Admin/Dashboard/DashboardPage";
import CreateProductPage from "pages/Admin/Product/CreateProductPage";
import ProductPage from "pages/Admin/Product/ProductPage";
import CreatePromoPage from "pages/Admin/Promo/CreatePromoPage";
import EditPromoPage from "pages/Admin/Promo/EditPromoPage";
import PromoPage from "pages/Admin/Promo/PromoPage";
import CreateTimeslotPage from "pages/Admin/Timeslot/CreateTimeslotPage";
import EditTimeslotPage from "pages/Admin/Timeslot/EditTimeslotPage";
import TimeslotPage from "pages/Admin/Timeslot/TimeslotPage";
import BookingProductPage from "pages/Customers/Booking/BookingProduct";
import DetailBookingPage from "pages/Customers/Booking/Detail";
import MyBookingPage from "pages/Customers/Booking/MyBookingPage";
import HomePage from "pages/Home/Home";
import AdminLogin from "pages/Login/AdminLogin";
import Login from "pages/Login/Login";
import RegisterPage from "pages/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "shared/layouts/AdminLayout";
import MainLayout from "shared/layouts/MainLayout";
import {
  ADMIN_BOOKING,
  ADMIN_CREATE_PRODUCT,
  ADMIN_CREATE_PROMO,
  ADMIN_CREATE_TIMESLOT,
  ADMIN_CUSTOMER,
  ADMIN_HOME,
  ADMIN_PRODUCT,
  ADMIN_PROMO,
  ADMIN_TIMESLOT,
  BOOKING_PRODUCT,
  BOOKING_DETAIL,
  LOGIN,
  MY_BOOKING,
  ORDER,
  REGISTER,
  ADMIN_EDIT_PROMO,
  ADMIN_EDIT_TIMESLOT,
  ADMIN_EDIT_CUSTOMER,
  ADMIN_LOGIN,
} from "shared/utils/Route";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={ADMIN_LOGIN} element={<AdminLogin />} />

        <Route path={ORDER} />
        <Route path={REGISTER} element={<RegisterPage />} />

        <Route element={<MainLayout />}>
          <Route path={BOOKING_PRODUCT} element={<BookingProductPage />} />

          <Route path={MY_BOOKING} element={<MyBookingPage />} />
          <Route path={BOOKING_DETAIL} element={<DetailBookingPage />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path={ADMIN_HOME} element={<DashboardPage />} />
          <Route path={ADMIN_CUSTOMER} element={<CustomerPage />} />
          <Route path={ADMIN_EDIT_CUSTOMER} element={<EditCustomerPage />} />
          <Route path={ADMIN_TIMESLOT} element={<TimeslotPage />} />
          <Route
            path={ADMIN_CREATE_TIMESLOT}
            element={<CreateTimeslotPage />}
          />
          <Route path={ADMIN_EDIT_TIMESLOT} element={<EditTimeslotPage />} />
          <Route path={ADMIN_PRODUCT} element={<ProductPage />} />
          <Route path={ADMIN_CREATE_PRODUCT} element={<CreateProductPage />} />
          <Route path={ADMIN_PROMO} element={<PromoPage />} />
          <Route path={ADMIN_CREATE_PROMO} element={<CreatePromoPage />} />
          <Route path={ADMIN_EDIT_PROMO} element={<EditPromoPage />} />
          <Route path={ADMIN_BOOKING} element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
