import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(3);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      // Make an API call to your backend server to check login credentials
      const response = await axios.post('/api/login', {
        username,
        password,
      });

      // Handle the response from the server
      if (response.data.success) {
        // Redirect the user to the dashboard or another page on successful login
        console.log('Login successful!');
      } else {
        // Decrement the login attempts count and display the remaining count
        setLoginAttempts((prevAttempts) => prevAttempts - 1);
        console.log('Invalid username or password.');
        console.log('Remaining login attempts:', loginAttempts - 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-container">
          <input type="checkbox" onChange={togglePasswordVisibility} />
          <label htmlFor="showPassword">Show Password</label>
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p className="attempts-text">Remaining login attempts: {loginAttempts}</p>
      </form>
    </div>
  );
};

export default LoginPage;
