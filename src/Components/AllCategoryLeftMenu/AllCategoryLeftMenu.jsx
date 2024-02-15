import React from "react";
import { NavLink } from "react-router-dom";

const AllCategoryLeftMenu = ({ data, allRoute, route, firstText }) => {
  return (
    <div>
      <h2 className="block font-sans text-xl font-semibold dark:text-gray-200">
        All Category
      </h2>
      <div className="flex flex-row flex-wrap gap-2 mt-4 lg:gap-1 lg:flex-col">
        <NavLink
          to={allRoute}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "px-4 py-2 font-sans font-semibold bg-gray-200 text-gray-900 duration-300 border border-gray-300 rounded shadow-lg hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:bg-gray-600 dark:text-white dark:shadow-slate-800"
              : "px-4 py-2 font-sans font-semibold text-gray-900 duration-300 border border-gray-300 rounded shadow-lg hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:shadow-slate-800 dark:text-gray-300"
          }
        >
          {firstText}
        </NavLink>
        {data?.map((item) => (
          <NavLink
            key={item?.category}
            to={`/${route}/${item?.category}`}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "px-4 py-2 font-sans font-semibold text-gray-900 bg-gray-200 duration-300 border border-gray-300 rounded shadow-lg hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:bg-gray-600 dark:text-white capitalize dark:shadow-slate-800"
                : "px-4 py-2 font-sans font-semibold text-gray-900 duration-300 border border-gray-300 rounded shadow-lg hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:shadow-slate-800 capitalize dark:text-gray-300"
            }
          >
            {item?.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllCategoryLeftMenu;
