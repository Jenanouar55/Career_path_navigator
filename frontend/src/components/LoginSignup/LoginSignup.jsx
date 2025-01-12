import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "./LoginSignup.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const location = useLocation();
  const state = location.state?.action || "Sign Up";
  const [action, setAction] = useState(state);
  

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for error and success messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password || (action === "Sign Up" && !formData.name)) {
      setError("Please fill in all required fields.");
      return;
    } else {
      if (action === "Sign Up") {
      navigate('/EditProfile') 
      } else if (action === 'Login') {
        navigate('/Dashboard')
      }
    }

    try {
      if (action === "Sign Up") {
        const response = await axios.post("http://localhost:5000/signup", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setSuccess(response.data.message); // Display success message
      } else if (action === "Login") {
        const response = await axios.post("http://localhost:5000/login", {
          email: formData.email,
          password: formData.password,
        });
        setSuccess(response.data.message); // Display success message
        localStorage.setItem("token", response.data.token); // Save token for session management
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };
  

  return (
     <div className="login-signup-body">

      <div className="login-signup-container">
        <div className="header">
          <div className="header_text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <FaUser className="custom-icon" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="input">
            <FaEnvelope className="custom-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input">
            <FaLock className="custom-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* {action === "Login" && (
          <div className="forgot-password">
            Forgot Password? <a href="">Click Here</a>
          </div>
        )} */}

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        {/* Submit Buttons */}
        <div className="submit-container">
          <button className="submit-btn" onClick={handleSubmit}>
            {action}
          </button>
        </div>

        {/* Toggle Form Button */}
        <div className="toggle-container">
          <button className="toggle-btn" onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}>
            Switch to {action === "Sign Up" ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default LoginSignup;
