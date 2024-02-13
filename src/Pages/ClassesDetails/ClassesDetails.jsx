import { Avatar } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../../Components/Button/Button";

const ClassesDetails = () => {
  const data = useLoaderData();
  const {
    name,
    category,
    availableSeats,
    details,
    email,
    image,
    instructorName,
    popularity,
    price,
    profilePhoto,
  } = data;

  return (
    <div className="bg-gray-100 dark:bg-[#0E1528] dark:text-gray-200">
      <div className="container px-5 mx-auto">
        <div className="py-5 md:py-10">
          <h2 className="text-xl font-bold tracking-widest md:text-2xl">
            {name}
          </h2>
          <div className="flex flex-wrap items-start gap-3 pt-4 pb-2 mb-4">
            <Avatar src={profilePhoto} />
            <div className="space-y-1">
              <h4 className="font-semibold">{instructorName}</h4>
              <p className="text-sm">{email}</p>
            </div>
          </div>
          <div className="grid gap-5 lg:gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div>
                <img
                  className="w-full max-h-[600px] object-cover rounded-lg shadow-xl dark:shadow-gray-600"
                  src={image}
                  alt="Course Image"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between px-5 py-8 border rounded-lg shadow-xl dark:border-gray-600 dark:shadow-gray-600">
              <h4 className="md:text-2xl text-lg font-['Inter'] mb-4 xl:mb-0 dark:text-gray-300 font-semibold">
                Price: {price === "Free" ? price : <>${price}</>}
              </h4>
              <div className="space-y-3 md:space-y-5">
                <h2 className="md:text-xl text-lg font-['Inter'] dark:text-gray-300 font-medium">
                  Available Seats: {availableSeats}
                </h2>
                <h3 className="md:text-xl text-lg font-['Inter'] dark:text-gray-300 font-medium">
                  Category: {category}
                </h3>
                <h3 className="md:text-xl text-lg font-['Inter'] dark:text-gray-300 font-medium">
                  Popularity: {popularity}
                </h3>

                <p className="">
                  <small className="text-sm sm:text-base">
                    <span className="font-semibold">Details:</span> {details}
                  </small>
                </p>
              </div>
              {/* Card Area */}
              <div>
                <h4>Card Area</h4>
              </div>
              {/* Card Area End */}
              <div className="pt-3">
                {availableSeats ? (
                  <Button className={"w-full mt-3"} variant={"secondary"}>
                    Enroll Now
                  </Button>
                ) : (
                  <Button
                    disabled={true}
                    className={"w-full mt-3"}
                    variant={"soldOut"}
                  >
                    Sold Out
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesDetails;
