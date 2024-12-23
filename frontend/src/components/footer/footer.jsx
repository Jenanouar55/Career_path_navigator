import React from 'react'
import logo from '../../assets/images/c-logo.png'
import "./footer.css"
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';


const footer = () => {
  return (
    <footer className='footer_section'>

        
            <img src={logo} alt=" logo " />
        

            <p className='back_to_top'>
            <a href='#nav' >Back To Top</a>
            </p>
            
        

        <div className="footer_icons">
            <h4>Follow Us</h4>
            <a href="/" target='_blank' rel='noopener noreferrer'>
                <FaFacebook />
            </a>

            <a href="/" target='_blank' rel='noopener noreferrer'>
                <FaInstagram />
            </a>

            <a href="/" target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
            </a>

            <a href="/" target='_blank' rel='noopener noreferrer'>
                <FaTwitter />
            </a>
        </div>

    </footer>
  )
}

export default footer