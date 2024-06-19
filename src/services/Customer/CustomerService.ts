/* eslint-disable no-useless-catch */
import { ApiBaseResponse } from "shared/config/APIResponse";
import { http } from "shared/utils/AxiosUtils";
import { ICustomerDetailResponseParams } from "./CustomerServiceInterface";

class CustomerService {
  async getAllCustomers(signal?: AbortSignal) {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/customer`,
        { signal },
      );
      const data = await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getDetailCustomer(
    id?: string,
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<ICustomerDetailResponseParams>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/customer/${id}`,
        { signal },
      );
      const data: ApiBaseResponse<ICustomerDetailResponseParams> =
        await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default CustomerService;
