import React, { useState } from "react";
import DashBoardTable from "../../Components/MyTable/DashBoardTable";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Button from "../../../../Components/Button/Button";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import swal from "sweetalert";

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

const ManageInstructorsPending = ({ data, refetch }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [axiosSecure] = useAxiosSecure();

  const handleAction = async (id) => {
    await axiosSecure
      .delete(`/pending-instructor/${id}?value=${status}`)
      .then((res) => {
        if (res.data.deletedCount) {
          refetch();
          swal("Status SuccessFul", "", "success");
        }
      });
  };

  return (
    <div>
      {data.length > 0 ? (
        <DashBoardTable
          number={"0"}
          header1="Name"
          header2="Image"
          header3="Email"
          header4="Category"
          header5="Action"
        >
          {data?.map((item, index) => (
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
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">{item.category}</TableCell>
              <TableCell align="center">
                <div>
                  <Button variant={"delete"} onClick={() => setOpen(true)}>
                    Pending
                  </Button>
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
                            Status
                          </FormLabel>
                          <div className="py-5">
                            <RadioGroup
                              onChange={(e) => setStatus(e.target.value)}
                              aria-labelledby="demo-radio-buttons-group-label"
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                value="accepted"
                                control={<Radio />}
                                label="Accepted"
                              />
                              <FormControlLabel
                                value="reject"
                                control={<Radio />}
                                label="Reject"
                              />
                            </RadioGroup>
                          </div>
                          <Button
                            onClick={() => handleAction(item._id)}
                            variant={"primary"}
                          >
                            Send
                          </Button>
                        </FormControl>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </DashBoardTable>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-medium md:text-2xl">
            No Pending Instructors
          </h2>
        </div>
      )}
    </div>
  );
};

export default ManageInstructorsPending;
