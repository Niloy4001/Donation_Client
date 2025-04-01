import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import StripeProvider from "../payments/StripeProvider";
import Profile from "../pages/Profile";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/about",
            element: <AboutUs></AboutUs>,
        },
        {
            path:"/events",
            element: <Events></Events>,
        },
        {
            path:"/donate",
            element: <StripeProvider></StripeProvider>,
        },
        {
            path:"/contact",
            element: <Contact></Contact>,
        },
        {
            path:"/profile",
            element: <Profile></Profile>,
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