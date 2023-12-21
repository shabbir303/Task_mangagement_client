
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home";
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
]);

export default route;