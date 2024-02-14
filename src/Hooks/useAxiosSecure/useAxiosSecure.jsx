import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:3000";

const useAxiosSecure = () => {
  const [axiosSecure, setAxiosSecure] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const axiosSecure = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

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
          // Unauthorized, navigate to login page
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    setAxiosSecure(axiosSecure);

    return () => {
      // Clean up interceptors when unmounting component
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
