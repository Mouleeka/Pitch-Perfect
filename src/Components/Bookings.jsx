// Bookings.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Bookings.css';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    type: '',
    date: '',
    time: '',
    location: '',
    players: 0,
  });
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    axios.get('/api/bookings/getusers')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the bookings!', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleCreateBooking = () => {
    axios.post('/api/bookings/postusers', newBooking)
      .then(response => {
        setBookings([...bookings, response.data]);
        setNewBooking({ type: '', date: '', time: '', location: '', players: 0 });
      })
      .catch(error => {
        console.error('There was an error creating the booking!', error);
      });
  };

  const handleUpdateBooking = () => {
    if (selectedBooking) {
      axios.put(`/api/bookings/${selectedBooking.id}`, newBooking)
        .then(response => {
          setBookings(bookings.map(booking =>
            booking.id === selectedBooking.id ? response.data : booking
          ));
          setSelectedBooking(null);
          setNewBooking({ type: '', date: '', time: '', location: '', players: 0 });
        })
        .catch(error => {
          console.error('There was an error updating the booking!', error);
        });
    }
  };

  const handleDeleteBooking = (id) => {
    axios.delete(`/api/bookings/${id}`)
      .then(() => {
        setBookings(bookings.filter(booking => booking.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the booking!', error);
      });
  };

  const handleGetBookingById = (id) => {
    axios.get(`/api/bookings/${id}`)
      .then(response => {
        setSelectedBooking(response.data);
        setNewBooking({
          type: response.data.type,
          date: response.data.date,
          time: response.data.time,
          location: response.data.location,
          players: response.data.players,
        });
      })
      .catch(error => {
        console.error('There was an error fetching the booking!', error);
      });
  };

  return (
    <div className="bookings-container">
      <h2>Bookings</h2>
      <div className="new-booking-form">
        <input
          type="text"
          name="type"
          value={newBooking.type}
          onChange={handleInputChange}
          placeholder="Type"
        />
        <input
          type="text"
          name="date"
          value={newBooking.date}
          onChange={handleInputChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="time"
          value={newBooking.time}
          onChange={handleInputChange}
          placeholder="Time"
        />
        <input
          type="text"
          name="location"
          value={newBooking.location}
          onChange={handleInputChange}
          placeholder="Location"
        />
        <input
          type="number"
          name="players"
          value={newBooking.players}
          onChange={handleInputChange}
          placeholder="Players"
        />
        <button onClick={handleCreateBooking}>Create Booking</button>
        <button onClick={handleUpdateBooking} disabled={!selectedBooking}>Update Booking</button>
      </div>
      <div className="bookings-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h3>{booking.type}</h3>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <p>Location: {booking.location}</p>
            <p>Players: {booking.players}</p>
            <button onClick={() => handleGetBookingById(booking.id)}>Edit</button>
            <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
