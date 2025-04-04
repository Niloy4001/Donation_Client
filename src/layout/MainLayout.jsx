import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-451px)]'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Toaster></Toaster>
    </div>
  )
}

export default MainLayout