import { getData } from "@/lib/https";

const getCommentById = async (postId: string) => {
  try {
    const { data } = await getData(`/posts/${postId}/comments`);
    return data;
  } catch (error) {}
};

export default getCommentById;
