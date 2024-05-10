import { getData } from "@/lib/https";

export const getPosts = async (pageParam: number) => {
  try {
    const response = await getData("/posts", { page: pageParam + 1 });
    return response;
  } catch (error) {
    throw error;
  }
};
