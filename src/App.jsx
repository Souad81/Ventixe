import { Route, Routes } from 'react-router-dom'
import './App.css'

import EventDetails from './assets/pages/EventDetails'
import EventPage from './assets/pages/EventPage'
import BookingEventPage from './assets/pages/BookingEventPage'

function App() {
  
  return (
    <>
    <Routes>
     
      <Route path="/" element={<EventPage />}  />
      <Route path="/events/booking/:id" element={<BookingEventPage />}  />
      <Route path="/events/:id" element={<EventDetails />}  />
     
    </Routes>
    </>
  )
}

export default App

