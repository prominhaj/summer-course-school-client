import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Instructors from "../Pages/Instructors/layout/Instructors";
import Classes from "../Pages/Classes/layout/Classes";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Profile from "../Pages/Profile/Profile";
import AuthPrivate from "../PrivateRoute/AuthPrivate";
import DashBoard from "../Layout/DashBoard/DashBoard";
import Home from "../Pages/Home/Home/Home";
import CategoryInstructors from "../Pages/Instructors/CategoryInstructors/CategoryInstructors";
import AllInstructors from "../Pages/Instructors/AllInstructors/AllInstructors";
import AllClasses from "../Pages/Classes/AllClasses/AllClasses";
import CategoryClasses from "../Pages/Classes/CategoryClasses/CategoryClasses";
import InstructorsDetails from "../Pages/InstructorsDetails/InstructorsDetails";
import ClassesDetails from "../Pages/ClassesDetails/ClassesDetails";
import UserDashBoard from "../Pages/Dashboard/UserDashBoard/UserDashBoard/UserDashBoard";
import EnrollCourses from "../Pages/Dashboard/UserDashBoard/EnrollCourses/EnrollCourses";
import UserWishList from "../Pages/Dashboard/UserDashBoard/UserWishList/UserWishList";
import PaymentHistory from "../Pages/Dashboard/UserDashBoard/PaymentHistory/PaymentHistory";
import ApplyInstructor from "../Pages/Dashboard/UserDashBoard/ApplyInstructor/ApplyInstructor";
import CourseDashBoard from "../Pages/CourseDashBoard/CourseDashBoard/CourseDashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
        children: [
          {
            path: "/instructors/all-instructors",
            element: <AllInstructors />,
          },
          {
            path: "/instructors/:category",
            element: <CategoryInstructors />,
            loader: ({ params }) =>
              fetch(
                `http://localhost:3000/all-instructors?category=${params.category}`
              ),
          },
        ],
      },
      {
        path: "/instructors/details/:id",
        element: <InstructorsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/instructor-details/${params.id}`),
      },
      {
        path: "classes",
        element: <Classes />,
        children: [
          {
            path: "/classes/all-classes",
            element: <AllClasses />,
          },
          {
            path: "/classes/:category",
            element: <CategoryClasses />,
            loader: ({ params }) =>
              fetch(
                `http://localhost:3000/all-classes?category=${params.category}`
              ),
          },
        ],
      },
      {
        path: "/classes/details/:id",
        element: (
          <AuthPrivate>
            <ClassesDetails />
          </AuthPrivate>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/classes-details/${params.id}`),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: (
          <AuthPrivate>
            <Profile />
          </AuthPrivate>
        ),
      },
      {
        path: "/course-dashboard/:id",
        element: (
          <AuthPrivate>
            <CourseDashBoard />,
          </AuthPrivate>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/classes-details/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AuthPrivate>
        <DashBoard />
      </AuthPrivate>
    ),
    children: [
      // User DashBoard Route
      {
        path: "/dashboard/user-DashBoard",
        element: <UserDashBoard />,
      },
      {
        path: "/dashboard/user-enroll-courses",
        element: <EnrollCourses />,
      },
      {
        path: "/dashboard/user-wishlist",
        element: <UserWishList />,
      },
      {
        path: "/dashboard/user-payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/user-apply-instructor",
        element: <ApplyInstructor />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
