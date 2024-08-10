import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/Members.css';

// Sample data for members with updated profile pictures
const members = [
  { id: 1, name: 'Anjali', gamesPlayed: 5, avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 2, name: 'Vikram', gamesPlayed: 8, avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 3, name: 'Rhea', gamesPlayed: 10, avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: 4, name: 'Arjun', gamesPlayed: 7, avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: 5, name: 'Sneha', gamesPlayed: 6, avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
  { id: 6, name: 'Karan', gamesPlayed: 9, avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
  { id: 7, name: 'Nisha', gamesPlayed: 4, avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: 8, name: 'Ravi', gamesPlayed: 11, avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
  { id: 9, name: 'Meera', gamesPlayed: 3, avatar: 'https://randomuser.me/api/portraits/women/9.jpg' },  // New player
  { id: 10, name: 'Siddharth', gamesPlayed: 12, avatar: 'https://randomuser.me/api/portraits/men/10.jpg' } // New player
];

const MembersList = () => {
  const location = useLocation();
  const [sort, setSort] = useState('name');
  const [filter, setFilter] = useState('');
  const [playersCount, setPlayersCount] = useState(0);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const count = parseInt(queryParams.get('players'), 10);
    setPlayersCount(count || 0);
  }, [location.search]);

  const sortedMembers = members.sort((a, b) => {
    if (sort === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return b.gamesPlayed - a.gamesPlayed;
    }
  });

  // Filter members to show only the specified number of players
  const filteredMembers = sortedMembers.filter((_, index) => index < playersCount)
    .filter(member => member.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="members-container">
      <h2 className="members-heading">Team Members</h2>
      {playersCount > 0 && <p style={{color:"black"}}>Players Joined: {playersCount}</p>}
      <div className="filter-sort-container">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by name"
          className="filter-input"
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="sort-select">
          <option value="name">Sort by name</option>
          <option value="gamesPlayed">Sort by games played</option>
        </select>
      </div>
      <div className="members-grid">
        {filteredMembers.map(member => (
          <div key={member.id} className="member-card">
            <div className="member-avatar">
            <img src={member.avatar} alt={member.name} />

            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="games-played">Games Played: {member.gamesPlayed}</p>
              <button className="info-button">More Info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersList;
