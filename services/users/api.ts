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
  return await getData("/users", { page: pageParam + 1, ...params });
};

export const deleteUser = async (id: string) => {
  return await deleteData(`/users/${id}`);
};

export const postUser = async (payload: UserPayload) => {
  return await postData(`/users`, { ...payload });
};

export const updateUser = async (payload: UserPayload) => {
  const _payload = {
    name: payload?.name,
    email: payload?.email,
    gender: payload?.gender,
    status: payload?.status,
  };

  return await updateData(`/users/${payload?.id}`, _payload);
};
