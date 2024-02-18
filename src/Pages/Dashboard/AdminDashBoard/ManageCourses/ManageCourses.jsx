import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import DashBoardTable from "../../Components/MyTable/DashBoardTable";
import { TableCell, TableRow } from "@mui/material";
import Button from "../../../../Components/Button/Button";
import { ScaleLoader } from "react-spinners";
import Swal from "sweetalert2";

const ManageCourses = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: allClasses,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/manage-all-classes");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classes-delete/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Deleted This Course",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-100 dark:text-gray-800 md:text-2xl">
        Total Course: {allClasses?.length}
      </h2>
      <div>
        {isLoading ? (
          <div className="text-center">
            <ScaleLoader color="#36d7b7" />
          </div>
        ) : (
          <DashBoardTable
            number={"0"}
            header1={"Name"}
            header2={"Image"}
            header3={"Price"}
            header4={"Total Enroll"}
            header5="Action"
          >
            {allClasses?.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="left">
                  <img
                    className="object-cover w-20 h-16 rounded-lg"
                    src={item.image}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">
                  {item.price === "Free" ? "Free" : `$${item.price}`}
                </TableCell>
                <TableCell align="center">{item.enrollEmail?.length}</TableCell>
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

export default ManageCourses;
