import React from "react";
import DashBoardLeaderCard from "../../Components/DashBoardLeaderCard/DashBoardLeaderCard";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import DashBoardCoursesCard from "../../Components/DashBoardCoursesCard/DashBoardCoursesCard";

const InstructorDashBoard = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: instructorStatus, isLoading } = useQuery({
    queryKey: ["instructor-status"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/instructor-dashboard-status?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        <DashBoardLeaderCard
          bgColor={"bg-gray-400"}
          label={"Total Course"}
          value={instructorStatus?.totalCourse}
        />
        <DashBoardLeaderCard
          bgColor={"bg-blue-400"}
          label={"Course Enroll"}
          value={instructorStatus?.totalEnrollCount}
        />
        <DashBoardLeaderCard
          bgColor={"bg-indigo-400"}
          label={"Total Profit"}
          value={`$${instructorStatus?.profit || 0}`}
        />
      </div>
      <div className="py-5 md:py-8">
        <h2 className="text-xl font-bold text-gray-100 dark:text-gray-800 md:text-2xl">
          My Courses
        </h2>
        <div className="grid gap-5 py-5 lg:grid-cols-3">
          {instructorStatus?.courses?.map((item) => (
            <DashBoardCoursesCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashBoard;
