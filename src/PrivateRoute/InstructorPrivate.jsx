import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";
import useInstructor from "../Hooks/useInstructor/useInstructor";

const InstructorPrivate = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isInstructor, instructorLoading] = useInstructor();

  if (loading || instructorLoading) {
    return (
      <div className="my-8 text-center">
        <CircularProgress size={30} />
      </div>
    );
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} />;
};

export default InstructorPrivate;
