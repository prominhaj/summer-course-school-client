import React, { Fragment, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Button from "../../../../Components/Button/Button";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { Avatar } from "@mui/material";
import { Menu, Transition } from "@headlessui/react";
import { HiMagnifyingGlass, HiOutlineBellAlert } from "react-icons/hi2";

const DashBoardHeader = () => {
  const { user } = useAuth();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <header className="py-3 pr-5 sm:pr-8 sm:py-5">
      <nav className="flex flex-wrap items-center justify-between gap-3">
        {/* Search Mobail  */}

        {/* <div>
          {isOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
              onClick={closeModal}
            ></div>
          )}

          {isOpen && (
            <div className="fixed p-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
              <h1 className="mb-4 text-2xl font-semibold">Modal Title</h1>
              <p className="mb-4 text-gray-700">Modal content goes here...</p>
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={closeModal}
              >
                Close Modal
              </button>
            </div>
          )}

          <button
            className="fixed px-4 py-2 text-white bg-blue-500 rounded bottom-4 right-4 hover:bg-blue-600"
            onClick={openModal}
          >
            Open Modal
          </button>
        </div> */}

        <div className="block md:hidden">
          <button
            onClick={() => setIsHidden(!isHidden)}
            className="flex items-center p-2 text-gray-800 bg-gray-100 rounded-full"
          >
            <HiMagnifyingGlass className="text-2xl" />
          </button>
        </div>

        {isHidden && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
            onClick={() => setIsHidden(false)}
          ></div>
        )}
        <div
          className={`${
            isHidden
              ? "block fixed p-5 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2"
              : "hidden"
          } md:block`}
        >
          <form className="flex flex-wrap gap-3">
            <div className="flex gap-3 p-1 text-gray-800 bg-white rounded-lg md:p-2">
              <span className="flex items-center my-1 border-gray-400 md:border-r-2 md:px-2">
                <CiSearch className="text-2xl" />
              </span>
              <input
                className="w-full text-base border-none outline-none md:text-lg"
                type="text"
                required
                placeholder="Find your course"
              />
            </div>
            <Button
              className={"sm:py-3 py-2 px-3 sm:px-4 md:px-5"}
              type={"submit"}
              variant={"primary"}
            >
              Search
            </Button>
          </form>
        </div>
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
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
