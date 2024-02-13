import React, { Fragment } from "react";
import { CiSearch } from "react-icons/ci";
import Button from "../../../../Components/Button/Button";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { Avatar } from "@mui/material";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineBellAlert } from "react-icons/hi2";

const DashBoardHeader = () => {
  const { user } = useAuth();

  return (
    <header className="py-3 pr-5 sm:pr-8 sm:py-5">
      <nav className="flex items-center justify-between">
        <form className="flex gap-3">
          <div className="flex gap-3 p-2 text-gray-800 bg-white rounded-lg">
            <span className="flex items-center px-2 my-1 border-r-2 border-gray-400">
              <CiSearch className="text-2xl" />
            </span>
            <input
              className="text-lg border-none outline-none"
              type="text"
              required
              placeholder="Find your course"
            />
          </div>
          <Button className={"py-3 px-5"} type={"submit"} variant={"primary"}>
            Search
          </Button>
        </form>
        <div className="flex items-center gap-3 md:gap-5">
          <div className="relative">
            <Menu>
              <Menu.Button
                className={
                  "relative flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 bg-white p-2"
                }
              >
                <HiOutlineBellAlert className="text-2xl text-gray-800" />
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
                <Menu.Items
                  className={
                    "absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  }
                >
                  <Menu.Item>
                    <h3 className="px-3 text-lg font-medium text-gray-800">
                      Notification Items
                    </h3>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="relative">
            <Menu>
              <Menu.Button
                className={
                  "relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                }
              >
                <Avatar src={user.photoURL && user.photoURL} />
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
                <Menu.Items
                  className={
                    "absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  }
                >
                  <Menu.Item>
                    <h3 className="px-3 text-lg font-medium text-gray-800">
                      {user && user?.displayName}
                    </h3>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashBoardHeader;
