// AddTurf.jsx
import React, { useState } from "react";
import "../Styles/AddTurf.css";

const AddTurf = ({ onAddTurf }) => {
  const [newTurf, setNewTurf] = useState({
    location: "",
    sport: "Football",
    capacity: "",
    amenities: "",
    surfaceType: "Grass",
    availableDays: [],
    image: null,
  });

  const [turfs, setTurfs] = useState([]); // Initialize the turfs state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTurf((prevTurf) => ({ ...prevTurf, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setNewTurf((prevTurf) => {
      if (checked) {
        return { ...prevTurf, availableDays: [...prevTurf.availableDays, value] };
      } else {
        return {
          ...prevTurf,
          availableDays: prevTurf.availableDays.filter((day) => day !== value),
        };
      }
    });
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setNewTurf((prevTurf) => ({ ...prevTurf, image: files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTurf(newTurf);
    setTurfs((prevTurfs) => [...prevTurfs, newTurf]); // Add the new turf to the list
    setNewTurf({
      location: "",
      sport: "Football",
      capacity: "",
      amenities: "",
      surfaceType: "Grass",
      availableDays: [],
      image: null,
    });
  };

  return (
    <div className="add-turf-form">
      <h1>Add New Turf</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={newTurf.location}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Sport:
          <select
            name="sport"
            value={newTurf.sport}
            onChange={handleInputChange}
            required
          >
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
            <option value="Badminton">Badminton</option>
            <option value="Swimming">Swimming</option>
            <option value="Cricket">Cricket</option>
          </select>
        </label>
        <label>
          Capacity:
          <input
            type="number"
            name="capacity"
            value={newTurf.capacity}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Amenities:
          <textarea
            name="amenities"
            value={newTurf.amenities}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <label>
          Surface Type:
          <select
            name="surfaceType"
            value={newTurf.surfaceType}
            onChange={handleInputChange}
            required
          >
            <option value="Grass">Grass</option>
            <option value="Astroturf">Astroturf</option>
            <option value="Clay">Clay</option>
            <option value="Synthetic">Synthetic</option>
          </select>
        </label>
        <label>
          Available Days:
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="availableDays"
                value="Monday"
                checked={newTurf.availableDays.includes("Monday")}
                onChange={handleCheckboxChange}
              />
              Monday
            </label>
            <label>
              <input
                type="checkbox"
                name="availableDays"
                value="Tuesday"
                checked={newTurf.availableDays.includes("Tuesday")}
                onChange={handleCheckboxChange}
              />
              Tuesday
            </label>
            <label>
              <input
                type="checkbox"
                name="availableDays"
                value="Wednesday"
                checked={newTurf.availableDays.includes("Wednesday")}
                onChange={handleCheckboxChange}
              />
              Wednesday
            </label>
            <label>
              <input
                type="checkbox"
                name="availableDays"
                value="Thursday"
                checked={newTurf.availableDays.includes("Thursday")}
                onChange={handleCheckboxChange}
              />
              Thursday
            </label>
            <label>
              <input
                type="checkbox"
                name="availableDays"
                value="Friday"
                checked={newTurf.availableDays.includes("Friday")}
                onChange={handleCheckboxChange}
              />
              Friday
            </label>
            <label>
              <input
                type="checkbox"
                name="availableDays"
                value="Saturday"
                checked={newTurf.availableDays.includes("Saturday")}
                onChange={handleCheckboxChange}
              />
              Saturday
            </label>
            <label>
              <input
                type="checkbox"
                name="availableDays"
                value="Sunday"
                checked={newTurf.availableDays.includes("Sunday")}
                onChange={handleCheckboxChange}
              />
              Sunday
            </label>
          </div>
        </label>
        <label>
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <button type="submit">Add Turf</button>
      </form>

      <div className="added-turfs">
        <h2>Added Turfs</h2>
        {turfs.length === 0 ? (
          <p>No turfs added yet.</p>
        ) : (
          <ul>
            {turfs.map((turf, index) => (
              <li key={index}>
                <strong>Location:</strong> {turf.location} | <strong>Sport:</strong> {turf.sport} | <strong>Capacity:</strong> {turf.capacity} | <strong>Amenities:</strong> {turf.amenities} | <strong>Surface Type:</strong> {turf.surfaceType} | <strong>Available Days:</strong> {turf.availableDays.join(", ")}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddTurf;
