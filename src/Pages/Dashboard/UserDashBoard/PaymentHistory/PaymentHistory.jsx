import React from "react";
import { useQuery } from "react-query";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import DashBoardTable from "../../Components/MyTable/DashBoardTable";
import { TableCell, TableRow } from "@mui/material";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: paymentHistory, isLoading } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payment-history?email=${user?.email}`
      );
      return res.data;
    },
  });

  console.log(paymentHistory);
  return (
    <div className="lg:h-[90vh] h-full px-5 py-5 text-gray-900 bg-gray-800 dark:bg-white md:px-8 md:py-8 rounded-tl-xl">
      <DashBoardTable
        number={"0"}
        header1={"Email"}
        header2={"Classes Name"}
        header3={"Price"}
        header4={"Date"}
        header5="Order Number"
      >
        {paymentHistory?.map((item, index) => (
          <TableRow key={item._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell component="th" scope="row">
              {item.email}
            </TableCell>
            <TableCell align="left">{item.courseName}</TableCell>
            <TableCell align="center">{item.price}</TableCell>
            <TableCell align="center">{item.date}</TableCell>
            <TableCell align="center">{item.transactionId}</TableCell>
          </TableRow>
        ))}
      </DashBoardTable>
    </div>
  );
};

export default PaymentHistory;
