import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser, postUser, updateUser } from "./api";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UserPayload) => postUser(payload),
    onSettled: (_, error) => {
      if (error) return;

      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | undefined) => deleteUser(id as string),
    onSettled: async (_, error) => {
      if (error) return;

      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UserPayload) => updateUser(payload),
    onSettled: async (_, error) => {
      if (error) return;

      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
  });
};
