import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Button from "../../../../Components/Button/Button";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import swal from "sweetalert";
import { toast } from "react-toastify";

// Category Items
const categoryItems = [
  "Design",
  "Marketing",
  "Programming",
  "Video Editing",
  "Business",
  "Consulting",
  "Data",
  "AI",
  "Teach Language",
];

const ApplyInstructor = () => {
  const [category, setCategory] = useState("");
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const handleApplyInstructor = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const newInstructor = {
      name,
      email: user?.email,
      image: user?.photoURL,
      category,
    };
    await axiosSecure.post("/apply-instructor", newInstructor).then((res) => {
      if (res.data.insertedId) {
        e.target.name.value = "";
        setCategory("");
        swal("Apply SuccessFul", "", "success");
      } else {
        toast.error(res.data.message);
      }
    });
  };

  return (
    <div>
      <form
        onSubmit={handleApplyInstructor}
        className="p-5 mx-auto bg-white rounded-lg shadow-2xl lg:w-1/2 shadow-gray-800 dark:shadow-gray-500"
      >
        <div className="flex flex-col gap-5">
          <TextField
            name="name"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categoryItems.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="mt-4 text-center">
          <Button
            className={"md:w-1/2 py-3 w-full"}
            type={"submit"}
            variant={"primary"}
          >
            Apply Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplyInstructor;
