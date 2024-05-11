import { getData } from "@/lib/https";

const getCommentById = async (postId: string) => {
  const { data } = await getData(`/posts/${postId}/comments`);
  return data;
};

export default getCommentById;
