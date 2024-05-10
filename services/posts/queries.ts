import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

export const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => getPosts(pageParam),
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
