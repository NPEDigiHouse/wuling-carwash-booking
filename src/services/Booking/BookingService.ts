/* eslint-disable no-useless-catch */
import { ApiBaseResponse } from "shared/config/APIResponse";
import { http } from "shared/utils/AxiosUtils";
import {
  IBookingRequestParams,
  IBookingResponseParams,
  ICustomerBookingRequestParams,
  ICustomerBookingResponseParams,
} from "./BookingServiceInterface";

class BookingService {
  async getAllBookings(
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<IBookingResponseParams[]>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/booking`,
        { signal },
      );

      const data: ApiBaseResponse<IBookingResponseParams[]> =
        await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getBookingDetail(
    bookingId?: string,
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<IBookingResponseParams>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/booking/${bookingId}`,
        { signal },
      );

      const data: ApiBaseResponse<IBookingResponseParams> = await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCustomerBooking(
    customerId?: string,
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<ICustomerBookingResponseParams[]>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/booking/customer/${customerId}`,
        { signal },
      );

      const data: ApiBaseResponse<ICustomerBookingResponseParams[]> =
        await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async createBookings(
    payload: IBookingRequestParams,
  ): Promise<ApiBaseResponse<IBookingResponseParams>> {
    try {
      const response = await http.post(
        `${import.meta.env.VITE_API_URL}/booking`,
        payload,
      );

      const data: ApiBaseResponse<IBookingResponseParams> = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  async createCustomerBooking(
    payload: ICustomerBookingRequestParams,
  ): Promise<ApiBaseResponse<IBookingResponseParams>> {
    try {
      const response = await http.post(
        `${import.meta.env.VITE_API_URL}/booking`,
        payload,
      );

      const data: ApiBaseResponse<IBookingResponseParams> = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteBooking(
    bookingId: string,
  ): Promise<ApiBaseResponse<IBookingResponseParams>> {
    try {
      const response = await http.delete(
        `${import.meta.env.VITE_API_URL}/booking/${bookingId}`,
      );

      const data: ApiBaseResponse<IBookingResponseParams> = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default BookingService;
