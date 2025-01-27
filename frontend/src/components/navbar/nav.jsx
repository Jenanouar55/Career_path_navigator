import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/c-logo.png'
import "./nav.css"
import {Link} from 'react-router-dom'
import {FaBars, FaCross} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const NavBar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    const [isAuthenticated, setIsAuthenticated]= useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false)

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

            <div className="mobile-nav">
            <div className={isMobileOpen ? 'mobile-nav-icon mobile-active' : 'mobile-nav-icon'}>
                {isMobileOpen? (<span className='mobile-close' onClick={() => setIsMobileOpen(false)}>X</span>) : 
                                                                (<FaBars onClick={() => setIsMobileOpen(true)}/>)}
                {isMobileOpen && 
                               <div data-aos='fade-down' className='mobile-menu'>
                                    <Link data-aos='fade-up' to="/" onClick={() => setIsMobileOpen(false)}>Home</Link>
                                    <Link data-aos='fade-up' to="/AboutUs" onClick={() => setIsMobileOpen(false)}>About Us</Link>
                                    <Link data-aos='fade-up' to="/ContactUs" onClick={() => setIsMobileOpen(false)}>Contact Us</Link>
                                    
                                    {/* if signed in successfully display a Log Out button*/}
                                    
                                    {isAuthenticated ? (
                                        <Link to="/" onClick={() =>{handleLogOut(); setIsMobileOpen(false)}} ><button className='log-out'>LogOut</button></Link>
                                        ) : (
                                        <Link to="/Signin" onClick={() => {handleSignIn(); setIsMobileOpen(false);}} state={{action:"Sign Up"}}>Sign In</Link>
                                    )}
                               </div> }
            </div>
        </div>

        </nav>

        

    </div>
  )
}

export default NavBar;