import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="grid gap-5 py-5 md:py-8 md:grid-cols-2 lg:grid-cols-3">
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
        <CardContent>
          <React.Fragment>
            <Skeleton
              className="dark:bg-gray-600"
              animation="wave"
              height={20}
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              className="dark:bg-gray-600"
              animation="wave"
              height={20}
              width="80%"
            />
          </React.Fragment>
        </CardContent>
      </Card>
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
        <CardContent>
          <React.Fragment>
            <Skeleton
              className="dark:bg-gray-600"
              animation="wave"
              height={20}
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              className="dark:bg-gray-600"
              animation="wave"
              height={20}
              width="80%"
            />
          </React.Fragment>
        </CardContent>
      </Card>
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
        <CardContent>
          <React.Fragment>
            <Skeleton
              className="dark:bg-gray-600"
              animation="wave"
              height={20}
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              className="dark:bg-gray-600"
              animation="wave"
              height={20}
              width="80%"
            />
          </React.Fragment>
        </CardContent>
      </Card>
    </div>
  );
};

export default Loading;
