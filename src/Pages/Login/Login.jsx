import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import axios from "axios";

const Login = () => {
  const { login, googleSingIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (item) => {
    setLoading(true);
    login(item.email, item.password)
      .then(() => {
        setLoading(false);
        reset();
        toast.success("Login SuccessFul");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message.substr(10));
      });
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    googleSingIn()
      .then((result) => {
        const data = result.user;
        const user = {
          name: data.displayName,
          email: data.email,
          photo: data.photoURL,
          fbUid: data.uid,
        };
        axios
          .post("http://localhost:3000/users", user)
          .then((res) => {
            if (res.data) {
              setLoading(false);
              toast.success("Login SuccessFul");
              navigate(from, { replace: true });
            }
          })
          .catch(() => {
            setLoading(false);
            toast.success("Login SuccessFul");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message.substr(10));
      });
  };

  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-800">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="container px-5 mx-auto"
      >
        <div className="md:px-10 px-5 lg:px-20 sm:py-10 py-5 md:w-3/4 xl:w-2/4 mx-auto rounded-lg shadow-2xl dark:shadow-[#1a1919]">
          <h2 className="mb-6 text-2xl font-semibold text-center dark:text-gray-100">
            Login
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            {/* Email */}
            <div className="sm:col-span-2">
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

            {/* Password */}
            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
              >
                Password *
              </label>
              <div className="relative mt-2">
                <input
                  {...register("password", { required: true })}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your Password"
                />
                {/* Show Password */}
                <button
                  type="button"
                  className="absolute toggle-password right-3 bottom-[0.4rem]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEyeSlash className="text-2xl text-black dark:text-white" />
                  ) : (
                    <FaRegEye className="text-2xl text-black dark:text-white" />
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-600 dark:text-red-400">
                    <small>Password is required</small>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="py-3">
            <button className="text-indigo-500 hover:underline" type="button">
              Forget Password
            </button>
            {loading ? (
              <div className="my-4 text-center">
                <CircularProgress size={30} />
              </div>
            ) : (
              <Button
                className={"w-full mt-3"}
                variant={"primary"}
                type="submit"
              >
                Login
              </Button>
            )}
          </div>
          <p className="mt-2 text-gray-800 text-start dark:text-gray-100">
            Summer Course School New?{" "}
            <Link to="/register" className="text-red-500 hover:underline">
              Register
            </Link>
          </p>
          <div>
            <SocialLogin googleLogin={handleGoogleLogin} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
