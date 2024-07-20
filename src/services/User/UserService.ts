/* eslint-disable no-useless-catch */
import { ApiBaseResponse } from "shared/config/APIResponse";
import { http } from "shared/utils/AxiosUtils";
import { IUserDetailResponseParams } from "./UserServiceInterface";

class UserService {
  async getAllUsers(signal?: AbortSignal) {
    try {
      const response = await http.get(`${import.meta.env.VITE_API_URL}/users`, {
        signal,
      });
      const data = await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getDetailUser(
    id?: string,
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<IUserDetailResponseParams>> {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/users/${id}`,
        { signal },
      );
      const data: ApiBaseResponse<IUserDetailResponseParams> =
        await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: string): Promise<ApiBaseResponse<null>> {
    try {
      const response = await http.delete(
        `${import.meta.env.VITE_API_URL}/users/${id}`,
      );
      const data: ApiBaseResponse<null> = await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
