import React, { useState } from 'react'
import './editProfile.css'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const EditProfile = () => {
    
    // const location = useLocation()
    

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value)
        console.log(e.target.value)
    }

    const [email, setEmail] = useState('')
    const onEmailChange = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Navigating with userInfo:", { userInfo: [firstName, email] });
        navigate('/Interests', {state: {userInfo:[firstName, email]}})
    }
  return (

    
    <section className="profile-form">
        <form onSubmit={handleSubmit} >
            <div className="profile-head">
            <h2>Edit Profile</h2>
            <div className="underline"></div>
            </div>
            
            <div className='profile'>
                <div>
                    <h5>First Name</h5>
                    <div className='profile_input'>
                        <input type="text" id='first-name' value={firstName} onChange={onFirstNameChange}/>
                    </div>
                </div>

                <div>
                    <h5>Last Name</h5>
                    <div className='profile_input'>
                        <input type="text" id='last-name'/>
                    </div>
                </div>

        
                <div>
                    <h5>Email</h5>
                    <div className='profile_input'>
                        <input type="email"  id='email' value={email} onChange={onEmailChange}/>
                    </div>
                </div>

                <div>
                    <h5>Address</h5>
                    <div className='profile_input'>
                        <input type="address" />
                    </div>
                </div>

                <div>
                    <h5>City</h5>
                    <div className='profile_input'>
                        <input type="text" />
                    </div>
                </div>

                <div>
                    <h5>State</h5>
                    <div className='profile_input'>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    </section>

  )
}

export default EditProfile