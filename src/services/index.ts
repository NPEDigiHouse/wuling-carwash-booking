import AuthService from "./Auth/AuthService";
import ProductService from "./Product/ProductService";
import PublicService from "./Public/PublicService";

const AuthServiceApi = new AuthService();
const ProductServiceApi = new ProductService();
const PublicServiceApi = new PublicService();

export { AuthServiceApi, ProductServiceApi, PublicServiceApi };
