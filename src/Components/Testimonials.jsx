import React from 'react';
import '../Styles/Testimonials.css';
import r1 from '../Images/r1.jpg';
import r2 from '../Images/r2.jpg';
import r3 from '../Images/r3.jpeg'
const testimonials = [
  {
    name: 'Priya',
    testimonial: 'This platform has made booking sports facilities so easy and convenient!',
    avatar: r1, // Placeholder for avatar image
  },
  {
    name: 'Gowtham',
    testimonial: 'I love how I can find and book a football ground for our Sunday matches!',
    avatar: r2, // Placeholder for avatar image
  },
  {
    name: 'Ishan',
    testimonial: 'PlaySpots has completely changed how we organize our sports events. Highly recommend!',
    avatar: r3, // Placeholder for avatar image
  },
];

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h2>What Our Users Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
                          