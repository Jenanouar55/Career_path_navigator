import React from 'react'
import './Dashboardpage.css'
import Sidebar from '../components/Dashboard/sidebar'
import Content from '../components/Dashboard/content'
import Profile from '../components/Dashboard/profile'
import { useLocation } from 'react-router-dom'

const DashboardPage = () => {
  const location = useLocation()
  const interests = location.state?.interest || [];

  return (

      <section className='dashboard'>
        <Sidebar />
        
        <section className='content'>
          <section className="dashboard-content">
            <Content interests={interests}/>
          </section>

          <section className="dashboard-profile">
            <Profile />
          </section>
          
        </section>
      </section>
    

  )
}

export default DashboardPage