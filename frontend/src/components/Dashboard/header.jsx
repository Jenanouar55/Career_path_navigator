import React from 'react'
import './header.css'
import {BiUser} from 'react-icons/bi'

const header = () => {
  return (
    <div className='header'>
        <h1>Dashboard</h1>
        <div className='icon-border'>
        <BiUser className='icon'/>
        </div>
        
    </div>
  )
}

export default header