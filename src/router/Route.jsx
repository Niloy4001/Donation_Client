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
import Donations from "../pages/AdminPanel/Donations";
import MyDonations from "../pages/DonorPanel/MyDonations";
import AvailableEvents from "../pages/VolunteerPanel/AvailableEvents";
import MyAssignedEvent from "../pages/VolunteerPanel/MyAssignedEvent";
import Progress from "../pages/VolunteerPanel/Progress";
import Overview from "../pages/AdminPanel/Overview";
import EventManagement from "../pages/AdminPanel/EventManagement";
import EventListUpdate from "../pages/AdminPanel/EventListUpdate";
import axios from "axios";



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
                element: <Overview></Overview>
            },
            {
                path:"/dashboard/manageUsers",
                element: <h1>Mangage Users</h1>
            },
            {
                path:"/dashboard/eventMangement",
                element:<EventManagement></EventManagement>
            },
            {
                path: "/dashboard/update/:id",
                element: <EventListUpdate />,
                loader: ({ params }) => axios.get(`http://localhost:3000/event/${params.id}`)
            },
            
            {
                path:"/dashboard/donations",
                element: <Donations></Donations>
            },
            {
                path:"/dashboard/reportAndAnalytics",
                element: <h1>Report and Analytics</h1>
            },
            {
                path:"/dashboard/avaiableEvents",
                element: <AvailableEvents></AvailableEvents>
            },
            {
                path:"/dashboard/myAssignedEvents",
                element: <MyAssignedEvent></MyAssignedEvent>
            },
            {
                path:"/dashboard/progressReports",
                element: <Progress></Progress>
            },
            {
                path:"/dashboard/myDonations",
                element: <MyDonations></MyDonations>
            },
            {
                path:"/dashboard/donateNow",
                element: <StripeProvider></StripeProvider>
            },
            {
                path:"/dashboard/transactionHistory",
                element:<Donations></Donations>
            },
        ]
    },
    {
        path:"*",
        element: <h1>page Not found</h1>,
    }
  ]);

  export default router;