import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOuts/MainLayOut/MainLayOut";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AddClass from "../../Pages/AddClass/AddClass";
import DashBoardPage from "../../Pages/DashBoard/DashBoardPage/DashBoardPage";
import Instructors from "../../Pages/Instructors/Instructors";
import InstructorRoute from "../InstructorRoute/InstructorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },

      //
      {
        path: "/addclass",
        element: <AddClass />,
      },
      {
        path: "/instructors",
        element: (
          <InstructorRoute>
            <Instructors />
          </InstructorRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoardPage />,
  },
]);

export default router;
