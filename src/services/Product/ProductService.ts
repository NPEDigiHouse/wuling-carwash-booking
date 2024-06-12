/* eslint-disable no-useless-catch */
import { ApiBaseResponse } from "shared/config/APIResponse";
import { http } from "shared/utils/AxiosUtils";
import { IProductResponseParams } from "./ProductServiceInterface";

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
}

export default ProductService;
