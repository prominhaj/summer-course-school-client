import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import lightLogo from "../../../assets/SCS-Logo-light.png";
import darkLogo from "../../../assets/SCS-dark-logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { toast } from "react-toastify";
import { CiDark, CiLight } from "react-icons/ci";
import useTheme from "../../../Hooks/useTheme/useTheme";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Instructors", href: "/instructors" },
  { name: "Classes", href: "/classes" },
  { name: "DashBoard", href: "/dashboard" },
];

const Header = () => {
  const { user, logout } = useAuth();
  const [theme, toggleButton] = useTheme();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout SuccessFul");
      })
      .catch((error) => {
        toast.error(error.message.substr(10));
      });
  };

  console.log(theme);
  return (
    <div className="sticky top-0 z-50 bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0C1322]">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="container px-5 mx-auto">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                  <div className="flex items-center flex-shrink-0">
                    <img
                      className="w-auto h-8"
                      src={theme === "dark" ? darkLogo : lightLogo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-12 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                              ? "bg-gray-700 text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                              : "rounded-md px-3 py-2 text-sm font-medium dark:text-gray-300 text-gray-800 hover:bg-gray-700 hover:text-white"
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button onClick={toggleButton}>
                    {theme === "dark" ? (
                      <CiLight className="text-2xl font-semibold dark:text-white" />
                    ) : (
                      <CiDark className="text-2xl font-semibold dark:text-white" />
                    )}
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    {user ? (
                      <>
                        <div>
                          <Menu.Button className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="rounded-full w-9 h-9"
                              src={user && user?.photoURL}
                              alt="Profile Photo"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <p className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:dark:bg-black hover:dark:text-white hover:bg-gray-100 hover:text-black">
                                {user && user?.displayName}
                              </p>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                to="/profile"
                                className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:dark:bg-black hover:dark:text-white hover:bg-gray-100 hover:text-black"
                              >
                                Your Profile
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <button
                                onClick={handleLogout}
                                className="block w-full px-4 py-2 text-sm text-gray-900 text-start dark:text-gray-100 hover:dark:bg-black hover:dark:text-white hover:bg-gray-100 hover:text-black"
                              >
                                Sign out
                              </button>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    ) : (
                      <NavLink
                        to={"/login"}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "bg-gray-900 text-white hover:bg-gray-700 dark:bg-indigo-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium dark:text-gray-100"
                            : "rounded-md px-3 py-2 text-sm font-medium dark:text-gray-700 hover:bg-gray-700 hover:text-white  bg-gray-900 dark:bg-gray-300 text-white"
                        }
                      >
                        Login
                      </NavLink>
                    )}
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                        : "block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white text-gray-800 dark:text-gray-200"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
