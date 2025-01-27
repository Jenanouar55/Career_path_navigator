import React, { useState } from 'react'
import './interestform.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Interestform = () => {

  // Get Username and email from the URL, passed from profile page
  const location = useLocation();
  const userInfo = location.state?.userInfo

  // Interest Form Array 

  const fields = ['Technology', 'Healthcare', 'Business & Management', 'Education',
    'Creative Arts', 'Engineering', 'Marketing & Sales'
  ]

  const roles = ['Entry-Level', 'Mid-Level', 'Senior-Level', 'Internship', 'Freelance']

  const skills = ['Coding (Python, Java, etc)', 'Graphics Design', 'Data Analysis', 'Project Management', 'Communication', 'Marketing & SEO']


  const workEnvironments = ['Remote', 'In-person', 'Hybrid']

  const industries = ['Software Development', 'Health Care', 'Finance', 'Education', 'Media & Entertainment', 'Manufacturing']
  // const industries = ['Machine Learning', 'Robotics', 'Frontend Development']
  const goals = ['Become a Manager', 'Build My Own Business', 'Become an Expert in a Specific Field']


  const[formData, setFormData] = useState({
    field: '',
    role: '',
    skill: '',
    workEnvironment: '',
    industry: '',
    goal: '',
  })

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const [error, setError] = useState('')


  const navigate = useNavigate();
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (formData.field && formData.goal && formData.industry && formData.role && formData.skill && formData.workEnvironment) {
    navigate('/Dashboard', {state: {information:[formData.field, formData.role, formData.skill, formData.workEnvironment, 
      formData.industry, formData.goal], userInfo: userInfo}})
    } else {
      setError('Please fill in all required fields')
      return;
    }
  }
  return (
    <section className='interestForm'>

      <form onSubmit={handleSubmit} >
        <div className='interests'>
          <h2>Interests</h2>
          <div className="underline"></div>

          {/* Field*/}
          <div className='select'>
            <label htmlFor="fields">What Field are you interested in?</label>
            <select 
              name='field'
              id="fields"
              value={formData.field}
              onChange={handleInputChange}>
                <option value="">---Select---</option>
                {fields.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <label htmlFor="roles">What type of role are you looking for?</label>
            <select 
              name='role'
              id="roles"
              value={formData.role}
              onChange={handleInputChange}>
                <option value="">---Select---</option>
                {roles.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <label htmlFor="skills">What skills do you currently have?</label>
            <select 
              name='skill'
              id="skills"
              value={formData.skill}
              onChange={handleInputChange}>
                <option value="">---Select---</option>
                {skills.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <label htmlFor="workEnvironments">What type of Work Environment do you prefer?</label>
            <select 
              name='workEnvironment'
              id="workEnvironments"
              value={formData.workEnvironment}
              onChange={handleInputChange}>
                <option value="">---Select---</option>
                {workEnvironments.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <label htmlFor="industries">What industries interest you most?</label>
            <select 
              name='industry'
              id="industries"
              value={formData.industry}
              onChange={handleInputChange}>
                <option value="">---Select---</option>
                {industries.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
              ))}
            </select>
          </div>

          <div className="select">
            <label htmlFor="goals">What are your long term career goals?</label>
            <select name='goal' id="goals" value={formData.goal} onChange={handleInputChange}>
              <option value="">--Select--</option>
              {goals.map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))}
            </select>
          </div>
        
      </div> 

      {error && <div style={{color: 'red'}}><h3>{error}</h3></div>}

      <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  )
}

export default Interestform