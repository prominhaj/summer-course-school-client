import React from "react";
import DashBoardCoursesCard from "../../Components/DashBoardCoursesCard/DashBoardCoursesCard";
import DashBoardLeaderCard from "../../Components/DashBoardLeaderCard/DashBoardLeaderCard";

const UserDashBoard = () => {
  return (
    <div className="px-5 py-5 text-gray-900 bg-white md:px-8 md:py-8 rounded-tl-xl">
      <div>
        <div className="grid gap-5 md:grid-cols-3">
          <DashBoardLeaderCard
            bgColor={"bg-gray-200"}
            label={"Course Enroll"}
            value={"4"}
          />
          <DashBoardLeaderCard
            bgColor={"bg-green-200"}
            label={"Course Complete"}
            value={"2"}
          />
          <DashBoardLeaderCard
            bgColor={"bg-orange-200"}
            label={"Course Process"}
            value={"2"}
          />
        </div>
        <DashBoardCoursesCard />
      </div>
    </div>
  );
};

export default UserDashBoard;
