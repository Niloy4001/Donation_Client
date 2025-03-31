import React, { useEffect, useState } from 'react'
import useAxiosPublic from '../hooks/useAxiosPublic'
import toast from 'react-hot-toast'
import moment from 'moment'

const Events = () => {
    const axiosPublic = useAxiosPublic()
    const [events, setEvents] = useState([])
    useEffect(()=>{

        try {
            const res = axiosPublic.get("/events")
            .then(res => setEvents(res.data))
            
        } catch (error) {
            toast.error(error)
        }

    },[])

    
  return (
    <div>
        <section className="bg-blue-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            📅 Our All Events!
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Participate in our events and contribute to environmental conservation.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                events.map(event=> 
                  <div key={event._id} className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-green-600">{event.title}</h3>
                    <p className="text-gray-600">{moment(event.date).format("MMM Do")} | {event.location}</p>
                  </div>)
            }
          </div>
  
          
        </div>
      </section>
    </div>
  )
}

export default Events