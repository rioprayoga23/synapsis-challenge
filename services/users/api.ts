import { deleteData, getData, postData, updateData } from "@/lib/https";

export const getUserById = async (id: string) => {
  try {
    const { data } = await getData(`/users/${id}`);
    return data;
  } catch (error) {}
};

export const getAllUsers = async ({
  pageParam = 0,
  params,
}: {
  pageParam?: number;
  params?: {};
}) => {
  try {
    return await getData("/users", { page: pageParam + 1, ...params });
  } catch (error) {}
};

export const deleteUser = async (id: string) => {
  try {
    return await deleteData(`/users/${id}`);
  } catch (error) {}
};

export const postUser = async (payload: UserPayload) => {
  try {
    return await postData(`/users`, { ...payload });
  } catch (error) {}
};

export const updateUser = async (payload: UserPayload) => {
  const _payload = {
    name: payload?.name,
    email: payload?.email,
    gender: payload?.gender,
    status: payload?.status,
  };

  try {
    return await updateData(`/users/${payload?.id}`, _payload);
  } catch (error) {}
};
