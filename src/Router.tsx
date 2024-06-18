import BookingPage from "pages/Admin/Booking/BookingPage";
import CustomerPage from "pages/Admin/Customer/CustomerPage";
import DashboardPage from "pages/Admin/Dashboard/DashboardPage";
import CreateProductPage from "pages/Admin/Product/CreateProductPage";
import ProductPage from "pages/Admin/Product/ProductPage";
import CreatePromoPage from "pages/Admin/Promo/CreatePromoPage";
import PromoPage from "pages/Admin/Promo/PromoPage";
import CreateTimeslotPage from "pages/Admin/Timeslot/CreateTimeslotPage";
import TimeslotPage from "pages/Admin/Timeslot/TimeslotPage";
import BookingCarservicePage from "pages/Customers/BookingCarservice/BookingCarservice";
import BookingCarwashPage from "pages/Customers/BookingCarwash/BookingCarwash";
import HomePage from "pages/Home/Home";
import Login from "pages/Login/Login";
import RegisterPage from "pages/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useCredentialQuery } from "shared/hooks/api/Auth/useCredentialQuery";
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
  BOOKING_CARSERVICE,
  BOOKING_CARWASH,
  LOGIN,
  ORDER,
  REGISTER,
} from "shared/utils/Route";

const Router = () => {
  // const credential = useCredentialQuery()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={LOGIN} element={<Login />} />

        <Route path={ORDER} />
        <Route path={REGISTER} element={<RegisterPage />} />

        <Route element={<MainLayout />}>
          <Route path={BOOKING_CARWASH} element={<BookingCarwashPage />} />
          <Route
            path={BOOKING_CARSERVICE}
            element={<BookingCarservicePage />}
          />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path={ADMIN_HOME} element={<DashboardPage />} />
          <Route path={ADMIN_CUSTOMER} element={<CustomerPage />} />
          <Route path={ADMIN_TIMESLOT} element={<TimeslotPage />} />
          <Route
            path={ADMIN_CREATE_TIMESLOT}
            element={<CreateTimeslotPage />}
          />
          <Route path={ADMIN_PRODUCT} element={<ProductPage />} />
          <Route path={ADMIN_CREATE_PRODUCT} element={<CreateProductPage />} />
          <Route path={ADMIN_PROMO} element={<PromoPage />} />
          <Route path={ADMIN_CREATE_PROMO} element={<CreatePromoPage />} />
          <Route path={ADMIN_BOOKING} element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
