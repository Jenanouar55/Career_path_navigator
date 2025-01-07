import React, { useState } from 'react'
import './Dashboardpage.css'
import Sidebar from '../components/Dashboard/sidebar'
import Content from '../components/Dashboard/content'
import Profile from '../components/Dashboard/profile'
import Calendar from '../components/Dashboard/calendar'
import Courses from '../components/Dashboard/courses'
import Headerbar from '../components/Dashboard/headerbar'
import { useLocation } from 'react-router-dom'

const DashboardPage = () => {
  const location = useLocation()
  const information = location.state?.information || [];

    const [courses, setCourses] = useState([]);

    const handleSetCourse  = (item) => {
     const courseAdded= courses.some((course) => (course.id === item.id))
    if (courseAdded){
      alert('Course already Added')
    }else {
      setCourses((prev) => ([...prev, item]))
    }
  }

  const handleRemoveCourse = (item) => {
    setCourses((prev) => prev.filter((course) => course.id !== item.id))
  }

  return (

      

      <section className='dashboard'>
        <Sidebar className='sidebar'/>
        {/* <Headerbar className='header'/> */}

        <section className='content'>
          <section className="dashboard-content">
            <Content information={information} handleAddCourse={handleSetCourse} />
        </section>

        <section className="dashboard-profile">
            <Profile className='profile'/>
            {/* <Calendar /> */}
            <Courses courses={courses} removeCourse={(handleRemoveCourse)}/>
        </section>
          
        </section>
      </section>
    

  )
}

export default DashboardPage