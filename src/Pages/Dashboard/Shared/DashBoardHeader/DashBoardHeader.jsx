import React, { Fragment, useEffect, useState } from "react";
import { CiDark, CiLight, CiSearch } from "react-icons/ci";
import Button from "../../../../Components/Button/Button";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { Avatar } from "@mui/material";
import { Menu, Transition } from "@headlessui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import useTheme from "../../../../Hooks/useTheme/useTheme";

const DashBoardHeader = () => {
  const [theme, toggleButton] = useTheme();
  const { user } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="py-3 pr-5 sm:pr-8 sm:py-5 ">
      <nav className="flex flex-wrap items-center justify-between gap-3">
        <div></div>
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          <button onClick={toggleButton}>
            {theme === "dark" ? (
              <CiLight className="text-3xl font-semibold dark:text-white" />
            ) : (
              <CiDark className="text-3xl font-semibold dark:text-white" />
            )}
          </button>
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
                    "absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none"
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
