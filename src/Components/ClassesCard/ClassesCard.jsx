import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Avatar } from "@mui/material";

const ClassesCard = ({ item }) => {
  const {
    name,
    instructorName,
    image,
    price,
    details,
    availableSeats,
    profilePhoto,
    _id,
  } = item;

  return (
    <div className="flex flex-col justify-between cursor-pointer p-4 duration-300 border shadow-xl sm:p-6 dark:shadow-gray-700 dark:border-gray-700 hover:scale-[1.03] rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <Avatar alt="Ted talk" src={profilePhoto} />
          <h3 className="text-base font-semibold leading-none tracking-tight sm:text-lg dark:text-gray-200">
            {instructorName}
          </h3>
        </div>
        <Menu as="div" className="relative ml-3">
          <Menu.Button className="rounded-full focus:bg-gray-300">
            <HiOutlineDotsVertical className="text-2xl dark:text-gray-100 focus:dark:text-black" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <button className="block w-full px-4 py-2 text-sm text-gray-900 hover:font-medium text-start dark:text-gray-100 hover:dark:bg-black hover:dark:text-white hover:bg-gray-100 hover:text-black">
                  Add Wishlist
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="block w-full px-4 py-2 text-sm text-gray-900 hover:font-medium text-start dark:text-gray-100 hover:dark:bg-black hover:dark:text-white hover:bg-gray-100 hover:text-black">
                  Details
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="flex-1 py-3">
        <img
          className="object-cover w-full h-full max-h-[250px] rounded-lg"
          src={image}
          alt="Card Image"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between ">
          <h2 className="text-[17px] font-semibold leading-none tracking-tight sm:text-xl dark:text-gray-200">
            {name}
          </h2>
          <h4 className="mr-2 text-[17px] font-semibold leading-none tracking-tight sm:text-xl dark:text-gray-200">
            {price === "Free" ? price : <>${price}</>}
          </h4>
        </div>
        <div className="py-3">
          <h6 className="text-base font-medium leading-none tracking-tight sm:text-[16px] dark:text-gray-200">
            Available Seats: {availableSeats}
          </h6>
          <div className="mt-3">
            <p className="text-base font-normal tracking-tight sm:text-[15px] dark:text-gray-200">
              {details.length > 80 ? <>{details.slice(0, 80)}...</> : details}
            </p>
          </div>
        </div>
        <div>
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
  );
};

export default ClassesCard;
