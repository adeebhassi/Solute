import React from 'react'
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div style={{ padding: '20px' }}>
          <h2>Registration Page</h2>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input type="password" placeholder="Confirm your password" />
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Already registered? <Link to="/login">Login here</Link>.
          </p>
        </div>
      );
}

export default Register