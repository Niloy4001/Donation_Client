import React, { useContext } from 'react'
import {  NavLink } from 'react-router-dom'
import useRole from '../hooks/useRole'
import Spinner from './Spinner'
import { AuthContext } from '../context api/AuthProvider'

const DashboardSideNav = () => {
    const {role} = useRole()
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <Spinner></Spinner>
    }
  return (
    <>
    {
        role === "Admin" && 
        <>
            <li><NavLink to={"/dashboard/overview"}>Overview</NavLink></li>
            <li><NavLink to={"/dashboard/manageUsers"}>Manage Users</NavLink></li>
            <li><NavLink to={"/dashboard/eventMangement"}>Event Management</NavLink></li>
            <li><NavLink to={"/dashboard/donations"}>Donations</NavLink></li>
            <li><NavLink to={"/dashboard/reportAndAnalytics"}>Reports & Analytics</NavLink></li>
        </>
    }
    {
        role === "Volunteer" &&
        <>
            <li><NavLink to={"/dashboard/avaiableEvents"}>Available Events</NavLink></li>
            <li><NavLink to={"/dashboard/myAssignedEvents"}>My Assigned Events</NavLink></li>
            <li><NavLink to={"/dashboard/progressReports"}>Progress Reports</NavLink></li>
        </>
    }
        
    {
        role === "Donor" &&
        <>
            <li><NavLink to={"/dashboard/myDonations"}> My Donations</NavLink></li>
            <li><NavLink to={"/dashboard/donateNow"}>Donate Now</NavLink></li>
            <li><NavLink to={"/dashboard/transactionHistory"}>Transaction History</NavLink></li>
        </>
    }
    </>
  )
}

export default DashboardSideNav