import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Login from "../auth/Login/Login";
import Registration from "../auth/Registration/Registration";
import Home from "../HomePage/Home/Home";
import ServicesPage from "../lib/ServicesPages/ServicesPage";

import BookingService from "../shared/BookingService/BookingService";
import PaymentForm from "../forms/PaymentForm";
import SuccessfulPage from "../shared/SuccessfulPage/SuccessfulPage";
import PrivateRoute from "../Private/PrivateRoute";
import DashboardNav from "../shared/Navbar/DashboardNav";
import BookedPage from "../admin/Booked/BookedPage";
import SettingPage from "../admin/Setting/SettingPage";
import Contact from "../lib/ContactPage/Contact";
import Dashboard from "../admin/Dashboard/Dashboard";

const pages = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/home",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Main />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/services/:id",
    element: <Main />,
    children: [
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServicesPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/bookingService",
    element: <Main />,
    children: [
      {
        path: "/bookingService/:name/:id",
        element: (
          <PrivateRoute>
            <BookingService />
          </PrivateRoute>
        ),
      },
    ],
  },
  // TODO: It will work in future
  //   {
  //     path: "/payment",
  //     element: (
  //       <PrivateRoute>
  //         <PaymentForm />,
  //       </PrivateRoute>
  //     ),
  //   },
  //   {
  //     path: "/successful",
  //     element: (
  //       <PrivateRoute>
  //         <SuccessfulPage />,
  //       </PrivateRoute>
  //     ),
  //   },
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
    element: (
      <PrivateRoute>
        <DashboardNav>
          <Dashboard />
        </DashboardNav>
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/booked",
    element: (
      <PrivateRoute>
        <DashboardNav>
          <BookedPage />
        </DashboardNav>
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/setting",
    element: (
      <PrivateRoute>
        <DashboardNav>
          <SettingPage />
        </DashboardNav>
      </PrivateRoute>
    ),
  },
  {
    path: "/nav",
    element: (
      <PrivateRoute>
        <DashboardNav></DashboardNav>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <Home />,
  },
];
export const router = createBrowserRouter(pages);
