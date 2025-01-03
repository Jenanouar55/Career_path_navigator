import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/c-logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTachometerAlt, faBook, faCog, faSignOutAlt, faHeart,} from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'

const sidebar = () => {
  return (
    <section className="sidebar">
            <aside>
                <nav className='aside_nav'>
    
                    <div className="nav_image">
                        
                        <img src={logo} alt="logo" />
                    </div>
    
                    <div className='sidebar-links'>
                        
                        <p>
                            <Link>
                                <FontAwesomeIcon icon={faTachometerAlt} className='icon'/>
                                Dashboard
                            </Link>
                        </p>
    
                        <p><Link> 
                        <FontAwesomeIcon icon={faHeart}/>Interests</Link></p>
    
                        <p><Link> <FontAwesomeIcon icon={faBook}/>
                        Courses</Link></p>
    
                        <p><Link>
                        <FontAwesomeIcon icon={faCog} />
                        Settings</Link></p>
                        
                        <p><Link>
                        <FontAwesomeIcon icon={faHandsHelping} />
                        Help</Link></p>
                        
                    </div>
    
                    
                    <div className="logout">
                        <hr />
                        <Link to="/">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Logout</Link>
                    </div>
                    
    
                </nav>
            </aside>
    
        </section>
  )
}

export default sidebar