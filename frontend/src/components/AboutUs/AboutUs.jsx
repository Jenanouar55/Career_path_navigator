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
                <img src={about_image} alt="About Us Image" />
            </div>

            <div className="aboutus_text">
                <p>
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Velit, officia obcaecati? 
                Quia reprehenderit sit, eum eligendi fuga 
                similique exercitationem totam, officiis 
                illum voluptates fugit nesciunt, quam 
                architecto repellendus fugiat laboriosam?
                </p>

                <p>
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Velit, officia obcaecati? 
                Quia reprehenderit sit, eum eligendi fuga 
                similique exercitationem totam, officiis 
                illum voluptates fugit nesciunt, quam 
                architecto repellendus fugiat laboriosam?
                </p>
                
                <a href="#">Learn More</a>
            </div>

        </div>
    </div>
  )
}

export default AboutUs