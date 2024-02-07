import { Link } from "react-router-dom";
import logo from "../../../assets/SCS-Logo-Light.png";
import Button from "../../Button/Button";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800">
      <div className="container px-5 mx-auto">
        <div className="grid items-start justify-center grid-cols-1 gap-5 md:grid-cols-4">
          <div className="flex items-center gap-2">
            <img className="w-auto h-8" src={logo} alt="" />
            <h2 className="self-center text-2xl font-semibold text-gray-800 whitespace-nowrap dark:text-white">
              SCS
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase dark:text-white">
              About
            </h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:underline hover:text-black dark:text-gray-200"
                >
                  Summer School
                </Link>
              </li>
              <li>
                <Link
                  to="/all-course"
                  className="text-gray-600 hover:underline hover:text-black dark:text-gray-200"
                >
                  All Course
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:underline hover:text-black dark:text-gray-200"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase dark:text-white">
              Follow
            </h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:underline hover:text-black dark:text-gray-200"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:underline hover:text-black dark:text-gray-200"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:underline hover:text-black dark:text-gray-200"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase dark:text-white">
              Subscribe
            </h2>
            <p className="text-gray-600 hover:text-black dark:text-gray-200">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div>
              <input
                type="email"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 dark:bg-gray-700 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-300 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <Button variant="red">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
