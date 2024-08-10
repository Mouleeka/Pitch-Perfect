

// import React, { useState } from 'react';
// import '../Styles/Membership.css';
// import { Modal, Button } from 'react-bootstrap'; // Using React Bootstrap for modals
// import { FaTag, FaStar, FaTicketAlt, FaCalendarAlt } from 'react-icons/fa'; // Importing React Icons

// const Membership = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState("");

//   const handleShowModal = (content) => {
//     setModalContent(content);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="membership-page">
//       <header className="membership-header">
//         <h1 style={{color:"black"}}>Join Our Membership Program</h1>
//         <p style={{color:"black"}}>Choose the plan that best suits your needs and enjoy exclusive benefits!</p>
//       </header>
      
//       <section className="plans-section">
//         <div className="plan-card basic">
//           <h2>Basic Plan</h2>
//           <p className="price">$10/month</p>
//           <ul>
//             <li>
//               <FaTag className="icon" />
//               10% off on all bookings
//               <span className="tooltip">Get a 10% discount on every booking.</span>
//             </li>
//             <li>
//               <FaStar className="icon" />
//               Priority booking
//               <span className="tooltip">Book your slots before others.</span>
//             </li>
//           </ul>
//           <button onClick={() => handleShowModal("Basic Plan Details")}>Buy Now</button>
//         </div>
        
//         <div className="plan-card standard">
//           <h2>Standard Plan</h2>
//           <p className="price">$20/month</p>
//           <ul>
//             <li>
//               <FaTag className="icon" />
//               20% off on all bookings
//               <span className="tooltip">Get a 20% discount on every booking.</span>
//             </li>
//             <li>
//               <FaStar className="icon" />
//               Priority booking
//               <span className="tooltip">Book your slots before others.</span>
//             </li>
//             <li>
//               <FaTicketAlt className="icon" />
//               2 Guest Passes per month
//               <span className="tooltip">Bring 2 guests per month for free.</span>
//             </li>
//           </ul>
//           <button onClick={() => handleShowModal("Standard Plan Details")}>Buy Now</button>
//         </div>
        
//         <div className="plan-card premium">
//           <h2>Premium Plan</h2>
//           <p className="price">$30/month</p>
//           <ul>
//             <li>
//               <FaTag className="icon" />
//               30% off on all bookings
//               <span className="tooltip">Get a 30% discount on every booking.</span>
//             </li>
//             <li>
//               <FaStar className="icon" />
//               Priority booking
//               <span className="tooltip">Book your slots before others.</span>
//             </li>
//             <li>
//               <FaTicketAlt className="icon" />
//               5 Guest Passes per month
//               <span className="tooltip">Bring 5 guests per month for free.</span>
//             </li>
//             <li>
//               <FaCalendarAlt className="icon" />
//               Access to exclusive events
//               <span className="tooltip">Attend exclusive member events.</span>
//             </li>
//           </ul>
//           <button onClick={() => handleShowModal("Premium Plan Details")}>Buy Now</button>
//         </div>
//       </section>
      
//       <section className="comparison-table">
//         <h2>Compare Plans</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Features</th>
//               <th>Basic</th>
//               <th>Standard</th>
//               <th>Premium</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Discount on Bookings</td>
//               <td>10%</td>
//               <td>20%</td>
//               <td>30%</td>
//             </tr>
//             <tr>
//               <td>Priority Booking</td>
//               <td>Yes</td>
//               <td>Yes</td>
//               <td>Yes</td>
//             </tr>
//             <tr>
//               <td>Guest Passes</td>
//               <td>None</td>
//               <td>2/month</td>
//               <td>5/month</td>
//             </tr>
//             <tr>
//               <td>Exclusive Events</td>
//               <td>No</td>
//               <td>No</td>
//               <td>Yes</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>
      
//       <footer className="membership-footer">
//         <p style={{color:"black"}}>Need more information? <a href="/contact">Contact us</a></p>
//       </footer>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Membership Plan Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{modalContent}</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Membership;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/Membership.css';
import { Modal, Button } from 'react-bootstrap'; // Using React Bootstrap for modals
import { FaTag, FaStar, FaTicketAlt, FaCalendarAlt } from 'react-icons/fa'; // Importing React Icons

const Membership = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle redirection to the payment page
  const handleRedirectToPayment = (plan) => {
    navigate('/payment', { state: { plan } });
  };

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="membership-page">
      <header className="membership-header">
        <h1 style={{ color: 'black' }}>Join Our Membership Program</h1>
        <p style={{ color: 'black' }}>
          Choose the plan that best suits your needs and enjoy exclusive benefits!
        </p>
      </header>

      <section className="plans-section">
        <div className="plan-card basic">
          <h2>Basic Plan</h2>
          <p className="price">$10/month</p>
          <ul>
            <li>
              <FaTag className="icon" />
              10% off on all bookings
              <span className="tooltip">Get a 10% discount on every booking.</span>
            </li>
            <li>
              <FaStar className="icon" />
              Priority booking
              <span className="tooltip">Book your slots before others.</span>
            </li>
          </ul>
          <button onClick={() => handleRedirectToPayment('Basic Plan')}>Buy Now</button>
        </div>

        <div className="plan-card standard">
          <h2>Standard Plan</h2>
          <p className="price">$20/month</p>
          <ul>
            <li>
              <FaTag className="icon" />
              20% off on all bookings
              <span className="tooltip">Get a 20% discount on every booking.</span>
            </li>
            <li>
              <FaStar className="icon" />
              Priority booking
              <span className="tooltip">Book your slots before others.</span>
            </li>
            <li>
              <FaTicketAlt className="icon" />
              2 Guest Passes per month
              <span className="tooltip">Bring 2 guests per month for free.</span>
            </li>
          </ul>
          <button onClick={() => handleRedirectToPayment('Standard Plan')}>Buy Now</button>
        </div>

        <div className="plan-card premium">
          <h2>Premium Plan</h2>
          <p className="price">$30/month</p>
          <ul>
            <li>
              <FaTag className="icon" />
              30% off on all bookings
              <span className="tooltip">Get a 30% discount on every booking.</span>
            </li>
            <li>
              <FaStar className="icon" />
              Priority booking
              <span className="tooltip">Book your slots before others.</span>
            </li>
            <li>
              <FaTicketAlt className="icon" />
              5 Guest Passes per month
              <span className="tooltip">Bring 5 guests per month for free.</span>
            </li>
            <li>
              <FaCalendarAlt className="icon" />
              Access to exclusive events
              <span className="tooltip">Attend exclusive member events.</span>
            </li>
          </ul>
          <button onClick={() => handleRedirectToPayment('Premium Plan')}>Buy Now</button>
        </div>
      </section>

      <section className="comparison-table">
        <h2>Compare Plans</h2>
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Discount on Bookings</td>
              <td>10%</td>
              <td>20%</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>Priority Booking</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Guest Passes</td>
              <td>None</td>
              <td>2/month</td>
              <td>5/month</td>
            </tr>
            <tr>
              <td>Exclusive Events</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="membership-footer">
        <p style={{ color: 'black' }}>
          Need more information? <a href="/contact">Contact us</a>
        </p>
      </footer>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Membership Plan Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Membership;
