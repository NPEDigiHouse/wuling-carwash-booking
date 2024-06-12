import axios from "axios";
import TokenConfig from "shared/config/TokenConfig";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.request.use(
  (config) => {
    const token = TokenConfig.getToken();

    if (!config.headers.Authorization) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("token : ", token);
      }
    }
    return config;
  },
  (error) => {
    console.log("error axios : ", error);

    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (res) => {
    console.log("res : ", res);

    return res;
  },
  (error) => {
    console.log("error : ", error);

    return Promise.reject(error);
  },
);
