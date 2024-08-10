import React, { useState } from "react";
import { GiTennisRacket } from "react-icons/gi";
import "../Styles/Tennis.css";
import { useNavigate } from "react-router-dom";

const Tennis = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "City Tennis Complex",
      address: "123 Main St, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Available",
      contact: "555-1234",
      price: "$25 per hour",
      image: "https://media.istockphoto.com/id/1517472908/photo/young-athletic-woman-playing-padel-doubles-on-outdoor-court.jpg?s=612x612&w=0&k=20&c=yqbuPE1KAEe_xtUOhLUF6rTxGlnYzeIhJSyw3igyDYc=",
    },
    {
      id: 2,
      name: "Greenfield Tennis Arena",
      address: "456 Elm St, Hyderabad",
      hours: "7:00 AM - 11:00 PM",
      availability: "Limited",
      contact: "555-5678",
      price: "$30 per hour",
      image: "https://media.istockphoto.com/id/1469691796/photo/female-friends-playing-a-double-match-on-a-tennis-court.jpg?s=612x612&w=0&k=20&c=SXlY29Y8eo_IVkVrRhxjDAOD6Rwi6PJhT37C26VBF50=",
    },
    {
      id: 3,
      name: "Sunrise Tennis Club",
      address: "789 Oak St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Fully Booked",
      contact: "555-8765",
      price: "$22 per hour",
      image: "https://media.istockphoto.com/id/2161053272/photo/woman-playing-tennis-on-outdoor-court-in-residential-area.jpg?s=612x612&w=0&k=20&c=b9s-yT_lZw5RSLVyMWf4yyKEesAtUiZ5Ny2m_JDUtS0=",
    },
    {
      id: 4,
      name: "Riverside Tennis Hub",
      address: "12 River Rd, Hyderabad",
      hours: "8:00 AM - 8:00 PM",
      availability: "Available",
      contact: "555-4321",
      price: "$28 per hour",
      image: "https://media.istockphoto.com/id/1435388126/photo/young-man-playing-tennis.jpg?s=612x612&w=0&k=20&c=CY6DyDtxsihKGfDV5FyZydyKV8XsBMdkP8wqy8PZy8M=",
    },
    {
      id: 5,
      name: "Valley Tennis Center",
      address: "23 Valley View, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Limited",
      contact: "555-6789",
      price: "$26 per hour",
      image: "https://media.istockphoto.com/id/1338743212/photo/tennis-player.jpg?s=612x612&w=0&k=20&c=SaAw_272FvosFO13ZZJycBWAaLuEZLpyBVzPeSlCOsM=",
    },
    {
      id: 6,
      name: "Peak Performance Tennis Courts",
      address: "98 Hilltop St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Available",
      contact: "555-9876",
      price: "$32 per hour",
      image: "https://media.istockphoto.com/id/1475460851/photo/indian-man-sports-or-playing-on-tennis-court-in-exercise-training-or-workout-for-competition.jpg?s=612x612&w=0&k=20&c=jHdXyh6h6STC8SguENI0engzprfGkxo-_HAns3YGPoA=",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredLocations =
    filter === "All"
      ? locations
      : locations.filter((location) => location.availability === filter);

  return (
    <div className="tennis-page-container">
      <h1 className="tennis-page-title">Tennis Court Locations</h1>

      <div className="tennis-banner">
        <img
          src="https://media.istockphoto.com/id/1217752295/photo/the-calm-before-the-storm.jpg?s=612x612&w=0&k=20&c=TZldJOvAXgXet-5br9N1-DjcE8hzTYl2DgTJNjkX2Ic="
          alt="Tennis Banner"
          className="tennis-banner-image"
        />
      </div>

      <div className="tennis-filter">
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

      <div className="tennis-location-list">
        {filteredLocations.map((location) => (
          <div key={location.id} className="tennis-location-card">
            <img
              src={location.image}
              alt={location.name}
              className="tennis-location-image"
            />
            <div className="tennis-location-content">
              <div className="tennis-icon">
                <GiTennisRacket />
              </div>
              <h2 className="tennis-location-name">{location.name}</h2>
              <p className="tennis-location-address">{location.address}</p>
              <p className="tennis-location-hours">
                <strong>Hours:</strong> {location.hours}
              </p>
              <p className="tennis-availability">
                <strong>Status:</strong> {location.availability}
              </p>
              <p className="tennis-contact">
                <strong>Contact:</strong> {location.contact}
              </p>
              <p className="tennis-price">
                <strong>Price:</strong> {location.price}
              </p>
              <button
                className={`tennis-book-now ${
                  location.availability === "Fully Booked"
                    ? "disabled"
                    : "active"
                }`}
                onClick={() =>navigate("/City5")}
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

export default Tennis;
