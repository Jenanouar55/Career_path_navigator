import React from 'react'
import './Dashboardpage.css'
import Sidebar from '../components/Dashboard/sidebar'
import Content from '../components/Dashboard/content'
import Profile from '../components/Dashboard/profile'

const DashboardPage = () => {
  return (

      <section className='dashboard'>
        <Sidebar />
        
        <section className='content'>
          <section className="dashboard-content">
            <Content />
          </section>

          <section className="dashboard-profile">
            <Profile />
          </section>
          
        </section>
      </section>
    

  )
}

export default DashboardPage