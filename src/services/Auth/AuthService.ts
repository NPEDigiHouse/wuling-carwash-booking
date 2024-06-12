/* eslint-disable no-useless-catch */
import { ApiBaseResponse } from "shared/config/APIResponse";
import {
  ICredentialUserResponsePrams,
  ILoginRequestParams,
} from "./AuthServiceInterface";
import { http } from "shared/utils/AxiosUtils";

class AuthService {
  async login(payload: ILoginRequestParams) {
    try {
      const response = await http.post(
        "http://localhost:8000/api/v1/auth/login",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.data;

      console.log("http : ", http);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async credential(
    signal?: AbortSignal | undefined,
  ): Promise<ApiBaseResponse<ICredentialUserResponsePrams>> {
    const response = await http.get(
      `${import.meta.env.VITE_API_URL}/auth/credential`,
      { signal },
    );

    const data: ApiBaseResponse<ICredentialUserResponsePrams> =
      await response.data;

    return data;
  }
}

export default AuthService;
