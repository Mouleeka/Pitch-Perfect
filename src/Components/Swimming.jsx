import React, { useState } from "react";
import { GiSwimfins } from "react-icons/gi"; // Importing swimming icon
import "../Styles/Swimming.css"; // Updated CSS file
import { useNavigate } from "react-router-dom";
const Swimming = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "City Aquatic Center",
      address: "123 Main St, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Available",
      contact: "555-1234",
      price: "$15 per hour",
      image: "https://media.istockphoto.com/id/1428724412/photo/three-professional-water-polo-players-are-racing-towards-the-goal.jpg?s=612x612&w=0&k=20&c=Lmd7DFAd1f1Yal_EDl6StzW6XyGp2FLdubNzgRy0FV0=",
    },
    {
      id: 2,
      name: "Greenfield Swimming Arena",
      address: "456 Elm St, Hyderabad",
      hours: "7:00 AM - 11:00 PM",
      availability: "Limited",
      contact: "555-5678",
      price: "$20 per hour",
      image: "https://media.istockphoto.com/id/91447143/photo/waterfall-girl.jpg?s=612x612&w=0&k=20&c=85K5wLOe3aFez9v_2Fy-06JwF6Ks-0wDp0xcDnAMkQs=",
    },
    {
      id: 3,
      name: "Sunrise Swim Club",
      address: "789 Oak St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Fully Booked",
      contact: "555-8765",
      price: "$12 per hour",
      image: "https://media.istockphoto.com/id/520293243/photo/swimming-school-for-children.jpg?s=612x612&w=0&k=20&c=GbJ0lPjqVwHNfV4s7RapPksGKDohKIgRJsd9cDPFGkE=",
    },
    {
      id: 4,
      name: "Riverside Swimming Hub",
      address: "12 River Rd, Hyderabad",
      hours: "8:00 AM - 8:00 PM",
      availability: "Available",
      contact: "555-4321",
      price: "$18 per hour",
      image: "https://media.istockphoto.com/id/162680629/photo/swimming-stamina.jpg?s=612x612&w=0&k=20&c=CKipHaHaCBYpudk5CWlJ7jzlVtvPVSXJkmBu_8hwJB0=",
    },
    {
      id: 5,
      name: "Valley Aquatics Center",
      address: "23 Valley View, Hyderabad",
      hours: "9:00 AM - 9:00 PM",
      availability: "Limited",
      contact: "555-6789",
      price: "$16 per hour",
      image: "https://media.istockphoto.com/id/1167733771/photo/female-coach-in-water-giving-group-of-children-swimming-lesson-in-indoor-pool.jpg?s=612x612&w=0&k=20&c=LDEiWRSF7Q0EtqCZngQ-lnaZiRrjQHPIW9C_B51Jfv4=",
    },
    {
      id: 6,
      name: "Peak Performance Pools",
      address: "98 Hilltop St, Hyderabad",
      hours: "6:00 AM - 10:00 PM",
      availability: "Available",
      contact: "555-9876",
      price: "$22 per hour",
      image: "https://media.istockphoto.com/id/672994214/photo/aerial-view-of-swimmers-in-a-blue-pool.jpg?s=612x612&w=0&k=20&c=s8sMyifEzRdPhLM1CPrPCYDXqGVsABklWvFLTZxXpfY=",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredLocations =
    filter === "All"
      ? locations
      : locations.filter((location) => location.availability === filter);

  return (
    <div className="swimming-page-container">
      <h1 className="swimming-page-title">Swimming Facilities</h1>

      <div className="swimming-banner">
        <img
          src="https://media.istockphoto.com/id/1137117877/photo/top-view-blue-sandals-by-swimming-pool.jpg?s=612x612&w=0&k=20&c=p097Nd3t4Dql9ZYDbAovqjq_aFf5WC3vc73NfIO7WXI="
          alt="Swimming Banner"
          className="swimming-banner-image"
        />
      </div>

      <div className="swimming-filter">
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

      <div className="swimming-location-list">
        {filteredLocations.map((location) => (
          <div key={location.id} className="swimming-location-card">
            <img
              src={location.image}
              alt={location.name}
              className="swimming-location-image"
            />
            <div className="swimming-location-content">
              <div className="swimming-icon">
                <GiSwimfins />
              </div>
              <h2 className="swimming-location-name">{location.name}</h2>
              <p className="swimming-location-address">{location.address}</p>
              <p className="swimming-location-hours">
                <strong>Hours:</strong> {location.hours}
              </p>
              <p className="swimming-availability">
                <strong>Status:</strong> {location.availability}
              </p>
              <p className="swimming-contact">
                <strong>Contact:</strong> {location.contact}
              </p>
              <p className="swimming-price">
                <strong>Price:</strong> {location.price}
              </p>
              <button
                className={`swimming-book-now ${
                  location.availability === "Fully Booked"
                    ? "disabled"
                    : "active"
                }`}
                onClick={() =>navigate("/City6")}
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

export default Swimming;
