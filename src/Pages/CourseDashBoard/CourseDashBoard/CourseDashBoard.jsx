import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDashBoard = () => {
  const data = useLoaderData();
  console.log(data);
  const { image, name, category, details, enrollEmail } = data;
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
      <div className="container px-5 py-5 mx-auto md:py-10">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <img
              className="w-full h-[500px] object-cover rounded-lg"
              src={image}
              alt=""
            />
          </div>
          <div>
            <h2>{name}</h2>
            <h2>{category}</h2>
            <p>
              <small>{details}</small>
            </p>
            <div className="flex">
              <AvatarGroup max={4}>
                {enrollEmail.map((item) => (
                  <Avatar
                    key={item}
                    alt={item?.substr(0, 1)}
                    src={item?.substr(0, 1)}
                  />
                ))}
              </AvatarGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDashBoard;
