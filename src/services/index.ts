import AuthService from "./Auth/AuthService";
import ProductService from "./Product/ProductService";
import PublicService from "./Public/PublicService";
import TimeslotService from "./Timeslot/TimeslotService";

const AuthServiceApi = new AuthService();
const ProductServiceApi = new ProductService();
const PublicServiceApi = new PublicService();
const TimeslotServiceApi = new TimeslotService();

export {
  AuthServiceApi,
  ProductServiceApi,
  PublicServiceApi,
  TimeslotServiceApi,
};
