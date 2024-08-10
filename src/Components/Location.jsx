// HyderabadActivities.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Location.css';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import Footer from './Footer';

const activitiesData = {
  community: [
    { id: 1, type: 'Badminton', date: 'Aug 20', time: '08:00 PM - 09:00 PM', location: 'Apex Sports Arena', players: 5 },
    { id: 2, type: 'Football', date: 'Aug 16', time: '06:00 PM - 07:00 PM', location: 'Stadium X', players: 8 },
    { id: 3, type: 'Cricket', date: 'Aug 14', time: '04:00 PM - 06:00 PM', location: 'Ground Y', players: 10 }
  ],
  gametime: [
    { id: 4, type: 'Tennis', date: 'Aug 29', time: '09:00 AM - 10:00 AM', location: 'Court Z', players: 4 },
    { id: 5, type: 'Swimming', date: 'Aug 22', time: '07:00 AM - 08:00 AM', location: 'Pool W', players: 6 },
    { id: 6, type: 'Basketball', date: 'Aug 15', time: '05:00 PM - 06:00 PM', location: 'Arena V', players: 7 }
  ]
};

const getTodayDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.toLocaleString('default', { month: 'short' }));
  return `${month} ${day}`;
};

const isPastDate = (date) => {
  const today = new Date(getTodayDate());
  const activityDate = new Date(date);
  return activityDate < today;
};

const HyderabadActivities = () => {
  const [selectedType, setSelectedType] = useState('community');
  const [selectedActivity, setSelectedActivity] = useState('All');

  const handleActivityChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleDetailsClick = (activityType) => {
    setSelectedActivity(activityType);
  };

  const filteredActivities = activitiesData[selectedType].filter(activity =>
    selectedActivity === 'All' || activity.type === selectedActivity
  );

  const sortedActivities = filteredActivities.sort((a, b) => {
    if (selectedType === 'gametime') {
      return a.time.localeCompare(b.time);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className="activities-page">
      <h1>Hyderabad Activities</h1>
      <p>{sortedActivities.length} Upcoming Activities</p>
      <div className="filter-section">
        <div className="radio-buttons">
          <input 
            type="radio" 
            id="community" 
            name="activityType" 
            value="community" 
            checked={selectedType === 'community'}
            onChange={handleActivityChange} 
          />
          <label htmlFor="community" style={{padding: "6px"}}>Community</label>
          <input 
            type="radio" 
            id="gametime" 
            name="activityType" 
            value="gametime" 
            checked={selectedType === 'gametime'}
            onChange={handleActivityChange} 
          />
          <label htmlFor="gametime" style={{padding: "6px"}}>Gametime</label>
        </div>
        <div className="dropdown-section">
          <select 
            value={selectedActivity} 
            onChange={(e) => setSelectedActivity(e.target.value)}
          >
            <option value="All">All Activities</option>
            <option value="Badminton">Badminton</option>
            <option value="Football">Football</option>
            <option value="Cricket">Cricket</option>
            <option value="Tennis">Tennis</option>
            <option value="Swimming">Swimming</option>
            <option value="Basketball">Basketball</option>
          </select>
        </div>
      </div>
      <div className="activities-list">
        {sortedActivities.map(activity => (
          <div key={activity.id} className="activity-card">
            <h2>{activity.type} Activity</h2>
            <div className="activity-details">
              <p><FaCalendar /> {activity.date}</p>
              <p><FaClock /> {activity.time}</p>
              <p><FaMapMarkerAlt /> {activity.location}</p>
              {/* <Link to={`/members`}>
                <p><FaUsers /> {activity.players} Players Joined</p>
              </Link> */}
              <Link to={`/members?players=${activity.players}`}>
  <p><FaUsers /> {activity.players} Players Joined</p>
</Link>

            </div>
            {!isPastDate(activity.date) && (
              <Link to={`/payment/${activity.id}`} className="details-button">Book Now</Link>
            )}
             {/* <Footer /> */}
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default HyderabadActivities;


