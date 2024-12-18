import React from 'react'
import "./hero.css"
import hero_image from "../../assets/images/hero_image.png"

const hero = () => {
  return (
    <div className='hero_section'>
        <div className='hero_text'>
            <h1>Career Path Navigator</h1>
            <p>We Help You Navigate Your Dream Career</p>
        </div>

        <div className='hero_img'>
          <img src={hero_image} alt="Hero image" />
        </div>

    </div>
  )
}

export default hero