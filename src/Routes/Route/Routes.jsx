import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOuts/MainLayOut/MainLayOut";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AddClass from "../../Pages/AddClass/AddClass";
import DashBoardPage from "../../Pages/DashBoard/DashBoardPage/DashBoardPage";
import Instructors from "../../Pages/Instructors/Instructors";
import InstructorRoute from "../InstructorRoute/InstructorRoute";
import AllClasses from "../../Pages/AllClasses/AllClasses";
import SelectClasses from "../../Pages/DashBoard/UserPage/SelectClasses/SelectClasses";
import PaymentPage from "../../Pages/DashBoard/UserPage/Payement/PaymentPage/PaymentPage";
import MyClass from "../../Pages/DashBoard/InstructorPage/MyClass/MyClass";
import PaymentHistory from "../../Pages/DashBoard/UserPage/PaymentHistory/PaymentHistory";
import EnrollClass from "../../Pages/DashBoard/UserPage/EnrollClass/EnrollClass";
import ManageUsers from "../../Pages/DashBoard/AdminPage/ManageUsers/ManageUsers";
import ManageClass from "../../Pages/DashBoard/AdminPage/ManageClass/ManageClass";
import Error from "../../Pages/Error/Error";
import UpdateClass from "../../Pages/DashBoard/InstructorPage/UpdateClass/UpdateClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement : <Error/>,
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
      {
        path: "/instructors",
        element: (
          <InstructorRoute>
            <Instructors />
          </InstructorRoute>
        ),
      },
      {
        path: "/allclasses",
        element: <AllClasses />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoardPage />,
    children: [
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "select-classes",
        element: <SelectClasses />,
      },
      {
        path: "payment/:item",
        element: <PaymentPage />,
      },
      {
        path: "myclass",
        element: <MyClass />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "enroll-class",
        element: <EnrollClass />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path : "manage-class",
        element : <ManageClass/>
      },
      {
        path : "updateClass/:id",
        element : <UpdateClass/>,
        loader : ({params}) => fetch(`http://localhost:5000/all-class/${params.id}`)
      }
    ],
  },
]);

export default router;
