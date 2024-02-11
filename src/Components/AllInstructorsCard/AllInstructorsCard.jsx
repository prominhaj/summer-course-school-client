import React from "react";
import { Link } from "react-router-dom";

const AllInstructorsCard = () => {
  return (
    <div className="flex flex-col cursor-pointer duration-300 border bg-[#3D70E4] md:rounded-lg dark:bg-black shadow-xl  dark:shadow-gray-700 dark:border-gray-700 hover:scale-[1.03] rounded-xl">
      <div className="relative flex flex-col items-center justify-center gap-2 p-5 rounded-br-none">
        <div>
          <img
            className="object-cover h-[100px] sm:h-[120px] border-4 w-[100px] sm:w-[120px] rounded-full"
            src={
              "https://firebasestorage.googleapis.com/v0/b/summer-course-school.appspot.com/o/istockphoto-1191609321-612x612.jpg?alt=media&token=40d667f3-a7cb-42f5-b222-cb94c73fefca"
            }
            alt="Instructors Image"
          />
        </div>
        <h3 className="block text-base font-semibold leading-none tracking-tight text-gray-200 sm:text-lg">
          {"Category"}
        </h3>
        <h4 className="absolute p-4 font-semibold leading-3 text-gray-200 bg-gray-400 rounded-full sm:p-5 md:leading-3 md:text-xl dark:bg-gray-700 sm:top-5 sm:right-8 top-3 right-5">
          2
        </h4>
      </div>
      <div className="flex flex-col gap-2 md:justify-between px-5 py-5 dark:bg-gray-800 bg-gray-100 rounded-tr-[40px]">
        <h2 className="text-[17px] font-semibold leading-none tracking-tight sm:text-xl dark:text-gray-200">
          {"Md Minhaj"}
        </h2>
        <h4 className="text-[16px] font-semibold leading-none tracking-tight sm:text-lg dark:text-gray-300">
          {"minhaj@gmail.com"}
        </h4>
        <Link className="px-3 py-2 mt-4 text-base font-semibold text-center text-white rounded-md shadow bg-gradient-to-r from-purple-500 to-pink-500 focus:outline-none">
          See All Details
        </Link>
      </div>
    </div>
  );
};

export default AllInstructorsCard;
