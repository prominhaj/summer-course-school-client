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
  "Hacking",
  "Business",
  "Consulting",
  "Data",
  "AI",
  "Teach Language",
];

const FormItem = ({
  handleSubmit,
  handleItem,
  register,
  errors,
  handing,
  data,
}) => {
  const [category, setCategory] = useState("");

  return (
    <form
      className="p-5 border rounded-lg shadow-md md:p-8"
      onSubmit={handleSubmit(handleItem)}
    >
      <h2 className="mb-3 text-2xl font-semibold text-center uppercase md:mb-5">
        {handing}
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <TextField
            {...register("name", { required: true })}
            id="name"
            defaultValue={data && data?.name}
            className="w-full"
            label="Name"
            variant="outlined"
          />
          {errors.name && (
            <p className="text-red-600 dark:text-red-400">
              <small>Name is required</small>
            </p>
          )}
        </div>
        <div>
          <TextField
            {...register("price", { required: true })}
            id="Price"
            className="w-full"
            defaultValue={data && data?.price}
            type="number"
            label="$ Price"
            variant="outlined"
          />
          {errors.price && (
            <p className="text-red-600 dark:text-red-400">
              <small>Price is required</small>
            </p>
          )}
        </div>
        {!data && (
          <div>
            <TextField
              {...register("image", { required: true })}
              id="image"
              className="w-full"
              type="file"
              variant="outlined"
            />
            {errors.image && (
              <p className="text-red-600 dark:text-red-400">
                <small>Image is required</small>
              </p>
            )}
          </div>
        )}
        <div>
          <FormControl fullWidth>
            <InputLabel id="category">Category</InputLabel>
            <Select
              {...register("category", { required: true })}
              labelId="category"
              id="demo-simple-select"
              value={data ? data?.category : category}
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
          {errors.category && (
            <p className="text-red-600 dark:text-red-400">
              <small>Category is required</small>
            </p>
          )}
        </div>
        <div>
          <TextField
            {...register("availableSeats", { required: true })}
            id="seats"
            className="w-full"
            defaultValue={data && data?.availableSeats}
            type="number"
            label="Seats Size Number"
            variant="outlined"
          />
          {errors.availableSeats && (
            <p className="text-red-600 dark:text-red-400">
              <small>Seats is required</small>
            </p>
          )}
        </div>
        <div className="flex flex-col md:col-span-2">
          <label
            className="mb-2 font-medium text-gray-800 opacity-80"
            htmlFor="details"
          >
            Details
          </label>
          <textarea
            {...register("details", { required: true })}
            className="w-full p-2 border rounded-md outline-none"
            id="details"
            rows={3}
            defaultValue={data && data.details}
            placeholder="Details"
          ></textarea>
          {errors.details && (
            <p className="text-red-600 dark:text-red-400">
              <small>Details is required</small>
            </p>
          )}
        </div>
      </div>
      <div className="mt-5">
        <Button type={"submit"} className={"w-full"} variant={"primary"}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormItem;
