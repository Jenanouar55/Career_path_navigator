import React, { useState } from 'react'
import './ContactUsPage.css'


const ContactUspage = () => {

  const [isSuccessful, setIsSuccessful] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    fetch('https://formsubmit.co/careerpathnavigator@gmail.com', {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (response.ok){
        setIsSuccessful(true)
      } else {
        console.log('Failed to submit form')
      }
    })
    .catch((error) => {
      console.log('Error submitting form', error)
    })
    
    
  }
  return (
    <section className="contact-us-container">

      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="underline"></div>
        <form id="contactForm" action='https://formsubmit.co/careerpathnavigator@gmail.com' method='POST'>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required/>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>

          <div className='submit-container'><button type="submit" >Submit</button></div>
          <div id="successMessage" className="success-message">
          {isSuccessful && <p>Message Sent Successfully</p>}
        </div>

          <input type="hidden" name='_captcha' value='false'/>
          <input type="hidden" name='_next' value='http://localhost:3000/isSuccess' />
          <input type="hidden" name='_template' value='table' />
        </form>

        

        

      </div>

    </section>
  )
}

export default ContactUspage