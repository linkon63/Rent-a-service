import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../HomePage/Home/Home";
const pages = [
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

