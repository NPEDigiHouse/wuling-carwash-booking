import axios from "axios";
import TokenConfig from "shared/config/TokenConfig";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.request.use(
  (config) => {
    console.log("config : ", config);

    const token = TokenConfig.getToken();

    console.log("token : ", token);

    if (!config.headers.Authorization) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
