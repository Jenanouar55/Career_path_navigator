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

  const goals = ['Becaome a Manager', 'Build My Own Business', 'Become an Expert in a Specific Field']

  // State to store form data
  const [field, setField] = useState('')
  const [role, setRole] = useState('')
  const [skill, setSkill] = useState('')
  const [workEnvironment, setWorkEnvironment] = useState('')
  const [industry, setIndustry] = useState('')
  const [goal, setGoal] = useState('')

  // Functions to handle form data change
  const handleFieldChange = (e) => {
    setField(e.target.value)
    console.log('The Chosen Field is:', e.target.value)
  }

  const handleRoleChange = (e) => {
    setRole(e.target.value)
    console.log('The Chosen Role is:', e.target.value)
  }

  const handleSkillChange = (e) => {
    setSkill(e.target.value)
    console.log('The Chosen Skill is:', e.target.value)
  }

  const handleWorkEnvironmentChange = (e) => {
    setWorkEnvironment(e.target.value)
    console.log('The Chosen Work Environment is:', e.target.value)
  }

  const navigate = useNavigate();
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log('Interets:',`mainInterest > subInterests, interest`)
    navigate('/Dashboard', {state: {interests:[field], userInfo: userInfo}})
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
              id="fields"
              value={field}
              onChange={handleFieldChange}>
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
              id="roles"
              value={role}
              onChange={handleRoleChange}>
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
              id="skills"
              value={skill}
              onChange={handleSkillChange}>
                <option value="">---Select---</option>
                {skills.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
              ))}
            </select>
          </div>

          <div className='select'>
            <label htmlFor="workEnvironment">What type of WOrk Environment do you prefer?</label>
            <select 
              id="workEnvironment"
              value={workEnvironment}
              onChange={handleWorkEnvironmentChange}>
                <option value="">---Select---</option>
                {workEnvironments.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
              ))}
            </select>
          </div>
        
      </div> 
      <button className='submit' type='submit' onSubmit={handleSubmit}>Submit</button>
      </form>
    </section>
  )
}

export default Interestform