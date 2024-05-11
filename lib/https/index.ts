import axios from "axios";

import { configs } from "@/configs";
import { errorHandler } from "../errors";

const axiosInstance = axios.create({
  baseURL: configs.BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer 9ac908ec212bc46dda1db8f14a68fb88f67a7990aba2d53c4e97060402709f74`,
  },
});

axiosInstance.interceptors.response.use((response) => response);

export async function getData(url: string, params?: {} | undefined) {
  return await axiosInstance.get(url, {
    params,
  });
}
