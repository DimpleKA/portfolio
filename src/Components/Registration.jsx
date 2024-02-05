// Registration.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Registration.css'; // Import the CSS file for styling

function Registration() {
    return (
        <div className="login-page">
            <div className="login-form">
                <h2>Registration</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">GCU Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profile-picture">Profile Picture</label>
                        <input type="file" id="profile-picture" name="profile-picture" accept="image/*" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit">Register</button>
                </form>
                <div className="navigation-links">
                    {/* Navigation to Login component */}
                    <Link to="/">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Registration;
