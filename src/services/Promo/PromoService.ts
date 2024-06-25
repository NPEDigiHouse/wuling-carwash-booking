/* eslint-disable no-useless-catch */
import { http } from "shared/utils/AxiosUtils";
import {
  IPromoServiceOptionalRequestParams,
  IPromoServiceRequestParams,
  IPromoServiceResponseParams,
} from "./PromoServiceInterface";
import { ApiBaseResponse } from "shared/config/APIResponse";

class PromoService {
  async createPromo(
    payload: IPromoServiceRequestParams,
  ): Promise<ApiBaseResponse<IPromoServiceResponseParams[]>> {
    try {
      const response = await http.post(
        `${import.meta.env.VITE_API_URL}/promo`,
        payload,
      );

      const promo: ApiBaseResponse<IPromoServiceResponseParams[]> =
        await response.data;
      return promo;
    } catch (error) {
      throw error;
    }
  }

  async updatePromo(payload: {
    data: IPromoServiceOptionalRequestParams;
    promoId: string;
  }): Promise<ApiBaseResponse<IPromoServiceResponseParams[]>> {
    try {
      const response = await http.put(
        `${import.meta.env.VITE_API_URL}/promo/${payload.promoId}`,
        payload.data,
      );

      const data: ApiBaseResponse<IPromoServiceResponseParams[]> =
        await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllPromo(
    signal?: AbortSignal,
  ): Promise<ApiBaseResponse<IPromoServiceResponseParams[]>> {
    try {
      const response = await http.get(`${import.meta.env.VITE_API_URL}/promo`, {
        signal,
      });
      const promo: ApiBaseResponse<IPromoServiceResponseParams[]> =
        response.data;
      return promo;
    } catch (error) {
      throw error;
    }
  }

  async getDetailPromo(
    promoId?: string,
    signal?: AbortSignal,
  ): Promise<ApiBaseResponse<IPromoServiceResponseParams>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/promo/${promoId}`,
        {
          signal,
        },
      );
      const promo: ApiBaseResponse<IPromoServiceResponseParams> = response.data;
      return promo;
    } catch (error) {
      throw error;
    }
  }

  async deletePromo(promoId: number) {
    try {
      const response = await http.delete(
        `${import.meta.env.VITE_API_URL}/promo/${promoId}`,
      );
      const promo = response.data;
      return promo;
    } catch (error) {
      throw error;
    }
  }
}

export default PromoService;
