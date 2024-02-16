import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Button from "../../../../Components/Button/Button";

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

  return (
    <div className="lg:h-[90vh] h-full px-5 py-5 text-gray-900 bg-gray-800 dark:bg-white md:px-8 md:py-8 rounded-tl-xl">
      <form className="p-5 mx-auto bg-white rounded-lg shadow-2xl lg:w-1/2 shadow-gray-800 dark:shadow-gray-500">
        <div className="flex flex-col gap-5">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
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
