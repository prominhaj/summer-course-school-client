import React from "react";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-800">
      <form className="container px-5 mx-auto">
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
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter email address"
                />
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
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your Password"
                />
              </div>
            </div>
          </div>
          <div className="py-3">
            <button className="text-indigo-500 hover:underline" type="button">
              Forget Password
            </button>
            <Button
              className={"w-full mt-3"}
              variant={"primary"}
              type="submit"
            >
              Login
            </Button>
          </div>
          <p className="text-gray-800 text-start dark:text-gray-100">
            Summer Course School New?{" "}
            <Link to="/register" className="text-red-500 hover:underline">
              Register
            </Link>
          </p>
          <div>
            <SocialLogin />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
