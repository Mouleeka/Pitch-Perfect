// import React from 'react';
// import '../Styles/Footer.css'; // Footer styles

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h2>About Us</h2>
//           <p>We offer the best turf booking services to ensure you get the perfect field for your game.</p>
//         </div>
//         <div className="footer-section">
//           <h2>Quick Links</h2>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h2>Contact Us</h2>
//           <p>Email: info@turfbooking.com</p>
//           <p>Phone: +123 456 7890</p>
//         </div>
//         <div className="footer-section">
//           <h2>Follow Us</h2>
//           <div className="social-icons">
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2024 TurfBooking. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
import Logo from '../Images/logo3.png'; // Assuming you have a logo image in the Images folder
import '../Styles/Footer.css'; // Footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <h3>About Us</h3>
          <h6>We offer the best turf booking services to ensure you get the perfect field for your game.</h6>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about us">About Us</a></li>
            <li><a href="/membership">Membership</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
      
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <h6>Email: info@turfbooking.com</h6>
          <h6>Phone: +123 456 7890</h6>
        
          <ul>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        
          <ul>
            <li><a href="/terms">Terms and Policies</a></li>
          </ul>
        
          <ul>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
          
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <br></br>
          <h3>Get the App</h3>
          <div className="app-links">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <AiFillAndroid /> Google Play
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <AiFillApple /> App Store
            </a>
          </div>
        </div>
        <div className="footer-section">
        <h3>Book Sports Facilities</h3>
          <ul>
            <li><a href="/football">Football</a></li>
            <li><a href="/badminton">Badminton</a></li>
            <li><a href="/tennis">Tennis</a></li>
            <li><a href="/cricket">Cricket</a></li>
          </ul>
          </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TurfBooking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
