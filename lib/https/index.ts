import axios from "axios";

import { configs } from "@/configs";
import { errorHandler } from "../errors";

const axiosInstance = axios.create({
  baseURL: configs.BASE_URL_API,
  timeout: 10000,
});

axiosInstance.interceptors.response.use((response) => response, errorHandler);

export async function getData(url: string, params?: {} | undefined) {
  return await axiosInstance.get(url, {
    params,
  });
}
