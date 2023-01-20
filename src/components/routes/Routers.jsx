import React from 'react'
import {
    RouterProvider,
} from "react-router-dom";
import { router } from '../pages/pages';
export default function Routers() {
    return (
        <RouterProvider router={router} />
    )
}
