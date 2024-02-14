import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

const baseURL = "http://localhost:3000";

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          logout();
          navigate("/login");
        } else {
          // Handle other errors, e.g., display error message
          console.error("Request failed:", error.message);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      // Clean up interceptors when unmounting component
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, logout]);

  return [axiosSecure];
};

export default useAxiosSecure;
