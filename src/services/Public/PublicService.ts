/* eslint-disable no-useless-catch */
import { IProductResponseParams } from "services/Product/ProductServiceInterface";
import { ApiBaseResponse } from "shared/config/APIResponse";
import { http } from "shared/utils/AxiosUtils";

class PublicService {
  async getAllPublicProducts(
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<IProductResponseParams[]>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/public/products`,
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

export default PublicService;
