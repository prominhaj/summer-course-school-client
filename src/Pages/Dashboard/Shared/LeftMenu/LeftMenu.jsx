import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/SCS-dark-logo.png";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { SiCoursera } from "react-icons/si";
import { MdFavoriteBorder, MdHome } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";

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
    to: "/dashboard/user-courses",
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
];

const LeftMenu = () => {
  return (
    <nav className="sticky top-0 bottom-0 left-0 h-screen p-3 sm:p-5">
      <div className="relative">
        <button className="absolute right-0">
          <HiMiniChevronDoubleRight className="text-2xl" />
        </button>
        <div className="flex flex-col items-center gap-1">
          <div>
            <img className="w-auto h-8 sm:h-10" src={logo} alt="Company Logo" />
          </div>
          <h2 className="italic font-medium text-gray-200">SCS Academy</h2>
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
                    ? "text-blue-500 text-base flex px-3 rounded-lg shadow-xl shadow-gray-600 duration-300 bg-gray-100 py-2 items-center gap-3 font-semibold font-['Open Sans'] leading-normal tracking-wide"
                    : "text-neutral-500 flex items-center gap-3 px-3 rounded-lg duration-300 hover:bg-gray-100 font-semibold py-2 text-base font-['Open Sans'] leading-normal tracking-wide"
                }
              >
                <span className="text-2xl">{item.icon}</span>
                {item.name}
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
            className="text-neutral-500 flex items-center gap-3 px-3 rounded-lg duration-300 hover:bg-gray-100 font-semibold py-2 text-base font-['Open Sans'] leading-normal tracking-wide"
          >
            <span className="text-3xl">
              <MdHome />
            </span>
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LeftMenu;
