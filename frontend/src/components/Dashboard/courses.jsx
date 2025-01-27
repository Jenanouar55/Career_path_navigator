import React from 'react'
import './styles/courses.css'

const courses = ({courses, removeCourse}) => {

  // const courses = [
  //   'course1',
  //   'course2',
  //   'course3',
  //   'course4',
  //   'course5',
  //   'courseA',
  //   'courseB',
  //   'courseC',
  //   'courseD',
  //   'courseE',
  // ]
  return (
    <div className='course-list-container'> 
    <h4 className='course-heading'>My Courses:</h4>
    <div className="course-list">
      {courses.length > 0 ? (
        courses.map((item, index) => (
          <div className="course-list-item" key={index}>
            <span className='course-list-no'><h4>{item.id}</h4></span>
            <span className='course-title'><h2>{item.title}</h2></span>
            <span className='course-detail' onClick={() => removeCourse(item)}>x</span>
          </div>
        ))
      ) : (
        <p className='no-courses'>No courses available</p>
      )}
      
    </div>
    </div>
  )
}

export default courses