import React from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import './ContactUsPage.css';

const ContactUsPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: 'careerpathnavigator@gmail.com', // Replace with your Web3Forms access key
    settings: {
      from_name: 'Career Path Navigator',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (message, data) => {
      console.log(message);
      document.getElementById('successMessage').style.display = 'block';
      reset(); // Reset the form after a successful submission
    },
    onError: (message, data) => {
      console.error(message);
    },
  });

  return (
    <section className="contact-us-container">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="underline"></div>
        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Full name is required', maxLength: 80 })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>

          <div className="submit-container">
            <button type="submit">Submit</button>
          </div>
        </form>

        <div id="successMessage" className="success-message" style={{ display: 'none' }}>
          Your message has been sent successfully!
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;


// import React from 'react'
// import './ContactUsPage.css'

// const ContactUspage = () => {
//   return (
//     <section className="contact-us-container">

//       <div className="contact-container">
//         <h2>Contact Us</h2>
//         <div className="underline"></div>
//         <form id="contactForm">

//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="name" required="" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required="" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" required="" defaultValue={""} />
//           </div>

//           <div className='submit-container'><button type="submit">Submit</button></div>
//         </form>

//         <div id="successMessage" className="success-message">
//           Your message has been sent successfully!
//         </div>

//       </div>

//     </section>
//   )
// }

// export default ContactUspage