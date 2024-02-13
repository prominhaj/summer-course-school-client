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
    <main className="bg-[#0E111E] text-gray-200">
      <div className="flex items-start gap-5">
        <div className="w-[254px]">
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
