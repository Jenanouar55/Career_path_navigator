import React, { useState } from 'react'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import "./LoginSignup.css"
import { useLocation } from 'react-router-dom'

const LoginSignup = () => {
  const location = useLocation()
  const state = location.state?.action || "Sign Up"
  const [action, setAction] = useState(state);
  return (

    <div className='login-signup-body'>
      <div className="curve1"></div>
      <div className="curve2"></div>

      <div className="container">
        <div className="header">
          <div className="header_text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">

        {action === "Sign Up" && (
          <div className="input">
            <FaUser className='custom-icon'/>
            <input type="text" placeholder='Name' />
          </div>) }
        
          
          <div className="input">
            <FaEnvelope className='custom-icon'/>
            <input type="email" placeholder='Email'/>
          </div>

          <div className="input">
            <FaLock className='custom-icon'/>
            <input type="password" placeholder='password'/>
          </div>
        </div>

        {action ==="Login" &&
        <div className="forgot-password">
          Forgot Password? <a href='#'>Click Here</a>
        </div>
        }

        <div className="submit-container">
          <div className={action==="Sign Up" ? "signup" : "signup gray"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Login" ? "login" : "login gray"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>

      <div className="curve3"></div>
      <div className="curve4"></div>
    </div>
  )
}

export default LoginSignup