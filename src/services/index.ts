import AuthService from "./Auth/AuthService";
import BookingService from "./Booking/BookingService";
import ProductService from "./Product/ProductService";
import PromoService from "./Promo/PromoService";
import PublicService from "./Public/PublicService";
import TimeslotService from "./Timeslot/TimeslotService";

const AuthServiceApi = new AuthService();
const ProductServiceApi = new ProductService();
const PublicServiceApi = new PublicService();
const TimeslotServiceApi = new TimeslotService();
const PromoServiceApi = new PromoService();
const BookingServiceApi = new BookingService();

export {
  AuthServiceApi,
  ProductServiceApi,
  PublicServiceApi,
  TimeslotServiceApi,
  BookingServiceApi,
  PromoServiceApi,
};
