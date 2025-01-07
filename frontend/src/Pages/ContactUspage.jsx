import React from 'react'
import './ContactUsPage.css'

const ContactUspage = () => {
  return (
    <section className="contact-us-container">

      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="underline"></div>
        <form id="contactForm">

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required="" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required="" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required="" defaultValue={""} />
          </div>

          <div className='submit-container'><button type="submit">Submit</button></div>
        </form>

        <div id="successMessage" className="success-message">
          Your message has been sent successfully!
        </div>

      </div>

    </section>
  )
}

export default ContactUspage