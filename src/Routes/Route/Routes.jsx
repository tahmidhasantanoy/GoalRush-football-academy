import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOuts/MainLayOut/MainLayOut";
import { Children } from "react";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    Children : [
      {
        path : "/",
        element : <Home/>
      }
    ]
  },
]);

export default router;
