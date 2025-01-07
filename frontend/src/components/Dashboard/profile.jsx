import React from 'react'
import './styles/profile.css'
import ProfileHeader from './profileHeader'
import {BiUser} from 'react-icons/bi'
import { useLocation } from 'react-router-dom'

const Profile = () => {
  const location = useLocation();
  const userInfo = location.state?.userInfo;
  const information = location.state?.information;
  
  return (
    <div className='profile'>
      

      <div className="user-profile">
      <ProfileHeader />
        <div className="user-details">
          <div className='icon-border'>
            <BiUser className='icon'/>
          </div>
          <h3 className="username">{userInfo[0]}</h3>
          <h4 className="interests">{information[4]}/{information[4]}</h4>

        </div>
      </div>
    </div>
  )
}

export default Profile