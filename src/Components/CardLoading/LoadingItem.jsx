import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import React from "react";

const LoadingItem = ({ feedBack }) => {
  return (
    <Card className="w-full dark:bg-gray-700">
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            className="dark:bg-gray-600"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            className="dark:bg-gray-600"
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={
          <Skeleton
            className="dark:bg-gray-600"
            animation="wave"
            height={10}
            width="40%"
          />
        }
      />
      {feedBack || (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      )}
      <CardContent>
        <React.Fragment>
          <Skeleton
            className="dark:bg-gray-600"
            animation="wave"
            height={10}
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            className="dark:bg-gray-600"
            animation="wave"
            height={10}
            width="80%"
          />
        </React.Fragment>
      </CardContent>
    </Card>
  );
};

export default LoadingItem;
