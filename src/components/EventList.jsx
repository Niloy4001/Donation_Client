import React, { useEffect, useState } from 'react'
import useAxiosPublic from '../hooks/useAxiosPublic'
import moment from 'moment'
import { MdDelete } from 'react-icons/md'
import toast from 'react-hot-toast'
import { FaEdit } from 'react-icons/fa'
import { GrRefresh } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const EventList = () => {
    const axiosPublic = useAxiosPublic()
    const [events, setEvents] = useState([])
   
    useEffect(()=>{

        try {
            const res = axiosPublic.get("/events")
            .then(res => setEvents(res.data))
            
        } catch (error) {
            toast.error(error)
        }

    },[events])
// handle delete
const handleDetlete =async (id)=>{
try {
   await axiosPublic.delete(`/event?id=${id}`)
   setEvents([])
   toast.success("Deleted Successfull")
} catch (error) {
    toast.error(error.message)
}
}

// handle refresh
const handleRefresh = ()=>{
    setEvents([])
}


  return (
    <div className='w-[90%] mx-auto my-[70px]'>
        {
                events.length > 0 && <>
                <div className=" mb-8 max-w-2xl">
                <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-1.5"><span>Event List</span> <button className='btn cursor-pointer' onClick={()=>handleRefresh()}><GrRefresh /></button> </h1>
                <p className="text-gray-600 mt-2">See All events and Manage your way</p>
              </div>
              <div className="overflow-x-auto rounded-box  w-full bg-white text-black">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="bg-green-600 text-white font-bold">
                      <th>Event Name</th>
                      <th>Date</th>
                      <th>Number Of Volunteer</th>
                      <th>Location</th>
                      <th>Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      events?.map((item) => 
                      <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{moment(item.date).format('l')}</td>
                        <td className="text-green-600">{item.volunteers_needed}$</td>
                        <td>{item.location}</td>
                        <td className='flex items-center gap-2'>
                            <Link to={`/dashboard/update/${item._id}`} className='cursor-pointer text-blue-700' ><FaEdit /></Link>
                            <button onClick={()=>handleDetlete(item._id)} className='cursor-pointer text-red-600'><MdDelete /></button></td>
                            
                      </tr>)
                    }
                   
                  </tbody>
                </table>
              </div>
                </>
              }
    </div>
  )
}

export default EventList