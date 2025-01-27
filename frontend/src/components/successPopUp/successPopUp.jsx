import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './successPopUp.css'

const successPopUp = () => {
  return (
    <section className="popup">
        <div className="popup-container">
        <div className="popup-icon">
            <BiCheck className='check-icon'/>
        </div>
        <div className="popup-text">
            <h2>Message Sent Successfully</h2>
        </div>
        </div>
    </section>

  )
}

export default successPopUp