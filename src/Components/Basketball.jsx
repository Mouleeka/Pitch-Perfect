import React, { useState } from "react";
import { GiBasketballBall } from "react-icons/gi";
import "../Styles/Basketball.css";
import { useNavigate } from "react-router-dom";

const Basketball = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "Hoop Dreams Arena",
      address: "123 Main St, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Available",
      contact: "555-1234",
      price: "$30 per hour",
      image: "https://media.istockphoto.com/id/1410257259/photo/friends-playing-basketball-outdoors.jpg?s=612x612&w=0&k=20&c=HYMpbBDd9ddBAUnjzm8inqOWCm8ClwxiolBJ-iYo7lY=",
    },
    {
      id: 2,
      name: "Downtown Basketball Court",
      address: "456 Elm St, Hyderabad",
      hours: "7:00 AM - 11:00 PM",
      availability: "Limited",
      contact: "555-5678",
      price: "$35 per hour",
      image: "https://media.istockphoto.com/id/1446759454/photo/basketball-court-teamwork-support-and-motivation-of-healthy-competition-social-game-or-happy.jpg?s=612x612&w=0&k=20&c=6qaTUzMHMc69wpIMSdywpbbo-YhDQyebSTmivn3CQlE=",
    },
    {
      id: 3,
      name: "Sunset Sports Center",
      address: "789 Oak St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Fully Booked",
      contact: "555-8765",
      price: "$28 per hour",
      image: "https://media.istockphoto.com/id/1410256708/photo/friends-playing-basketball-outdoors.jpg?s=612x612&w=0&k=20&c=Zi25M9aW-VffqlMri3C5pLAndOuXHEXhL1miNHywhgM=",
    },
    {
      id: 4,
      name: "Riverside Basketball Park",
      address: "12 River Rd, Hyderabad",
      hours: "8:00 AM - 8:00 PM",
      availability: "Available",
      contact: "555-4321",
      price: "$32 per hour",
      image: "https://media.istockphoto.com/id/1448874680/photo/man-dribbling-at-a-basketball-court.jpg?s=612x612&w=0&k=20&c=GaDKeMwpyt07uN1XVs0gwOyj-rTICI-EQ4e5eKaWMao=",
    },
    {
      id: 5,
      name: "Valley Hoop Zone",
      address: "23 Valley View, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Limited",
      contact: "555-6789",
      price: "$30 per hour",
      image: "https://media.istockphoto.com/id/1410258168/photo/friends-playing-basketball-outdoors.jpg?s=612x612&w=0&k=20&c=J-qHe7bPh48Xfd9ToB_hi7GuZ1Mi0nOIdig6cOC5V7w=",
    },
    {
      id: 6,
      name: "Peak Performance Arena",
      address: "98 Hilltop St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Available",
      contact: "555-9876",
      price: "$40 per hour",
      image: "https://media.istockphoto.com/id/2154279669/photo/all-you-have-to-do-is-practice-hard-and-you-will-achieve-it.jpg?s=612x612&w=0&k=20&c=mQ0iOiifnpHk2ijBC4FQxZ8VfAa90chkeXLeysMmlBk=",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredLocations =
    filter === "All"
      ? locations
      : locations.filter((location) => location.availability === filter);

  return (
    <div className="basketball-page-container">
      <h1 className="basketball-page-title">Basketball Turf Locations</h1>

      <div className="basketball-banner">
        <img
          src="https://media.istockphoto.com/id/1446804029/photo/basketball-outdoor-and-court-with-ball-on-floor-for-athletic-competition-or-recreation-low.jpg?s=612x612&w=0&k=20&c=7364Mluky4Ux9r-V1TZOxIlb-ziOGidcDo26FIkHzac="
          alt="Basketball Banner"
          className="basketball-banner-image"
        />
      </div>

      <div className="basketball-filter">
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

      <div className="basketball-location-list">
        {filteredLocations.map((location) => (
          <div key={location.id} className="basketball-location-card">
            <img
              src={location.image}
              alt={location.name}
              className="basketball-location-image"
            />
            <div className="basketball-location-content">
              <div className="basketball-icon">
                <GiBasketballBall />
              </div>
              <h2 className="basketball-location-name">{location.name}</h2>
              <p className="basketball-location-address">{location.address}</p>
              <p className="basketball-location-hours">
                <strong>Hours:</strong> {location.hours}
              </p>
              <p className="basketball-availability">
                <strong>Status:</strong> {location.availability}
              </p>
              <p className="basketball-contact">
                <strong>Contact:</strong> {location.contact}
              </p>
              <p className="basketball-price">
                <strong>Price:</strong> {location.price}
              </p>
              <button
                className={`basketball-book-now ${
                  location.availability === "Fully Booked"
                    ? "disabled"
                    : "active"
                }`}
                onClick={()=>navigate("/City4")}
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

export default Basketball;
