import React, { useState } from 'react';
import './Register.css'; // Import the CSS file for styling

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement AJAX or Fetch API request to the register endpoint
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, userType, address }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful registration
        console.log('Registration successful', data);
console.log(data)
        // Store the token and user type in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('address', data.address);
        localStorage.setItem('userType', data.userType);

        // Check user type and navigate accordingly
        if (data.userType === 'Manufacturer') {
          window.location.href = '/manufacturer';
        } else if (data.userType === 'Transporter') {
          window.location.href = '/transporter';
        } else {
          // Redirect to a default page if user type is not specified
          window.location.href = '/';
        }
      })
      .catch((error) => {
        // Handle registration error
        console.error('Registration error', error);
      });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="userType">User Type:</label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">Select user type</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Transporter">Transporter</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
