import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useForm } from "react-hook-form";
import Button from "../../../../Components/Button/Button";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import swal from "sweetalert";

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

const imageUploadToken = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;

const AddNewClasses = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [category, setCategory] = useState("");

  const handleAddItem = (item) => {
    const { name, price, image, category, availableSeats, details } = item;

    const formData = new FormData();
    formData.append("image", image[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${imageUploadToken}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const img = imgRes.data.display_url;
          const newCourse = {
            name,
            image: img,
            instructorName: user?.displayName,
            email: user?.email,
            profilePhoto: user?.photoURL,
            availableSeats: parseInt(availableSeats),
            price: parseFloat(price),
            category,
            details,
            enrollEmail: [],
          };
          axiosSecure.post("/add-new-classes", newCourse).then((res) => {
            if (res.data.acknowledged) {
              reset();
              swal("Course Added SuccessFul", "", "success");
            }
          });
        }
      });
  };

  return (
    <div>
      <form
        className="p-5 border rounded-lg shadow-md md:p-8"
        onSubmit={handleSubmit(handleAddItem)}
      >
        <h2 className="mb-3 text-2xl font-semibold text-center uppercase md:mb-5">
          Add New Course
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <TextField
              {...register("name", { required: true })}
              id="name"
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
          <div>
            <FormControl fullWidth>
              <InputLabel id="category">Category</InputLabel>
              <Select
                {...register("category", { required: true })}
                labelId="category"
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
    </div>
  );
};

export default AddNewClasses;
