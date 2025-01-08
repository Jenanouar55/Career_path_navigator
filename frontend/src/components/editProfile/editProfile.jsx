import React, { useState } from 'react'
import './editProfile.css'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const EditProfile = () => {
    

    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',

    })
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    // const [firstName, setFirstName] = useState('')

    // const onFirstNameChange = (e) => {
    //     setFirstName(e.target.value)
    //     console.log(e.target.value)
    // }

    // const [email, setEmail] = useState('')
    // const onEmailChange = (e) => {
    //     setEmail(e.target.value)
    //     console.log(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.firstName && formData.lastName && formData.email && formData.address) {
            navigate('/Interests', {state: {userInfo:[formData.firstName, formData.email]}})
        }else {
            setError('Please fill out all required fields')
        }
        
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
                <label htmlFor='first-name'>First Name</label>
                    <div className='profile_input'>
                        
                        <input type="text" id='first-name' name='firstName' value={formData.firstName} onChange={handleInputChange}/>
                    </div>
                </div>

                <div>
                    <label htmlFor='last-name'>Last Name</label>
                    <div className='profile_input'>
                        
                        <input type="text" id='last-name' name='lastName' value={formData.lastName} onChange={handleInputChange}/>
                    </div>
                </div>

        
                <div>
                    <label htmlFor='email'>Email</label>
                    <div className='profile_input'>
                        <input type="email"  id='email' name='email' value={formData.email} onChange={handleInputChange}/>
                    </div>
                </div>

                <div>
                    <label htmlFor='address'>Address</label>
                    <div className='profile_input'>
                        <input type="address" id='address' name='address' value={formData.address} onChange={handleInputChange}/>
                    </div>
                </div>

                <div>
                    <label htmlFor='city'>City</label>
                    <div className='profile_input'>
                        <input type="text" id='city' name='city' value={formData.city} onChange={handleInputChange}/>
                    </div>
                </div>

                <div>
                    <label htmlFor='state'>State</label>
                    <div className='profile_input'>
                        <input type="text" id='state' name='state' value={formData.state} onChange={handleInputChange}/>
                    </div>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                
            </div>
            <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    </section>

  )
}

export default EditProfile