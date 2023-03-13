import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main"

import Admin from "../admin/Admin/Admin";
import Booked from "../admin/Booked/Booked";
import Login from "../auth/Login/Login";
import Registration from "../auth/Registration/Registration";
import Home from "../HomePage/Home/Home";

import CarsServicePage from "../lib/CarsServicePages/CarsServicePage";
import BookingService from "../shared/BookingService/BookingService";
import PaymentForm from "../forms/PaymentForm";

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
            path: "/carsServices/:id",
            element: <CarsServicePage />
        }
        ]
    },
    {
        path: "/bookingService",
        element: <Main />,
        children: [{
            path: "/bookingService/:name/:id",
            element: <BookingService />
        }
        ]
    },
    {
        path: "/booking",
        element: <div>Hello booking!</div>,
    },
    {
        path: "/payment",
        element: <PaymentForm />,
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

