import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOuts/MainLayOut/MainLayOut";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    children : [
      {
        path : "/",
        element : <Home/>
      }
    ]
  },
]);

export default router;
