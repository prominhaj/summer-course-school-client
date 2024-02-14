import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/SCS-dark-logo.png";
import { HiMiniChevronDoubleLeft, HiMiniSquares2X2 } from "react-icons/hi2";
import { SiCoursera } from "react-icons/si";
import { MdFavoriteBorder, MdHome } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { GiTeacher } from "react-icons/gi";

// DashBoard Left Menu Items
const userLeftMenuItems = [
  {
    id: 1,
    name: "DashBoard",
    to: "/dashboard/user-DashBoard",
    icon: <HiMiniSquares2X2 />,
  },
  {
    id: 2,
    name: "Courses",
    to: "/dashboard/user-enroll-courses",
    icon: <SiCoursera />,
  },
  {
    id: 3,
    name: "Wishlist",
    to: "/dashboard/user-wishlist",
    icon: <MdFavoriteBorder />,
  },
  {
    id: 4,
    name: "Payment History",
    to: "/dashboard/user-payment-history",
    icon: <FaHistory />,
  },
  {
    id: 5,
    name: "Apply Instructor",
    to: "/dashboard/user-apply-instructor",
    icon: <GiTeacher />,
  },
];

const LeftMenu = () => {
  const [isActive, setIsAction] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (windowWidth < 1100) {
      setIsAction(false);
    } else {
      setIsAction(true);
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <nav
      className={`${
        isActive ? "w-[260px]" : "md:w-[95px] w-[70px] sm:w-[85px]"
      } sticky top-0 bottom-0 duration-300 left-0 h-screen p-3 sm:p-5`}
    >
      <div className="relative">
        <button
          onClick={() => setIsAction(!isActive)}
          className="absolute hidden p-1 text-black bg-gray-300 rounded-full md:block -right-8"
        >
          {isActive ? (
            <HiMiniChevronDoubleLeft className="text-2xl" />
          ) : (
            <HiMiniChevronDoubleRight className="text-2xl" />
          )}
        </button>
        <div className="flex flex-col items-center gap-1">
          <div>
            <img className="w-auto h-8 sm:h-10" src={logo} alt="Company Logo" />
          </div>
          <h2
            className={`italic font-medium dark:text-gray-200 text-gray-800 transition-all duration-300 ${
              !isActive && "hidden"
            }`}
          >
            SCS Academy
          </h2>
        </div>
        <div className="pt-10">
          <div className="flex flex-col gap-3">
            {userLeftMenuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `dark:text-blue-500 text-gray-200 block text-base text-center gap-3 md:flex px-2 md:px-3 rounded-lg border dark:border-none shadow-xl dark:shadow-gray-600 duration-300 dark:bg-gray-100 bg-gray-600 py-2 items-center font-semibold font-['Open Sans'] leading-normal tracking-wide`
                    : `text-neutral-500 md:flex items-center px-3 rounded-lg gap-3 duration-300 hover:bg-gray-500 dark:hover:bg-gray-100 font-semibold py-2 text-base font-['Open Sans'] block leading-normal dark:hover:text-gray-700 hover:text-gray-200 tracking-wide`
                }
              >
                <span className={`${isActive ? "text-2xl" : "text-3xl"}`}>
                  {item.icon}
                </span>
                <span
                  className={`transition-all duration-300 ${
                    !isActive && "hidden"
                  }`}
                >
                  {item.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="py-5">
          <hr className="border-gray-400 border-[1px]" />
        </div>
        <div className="">
          <Link
            to="/"
            className="text-neutral-500 md:flex items-center px-3 rounded-lg gap-3 duration-300 hover:bg-gray-500 dark:hover:bg-gray-100 font-semibold py-2 text-base font-['Open Sans'] block dark:hover:text-gray-700 leading-normal hover:text-gray-200 tracking-wide"
          >
            <span className="text-3xl">
              <MdHome />
            </span>
            <span
              className={`${!isActive && "hidden"} transition-all duration-300`}
            >
              Home
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LeftMenu;
