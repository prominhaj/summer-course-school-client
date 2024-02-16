import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

const baseURL = "http://localhost:3000";

const axiosSecure = axios.create({
  baseURL: baseURL,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        logout();
        navigate("/login");
      } else {
        console.error("Request failed:", error.message);
      }
      return Promise.reject(error);
    }
  );

  return [axiosSecure];
};

export default useAxiosSecure;
