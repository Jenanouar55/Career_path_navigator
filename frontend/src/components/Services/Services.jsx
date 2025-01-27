import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
        <div className='header_services'>
            <h1>Services</h1>
            <h4>How We Work</h4>
        </div>

        <div className='services_section'>
            <h5>Career Recommendations</h5>
            <h5 className='purple'>Skill Assessment</h5>
            <h5>Learning Resources</h5>
            <h5 className='purple'>Scholarship Finder</h5>
            <h5>Career Roadmaps</h5>
            <h5 className='purple'>Job Search Assistant</h5>
        </div>
    </div>
  )
}

export default Services