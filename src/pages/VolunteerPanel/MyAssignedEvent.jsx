import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context api/AuthProvider'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import moment from 'moment'
import toast from 'react-hot-toast'

const MyAssignedEvent = () => {
    const {user, loading} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [events, setEvents] = useState([])
    
    
    useEffect(()=>{
            
        const fetchData = async()=>{
            axiosPublic.get(`/join?email=${user?.email}`)
            .then(data => setEvents(data.data));  
        };
            fetchData()       
        },[user,events])

const handleComplete =async(event)=>{
 
    const {data}=await axiosPublic.post(`/submittedEvent?email=${user?.email}`,{event})
    console.log(data);
    
    if (data.acknowledged == 1) {
        setEvents([])
        toast.success("Your Complete Request sent to Admin")
    }else{
        toast.error("You have already sent Request")
    }
    

}
        
  return (
    <div>
                <section className="bg-blue-100 py-16 px-6">
                {
                    events?.length > 0 && 
                    <>
                    <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    📅 My Participated Event
                  </h2>
                  <p className="text-gray-700 text-lg mb-8">
                    Participate in our events and contribute to environmental conservation.
                  </p>
          
                  {/* Event List Table */}
                        <div className="overflow-x-auto w-full">
                          <table className="w-full bg-gray-100 rounded-lg overflow-hidden">
                            <thead>
                              <tr className="bg-green-500 text-white text-left">
                                <th className="py-3 px-4 ">Event Name</th>
                                <th className="py-3 px-4 ">Date</th>
                                <th className="py-3 px-4 ">Location</th>
                                <th className="py-3 px-4 ">Status</th>
                                <th className="py-3 px-4 ">Update</th>
                              </tr>
                            </thead>
                            <tbody>
                              {events?.map((event) => (
                                <tr key={event._id} className="border-b border-gray-300 text-left">
                                  <td className="py-3 px-4  text-green-600 font-semibold">{event.title}</td>
                                  <td className="py-3 px-4 ">{moment(event.paymentTime).format('l')}</td>
                                  <td className="py-3 px-4  font-semibold text-green-600">{event.location}</td>
                                  <td className="py-3 px-4  font-semibold text-green-600">{event.status}</td>
                                  <td className="py-3 px-4  font-semibold text-green-600">
                                    <button onClick={()=>handleComplete(event)} className='btn btn-sm bg-green-700 text-white'>Complete</button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
          
                  
                </div>
                    </>
                }
              </section>
            </div>
  )
}

export default MyAssignedEvent