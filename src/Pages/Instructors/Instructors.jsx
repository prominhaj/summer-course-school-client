import React from "react";
import useLoadData from "../../Hooks/useLoadData/useLoadData";
import { NavLink } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import InstructorsCard from "../../Components/InstructorsCard/InstructorsCard";
import AllInstructorsCard from "../../Components/AllInstructorsCard/AllInstructorsCard";

const Instructors = () => {
  const [data, dataLoading] = useLoadData("/all-instructors");
  const { allCategory, allInstructors, totalClasses } = data;

  console.log(totalClasses);
  return (
    <main className="bg-white dark:bg-[#0E1528] py-5">
      <div className="container px-5 mx-auto">
        <section className="flex flex-wrap items-start gap-5">
          <div className="w-[200px]">
            <h2 className="font-sans text-xl font-semibold dark:text-gray-200">
              All Category
            </h2>
            <div className="flex flex-col gap-1 mt-4">
              <NavLink
                to={"/instructors"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 font-sans font-semibold bg-gray-200 text-gray-900 duration-300 border border-gray-300 rounded shadow-lg hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:bg-gray-600 dark:text-white dark:shadow-slate-800"
                    : "px-4 py-2 font-sans font-semibold text-gray-900 duration-300 border border-gray-300 rounded shadow-lg hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:shadow-slate-800 dark:text-gray-300"
                }
              >
                All Instructors
              </NavLink>
              {allCategory?.map((item) => (
                <NavLink
                  key={item.category}
                  to={`/instructors/${item?.category?.toLowerCase()}`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "px-4 py-2 font-sans font-semibold text-gray-900 bg-gray-200 duration-300 border border-gray-300 rounded shadow-lg hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:bg-gray-600 dark:text-white dark:shadow-slate-800"
                      : "px-4 py-2 font-sans font-semibold text-gray-900 duration-300 border border-gray-300 rounded shadow-lg hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:shadow-slate-800 dark:text-gray-300"
                  }
                >
                  {item.category}
                </NavLink>
              ))}
            </div>
          </div>
          <section className="w-full">
            <div className="grid gap-5 md:grid-cols-2">
              <AllInstructorsCard />
            </div>

            {/* <nav
              className="inline-flex -space-x-px rounded-md shadow-sm isolate"
              aria-label="Pagination"
            >
              <button
                href="#"
                className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <a
                className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </a>
              <a
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <button className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </nav> */}
          </section>
        </section>
      </div>
    </main>
  );
};

export default Instructors;
