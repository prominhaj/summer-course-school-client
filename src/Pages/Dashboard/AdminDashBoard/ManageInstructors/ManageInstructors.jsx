import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import DashBoardTable from "../../Components/MyTable/DashBoardTable";
import { TableCell, TableRow } from "@mui/material";
import Button from "../../../../Components/Button/Button";
import Swal from "sweetalert2";
import ManageInstructorsPending from "./ManageInstructorsPending";

const ManageInstructors = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: allInstructors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manage-all-Instructors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/manage-all-instructors");
      return res.data;
    },
  });

  const handleDelete = (item) => {
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
        axiosSecure
          .delete(`/instructor/delete/${item._id}?email=${item.email}`)
          .then((res) => {
            if (res.data.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Deleted This Instructor",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <TabView>
        <TabPanel header="All Instructors">
          <div>
            <DashBoardTable
              number={"0"}
              header1="Name"
              header2="Image"
              header3="Total Course"
              header4="Category"
              header5="Action"
            >
              {allInstructors?.allInstructors?.map((item, index) => (
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
                  <TableCell align="center">{item.totalCourse}</TableCell>
                  <TableCell align="center">{item.category}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => handleDelete(item)}
                      variant={"delete"}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </DashBoardTable>
          </div>
        </TabPanel>
        <TabPanel header="Pending">
          <div>
            <ManageInstructorsPending
              data={allInstructors?.pendingInstructors}
              refetch={refetch}
            />
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default ManageInstructors;
