/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Page/Authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // const navigate = useNavigate();
    const location = useLocation();
    
    if(loading){
        <Spinner aria-label="Extra large spinner example" size="xl" />
    }

    if(user){
      return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;