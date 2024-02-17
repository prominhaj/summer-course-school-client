import React from "react";
import DashBoardCoursesCard from "../../Components/DashBoardCoursesCard/DashBoardCoursesCard";
import { useQuery } from "react-query";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import Loading from "./Loading/Loading";

const EnrollCourses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: enrollClasses, isLoading } = useQuery({
    queryKey: ["enroll-classes"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/enroll-classes?email=${user && user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-100 dark:text-gray-800 md:text-2xl">
        My Courses
      </h2>
      <div>
        {isLoading ? (
          <Loading />
        ) : enrollClasses ? (
          <div className="grid gap-5 lg:grid-cols-3">
            {enrollClasses?.map((item) => (
              <DashBoardCoursesCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <i className="text-lg text-gray-700 md:text-2xl dark:text-gray-400">
              NO Enroll Courses
            </i>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrollCourses;
