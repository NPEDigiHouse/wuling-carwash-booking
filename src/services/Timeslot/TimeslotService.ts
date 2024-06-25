/* eslint-disable no-useless-catch */
import { ApiBaseResponse } from "shared/config/APIResponse";

import { http } from "shared/utils/AxiosUtils";
import {
  ITimeslotApiOptionalRequestParams,
  ITimeslotApiRequestParams,
  ITimeslotApiResponseParams,
} from "./TimeslotServiceInterface";

class TimeslotService {
  async createTimeslot(
    payload: ITimeslotApiRequestParams,
  ): Promise<ApiBaseResponse<ITimeslotApiResponseParams>> {
    try {
      const response = await http.post(
        `${import.meta.env.VITE_API_URL}/timeslot`,
        payload,
      );

      const data: ApiBaseResponse<ITimeslotApiResponseParams> =
        await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllTimeslots(
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<ITimeslotApiResponseParams[]>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/timeslot`,
        { signal },
      );

      const data: ApiBaseResponse<ITimeslotApiResponseParams[]> =
        await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getTimeslotDetail(
    timeslotId?: string,
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<ITimeslotApiResponseParams>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/timeslot/${timeslotId}`,
        { signal },
      );

      const data: ApiBaseResponse<ITimeslotApiResponseParams> =
        await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteTimeslot(timeslotId: string) {
    console.log("timeslot id = ", timeslotId);

    try {
      const response = await http.delete(
        `${import.meta.env.VITE_API_URL}/timeslot/${timeslotId}`,
      );

      const data = await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateTimeslot(payload: {
    data: ITimeslotApiOptionalRequestParams;
    timeslotId: string;
  }) {
    try {
      const response = await http.put(
        `${import.meta.env.VITE_API_URL}/timeslot/${payload.timeslotId}`,
        payload.data,
      );

      const data = await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default TimeslotService;
