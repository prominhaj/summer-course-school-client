import { Skeleton } from "@mui/material";
import React from "react";

const TableLoading = () => {
  return (
    <div>
      <React.Fragment>
        <Skeleton
          className="!bg-gray-400 !dark:bg-gray-600"
          animation="wave"
          height={30}
        />
      </React.Fragment>
      <React.Fragment>
        <Skeleton
          className="!bg-gray-400 !dark:bg-gray-600"
          animation="wave"
          height={30}
        />
      </React.Fragment>
      <React.Fragment>
        <Skeleton
          className="!bg-gray-400 !dark:bg-gray-600"
          animation="wave"
          height={30}
        />
      </React.Fragment>
    </div>
  );
};

export default TableLoading;
