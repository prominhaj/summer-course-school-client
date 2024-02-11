import React from "react";
import { Link } from "react-router-dom";

const InstructorsCard = ({ item }) => {
  const { image, name, category, email } = item;
  return (
    <div className="flex flex-col md:flex-row cursor-pointer duration-300 border bg-[#3D70E4] md:bg-transparent md:rounded-lg shadow-xl  dark:shadow-gray-700 dark:border-gray-700 hover:scale-[1.03] rounded-xl">
      <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-br-none md:flex-row md:p-0">
        <div className="md:h-full">
          <img
            className="object-cover w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:max-h-[200px] md:max-w-[200px] border-4 rounded-full md:h-full md:rounded-none md:rounded-tl-xl md:rounded-bl-xl"
            src={image}
            alt="Instructors Image"
          />
        </div>
        <h3 className="block text-base font-semibold leading-none tracking-tight text-gray-200 md:hidden sm:text-lg">
          {category}
        </h3>
      </div>
      <div className="flex flex-col gap-2 px-5 py-5 rounded-bl-lg md:flex-1 md:justify-between dark:bg-gray-800 bg-gray-50 rounded-br-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl rounded-tr-[40px]">
        <h2 className="text-[17px] font-semibold leading-none tracking-tight sm:text-xl dark:text-gray-200">
          {name}
        </h2>
        <h3 className="hidden text-base font-medium leading-none tracking-tight dark:text-gray-200 md:block sm:text-lg">
          {category}
        </h3>
        <h4 className="text-[16px] font-semibold leading-none tracking-tight sm:text-lg dark:text-gray-300">
          {email}
        </h4>
        <Link className="px-3 py-2 mt-4 text-base font-semibold text-center text-white rounded-md shadow bg-gradient-to-r from-purple-500 to-pink-500 focus:outline-none">
          See All Details
        </Link>
      </div>
    </div>
  );
};

export default InstructorsCard;
