import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center pt-20">
        <span className="loading loading-dots loading-xs text-yellow-400"></span>
        <span className="loading loading-dots loading-sm text-yellow-400"></span>
        <span className="loading loading-dots loading-md text-yellow-400"></span>
        <span className="loading loading-dots loading-lg text-yellow-400"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
