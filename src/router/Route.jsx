import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
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
            element: <Login></Login>,
        },
        {
            path:"/register",
            element: <Register></Register>,
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
            {
                path:"/dashboard/overview",
                element: <h1>Overview</h1>
            },
            {
                path:"/dashboard/manageUsers",
                element: <h1>Mangage Users</h1>
            },
            {
                path:"/dashboard/eventMangement",
                element: <h1>Event Mangement</h1>
            },
            {
                path:"/dashboard/donations",
                element: <h1>Donation</h1>
            },
            {
                path:"/dashboard/reportAndAnalytics",
                element: <h1>Report and Analytics</h1>
            },
            {
                path:"/dashboard/avaiableEvents",
                element: <h1>Available Events</h1>
            },
            {
                path:"/dashboard/myAssignedEvents",
                element: <h1>My Assigned Events</h1>
            },
            {
                path:"/dashboard/progressReports",
                element: <h1>Progress Reports</h1>
            },
            {
                path:"/dashboard/myDonations",
                element: <h1>My donations</h1>
            },
            {
                path:"/dashboard/donateNow",
                element: <h1>Donate Now</h1>
            },
            {
                path:"/dashboard/transactionHistory",
                element: <h1>Transaction History</h1>
            },
        ]
    },
    {
        path:"*",
        element: <h1>page Not found</h1>,
    }
  ]);

  export default router;