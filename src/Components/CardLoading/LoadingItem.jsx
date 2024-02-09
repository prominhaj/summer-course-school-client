import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import React from "react";

const LoadingItem = () => {
  return (
    <Card className="w-full !bg-gray-100 dark:bg-gray-600">
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            className="dark:bg-gray-400"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            className="dark:bg-gray-400"
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={
          <Skeleton
            className="dark:bg-gray-400"
            animation="wave"
            height={10}
            width="40%"
          />
        }
      />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      </CardContent>
    </Card>
  );
};

export default LoadingItem;
