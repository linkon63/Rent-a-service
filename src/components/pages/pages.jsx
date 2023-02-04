import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../auth/Login/Login";
import Registration from "../auth/Registration/Registration";
import Home from "../HomePage/Home/Home";

import Main from "../Layout/Main";

import Cars_Service_Page from "../lib/Cars_Service_Pages/Cars_Service_Page";
import Booking_Service from "../shared/Booking_Service/Booking_Service";

const pages = [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/about",
        element: <div>Hello about!</div>,
    },
    {
        path: "/cars_services",
        element: <Main />,
        children: [{
            path: "/cars_services",
            element: <Cars_Service_Page />
        }
        ]
    },
    {
        path: "/booking_service",
        element: <Main />,
        children: [{
            path: "/booking_service",
            element: <Booking_Service />
        }
        ]
    },
    {
        path: "/booking",
        element: <div>Hello booking!</div>,
    },
    {
        path: "/registration",
        element: <Registration />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <h1>Admin</h1>,
    },

]
export const router = createBrowserRouter(pages);

