import {
    createBrowserRouter,
} from "react-router-dom";
const pages = [
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/about",
        element: <div>Hello about!</div>,
    },
    {
        path: "/booking",
        element: <div>Hello booking!</div>,
    },
    {
        path: "/registration",
        element: <div>Hello registration!</div>,
    },
    {
        path: "/login",
        element: <div>Hello login!</div>,
    },
]
export const router = createBrowserRouter(pages);

