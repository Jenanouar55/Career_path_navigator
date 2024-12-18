import React from 'react'
import logo from '../../assets/images/c-logo.png'
import "./nav.css"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <nav>
            <div className="nav_image">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="nav_text">
                
                <Link to="">Home</Link>
                <Link to="">About Us</Link>
                <Link to="">Services</Link>
                <Link to="">Contact Us</Link>
                <Link to="">Sign In</Link>
                <Link to="">Sign Up</Link>
            </div>
        </nav>

    </div>
  )
}

export default NavBar;