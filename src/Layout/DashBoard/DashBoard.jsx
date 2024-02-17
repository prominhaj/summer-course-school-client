import React, { useEffect } from "react";
import DashBoardHeader from "../../Pages/Dashboard/Shared/DashBoardHeader/DashBoardHeader";
import LeftMenu from "../../Pages/Dashboard/Shared/LeftMenu/LeftMenu";
import { Outlet } from "react-router-dom";
import useIsAdmin from "../../Hooks/useIsAdmin/useIsAdmin";

const DashBoard = () => {
  const [isAdmin] = useIsAdmin();

  return (
    <main className="dark:bg-[#0E111E] bg-gray-100 text-gray-800 dark:text-gray-200">
      <div className="flex items-start sm:gap-5 lg:gap-8">
        <div className="">
          <LeftMenu isAdmin={isAdmin} />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <DashBoardHeader />
          <div className="lg:h-[90vh] h-full px-5 py-5 text-gray-200 dark:text-gray-800 bg-gray-800 dark:bg-white md:px-8 md:py-8 rounded-tl-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
