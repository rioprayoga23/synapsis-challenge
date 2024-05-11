import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "./api";

export const useAllUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
  });

  return { data, isLoading };
};
