import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./index.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: <LandingPage />,
   },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
