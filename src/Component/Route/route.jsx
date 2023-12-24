
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
// import Dashboard from "../Layout/Dashboard";
import Create from "../Dashboard/Create";
import DashLy from "../Layout/DashLy";
import Login from "../Page/Authentication/Login";
import Register from "../Page/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path:'login',
              element: <Login></Login>
            },
            {
              path: 'register',
              element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashLy></DashLy></PrivateRoute>,
        children: [
            {
                path:'create',
                element: <Create></Create>
            }
        ]
    }
]);

export default route;