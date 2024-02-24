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
import AdminPrivate from "../PrivateRoute/AdminPrivate";
import AdminDashBoard from "../Pages/Dashboard/AdminDashBoard/AdminDashBoard/AdminDashBoard";
import ManageCourses from "../Pages/Dashboard/AdminDashBoard/ManageCourses/ManageCourses";
import ManageInstructors from "../Pages/Dashboard/AdminDashBoard/ManageInstructors/ManageInstructors";
import ManageUsers from "../Pages/Dashboard/AdminDashBoard/ManageUsers/ManageUsers";
import AllPayments from "../Pages/Dashboard/AdminDashBoard/AllPayments/AllPayments";
import InstructorPrivate from "../PrivateRoute/InstructorPrivate";
import InstructorDashBoard from "../Pages/Dashboard/InstructorDashBoard/InstructorDashboard/InstructorDashBoard";
import AddNewClasses from "../Pages/Dashboard/InstructorDashBoard/AddNewClasses/AddNewClasses";
import ManageAllClasses from "../Pages/Dashboard/InstructorDashBoard/ManageAllClasses/ManageAllClasses";
import UpdateClasses from "../Pages/Dashboard/InstructorDashBoard/UpdateClasses/UpdateClasses";

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
                `https://summer-course-school-server.vercel.app/all-instructors?category=${params.category}`
              ),
          },
        ],
      },
      {
        path: "/instructors/details/:id",
        element: <InstructorsDetails />,
        loader: ({ params }) =>
          fetch(`https://summer-course-school-server.vercel.app/instructor-details/${params.id}`),
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
                `https://summer-course-school-server.vercel.app/all-classes?category=${params.category}`
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
          fetch(`https://summer-course-school-server.vercel.app/classes-details/${params.id}`),
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
          fetch(`https://summer-course-school-server.vercel.app/classes-details/${params.id}`),
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
      // Admin Route
      {
        path: "/dashboard/admin-DashBoard",
        element: (
          <AdminPrivate>
            <AdminDashBoard />
          </AdminPrivate>
        ),
      },
      {
        path: "/dashboard/admin-manage-courses",
        element: (
          <AdminPrivate>
            <ManageCourses />
          </AdminPrivate>
        ),
      },
      {
        path: "/dashboard/admin-manage-instructors",
        element: (
          <AdminPrivate>
            <ManageInstructors />
          </AdminPrivate>
        ),
      },
      {
        path: "/dashboard/admin-manage-users",
        element: (
          <AdminPrivate>
            <ManageUsers />
          </AdminPrivate>
        ),
      },
      {
        path: "/dashboard/admin-all-payments",
        element: (
          <AdminPrivate>
            <AllPayments />
          </AdminPrivate>
        ),
      },

      // All Instructor Route
      {
        path: "/dashboard/instructor-DashBoard",
        element: (
          <InstructorPrivate>
            <InstructorDashBoard />
          </InstructorPrivate>
        ),
      },
      {
        path: "/dashboard/add-new-classes",
        element: (
          <InstructorPrivate>
            <AddNewClasses />
          </InstructorPrivate>
        ),
      },
      {
        path: "/dashboard/instructor-manage-all-classes",
        element: (
          <InstructorPrivate>
            <ManageAllClasses />
          </InstructorPrivate>
        ),
      },
      {
        path: "/dashboard/update-classes/:id",
        element: (
          <InstructorPrivate>
            <UpdateClasses />
          </InstructorPrivate>
        ),
        loader: ({ params }) =>
          fetch(`https://summer-course-school-server.vercel.app/update-classes/${params.id}`),
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
