import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useQuery } from "react-query";
import DashBoardTable from "../../Components/MyTable/DashBoardTable";
import { TableCell, TableRow } from "@mui/material";
import Button from "../../../../Components/Button/Button";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageAllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: allCourses,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-courses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-courses/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "For Delete This Course",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/course-delete/${id}`).then((res) => {
          if (res.data.acknowledged) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      {allCourses?.length > 0 ? (
        <DashBoardTable
          number="0"
          header1="Name"
          header2="Image"
          header3="Price"
          header4="TotalEnroll"
          header5="Update"
          header6="Action"
        >
          {allCourses?.map((item, index) => (
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
                <Link
                  to={`/dashboard/update-classes/${item._id}`}
                  className="flex items-center justify-center"
                >
                  <FaRegEdit className="text-3xl" />
                </Link>
              </TableCell>
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
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-center md:text-3xl">
            No Classes
          </h2>
        </div>
      )}
    </div>
  );
};

export default ManageAllClasses;
