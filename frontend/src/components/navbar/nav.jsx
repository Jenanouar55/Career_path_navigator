import React, { useState } from 'react'
import logo from '../../assets/images/c-logo.png'
import "./nav.css"
import {Link} from 'react-router-dom'

const NavBar = () => {
    const [isAuthenticated, setIsAuthenticated]= useState(false);

    const handleLogOut = () =>{
        setIsAuthenticated(false)
    }

const handleSignIn = () => {
    setIsAuthenticated(true)
}
  return (
    <div className='header-navbar' id='nav'>
        <nav>
            <div className="nav_image">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="nav_text">
                
                <Link to="/">Home</Link>
                <Link to="/AboutUs">About Us</Link>
                
                <Link to="/ContactUs">Contact Us</Link>

                {/* if signed in successfully display a Log Out button*/}

                {isAuthenticated ? (
                    <Link to="/" onClick={handleLogOut} ><button className='log-out'>Log Out</button></Link>
                ) : (
                    <Link to="/Signin" onClick={handleSignIn} state={{action:"Sign Up"}}>Sign In</Link>
                )}
            </div>

        </nav>

    </div>
  )
}

export default NavBar;