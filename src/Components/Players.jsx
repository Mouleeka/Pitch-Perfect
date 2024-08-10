import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Players.css';
import profile from '../Images/pp1.jpg';

const UserProfile = () => {
  const { activityId } = useParams(); // Get the activityId from the URL

  const user = {
    name: "Rocky",
    lastPlayed: "July 7, 2024",
    profilePic: profile,
    stats: {
      activities: 11,
      playpals: 59,
      karma: 118,
      sport: "Basketball",
      skillLevel: "Advanced"
    },
    activities: [
      {
        id: 1,
        type: "Basketball Activity",
        date: "Aug 4, 2024",
        time: "06:00 PM - 07:30 PM",
        location: "Tightend Arena, KPHB Road No. 1"
      }
    ]
  };

  const UserStats = ({ stats }) => {
    return (
      <div className="user-stats">
        <div className="stat-item">
          <span>{stats.activities}</span>
          <label>Activities</label>
        </div>
        <div className="stat-item">
          <span>{stats.playpals}</span>
          <label>Playpals</label>
        </div>
        <div className="stat-item">
          <span>{stats.karma}</span>
          <label>Karma</label>
        </div>
        <div className="sport-info-play">
          <span>{stats.sport}</span>
          <label>Self Rating: {stats.skillLevel}</label>
        </div>
      </div>
    );
  };

  const UserActivities = ({ activities }) => {
    return (
      <div className="user-activities">
        <h2>Activities</h2>
        {activities.map(activity => (
          <div key={activity.id} className="activity">
            <h3>{activity.type}</h3>
            <p style={{color:'black'}}>{activity.date} at {activity.time}</p>
            <p style={{color:'black'}}>{activity.location}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.profilePic} alt={user.name} className="profile-pic" />
        <div>
          <h1>{user.name}</h1>
          <p>Last played on {user.lastPlayed}</p>
        </div>
      </div>
      <UserStats stats={user.stats} />
      <UserActivities activities={user.activities} />
      <button className="btn-reputation">See Reputation</button>
    </div>
  );
};

export default UserProfile;
