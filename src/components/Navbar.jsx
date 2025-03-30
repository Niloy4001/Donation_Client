import React from 'react'
import {  Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost text-xl">Donate</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li><NavLink to={"/home"}>Home</NavLink></li>
      <li><NavLink to={"/about"}>About Us</NavLink></li>
      <li><NavLink to={"/events"}>Events</NavLink></li>
      <li><NavLink to={"/donate"}>Donate</NavLink></li>
      <li><NavLink to={"/contact"}>Contact</NavLink></li>
      <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
      <li><NavLink to={"/myProfile"}>My Profile</NavLink></li>
      <li><NavLink to={"/register"}>Register</NavLink></li>
      <li><NavLink to={"/login"}>Log In</NavLink></li>
      <li><NavLink to={"/logout"}>Log out</NavLink></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar