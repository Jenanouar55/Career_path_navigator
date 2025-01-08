import React from 'react'
import './styles/profile.css'
import ProfileHeader from './profileHeader'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import { useLocation } from 'react-router-dom'

const Profile = () => {
  const location = useLocation();
  const userInfo = location.state?.userInfo;
  const interest = location.state?.interest;
  
  return (
    <div className='dashboard-profile'>
      <ProfileHeader />

      <div className="user-profile">
        <div className="user-details">
          <div className='icon-border'>
            <BiUser className='icon'/>
          </div>
          <h3 className="username">{userInfo[0]}</h3>
          <h4 className="interests">{interest[0]}/{interest[2]}</h4>

          <div className="interest-list">

            <div className="interests-details">
              <BiBook className='icon'/>

              <span className="interests-name">
                Web Development
                <span>Title</span>
                </span>
              
              <span className="action">:</span>

            </div>

            <div className="interests-details">
              <BiBook className='icon'/>

              <span className="interests-name">
                Web Development
                <span>Title</span>
                </span>
              
              <span className="action">:</span>

            </div>

            <div className="interests-details">
              <BiBook className='icon'/>

              <span className="interests-name">
                Web Development
                <span>Title</span>
                </span>
              
              <span className="action">:</span>
            </div>

            <div className="interests-details">
              <BiBook className='icon'/>

              <span className="interests-name">
                Web Development
                <span>Title</span>
                </span>
              
              <span className="action">:</span>
            </div>

            <div className="interests-details">
              <BiBook className='icon'/>

              <span className="interests-name">
                Web Development
                <span>Title</span>
                </span>
              
              <span className="action">:</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile