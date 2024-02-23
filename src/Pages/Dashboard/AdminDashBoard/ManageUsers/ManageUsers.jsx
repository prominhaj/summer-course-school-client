import React, { useState } from "react";
import DashBoardTable from "../../Components/MyTable/DashBoardTable";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import {
  Avatar,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TableCell,
  TableRow,
} from "@mui/material";
import Button from "../../../../Components/Button/Button";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { toast } from "react-toastify";
import swal from "sweetalert";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [instructorOpen, setInstructorOpen] = useState(false);

  const {
    data: allUsers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure("/all-users");
      return res.data;
    },
  });

  const handleRole = async (item) => {
    if (!status) {
      return toast.error("Role Not Select");
    } else {
      await axiosSecure
        .patch(`/role-update/${item._id}?role=${status}`)
        .then((res) => {
          if (res.data.acknowledged) {
            setOpen(false);
            refetch();
            swal("SuccessFul Role Change", "", "success");
          }
        });
    }
  };

  // Cancel Instructor
  const handleCancelInstructor = async (id) => {
    await axiosSecure.patch(`/cancel-instructor/${id}`).then((res) => {
      if (res.data.acknowledged) {
        setInstructorOpen(false);
        refetch();
        swal("SuccessFul Role Change", "", "success");
      }
    });
  };

  const handleUserDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete User ${item.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user-delete/${item._id}`).then((res) => {
          if (res.data.acknowledged) {
            refetch();
            Swal.fire({
              title: "Deleted SuccessFul",
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
      <DashBoardTable
        number={"0"}
        header1="Name"
        header2="Image"
        header3="Email"
        header4="Role"
        header5="Action"
      >
        {allUsers?.map((item, index) => (
          <TableRow key={item._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell component="th" scope="row">
              {item.name}
            </TableCell>
            <TableCell>
              {" "}
              <Avatar src={item.photo} />
            </TableCell>
            <TableCell align="center">{item.email}</TableCell>
            <TableCell align="center">
              <div>
                {item.role === "admin" ? (
                  <Button
                    className={"disabled:cursor-not-allowed"}
                    disabled={user.email === item.email}
                    variant={`${item.role === "admin" ? "primary" : "delete"}`}
                    onClick={() => setOpen(true)}
                  >
                    {item.role === "admin" ? "Admin" : "Role"}
                  </Button>
                ) : item.role === "instructor" ? (
                  <Button
                    variant={`${
                      item.role === "instructor" ? "exit" : "delete"
                    }`}
                    onClick={() => setInstructorOpen(true)}
                  >
                    {item.role === "instructor" ? "Instructor" : "Role"}
                  </Button>
                ) : (
                  <Button
                    className={"disabled:cursor-not-allowed"}
                    disabled={user.email === item.email}
                    variant={`delete`}
                    onClick={() => setOpen(true)}
                  >
                    {"Role"}
                  </Button>
                )}

                <Modal
                  open={open}
                  onClose={() => setOpen(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="text-start">
                      <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Role
                        </FormLabel>
                        <div className="py-5">
                          <RadioGroup
                            onChange={(e) => setStatus(e.target.value)}
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="admin"
                              control={<Radio />}
                              label="Admin"
                            />
                            <FormControlLabel
                              value="instructor"
                              control={<Radio />}
                              label="Instructor"
                            />
                          </RadioGroup>
                        </div>
                        <Button
                          onClick={() => handleRole(item)}
                          variant={"primary"}
                        >
                          Send
                        </Button>
                      </FormControl>
                    </div>
                  </Box>
                </Modal>

                {/* Instructor Role */}
                <Modal
                  open={instructorOpen}
                  onClose={() => setInstructorOpen(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="text-start">
                      <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Are You Cancel Instructor
                        </FormLabel>
                        <div className="py-5"></div>
                        <Button
                          onClick={() => handleCancelInstructor(item._id)}
                          variant={"primary"}
                        >
                          You
                        </Button>
                      </FormControl>
                    </div>
                  </Box>
                </Modal>
              </div>
            </TableCell>
            <TableCell align="center">
              <Button onClick={() => handleUserDelete(item)} variant={"delete"}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </DashBoardTable>
    </div>
  );
};

export default ManageUsers;
