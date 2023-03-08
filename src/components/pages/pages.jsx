import {
    createBrowserRouter,
} from "react-router-dom";
import Admin from "../admin/Admin/Admin";
import Booked from "../admin/Booked/Booked";
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
        path: "/home",
        element: <Main />,
        children: [
            {
                path: '/home',
                element: <Home />
            }
        ]
    },
    {
        path: "/about",
        element: <div>Hello about!</div>,
    },
    {
        path: "/carsServices",
        element: <Main />,
        children: [{
            path: "/carsServices",
            element: <CarsServicePage />
        }
        ]
    },
    {
        path: "/bookingService",
        element: <Main />,
        children: [{
            path: "/bookingService/:id",
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
        element: <Admin />, // Refer to dashboard 
    },
    {
        path: "/dashboard",
        element: <Admin />,
    },
    {
        path: "/admin/booked",
        element: <Booked />,
    },
    {
        path: "*",
        element: <Home />,
    },

]
export const router = createBrowserRouter(pages);

