/* eslint-disable no-useless-catch */
import { ILoginRequestParams } from "./AuthServiceInterface";
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

  async credential() {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/auth/credential`,
      );

      const data = await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
