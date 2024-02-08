import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Register = () => {
  const [passMatch, setPassMatch] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { createAccount, updateNameAndPhoto, emailVerification } = useAuth();
  const imageUploadToken = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      toast.error("Password Don't Match");
      setPassMatch(true);
      setLoading(false);
    } else {
      setPassMatch(false);
      const { firstName, lastName, email, phone, password, photo, gender } =
        data;

      const formData = new FormData();
      formData.append("image", photo[0]);
      fetch(`https://api.imgbb.com/1/upload?key=${imageUploadToken}`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgRes) => {
          if (imgRes.success) {
            const name = firstName + " " + lastName;
            const photoUrl = imgRes.data.display_url;
            createAccount(email, password)
              .then((result) => {
                updateNameAndPhoto(name, photoUrl)
                  .then(() => {
                    const user = {
                      name,
                      email,
                      phone,
                      photo: photoUrl,
                      gender,
                      fbUid: result.user.uid,
                    };
                    axios
                      .post("http://localhost:3000/users", user)
                      .then((res) => {
                        if (res.data) {
                          setLoading(false);
                          reset();
                          toast.success("Register SuccessFul");
                          navigate("/");
                        }
                      });
                  })
                  .catch((error) => {
                    setLoading(false);
                    toast.error(error.message.substr(10));
                  });
              })
              .catch((error) => {
                setLoading(false);
                toast.error(error.message.substr(10));
              });
          }
        });
    }
  };

  return (
    <div>
      <div className="py-10 bg-gray-100 dark:bg-gray-800">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="container px-5 mx-auto"
        >
          <div className="sm:p-10 p-5 rounded-lg shadow-2xl dark:shadow-[#1a1919]">
            <h2 className="mb-6 text-2xl font-semibold text-center dark:text-gray-100">
              Register
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
              {/* First Name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  First name *
                </label>
                <div className="mt-2">
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    id="first-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>First Name is required</small>
                    </p>
                  )}
                </div>
              </div>
              {/* Last Name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Last name *
                </label>
                <div className="mt-2">
                  <input
                    {...register("lastName", { required: true })}
                    type="text"
                    id="last-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Last Name is required</small>
                    </p>
                  )}
                </div>
              </div>
              {/* Email */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Email address *
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", { required: true })}
                    id="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Email is required</small>
                    </p>
                  )}
                </div>
              </div>
              {/* Phone Number */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Phone Number *
                </label>
                <div className="mt-2">
                  <input
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      maxLength: 15,
                    })}
                    id="phone"
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter phone number"
                  />
                  {errors.phone?.type === "required" && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Phone Number is required</small>
                    </p>
                  )}
                  {errors.phone?.type === "minLength" && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Phone Number is Min 10 Character</small>
                    </p>
                  )}
                  {errors.phone?.type === "maxLength" && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Phone Number is Mix 15 Character</small>
                    </p>
                  )}
                </div>
              </div>
              {/* Password */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Password *
                </label>
                <div className="mt-2">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 18,
                      pattern:
                        /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                    })}
                    id="password"
                    type="password"
                    autoComplete="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your Password"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Password is required</small>
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Password is Min 10 Character</small>
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Password is Mix 15 Character</small>
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>
                        Password must have one uppercase one lower case, one
                        number and one special characters
                      </small>
                    </p>
                  )}
                </div>
              </div>
              {/* Confirm Password */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Confirm Password *
                </label>
                <div className="mt-2">
                  <input
                    {...register("confirmPassword", { required: true })}
                    id="confirmPassword"
                    type="password"
                    autoComplete="confirmPassword"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your Confirm Password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Confirm Password is required</small>
                    </p>
                  )}
                  {passMatch && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Password is Do Not Match</small>
                    </p>
                  )}
                </div>
              </div>
              {/* Photo */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="street-photo"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Photo *
                </label>
                <div className="mt-2">
                  <input
                    {...register("photo", { required: true })}
                    type="file"
                    id="street-photo"
                    autoComplete="street-photo"
                    className="block w-full text-gray-900 bg-white border-0 rounded-md shadow-sm dark:bg-gray-800 ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    placeholder="Enter your photo"
                  />
                  {errors.photo && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Photo is required</small>
                    </p>
                  )}
                </div>
              </div>
              {/* Gender */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Gender *
                </label>
                <div className="w-full mt-2">
                  <select
                    {...register("gender", { required: true })}
                    id="gender"
                    autoComplete="gender-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-600 dark:text-red-400">
                      <small>Gender is required</small>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 text-center">
              {loading ? (
                <div className="my-4"><CircularProgress size={30} /></div>
              ) : (
                <Button
                  className={"md:w-1/2 w-full my-5"}
                  variant={"red"}
                  type="submit"
                >
                  Register
                </Button>
              )}
            </div>
            <p className="text-center text-gray-800 dark:text-gray-100">
              Already Have a Account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
