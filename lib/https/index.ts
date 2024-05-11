import axios from "axios";

import { configs } from "@/configs";
import { errorHandler } from "../errors";

const axiosInstance = axios.create({
  baseURL: configs.BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${configs.ACCESS_TOKEN}`,
  },
});

axiosInstance.interceptors.response.use((response) => response, errorHandler);

export async function getData(url: string, params?: {} | undefined) {
  return await axiosInstance.get(url, {
    params,
  });
}

export async function postData(url: string, params: any) {
  return await axiosInstance.post(url, {
    ...params,
  });
}

export async function updateData(url: string, params: any) {
  return await axiosInstance.put(url, {
    ...params,
  });
}

export async function deleteData(url: string) {
  return await axiosInstance.delete(url);
}
