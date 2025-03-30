import React, { useContext } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context api/AuthProvider'

const Navbar = () => {
    const {user , logOut} = useContext(AuthContext)
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost text-xl">Donate</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/about"}>About Us</NavLink></li>
      <li><NavLink to={"/events"}>Events</NavLink></li>
      <li><NavLink to={"/donate"}>Donate</NavLink></li>
      <li><NavLink to={"/contact"}>Contact</NavLink></li>
      <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
      <li><NavLink to={"/myProfile"}>My Profile</NavLink></li>
      {
        user ? 
        <><li><button onClick={()=>logOut()}>Log out</button></li></> 
        : 
        <>
        <li><NavLink to={"/register"}>Register</NavLink></li>
        <li><NavLink to={"/login"}>Log In</NavLink></li>
        </>
      }
     
      
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar