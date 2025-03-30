import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/home",
            element: <h1>Home</h1>,
        },
        {
            path:"/about",
            element: <h1>About Us</h1>,
        },
        {
            path:"/events",
            element: <h1>Events</h1>,
        },
        {
            path:"/donate",
            element: <h1>donate</h1>,
        },
        {
            path:"/contact",
            element: <h1>contact</h1>,
        },
        {
            path:"/login",
            element: <h1>login</h1>,
        },
        {
            path:"/register",
            element: <h1>register</h1>,
        },
      ]
    },
    {
        path:"/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path:"/dashboard",
                element: <h1>dashboard home</h1>
            },
        ]
    },
    {
        path:"*",
        element: <h1>page Not found</h1>,
    }
  ]);

  export default router;