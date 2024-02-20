import React from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import DashBoardTable from "../../Components/MyTable/DashBoardTable";
import { TableCell, TableRow } from "@mui/material";
import Button from "../../../../Components/Button/Button";

const AllPayments = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: AllPayments, isLoading } = useQuery({
    queryKey: ["All-Payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-payments");
      return res.data;
    },
  });

  console.log(AllPayments);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-100 dark:text-gray-800 md:text-2xl">
        Total Payments: {AllPayments?.length}
      </h2>
      <div>
        <DashBoardTable
          number={"0"}
          header1="Name"
          header2="Email"
          header3="Course Name"
          header4="Price"
          header5="Date"
          header6="TransactionId"
        >
          {AllPayments?.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="left">{item.email}</TableCell>
              <TableCell align="center">{item.courseName}</TableCell>
              <TableCell align="center">
                {item.price === "Free" ? item.price : `$${item.price}`}
              </TableCell>
              <TableCell align="center">{item.date}</TableCell>
              <TableCell align="center">
                {item.transactionId ? item.transactionId : "Free"}
              </TableCell>
            </TableRow>
          ))}
        </DashBoardTable>
      </div>
    </div>
  );
};

export default AllPayments;
