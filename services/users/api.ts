import { getData } from "@/lib/https";

export const getUserById = async (id: string) => {
  try {
    const { data } = await getData(`/users/${id}`);
    return data;
  } catch (error) {}
};

export const getAllUsers = async () => {
  try {
    const { data } = await getData(`/users`);
    return data;
  } catch (error) {}
};
