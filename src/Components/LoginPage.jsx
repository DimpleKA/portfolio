import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './LoginPage.css'; // Import the CSS file for styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }
    try {
      // Assuming your API endpoint is at '/login'
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Display OTP field
        setShowOTP(true);
        setError('');
      } else {
        // Handle error
        console.log('Login failed');
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming your API endpoint for OTP verification is at '/verify-otp'
      const response = await fetch('/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, otp }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Redirect or perform other actions upon successful OTP verification
      } else {
        // Handle error
        console.log('OTP verification failed');
        setError('OTP verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">GCU Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Get OTP</button>
        </form>
        {error && <p className="error">{error}</p>}
        {showOTP && (
          <form onSubmit={handleOTPSubmit}>
            <div className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input type="number" id="otp" name="otp" value={otp} onChange={(e) => setOTP(e.target.value)} />
            </div>
            <button type="submit">Submit OTP</button>
          </form>
        )}
        <div className="navigation-links">
          {/* Navigation to Registration component */}
          <Link to="/registration">Create an Account</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
