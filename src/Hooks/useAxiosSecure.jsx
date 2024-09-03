import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";
import { useEffect } from "react";

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  //Base url for all
  const axiosSecure = axios.create({
    baseURL: "https://goal-rush-server.vercel.app", // http://localhost:5000/  // change-1(done)
  });

  //Jwt header is here & use all over
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("Jwt-access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
