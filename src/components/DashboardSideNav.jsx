import React from 'react'
import {  NavLink } from 'react-router-dom'

const DashboardSideNav = () => {
  return (
    <>
    <li><NavLink>Overview</NavLink></li>
    <li><NavLink>Manage Users</NavLink></li>
    <li><NavLink>Event Management</NavLink></li>
    <li><NavLink>Donations</NavLink></li>
    <li><NavLink>Reports & Analytics</NavLink></li>
    <li><NavLink>Available Events</NavLink></li>
    <li><NavLink>My Assigned Events</NavLink></li>
    <li><NavLink>Progress Reports</NavLink></li>
    <li><NavLink> My Donations</NavLink></li>
    <li><NavLink>Donate Now</NavLink></li>
    <li><NavLink>Transaction History</NavLink></li>
    </>
  )
}

export default DashboardSideNav