import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send login request to the backend
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        if (data.token) {
          // Save the token and userType in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('userType', data.userType);
  
          // Redirect or perform any other action upon successful login
          // Example: redirect to dashboard
          console.log(data)
          if (data.userType === 'Manufacturer') {
            window.location.href = '/manufacturer';
          } else if (data.userType === 'Transporter') {
            window.location.href = '/transporter';
          } else {
            // Redirect to a default page if user type is not specified
            window.location.href = '/';
          }
       
        } else {
          // Handle login error
          console.log(data.error);
        }
      })
      .catch((error) => {
        // Handle network or server error
        console.error('Error:', error);
      });
  };
  
  
  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
