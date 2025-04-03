import React, { useState } from "react";


import { FaUsers, FaCalendarCheck, FaDollarSign } from "react-icons/fa";
import DashboardCard from "../../components/DashboardCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Overview = () => {
    const axiosPublic = useAxiosPublic()
    const [info, setInfo] = useState({})
    useState(()=>{
        axiosPublic.get("/overview")
        .then(res => setInfo(res.data))
    },[])
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard Overview</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Users" value={info?.totalUsers} icon={<FaUsers />} />
        <DashboardCard title="Total Events" value={info?.totalEvents} icon={<FaCalendarCheck />} />
        <DashboardCard title="Total Donations" value={info?.totalDonations} icon={<FaDollarSign />} />
      </div>

      
    </div>
  );
};

export default Overview;
