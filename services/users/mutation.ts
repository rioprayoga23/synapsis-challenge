import { setScreenLoading } from "@/store/screen-loading/action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteUser, postUser, updateUser } from "./api";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (payload: UserPayload) => postUser(payload),
    onMutate: () => {
      dispatch(setScreenLoading(true));
    },

    onSettled: (_, error) => {
      if (error) {
        console.log(error);

        return dispatch(setScreenLoading(false));
      }

      dispatch(setScreenLoading(false));
      toast.success("User created successfully");
      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (id: string | undefined) => deleteUser(id as string),
    onMutate: () => {
      dispatch(setScreenLoading(true));
    },
    onSettled: async (_, error) => {
      if (error) {
        return dispatch(setScreenLoading(false));
      }

      dispatch(setScreenLoading(false));
      toast.success("User deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (payload: UserPayload) => updateUser(payload),
    onMutate: () => {
      dispatch(setScreenLoading(true));
    },
    onSettled: async (_, error) => {
      if (error?.message) {
        return dispatch(setScreenLoading(false));
      }

      dispatch(setScreenLoading(false));
      toast.success("User updated successfully");
      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
  });
};
