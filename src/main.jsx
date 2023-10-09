import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Appointment from "./pages/private/Appointment";
import MyPurchase from "./pages/private/MyPurchase";
import ServicesDtls from "./pages/private/ServicesDtls";
import AuthProvider from "./providers/AuthProvider";
import PrivateRaute from "./pages/private/PrivateRaute";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />, errorElement: <ErrorPage />,
    children: [
      { loader: () => fetch('/data.json'), path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { loader: () => fetch('/data.json'), path: "/services/:id", element: <PrivateRaute><ServicesDtls /></PrivateRaute> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/blog", element: <PrivateRaute><Appointment /></PrivateRaute> },
      { path: "/purchase", element: <PrivateRaute><MyPurchase /> </PrivateRaute> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></React.StrictMode>
);