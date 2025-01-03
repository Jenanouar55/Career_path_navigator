import React from 'react'
import './content.css'
import Header from './header'
import Card from './card'
const content = () => {
  return (
    <div className='dashboard-content'>
      <Header />
      <Card />
    </div>
  )
}

export default content