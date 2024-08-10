import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate
import { GiShuttlecock } from "react-icons/gi";
import "../Styles/Badminton.css";

const Badminton = () => {
  const navigate = useNavigate(); // Call useNavigate here
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "City Sports Complex",
      address: "123 Main St, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Available",
      contact: "555-1234",
      price: "$20 per hour",
      image:
        "https://img.freepik.com/premium-photo/woman-holding-tennis-racquet-tennis-court_1072138-218976.jpg?ga=GA1.1.1090099102.1721903424&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Greenfield Badminton Arena",
      address: "456 Elm St, Hyderabad",
      hours: "7:00 AM - 11:00 PM",
      availability: "Limited",
      contact: "555-5678",
      price: "$25 per hour",
      image:
        "https://img.freepik.com/premium-photo/tennis-player-banner-tennis-advertisement-mockup-betting-advertisement-sports-betting-tennis_742418-60301.jpg?ga=GA1.1.1090099102.1721903424&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "Sunrise Sports Club",
      address: "789 Oak St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Fully Booked",
      contact: "555-8765",
      price: "$18 per hour",
      image:
        "https://img.freepik.com/premium-photo/backhand-volley-precision-serene-setting_1247965-16134.jpg?ga=GA1.1.1090099102.1721903424&semt=ais_hybrid",
    },
    {
      id: 4,
      name: "Riverside Badminton Hub",
      address: "12 River Rd, Hyderabad",
      hours: "8:00 AM - 8:00 PM",
      availability: "Available",
      contact: "555-4321",
      price: "$22 per hour",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyg0OgoO05ueDy7l0naIe6NxXaDUeAL_mvjQ&s",
    },
    {
      id: 5,
      name: "Valley Sports Center",
      address: "23 Valley View, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Limited",
      contact: "555-6789",
      price: "$20 per hour",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivKBIQ08u0NrJx7lFYzM_tpZTRqm2krWKGg&s",
    },
    {
      id: 6,
      name: "Peak Performance Courts",
      address: "98 Hilltop St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Available",
      contact: "555-9876",
      price: "$28 per hour",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaOynaEn7lVHS1SkXAaZwFqawkGcnxvyYbQ&s",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredLocations =
    filter === "All"
      ? locations
      : locations.filter((location) => location.availability === filter);

  return (
    <div className="badminton-page-container">
      <h1 className="badminton-page-title">Badminton Turf Locations</h1>

      <div className="badminton-banner">
        <img
          src="https://media.istockphoto.com/id/1809237670/photo/badminton-racket-and-shuttlecock.jpg?s=612x612&w=0&k=20&c=TVeczqEI634w9iLLsH_27SViaaE3r3HXBIZDpGZzQ_Y="
          alt="Badminton Banner"
          className="badminton-banner-image"
        />
      </div>

      <div className="badminton-filter">
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

      <div className="badminton-location-list">
        {filteredLocations.map((location) => (
          <div key={location.id} className="badminton-location-card">
            <img
              src={location.image}
              alt={location.name}
              className="badminton-location-image"
            />
            <div className="badminton-location-content">
              <div className="badminton-icon">
                <GiShuttlecock />
              </div>
              <h2 className="badminton-location-name">{location.name}</h2>
              <p className="badminton-location-address">{location.address}</p>
              <p className="badminton-location-hours">
                <strong>Hours:</strong> {location.hours}
              </p>
              <p className="badminton-availability">
                <strong>Status:</strong> {location.availability}
              </p>
              <p className="badminton-contact">
                <strong>Contact:</strong> {location.contact}
              </p>
              <p className="badminton-price">
                <strong>Price:</strong> {location.price}
              </p>
              <button
                className={`badminton-book-now ${
                  location.availability === "Fully Booked" ? "disabled" : "active"
                }`}
                onClick={() => navigate("/city")}
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

export default Badminton;
