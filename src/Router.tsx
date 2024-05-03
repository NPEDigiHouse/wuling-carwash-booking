import HomePage from "pages/Home/Home";
import Login from "pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BOOKING, LOGIN, ORDER } from "shared/utils/Route";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={BOOKING} />
        <Route path={ORDER} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
