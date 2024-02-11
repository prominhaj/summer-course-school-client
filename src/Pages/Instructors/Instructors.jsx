import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllInstructorsCard from "../../Components/AllInstructorsCard/AllInstructorsCard";
import axios from "axios";
import useLoadData from "../../Hooks/useLoadData/useLoadData";
import { Pagination } from "@mui/material";
import CardLoading from "../../Components/CardLoading/CardLoading";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [data] = useLoadData("/total-instructors-count");
  const [currentPage, setCurrentPage] = useState(1);
  const [instructorsPerPage] = useState(6);
  const totalPages = Math.ceil(data?.totalDataCount / instructorsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get(
        `http://localhost:3000/all-instructors?page=${currentPage}&limit=${instructorsPerPage}`
      );
      setInstructors(res?.data);
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage, instructorsPerPage]);

  const { allCategory, allInstructors } = instructors;

  return (
    <main className="bg-white dark:bg-[#0E1528] py-5">
      <div className="container px-5 mx-auto">
        <section className="flex flex-col items-start gap-5 lg:flex-row">
          <div className="lg:w-[200px] w-full">
            <h2 className="block font-sans text-xl font-semibold dark:text-gray-200">
              All Category
            </h2>
            <div className="flex flex-row flex-wrap gap-2 mt-4 lg:gap-1 lg:flex-col">
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
          <section className="flex-1 w-full">
            {loading ? (
              <CardLoading />
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {allInstructors?.map((item) => (
                    <AllInstructorsCard key={item._id} item={item} />
                  ))}
                </div>
                <div className="pt-8">
                  <Pagination
                    onChange={handleChange}
                    className="flex justify-center py-2 bg-gray-300 rounded-md"
                    size="large"
                    page={currentPage}
                    count={totalPages || 1}
                    color="primary"
                  />
                </div>
              </>
            )}
          </section>
        </section>
      </div>
    </main>
  );
};

export default Instructors;
