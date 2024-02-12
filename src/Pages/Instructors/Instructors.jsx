import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import useLoadData from "../../Hooks/useLoadData/useLoadData";
const Instructors = () => {
  const [data] = useLoadData("/all-instructors");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/instructors") {
      navigate("/instructors/all-instructors");
    }
  }, [location.pathname, navigate]);

  const { allCategory } = data;

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
                to={"/instructors/all-instructors"}
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
                  to={`/instructors/${item?.category}`}
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
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Instructors;
