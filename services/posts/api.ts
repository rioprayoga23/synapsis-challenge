import { getData } from "@/lib/https";

export const getAllPosts = async ({
  pageParam,
  params,
}: {
  pageParam?: number;
  params?: {};
}) => {
  try {
    return await getData(
      "/posts",
      pageParam ? { page: pageParam + 1 } : { ...params }
    );
  } catch (error) {}
};

export const getPostById = async (id: string) => {
  try {
    const { data } = await getData(`/posts/${id}`);
    return data;
  } catch (error) {}
};
