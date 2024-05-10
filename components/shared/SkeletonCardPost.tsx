import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCardPost = () => {
  return (
    <div className="flex flex-col space-y-3 p-3 bg-card rounded-xl h-fit">
      <Skeleton className="h-48 w-full rounded-xl" />
      <div className="space-y-2 mt-5">
        <Skeleton className="h-5 w-[100%] rounded-[10px]" />
        <Skeleton className="h-5 w-[100%] rounded-[10px]" />
        <Skeleton className="h-[15px] w-[80%] rounded-[10px]" />
        <Skeleton className="h-[15px] w-[80%] rounded-[10px]" />
        <Skeleton className="h-[15px] w-[65%] rounded-[10px]" />
        <Skeleton className="h-[15px] w-[30%] rounded-[10px]" />
      </div>
    </div>
  );
};

export default SkeletonCardPost;
