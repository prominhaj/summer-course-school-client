import { Link } from "react-router-dom";
import lightLogo from "../../../assets/SCS-Logo-Light.png";
import darkLogo from "../../../assets/SCS-dark-logo.png";
import Button from "../../Button/Button";
import stripeLogo from "../../../assets/Payment-Image/Stripe-Logo.png";
import masterCardLogo from "../../../assets/Payment-Image/master-card-logo.png";
import blueDebitCardLogo from "../../../assets/Payment-Image/blue-debit-card-logo.png";
import creditAndDebitCardLogo from "../../../assets/Payment-Image/debit-card-credit-logo.png";
import moment from "moment";
import useTheme from "../../../Hooks/useTheme/useTheme";

const Footer = () => {
  // TODO: theme no Changing
  const [theme] = useTheme();

  return (
    <footer className="py-10 bg-slate-50/60 dark:bg-[#0F1729]">
      <div className="container px-5 mx-auto">
        <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-2 ">
            <img
              className="w-auto h-8"
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="Your Company Logo"
            />
            <h2 className="self-center text-2xl font-semibold text-gray-800 whitespace-nowrap dark:text-white">
              SCS
            </h2>
          </div>
          <div className="flex flex-col gap-4 ">
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
                  to="/classes"
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
            <form>
              <input
                type="email"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 dark:bg-gray-700 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-300 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                required
              />
              <div className="mt-[10px]">
                <Button variant="primary">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-5 border-gray-300 md:my-7 dark:border-gray-300" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-end gap-3">
            <img className="w-12" src={stripeLogo} alt="logo" />
            <img className="w-12" src={masterCardLogo} alt="logo" />
            <img className="w-12" src={blueDebitCardLogo} alt="logo" />
            <img className="w-12" src={creditAndDebitCardLogo} alt="logo" />
          </div>
          <div>
            <p className="hover:underline dark:text-gray-200">
              © {moment().format("YYYY")} Summer Course School
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
