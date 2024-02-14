import React, { useEffect } from "react";
import DashBoardHeader from "../../Pages/Dashboard/Shared/DashBoardHeader/DashBoardHeader";
import LeftMenu from "../../Pages/Dashboard/Shared/LeftMenu/LeftMenu";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/user-DashBoard");
    }
  }, [location, navigate]);

  return (
    <main className="dark:bg-[#0E111E] bg-gray-100 text-gray-800 dark:text-gray-200">
      <div className="flex items-start sm:gap-5 lg:gap-8">
        <div className="">
          <LeftMenu />
        </div>
        <div className="flex flex-col flex-1">
          <DashBoardHeader />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
