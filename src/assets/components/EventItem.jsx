import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {
  return (
  <Link to={`/events/${item.id}`} className="event-card">
      <p>{item.date} {item.time}</p>
      <h3>{item.title}</h3>
      <p>{item.location}</p>
      <p className="price">$ 60{item.price}</p>
    </Link>
  )
}

export default EventItem