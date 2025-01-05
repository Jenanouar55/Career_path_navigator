import React from 'react'
import {BiEdit} from 'react-icons/bi'
import './styles/profileHeader.css'
import { Link } from 'react-router-dom'

const profileHeader = () => {
  return (
    <div className="profile-header">
        <h1>Profile</h1>

        <Link to='/EditProfile'>
          <span className='edit-icon'><BiEdit /></span>
        </Link>
        
    </div>
  )
}

export default profileHeader