import React from "react";
import { RouterProvider } from "react-router-dom";
import { create } from "zustand";
import { router } from "../pages/pages";

export const globalData = create(() => ({
  amount: 40,
}));

export default function Routers() {
  return <RouterProvider router={router} />;
}
