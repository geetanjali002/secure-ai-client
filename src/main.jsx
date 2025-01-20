import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./index.css";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Team from "./pages/Team";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserProvider from "./Context/UserProvider";
import FuturePlans from "./pages/FuturePlans";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path:'/plans',
        element:<FuturePlans/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={myRoute}>
      <AppLayout />
    </RouterProvider>
    </UserProvider>
  </React.StrictMode>
);
