import { Skeleton } from "@mui/material";
import { Box } from "lucide-react";
import React from "react";

const CategoryLoading = () => {
  return (
    <div className="w-full">
      <Skeleton className="py-3 dark:bg-gray-600" />
      <Skeleton className="py-3 dark:bg-gray-600" />
      <Skeleton className="py-3 dark:bg-gray-600" />
      <Skeleton className="py-3 dark:bg-gray-600" />
    </div>
  );
};

export default CategoryLoading;
