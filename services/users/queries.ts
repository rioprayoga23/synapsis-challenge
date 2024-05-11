import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllUsers } from "./api";
import { postData } from "@/lib/https";

export const useAllUsers = ({ searchKey }: { searchKey?: string }) => {
  //* search key value
  const params = searchKey?.length ? { name: searchKey } : {};

  return useInfiniteQuery({
    queryKey: ["all-users", searchKey],
    queryFn: ({ pageParam }) => getAllUsers({ pageParam, params }),
    initialPageParam: 0,

    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (
        lastPage?.headers?.["x-pagination-pages"] ===
        lastPage?.headers?.["x-pagination-page"]
      ) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (_, __, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });
};

export const postUsers = async (payload: UserPayload) => {
  return await postData("/users", { ...payload });
};
