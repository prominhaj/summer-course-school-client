import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDashBoard = () => {
  const data = useLoaderData();
  const { image, name, category, details, enrollEmail } = data;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
      <div className="container px-5 py-5 mx-auto md:py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <img
              className="w-full h-[500px] object-cover rounded-lg"
              src={image}
              alt=""
            />
          </div>
          <div>
            <div className="space-y-3">
              <h2 className="text-xlz md:text-2xl">{name}</h2>
              <h2 className="text-lg md:text-xl">{category}</h2>
              <p>
                <small>{details}</small>
              </p>
              <div className="flex">
                <AvatarGroup max={4}>
                  {enrollEmail?.map((item) => (
                    <Avatar
                      key={item}
                      alt={item?.substr(0, 1)}
                      src={item?.substr(0, 1)}
                    />
                  ))}
                </AvatarGroup>
              </div>
            </div>
            <div className="mt-16">
              <h4 className="text-2xl font-medium text-center">
                Update Next Time
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDashBoard;
