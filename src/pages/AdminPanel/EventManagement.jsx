import React from 'react'
import AddEvent from '../../components/AddEvent'
import EventList from '../../components/EventList'

const EventManagement = () => {
  return (
    <div>
        <AddEvent></AddEvent>
        <EventList></EventList>
    </div>
  )
}

export default EventManagement