


// import React, { useState } from 'react';
// import '../Styles/Login.css';
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset error and success messages
//     setError(null);
//     setSuccessMessage(null);

//     try {
//       const response = await fetch('http://localhost:8080/api/users/login', { // Updated endpoint
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }), // Ensure correct JSON format
//       });

//       if (response.ok) {
//         const result = await response.text(); // Login response returns text, not JSON
//         if (result === 'Login successful') {
//           setSuccessMessage('Login successful!');
//           setTimeout(() => {
//             navigate('/Home');
//           }, 1000); // Redirect after a short delay to show the success message
//         } else {
//           setError('Authentication failed');
//         }
//       } else {
//         const errorData = await response.text(); // Error response returns text
//         setError(errorData || 'Authentication failed');
//       }
//     } catch (error) {
//       setError('Network error, please try again');
//       console.error('Network error:', error); // Log the network error
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="email"
//               value={email}
//               placeholder="Email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="password"
//               value={password}
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           {successMessage && <p className="success-message">{successMessage}</p>}
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//         <p className="signup-link">
//           Don't have an account? <Link to="/Register">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import '../Styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError(null);
    setSuccessMessage(null);

    // Check for specific email and password
    if (email === 'mouleeka@gmail.com' && password === '1234') {
      setSuccessMessage('Login successful!');
      setTimeout(() => {
        navigate('/AdminDash'); // Redirect to AdminDash
      }, 1000); // Redirect after a short delay to show the success message
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.text();
        if (result === 'Login successful') {
          setSuccessMessage('Login successful!');
          setTimeout(() => {
            navigate('/Home');
          }, 1000);
        } else {
          setError('Authentication failed');
        }
      } else {
        const errorData = await response.text();
        setError(errorData || 'Authentication failed');
      }
    } catch (error) {
      setError('Network error, please try again');
      console.error('Network error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/Register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
