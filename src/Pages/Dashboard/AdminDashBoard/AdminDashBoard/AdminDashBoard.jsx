import React from "react";
import DashBoardLeaderCard from "../../Components/DashBoardLeaderCard/DashBoardLeaderCard";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import DashBoardBarCharts from "../../Components/DashBoardCharts/DashBoardBarCharts";
import DashBoardPieCharts from "../../Components/DashBoardCharts/DashBoardPieCharts";

const AdminDashBoard = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: adminStatus } = useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-dashboard");
      return res.data;
    },
  });

  console.log(adminStatus);

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        <DashBoardLeaderCard
          bgColor={"bg-gray-400"}
          label={"Total Course"}
          value={adminStatus?.totalCourse}
        />
        <DashBoardLeaderCard
          bgColor={"bg-green-400"}
          label={"Course Enroll"}
          value={adminStatus?.totalEnroll}
        />
        <DashBoardLeaderCard
          bgColor={"bg-orange-400"}
          label={"Total Profit"}
          value={`$${adminStatus?.totalProfit}`}
        />
      </div>
      <div>
        <div className="py-5">
          <div className="grid items-center md:gap-10 md:grid-cols-2">
            <DashBoardBarCharts data={adminStatus?.chartsData} />
            <DashBoardPieCharts data={adminStatus?.chartsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
