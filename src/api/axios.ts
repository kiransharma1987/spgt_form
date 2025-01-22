import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://88.222.215.55:8080/api", 
  headers: {
    "Content-Type": "application/json",
    "sender-device":"web"
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;