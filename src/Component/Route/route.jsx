
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Create from "../Dashboard/Create";
import DashLy from "../Layout/DashLy";
const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashLy></DashLy>,
        children: [
            {
                path:'create',
                element: <Create></Create>
            }
        ]
    }
]);

export default route;