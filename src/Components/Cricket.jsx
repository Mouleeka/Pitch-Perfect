import React, { useState } from "react";
import { GiCricketBat } from "react-icons/gi";
import "../Styles/Cricket.css";
import { useNavigate } from "react-router-dom";

const Cricket = () => {
  const navigate =useNavigate();
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "City Sports Complex",
      address: "123 Main St, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Available",
      contact: "555-1234",
      price: "$30 per hour",
      image: "https://plus.unsplash.com/premium_photo-1661893124136-b55e8d6fab48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Greenfield Cricket Arena",
      address: "456 Elm St, Hyderabad",
      hours: "7:00 AM - 11:00 PM",
      availability: "Limited",
      contact: "555-5678",
      price: "$35 per hour",
      image: "https://plus.unsplash.com/premium_photo-1661890079209-72b76e49768f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Sunrise Cricket Club",
      address: "789 Oak St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Fully Booked",
      contact: "555-8765",
      price: "$25 per hour",
      image: "https://images.pexels.com/photos/13509977/pexels-photo-13509977.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Riverside Cricket Hub",
      address: "12 River Rd, Hyderabad",
      hours: "8:00 AM - 8:00 PM",
      availability: "Available",
      contact: "555-4321",
      price: "$28 per hour",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fDDjSFI06LVeQe4Mq_WYP9PIzfChd_ijo03CMFL0DabuUU40z-F447wwUqjt3iKXGaI&usqp=CAU",
      
    },
    {
      id: 5,
      name: "Valley Sports Center",
      address: "23 Valley View, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Limited",
      contact: "555-6789",
      price: "$30 per hour",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmjX4cSWxsfkhiXne0QPxGvJI1gGOB8QxPA&s",
    },
    {
      id: 6,
      name: "Peak Performance Grounds",
      address: "98 Hilltop St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Available",
      contact: "555-9876",
      price: "$40 per hour",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVdeedx5rLOM8-7Iqveexd8RQpdrQfNjUHA&s",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredLocations =
    filter === "All"
      ? locations
      : locations.filter((location) => location.availability === filter);

  return (
    <div className="cricket-page-container">
      <h1 className="cricket-page-title">Cricket Turf Locations</h1>

      <div className="cricket-banner">
        <img
          src="https://media.istockphoto.com/id/1402084914/photo/cricket-ball-on-top-of-cricket-bat-on-green-grass-of-cricket-ground-background.jpg?s=612x612&w=0&k=20&c=PSz4n0BZ8sJL9uN9K3zF3Ay7PBakRMf9uL5tkz7QJ_k="
          alt="Cricket Banner"
          className="cricket-banner-image"
        />
      </div>

      <div className="cricket-filter">
        <label htmlFor="availabilityFilter">Filter by Availability:</label>
        <select
          id="availabilityFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Limited">Limited</option>
          <option value="Fully Booked">Fully Booked</option>
        </select>
      </div>

      <div className="cricket-location-list">
        {filteredLocations.map((location) => (
          <div key={location.id} className="cricket-location-card">
            <img
              src={location.image}
              alt={location.name}
              className="cricket-location-image"
            />
            <div className="cricket-location-content">
              <div className="cricket-icon">
                <GiCricketBat />
              </div>
              <h2 className="cricket-location-name">{location.name}</h2>
              <p className="cricket-location-address">{location.address}</p>
              <p className="cricket-location-hours">
                <strong>Hours:</strong> {location.hours}
              </p>
              <p className="cricket-availability">
                <strong>Status:</strong> {location.availability}
              </p>
              <p className="cricket-contact">
                <strong>Contact:</strong> {location.contact}
              </p>
              <p className="cricket-price">
                <strong>Price:</strong> {location.price}
              </p>
              <button
                className={`cricket-book-now ${
                  location.availability === "Fully Booked"
                   
                }`}
                onClick={() => navigate("/city2")}
                disabled={location.availability === "Fully Booked"}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default Cricket;
