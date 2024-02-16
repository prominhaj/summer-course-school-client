import React from "react";
import DashBoardCoursesCard from "../../Components/DashBoardCoursesCard/DashBoardCoursesCard";
import DashBoardLeaderCard from "../../Components/DashBoardLeaderCard/DashBoardLeaderCard";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth/useAuth";

const UserDashBoard = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: orderStatus = [], isLoading } = useQuery({
    queryKey: ["order-status"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/order-status?email=${user && user?.email}`
      );
      return res.data;
    },
  });

  const { allStatus, enrollClasses, totalEnrollCount } = orderStatus;

  return (
    <div className="lg:h-[90vh] h-full px-5 py-5 text-gray-900 bg-gray-800 dark:bg-white md:px-8 md:py-8 rounded-tl-xl">
      <div>
        <div className="grid gap-5 md:grid-cols-3">
          <DashBoardLeaderCard
            bgColor={"bg-gray-200"}
            label={"Course Enroll"}
            value={totalEnrollCount?.totalScore}
          />
          <DashBoardLeaderCard
            bgColor={"bg-green-200"}
            label={"Orders"}
            value={allStatus?.totalOrders}
          />
          <DashBoardLeaderCard
            bgColor={"bg-orange-200"}
            label={"Payments"}
            value={`$${allStatus?.totalPayments}`}
          />
        </div>
        <section className="py-8 md:py-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 className="text-xl font-bold text-gray-100 dark:text-gray-800 md:text-2xl">
              My Courses
            </h2>
            <Link
              to="/dashboard/user-enroll-courses"
              className="text-lg font-medium text-gray-100 dark:text-gray-800 md:text-xl"
            >
              See All
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {enrollClasses?.map((item) => (
              <DashBoardCoursesCard key={item._id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashBoard;
