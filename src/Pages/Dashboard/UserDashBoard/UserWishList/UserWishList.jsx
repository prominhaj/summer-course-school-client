import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import DashBoardTable from "../../Components/MyTable/DashBoardTable";
import { TableCell, TableRow } from "@mui/material";
import Button from "../../../../Components/Button/Button";
import swal from "sweetalert";
import TableLoading from "../../Components/MyTable/TableLoading/TableLoading";

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

  const handleDelete = async (id) => {
    await axiosSecure.delete(`/my-carts/${id}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        swal("Delete SuccessFul", "", "success");
      }
    });
  };

  return (
    <div className="lg:h-[90vh] h-full px-5 py-5 text-gray-900 bg-gray-800 dark:bg-white md:px-8 md:py-8 rounded-tl-xl">
      <div>
        <h2 className="mb-4 text-xl font-medium text-gray-200 md:text-2xl dark:text-gray-800">
          Total Carts: {myCarts?.length}
        </h2>
        {isLoading ? (
          <TableLoading />
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
                  <Button
                    onClick={() => handleDelete(item._id)}
                    variant={"delete"}
                  >
                    Delete
                  </Button>
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
