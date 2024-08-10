import React, { useState } from "react";
import { FaFutbol } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Styles/Football.css";

const Football = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "City Sports Complex",
      address: "123 Main St, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Available",
      contact: "555-1234",
      price: "$30 per hour",
      image: "https://media.istockphoto.com/id/471561846/photo/soccer-player-kicking-the-ball-while-being-in-mid-air.jpg?s=612x612&w=0&k=20&c=BBHkxIjzaIcocPxWGAZmSCwiFCPMqnENkqIp2KKW0xA=",
    },
    {
      id: 2,
      name: "Greenfield Football Arena",
      address: "456 Elm St, Hyderabad",
      hours: "7:00 AM - 11:00 PM",
      availability: "Limited",
      contact: "555-5678",
      price: "$35 per hour",
      image: "https://media.istockphoto.com/id/537503751/photo/attack-soccer-player-shooting-to-defense-team.jpg?s=612x612&w=0&k=20&c=LGIPzPrNCEZ_aIX7mUt5iXV1DmTs3DPfsgSjoVE9S6w=",
    },
    {
      id: 3,
      name: "Sunrise Sports Club",
      address: "789 Oak St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Fully Booked",
      contact: "555-8765",
      price: "$28 per hour",
      image: "https://media.istockphoto.com/id/1013558104/photo/goal.jpg?s=612x612&w=0&k=20&c=xM3wYFCeaJtH3reTA2Wex_hhnW7_8pfkiwcRzMc6sK4=",
    },
    {
      id: 4,
      name: "Riverside Football Hub",
      address: "12 River Rd, Hyderabad",
      hours: "8:00 AM - 8:00 PM",
      availability: "Available",
      contact: "555-4321",
      price: "$32 per hour",
      image: "https://media.istockphoto.com/id/1455235506/photo/unrecognizable-boy-playing-football-with-father.jpg?s=612x612&w=0&k=20&c=09lWeFcvz2_QFRkjllkq3tjjdnIKTEBehy85QV97myw=",
    },
    {
      id: 5,
      name: "Valley Sports Center",
      address: "23 Valley View, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Limited",
      contact: "555-6789",
      price: "$30 per hour",
      image: "https://media.istockphoto.com/id/1398380709/photo/soccer-player-doing-kick-ups-on-the-field.jpg?s=612x612&w=0&k=20&c=JzqY-jv4uFIbNDYQ6uJSVHnM4LK9pxM-rTrYhO1wen8=",
    },
    {
      id: 6,
      name: "Peak Performance Courts",
      address: "98 Hilltop St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Available",
      contact: "555-9876",
      price: "$38 per hour",
      image: "https://media.istockphoto.com/id/531927502/photo/playing-at-the-line.jpg?s=612x612&w=0&k=20&c=w0_SwniQaod7yLJQprcPPaDAxF0HCxgb_-eCYS8QxWQ=",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredLocations =
    filter === "All"
      ? locations
      : locations.filter((location) => location.availability === filter);

  return (
    <div className="football-page-container">
      <h1 className="football-page-title">Football Turf Locations</h1>

      <div className="football-banner">
        <img
          src="https://media.istockphoto.com/id/483425099/vector/soccer-ball-in-the-goal-net-on-stadium-with-light.jpg?s=612x612&w=0&k=20&c=5A_piSLt5NSqAJgsGvls_MebsN4mc1Mlb5vI0UlDTYk="
          alt="Football Banner"
          className="football-banner-image"
        />
      </div>

      <div className="football-filter">
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

      <div className="football-location-list">
        {filteredLocations.map((location) => (
          <div key={location.id} className="football-location-card">
            <img
              src={location.image}
              alt={location.name}
              className="football-location-image"
            />
            <div className="football-location-content">
              <div className="football-icon">
                <FaFutbol />
              </div>
              <h2 className="football-location-name">{location.name}</h2>
              <p className="football-location-address">{location.address}</p>
              <p className="football-location-hours">
                <strong>Hours:</strong> {location.hours}
              </p>
              <p className="football-availability">
                <strong>Status:</strong> {location.availability}
              </p>
              <p className="football-contact">
                <strong>Contact:</strong> {location.contact}
              </p>
              <p className="football-price">
                <strong>Price:</strong> {location.price}
              </p>
              <button
                className={`football-book-now ${
                  location.availability === "Fully Booked"
                  
                }`}
                onClick={() => navigate("/City3")}
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

export default Football;
