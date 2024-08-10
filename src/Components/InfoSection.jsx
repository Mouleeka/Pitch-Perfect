// import React from 'react';
// import { FaSearch, FaCalendarCheck, FaPlay } from 'react-icons/fa';
// import { IoIosFootball } from "react-icons/io";
// import '../Styles/InfoSection.css';

// function InfoSection() {
//   return (
//     <div className="info-section">
//       <div className="info-card">
//         <div className="info-card-inner">
//           <div className="info-card-front">
//             <FaSearch size={50} className="info-icon" />
//             <h3>Search</h3>
//           </div>
//           <div className="info-card-back">
//             <p>Are you looking to play after work, organize your Sunday Five's football match? Explore the largest network of sports facilities all over India.</p>
//           </div>
//         </div>
//       </div>
//       <div className="info-card">
//         <div className="info-card-inner">
//           <div className="info-card-front">
//             <FaCalendarCheck size={50} className="info-icon" />
//             <h3>Book</h3>
//           </div>
//           <div className="info-card-back">
//             <p>Once you’ve found the perfect ground, court or gym, connect with the venue through the Book Now button to make an online booking & secure easier payment.</p>
//           </div>
//         </div>
//       </div>
//       <div className="info-card">
//         <div className="info-card-inner">
//           <div className="info-card-front">
//             <IoIosFootball size={50} className="info-icon" />
//             <h3>Play</h3>
//           </div>
//           <div className="info-card-back">
//             <p>You’re the hero, you’ve found a stunning turf or court, booked with ease and now it's time to play. The scene is set for your epic match.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;
// card fly type
import React from 'react';
import { FaSearch, FaCalendarCheck, FaPlay } from 'react-icons/fa';
import { IoIosFootball } from "react-icons/io";
import '../Styles/InfoSection.css';

function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-card" style={{ animationDelay: '0.1s' }}>
        <FaSearch size={50} className="info-icon" />
        <h3>Search</h3>
        <p>Are you looking to play after work, organize your Sunday Five's football match? Explore the largest network of sports facilities all over India.</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '75%' }}></div>
        </div>
        <p className="availability-text">75% of facilities available</p>
      </div>
      <div className="info-card" style={{ animationDelay: '0.3s' }}>
        <FaCalendarCheck size={50} className="info-icon" />
        <h3>Book</h3>
        <p>Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment.</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '50%' }}></div>
        </div>
        <p className="availability-text">50% of facilities available</p>
      </div>
      <div className="info-card" style={{ animationDelay: '0.5s' }}>
        <IoIosFootball size={50} className="info-icon" />
        <h3>Play</h3>
        <p>You’re the hero, you’ve found a stunning turf or court, booked with ease and now it's time to play. The scene is set for your epic match.</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '90%' }}></div>
        </div>
        <p className="availability-text">90% of facilities available</p>
      </div>
    </div>
  );
}

export default InfoSection;




