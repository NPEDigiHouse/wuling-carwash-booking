import AuthService from "./Auth/AuthService";
import ProductService from "./Product/ProductService";

const AuthServiceApi = new AuthService();
const ProductServiceApi = new ProductService();

export { AuthServiceApi, ProductServiceApi };
