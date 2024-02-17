import React from "react";
import useAuth from "../Hooks/useAuth/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import useIsAdmin from "../Hooks/useIsAdmin/useIsAdmin";

const AdminPrivate = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isLoading] = useIsAdmin();

  if (loading || isLoading) {
    return (
      <div className="my-8 text-center">
        <CircularProgress size={30} />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminPrivate;
