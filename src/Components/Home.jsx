

// import React from 'react';
// import '../Styles/Home.css';
// import videoFile from '../Images/v1.mp4';
// import Footer from '../Components/Footer.jsx';
// import Categories from '../Components/Categories.jsx';
// import InfoSection from '../Components/InfoSection.jsx';
// import infoImage from '../Images/c4.jpg';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Popular from '../Components/Popular.jsx';

// import c8 from '../Images/c8.jpg';
// import c9 from '../Images/c9.jpg';
// import c10 from '../Images/c10.jpeg';

// function Home() {
//   return (
//     <div>
//       <div className="video-container">
//         <video autoPlay loop muted width="1550" height="400">
//           <source src={videoFile} type="video/mp4" />
//         </video>
//         <div className="video-text">
//           <h1>Explore and Book Sports Facilities Near You</h1>
//         </div>
//       </div>
//       <InfoSection />
//          {/* <Popular /> */}
//           {/* Mission Statement */}
//       <p className="mission-statement">
//         Our mission is making it easier for everyone to play sports and increasing the utilization of facilities as a result.
//         <br />
//         Sports play a pivotal role in bringing people together, sharing moments, and enhancing well-being, which are reasons that form the essence of PlaySpots.
//         <br />
//         Our goal is making sports simple
//         <br />
//         <strong>#LetTheWorldPlay</strong>
//       </p>
//       {/* Carousel Part */}
//       <div className="carousel-container">
//         <Carousel interval={3000}>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={c8}
//               alt="First slide"
//               style={{ objectFit: 'cover', width: '100%', height: '400px' }}
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={c9}
//               alt="Second slide"
//               style={{ objectFit: 'cover', width: '100%', height: '400px' }}
//             />
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={c10}
//               alt="Third slide"
//               style={{ objectFit: 'cover', width: '100%', height: '400px' }}
//             />
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>


//       <Footer />
//     </div>
//   );
// }

// export default Home;

// import React from 'react';
// import '../Styles/Home.css';
// import videoFile from '../Images/v1.mp4';
// import Footer from '../Components/Footer.jsx';
// import InfoSection from '../Components/InfoSection.jsx';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import c8 from '../Images/c8.jpg';
// import c9 from '../Images/c9.jpg';
// import c10 from '../Images/c10.jpeg';

// function Home() {
//   return (
//     <div>
//       <div className="video-container">
//         <video autoPlay loop muted width="1550" height="400">
//           <source src={videoFile} type="video/mp4" />
//         </video>
//         <div className="video-text">
//           <h1>Explore and Book Sports Facilities Near You</h1>
//         </div>
//       </div>
//       <InfoSection />
//       {/* Mission Statement */}
//       <div className="mission-statement-container">
//         <div className="overlay">
//           <p className="mission-statement">
//             Our mission is to make it easier for everyone to play sports and increase the utilization of facilities as a result.
//             <br />
//             Sports play a pivotal role in bringing people together, sharing moments, and enhancing well-being, which are reasons that form the essence of PlaySpots.
//             <br />
//             Our goal is to make sports simple.
//             <br />
//             <strong>#LetTheWorldPlay</strong>
//           </p>
//         </div>
//       </div>
//       {/* Carousel Part */}
//       <div className="carousel-container">
//         <Carousel interval={3000}>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={c8}
//               alt="First slide"
//               style={{ objectFit: 'cover', width: '100%', height: '400px' }}
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={c9}
//               alt="Second slide"
//               style={{ objectFit: 'cover', width: '100%', height: '400px' }}
//             />
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={c10}
//               alt="Third slide"
//               style={{ objectFit: 'cover', width: '100%', height: '400px' }}
//             />
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import '../Styles/Home.css';
import videoFile from '../Images/v1.mp4';
import Footer from '../Components/Footer.jsx';
import InfoSection from '../Components/InfoSection.jsx';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from '../Components/Testimonials.jsx'; // Import the new component
import Popular from '../Components/Popular.jsx';
import c14 from '../Images/c14.jpg';
import c6 from '../Images/c6.jpg';
import c9 from '../Images/c9.jpg';

function Home() {
  return (
    <div>
      <div className="video-container">
        <video autoPlay loop muted width="1550" height="400">
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="video-text">
          <h1>Explore and Book Sports Facilities Near You</h1>
        </div>
      </div>
      <InfoSection />
      <Popular />
      {/* Mission Statement */}
      <div className="mission-statement-container">
        <div className="overlay">
          <p className="mission-statement">
            At PlaySpots, we believe in the power of sports to transform lives and communities.
            <br />
            Our mission is to provide easy access to top-quality sports facilities, ensuring everyone can play their favorite sports without hassle.
            <br />
            Join us in our commitment to fostering a healthier, more active lifestyle for all.
            <br />
            <strong>#GetInTheGame</strong>
          </p>
        </div>
      </div>
      {/* Carousel Part */}
      <div className="carousel-container">
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c6}
              alt="First slide"
              style={{ objectFit: 'cover', width: '100%', height: '400px' }}
            />
            <Carousel.Caption>
              <h3>Football Turf</h3>
              <p>Book our top-notch football turf and enjoy a great game with friends.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c14}
              alt="Second slide"
              style={{ objectFit: 'cover', width: '100%', height: '400px' }}
            />
            <Carousel.Caption>
              <h3>Basketball Court</h3>
              <p>Experience the thrill of the game on our premium basketball courts.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c9}
              alt="Third slide"
              style={{ objectFit: 'cover', width: '100%', height: '400px' }}
            />
            <Carousel.Caption>
              <h3>Badminton Court</h3>
              <p>Get ready to smash and rally on our well-maintained badminton courts.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Add Testimonials Section */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;

