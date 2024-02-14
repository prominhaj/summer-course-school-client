import React from "react";
import DashBoardCoursesCard from "../../Components/DashBoardCoursesCard/DashBoardCoursesCard";
import DashBoardLeaderCard from "../../Components/DashBoardLeaderCard/DashBoardLeaderCard";
import { Link } from "react-router-dom";

const UserDashBoard = () => {
  return (
    <div className="lg:h-[90vh] h-full px-5 py-5 text-gray-900 bg-gray-800 dark:bg-white md:px-8 md:py-8 rounded-tl-xl">
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
        <section className="py-8 md:py-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 className="text-xl font-bold md:text-2xl">My Courses</h2>
            <Link to="" className="text-lg font-medium md:text-xl">
              See All
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <DashBoardCoursesCard />
            <DashBoardCoursesCard />
            <DashBoardCoursesCard />
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashBoard;
