import React from 'react'
import {  NavLink } from 'react-router-dom'

const DashboardSideNav = () => {
  return (
    <>
    <li><NavLink to={"/dashboard/overview"}>Overview</NavLink></li>
    <li><NavLink to={"/dashboard/manageUsers"}>Manage Users</NavLink></li>
    <li><NavLink to={"/dashboard/eventMangement"}>Event Management</NavLink></li>
    <li><NavLink to={"/dashboard/donations"}>Donations</NavLink></li>
    <li><NavLink to={"/dashboard/reportAndAnalytics"}>Reports & Analytics</NavLink></li>
    <li><NavLink to={"/dashboard/avaiableEvents"}>Available Events</NavLink></li>
    <li><NavLink to={"/dashboard/myAssignedEvents"}>My Assigned Events</NavLink></li>
    <li><NavLink to={"/dashboard/progressReports"}>Progress Reports</NavLink></li>
    <li><NavLink to={"/dashboard/myDonations"}> My Donations</NavLink></li>
    <li><NavLink to={"/dashboard/donateNow"}>Donate Now</NavLink></li>
    <li><NavLink to={"/dashboard/transactionHistory"}>Transaction History</NavLink></li>
    </>
  )
}

export default DashboardSideNav