import { CircularProgress } from "@mui/material";
import useAuth from "../Hooks/useAuth/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const AuthPrivate = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="my-8 text-center">
        <ScaleLoader color="#36d7b7" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default AuthPrivate;
