import React from 'react'
import "./AboutUs.css"
import about_image from "../../assets/images/about_us_image.jpg"

const AboutUs = () => {
  return (
    <div className='aboutus'>
        <div className="aboutus_header">
            <h1>About Us</h1>
            <h5>Know More About Us</h5>
        </div>

        <div className="aboutus_section">
            <div className="aboutus_img">
                <img src={about_image} alt="About Us" />
            </div>

            <div className="aboutus_text">
                <p>
                Welcome to Career Path Navigator, where innovation meets growth.
                We are passionate about empowering individuals and organizations to reach their full potential 
                through transformative learning and cutting-edge solutions.
                </p>

                <p>
                At Career Path Navigator, we specialize in providing high-quality educational resources, 
                personalized recommendations, and a supportive community to help you achieve your goals. 
                
                </p>
                
                <a href="/AboutUs">Learn More</a>
            </div>

        </div>
    </div>
  )
}

export default AboutUs