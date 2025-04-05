import { createBrowserRouter } from "react-router-dom";
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
import ManageUsers from "../pages/AdminPanel/ManageUsers";
import Analytics from "../pages/AdminPanel/Analytics";
import DonorPrivateRoute from "./DonorPrivateRoute";
import VolunteerPrivateRoute from "./VolunteerPrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/donate",
        element: <StripeProvider></StripeProvider>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <DonorPrivateRoute>
            <Profile></Profile>
          </DonorPrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/overview",
        element: (
          <AdminPrivateRoute>
            <Overview></Overview>,
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminPrivateRoute>
            <ManageUsers></ManageUsers>,
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/eventMangement",
        element: (
          <AdminPrivateRoute>
            <EventManagement></EventManagement>,
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <AdminPrivateRoute>
            <EventListUpdate />
          </AdminPrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`https://donate-murex.vercel.app/event/${params.id}`),
      },

      {
        path: "/dashboard/donations",
        element: (
          <AdminPrivateRoute>
            <Donations></Donations>,
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/reportAndAnalytics",
        element: (
          <AdminPrivateRoute>
            <Analytics></Analytics>,
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/avaiableEvents",
        element: (
          <VolunteerPrivateRoute>
            <AvailableEvents></AvailableEvents>
          </VolunteerPrivateRoute>
        ),
      },
      {
        path: "/dashboard/myAssignedEvents",
        element: (
          <VolunteerPrivateRoute>
            <MyAssignedEvent></MyAssignedEvent>,
          </VolunteerPrivateRoute>
        ),
      },
      {
        path: "/dashboard/progressReports",
        element: (
          <VolunteerPrivateRoute>
            <Progress></Progress>,
          </VolunteerPrivateRoute>
        ),
      },
      {
        path: "/dashboard/myDonations",
        element: (
          <DonorPrivateRoute>
            <MyDonations></MyDonations>
          </DonorPrivateRoute>
        ),
      },
      {
        path: "/dashboard/donateNow",
        element: (
          <DonorPrivateRoute>
            <StripeProvider></StripeProvider>,
          </DonorPrivateRoute>
        ),
      },
      {
        path: "/dashboard/transactionHistory",
        element: (
          <DonorPrivateRoute>
            <Donations></Donations>,
          </DonorPrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <h1>page Not found</h1>,
  },
]);

export default router;
