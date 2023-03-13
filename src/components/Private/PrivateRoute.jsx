import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { sessionStorageGet } from '../functions/commonFunctions';


const PrivateRoute = ({ children }) => {
    {
        const location = useLocation();
        const userEmail = sessionStorageGet("user-email")
        // console.log("User mail", userEmail)
        if (userEmail) {
            return children;
        }
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    };
};

export default PrivateRoute;