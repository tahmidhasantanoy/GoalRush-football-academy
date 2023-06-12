import React from "react";
import useAuth from "../../Hooks/useAuth";
import useInstructor from "../../Hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();
  //   console.log(10, isInstructor?.instructor);

  if (loading || isInstructorLoading) {
    return (
      <>
        <div>
          <div className="flex items-center justify-center pt-20">
            <span className="loading loading-dots loading-xs text-yellow-400"></span>
            <span className="loading loading-dots loading-sm text-yellow-400"></span>
            <span className="loading loading-dots loading-md text-yellow-400"></span>
            <span className="loading loading-dots loading-lg text-yellow-400"></span>
          </div>
        </div>
      </>
    );
  }

  if (user && isInstructor?.instructor) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
