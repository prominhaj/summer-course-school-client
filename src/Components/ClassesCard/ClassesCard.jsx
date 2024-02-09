import { Link } from "react-router-dom";
import img from "../../assets/Card/digital-marketing.jpg";
import Button from "../Button/Button";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ClassesCard = () => {
  return (
    <div className="p-4 border shadow-xl sm:p-6 dark:shadow-gray-700 dark:border-gray-700 rounded-xl">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold leading-none tracking-tight sm:text-lg dark:text-gray-200">
            Khalid Farhan
          </h3>
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
                  <button className="block w-full px-4 py-2 text-sm text-gray-900 text-start dark:text-gray-100 hover:dark:bg-black hover:dark:text-white hover:bg-gray-100 hover:text-black">
                    Details
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="py-3">
          <Link>
            <img
              className="w-full rounded-lg min-h-full max-h-[250px] object-cover"
              src={img}
              alt="Card Image"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-[17px] font-semibold leading-none tracking-tight sm:text-xl dark:text-gray-200">
            Web Design
          </h2>
          <h4 className="mr-2 text-[17px] font-semibold leading-none tracking-tight sm:text-xl dark:text-gray-200">
            $20
          </h4>
        </div>
        <div className="py-3">
          <h6 className="text-base font-medium leading-none tracking-tight sm:text-[16px] dark:text-gray-200">
            Available Seats: 500
          </h6>
          <p className="mt-3 text-base font-normal leading-none tracking-tight sm:text-[15px] dark:text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            maxime...
          </p>
        </div>
        <Button
          className={
            "bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full mt-3 py-2 text-lg"
          }
          variant={"primary"}
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default ClassesCard;
