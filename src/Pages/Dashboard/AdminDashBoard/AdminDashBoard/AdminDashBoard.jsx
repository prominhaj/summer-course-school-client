import React from "react";
import DashBoardLeaderCard from "../../Components/DashBoardLeaderCard/DashBoardLeaderCard";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";

const AdminDashBoard = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: adminStatus } = useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-dashboard");
      return res.data;
    },
  });

  const { totalCourse, totalEnroll, totalProfit } = adminStatus;

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        <DashBoardLeaderCard
          bgColor={"bg-gray-400"}
          label={"Total Course"}
          value={totalCourse}
        />
        <DashBoardLeaderCard
          bgColor={"bg-green-400"}
          label={"Course Enroll"}
          value={totalEnroll}
        />
        <DashBoardLeaderCard
          bgColor={"bg-orange-400"}
          label={"Total Profit"}
          value={`$${totalProfit}`}
        />
      </div>
    </div>
  );
};

export default AdminDashBoard;
