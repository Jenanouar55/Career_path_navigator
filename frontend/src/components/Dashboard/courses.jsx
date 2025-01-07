import React from 'react'
import './styles/courses.css'
const courses = () => {

  const courses = [
    'course1',
    'course2',
    'course3',
    'course4',
    'course5',
    'courseA',
    'courseB',
    'courseC',
    'courseD',
    'courseE',
  ]
  return (
    <div className='course-list-container'> 
    <h4>My Courses</h4>
    <div className="course-list">
      {courses.map((item, index) => (
        <div className="course-list-item">
          <span className='course-list-no'><h4>{index}</h4></span>
          <span className='course-title'><h2>{item}</h2></span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default courses