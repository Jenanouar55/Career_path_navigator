import React, { useState } from 'react'
import './interestform.css'

const Interestform = () => {

  const subCategories = {
    'Art & Design': ['UI/UX Developer', 'Graphic Design', 'Game Developer', 'Digital Animator'],
     Education: ['Teaching', 'Educational Technology', 'Curriculum Development'],
     Science: ['Biology', 'Physics', 'Chemistry', 'Astronomy'],
     Tech: ['AI', 'Technical Writing', 'IT Support', 'Software Development'],
    };

  const subSubCategories = {
     AI: ['Machine Learning', 'Robotics', 'Data Science'],
    'Technical Writing': ['Content Writing', 'Documentation'],
    'IT Support': ['Networking', 'System Administration'],
    'Software Development': ['Frontend Development', 'Backend Development', 'DevOps'],
  };

  const [mainInterest, setMainInterest] = useState('')
  const [subInterests, setSubInterests] = useState('')

  const handleMainInterestChange = (e) =>{
    setMainInterest(e.target.value)
    console.log(e.target.value)
    setSubInterests('')
  }

  const handleSubInterestChange = (e) =>{
    setSubInterests(e.target.value)
  }
  

  return (
    <section className='interestForm'> 
      <div >
        <h2>Edit Profile</h2>
        <div className="underline"></div>
        <form action="" className='profile'>

          <div>
            <h5>First Name</h5>
            <div>
            <input type="text" id='first-name'/>
            </div>
          </div>

          <div>
            <h5>Last Name</h5>
            <div>
            <input type="text" id='last-name'/>
            </div>
          </div>

          
          <div>
            <h5>Email</h5>
            <div>
            <input type="email"  id='email'/>
            </div>
          </div>

          <div>
            <h5>Address</h5>
            <div>
            <input type="address" />
            </div>
          </div>

          <div>
            <h5>City</h5>
            <div>
            <input type="text" />
            </div>
          </div>

          <div>
            <h5>State</h5>
            <div>
            <input type="text" />
            </div>
          </div>
          
        </form>
      </div>

      <h2>What Are Your Interests</h2>
      <div className="underline"></div>
      <form action="">

        {/* Main Interests */}
        {/* <label htmlFor="main-interests">Select A Category</label> */}
        <div className='select'>
        <select 
          id="main-interests"
          value={mainInterest}
          onChange={handleMainInterestChange}>
            <option value="">-- Choose an Interest --</option>
            <option value="Art & Design">Art & Design</option>
            <option value="Education">Education</option>
            <option value="Science">Science</option>
            <option value="Tech">Tech</option>
        </select>
        </div>

        {/* Sub Interests */}
        {/* <label htmlFor="sub-interests">Select a SubCategory</label> */}
        <div className='select'>
          <select
           id="sub-interests"
           onChange={handleSubInterestChange}
           value={subInterests}
          >
            <option value="">-- Choose an Interest --</option>
            {subCategories[mainInterest]?.map((subCategory, index) =>(
              <option 
              value={subCategory} 
              key={index}
              
              > {subCategory} </option>
            ))}
            </select>
        </div>

        {/* Sub subCategories */}
        {/* <label htmlFor="sub-subInterests">Choose an Interest</label> */}
        <div className='select'>
          <select id="sub-subInterests">
            <option value="">
              {subSubCategories[subInterests] ? '-- Choose an Interest --' : '----------------'}

            </option> 

            {subSubCategories[subInterests]?.map((interest, index) => (
              <option key={index}>{interest}</option>
            ))}
          </select>
        </div>

        <div className='submit'>Submit</div>
        </form>
    </section>
  )
}

export default Interestform