import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import DashBoardTable from "../../Components/MyTable/DashBoardTable";
import { TableCell, TableRow } from "@mui/material";

const UserWishList = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: myCarts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-carts"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/my-carts?email=${user && user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div className="lg:h-[90vh] h-full px-5 py-5 text-gray-900 bg-gray-800 dark:bg-white md:px-8 md:py-8 rounded-tl-xl">
      <div>
        {isLoading ? (
          ""
        ) : (
          <DashBoardTable
            data={myCarts}
            number={"0"}
            header1="Name"
            header2="Image"
            header3="Price"
            header4="Total Enroll"
            header5="Action"
          >
            {myCarts?.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">
                  <img
                    className="object-cover w-20 h-16 rounded-lg"
                    src={item.image}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.enrollEmail.length}</TableCell>
                <TableCell align="center">
                  <button>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </DashBoardTable>
        )}
      </div>
    </div>
  );
};

export default UserWishList;
