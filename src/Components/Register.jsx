// import React, { useState } from 'react';
// import '../Styles/Register.css'; // Ensure this path is correct

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     mobile: '',
//   });

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset error and success messages
//     setError(null);
//     setSuccess(false);

//     // Check if passwords match
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8080/api/register/post', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           mobile: formData.mobile,
//           password: formData.password,
//         }), // Send only the necessary data
//       });

//       if (response.status === 201) { // Check for 201 status code
//         setSuccess(true);
//         setFormData({
//           name: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//           mobile: '',
//         });
//         console.log('Registration successful!'); // Debugging line
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || 'Registration failed');
//         console.log('Registration failed:', errorData); // Debugging line
//       }
//     } catch (error) {
//       setError('Network error, please try again');
//       console.log('Network error:', error); // Debugging line
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2>Create an Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="mobile">Mobile Number</label>
//             <input
//               type="tel"
//               id="mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           {success && <p className="success-message">Registration successful!</p>}
//           <button type="submit" className="register-button">Register</button>
//         </form>
//         <div className="login-link">
//           <p style={{ color: "black" }}>Already have an account? <a href="/login">Login here</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Register.css'; // Ensure this path is correct

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError(null);
    setSuccess(false);

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/create', {
        username: formData.name,
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile,
      });

      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          mobile: '',
        });
        console.log('Registration failed!');
      } else {
        setError('Registration successful!');
      }
    } catch (error) {
      setError('Network error, please try again');
      console.log('Network error:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">Registration successful!</p>}
          <button type="submit" className="register-button">Register</button>
        </form>
        <div className="login-link">
          <p style={{ color: "black" }}>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
