import React from 'react'
import logo from '../../assets/images/c-logo.png'
import "./nav.css"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar' id='nav'>
        <nav>
            <div className="nav_image">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="nav_text">
                
                <Link to="/">Home</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/Services">Services</Link>
                <Link to="/ContactUs">Contact Us</Link>
                <Link to="/LoginSignup" state={{action:"Login"}}>Login</Link>
                <Link to="/LoginSignup" state={{action:"Sign Up"}}>Sign Up</Link>
            </div>
        </nav>

    </div>
  )
}

export default NavBar;