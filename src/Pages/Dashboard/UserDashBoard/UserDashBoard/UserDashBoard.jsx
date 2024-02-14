import React from "react";
import DashBoardCoursesCard from "../../Components/DashBoardCoursesCard/DashBoardCoursesCard";
import DashBoardLeaderCard from "../../Components/DashBoardLeaderCard/DashBoardLeaderCard";

const UserDashBoard = () => {
  return (
    <div className="h-[90vh] px-5 py-5 text-gray-900 bg-gray-800 dark:bg-white md:px-8 md:py-8 rounded-tl-xl">
      <div>
        <div className="grid gap-5 md:grid-cols-3">
          <DashBoardLeaderCard
            bgColor={"bg-gray-200"}
            label={"Course Enroll"}
            value={"4"}
          />
          <DashBoardLeaderCard
            bgColor={"bg-green-200"}
            label={"Orders"}
            value={"2"}
          />
          <DashBoardLeaderCard
            bgColor={"bg-orange-200"}
            label={"Payments"}
            value={"$24"}
          />
        </div>
        <div className="grid gap-5 py-10 md:grid-cols-3">
          <DashBoardCoursesCard />
          <DashBoardCoursesCard />
          <DashBoardCoursesCard />
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
