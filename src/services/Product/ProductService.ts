/* eslint-disable no-useless-catch */
import { ApiBaseResponse } from "shared/config/APIResponse";
import { http } from "shared/utils/AxiosUtils";
import {
  IProductRequestParams,
  IProductResponseParams,
} from "./ProductServiceInterface";

class ProductService {
  async getAllProducts(
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<IProductResponseParams[]>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/product`,
        { signal },
      );

      const data: ApiBaseResponse<IProductResponseParams[]> =
        await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async createProducts(
    payload: IProductRequestParams,
  ): Promise<ApiBaseResponse<IProductResponseParams>> {
    try {
      const response = await http.post(
        `${import.meta.env.VITE_API_URL}/product`,
        payload,
      );

      const data: ApiBaseResponse<IProductResponseParams> = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(
    productId: number,
  ): Promise<ApiBaseResponse<IProductResponseParams>> {
    try {
      const response = await http.delete(
        `${import.meta.env.VITE_API_URL}/product/${productId}`,
      );

      const data: ApiBaseResponse<IProductResponseParams> = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;
