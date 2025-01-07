import React from 'react'
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

  return (

      <section className='dashboard'>
        <Sidebar className='sidebar'/>
        {/* <Headerbar className='header'/> */}

        <section className='content'>
          <section className="dashboard-content">
            <Content information={information}/>
        </section>

        <section className="dashboard-profile">
            <Profile className='profile'/>
            {/* <Calendar /> */}
            <Courses />
        </section>
          
        </section>
      </section>
    

  )
}

export default DashboardPage