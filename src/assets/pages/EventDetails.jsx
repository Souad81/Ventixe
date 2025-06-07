
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetails = () => {
    const { id } = useParams()

 const[event, setEvent] = useState({})
 
   const getEvents = async () => {
     const res = await fetch (`https://eventsouad-faf4fpakcve4gzgk.swedencentral-01.azurewebsites.net/api/events/${id}`)
     if (res.ok) {
       const response = await res.json()
       setEvent(response.result)
     }
   }
 
   useEffect(() => {
       getEvents()
   }, [])

  return (
    <div className="event-detials">
   <div className="event-content"> 
      <h1>{event.title}</h1>

      <p>{event.date}  {event.time}</p>
        <p>{event.location}</p>

        <section>
          <h2>About</h2>
          <p>{event.description || "This is a detailed description of the event, what to expect, and why you should attend."}</p>
        </section>

        <section>
          <h2>Terms & Conditions</h2>
          <ul>
            <li>All attendees must present a valid ticket at entry.</li>
            <li>Security checks will be performed.</li>
            <li>No outside food or drink allowed.</li>
            <li>Non-refundable tickets unless cancelled by organizers.</li>
          </ul>
        </section>
      </div>

 <div className="event-packages">
        <h3>Seat Plan</h3>
        
      <Link to={`/events/booking/${id}`}>Book Event</Link>
    </div>
    </div>
  )
}

export default EventDetails