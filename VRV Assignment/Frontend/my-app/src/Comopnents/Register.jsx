import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'; // Correct import path

export default function Register() {
  const { createUser } = useContext(AuthContext); // Access createUser from context
  const navigate = useNavigate(); // Hook for navigation
  const [error, setError] = useState(''); // State to handle error messages

  // Handler for form submission
  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUser(email, password); // Attempt to create user
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      console.error("Registration Error:", error.message);
      setError(error.message); // Set error message to display
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 shadow p-3 mt-5 mx-auto">
          <h1 className="mb-4">Register</h1>
          {/* Display error message if any */}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleRegister}>
            <div>
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                className="form-control mb-4"
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                name="password"
                type="password"
                className="form-control mb-4"
                required
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Register</button>
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
