import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCardUser = () => {
  return (
    <div className="flex flex-col space-y-3 bg-card rounded-xl h-fit">
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  );
};

export default SkeletonCardUser;
