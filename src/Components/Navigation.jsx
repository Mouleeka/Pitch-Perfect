
// import React from 'react';
// import { Link } from 'react-router-dom'; // If you're using react-router for navigation
// import '../Styles/Navigation.css'; // Assuming you have some styles for the navigation
// import logoImage from '../Images/logo3.png'; // Adjust the path if necessary

// function Navigation() {
 
//   return (
//     <nav className="navigation">
//       <div className="logo">
//         <img src={logoImage} alt="Logo" />
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/categories">Categories</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//         <li><Link to="/events">Events</Link></li>
//         <li><Link to="/membership">Membership</Link></li>
//         <li><Link to="/OwnerDash"> Owner Dashboard</Link></li>
//         <li><Link to="/AdminDash"> Admin Dashboard</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;

// import React from 'react';
// import { Link } from 'react-router-dom'; // Importing Link for navigation
// import '../Styles/Navigation.css'; // Importing styles for the navigation
// import logoImage from '../Images/logo3.png'; // Importing logo image

// function Navigation() {
//   // Get the user role from localStorage
//   const userRole = localStorage.getItem('userRole');

//   return (
//     <nav className="navigation">
//       <div className="logo">
//         <img src={logoImage} alt="Logo" />
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/categories">Categories</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//         <li><Link to="/events">Events</Link></li>
//         <li><Link to="/membership">Membership</Link></li>
//         {/* Conditionally render the Admin and Owner Dashboard links */}
//         {userRole === 'admin' && <li><Link to="/admin-dash">Admin Dashboard</Link></li>}
//         {userRole === 'owner' && <li><Link to="/owner-dash">Owner Dashboard</Link></li>}
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/Navigation.css';
import logoImage from '../Images/logo3.png';

function Navigation() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/categories/${searchTerm}`);
  };

  return (
    <nav className="navigation">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        {/* Conditional rendering based on user role */}
        {localStorage.getItem('userRole') === 'admin' && <li><Link to="/admin-dash">Admin Dashboard</Link></li>}
        {localStorage.getItem('userRole') === 'owner' && <li><Link to="/owner-dash">Owner Dashboard</Link></li>}
        <li><Link to="/login">Login</Link></li>
        <li className="search-bar">
          <form onSubmit={handleSearch}>
            <TextField
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              size="small"
              placeholder="Search sports..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
