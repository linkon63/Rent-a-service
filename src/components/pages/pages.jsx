import {
    createBrowserRouter,
} from "react-router-dom";
import Admin from "../admin/Admin/Admin";
import Login from "../auth/Login/Login";
import Registration from "../auth/Registration/Registration";
import Home from "../HomePage/Home/Home";

import Main from "../Layout/Main";
import CarsServicePage from "../lib/CarsServicePages/CarsServicePage";
import BookingService from "../shared/BookingService/BookingService";

const pages = [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
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
            element: <CarsServicePage />
        }
        ]
    },
    {
        path: "/booking_service",
        element: <Main />,
        children: [{
            path: "/booking_service",
            element: <BookingService />
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
        element: <Admin />,
    },

]
export const router = createBrowserRouter(pages);

