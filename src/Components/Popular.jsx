
import React from 'react';
import '../Styles/Popular.css'; // Import CSS for styling
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import footballImg from '../Images/p1.jpg';
import basketballImg from '../Images/p2.jpg';
import tennisImg from '../Images/p3.jpg';
import cricketImg from '../Images/p4.jpg';
import baseballImg from '../Images/p5.jpg';
import swimImg from '../Images/p6.jpg';

const sports = [
  { name: 'Badminton', imageUrl: footballImg, description: 'Fast-paced racket sport', link: '/Badminton' }, // Updated link
  { name: 'Cricket', imageUrl: basketballImg, description: 'Popular bat-and-ball game', link: '/Cricket' },
  { name: 'Football', imageUrl: tennisImg, description: 'Team sport played with a spherical ball', link: '/Football' },
  { name: 'Basketball', imageUrl: cricketImg, description: 'High-energy court sport', link: '/Basketball' },
  { name: 'Tennis', imageUrl: baseballImg, description: 'Racket sport played on a court', link: '/Tennis' },
  { name: 'Swimming', imageUrl: swimImg, description: 'Individual or team water sport', link: '/Swimming' },
];

const Popular = () => (
  <div className="popular-sports">
    <h2>Popular Sports</h2>
    <div className="sports-list">
      {sports.map((sport, index) => (
        <div key={index} className="sport-item">
          <img src={sport.imageUrl} alt={sport.name} className="sport-image" />
          <div className="sport-info">
            <h3>{sport.name}</h3>
            <p>{sport.description}</p>
            <Link to={sport.link} className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Popular;


