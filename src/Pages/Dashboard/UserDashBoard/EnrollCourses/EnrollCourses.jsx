import React from "react";
import DashBoardCoursesCard from "../../Components/DashBoardCoursesCard/DashBoardCoursesCard";

const EnrollCourses = () => {
  return (
    <div className="lg:h-[90vh] h-full px-5 py-5 text-gray-900 bg-gray-800 dark:bg-white md:px-8 md:py-8 rounded-tl-xl">
      <h2 className="mb-4 text-xl font-bold text-gray-100 dark:text-gray-800 md:text-2xl">
        My Courses
      </h2>
      <div className="grid gap-5 lg:grid-cols-3">
        <DashBoardCoursesCard />
        <DashBoardCoursesCard />
        <DashBoardCoursesCard />
        <DashBoardCoursesCard />
        <DashBoardCoursesCard />
        <DashBoardCoursesCard />
      </div>
    </div>
  );
};

export default EnrollCourses;
