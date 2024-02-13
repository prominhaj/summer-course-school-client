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
import CourseEnroll from "../Pages/CourseEnroll/CourseEnroll";

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
        element: <ClassesDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/classes-details/${params.id}`),
      },
      {
        path: "/course-enroll/:id",
        element: (
          <AuthPrivate>
            <CourseEnroll />
          </AuthPrivate>
        ),
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
        element: <Profile />,
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
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
