import axios, { type AxiosRequestConfig } from "axios";
import { useUserStore } from "@/stores/UserStore.ts";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
});

// 所有请求自动加入 token
instance.interceptors.request.use((config) => {
  const store = useUserStore();
  if (!store.accessToken) {
    return config;
  }
  const token = store.accessToken;
  if (!token) {
    return config;
  }
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export const http = async <T>(
  config: AxiosRequestConfig,
): Promise<Result<T>> => {
  const { data } = await instance.request<Result<T>>(config);
  return data;
};

export const httpWithCustomReturn = async <T>(
  config: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await instance.request<T>(config);
  return data;
};
