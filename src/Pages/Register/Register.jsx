import React from "react";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
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
                        Password must have one uppercase one lower case, 
                        one number and one special characters
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
                    id="confirmPassword"
                    type="password"
                    autoComplete="confirmPassword"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your Confirm Password"
                  />
                </div>
              </div>
              {/* Street Address */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Street address (Optional)
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your address"
                  />
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
                    id="gender"
                    autoComplete="gender-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-2 text-center">
              <Button
                className={"md:w-1/2 w-full my-5"}
                variant={"red"}
                type="submit"
              >
                Register
              </Button>
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
