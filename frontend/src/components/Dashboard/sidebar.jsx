import React from 'react'
import './styles/sidebar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/c-logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTachometerAlt, faBook, faCog, faSignOutAlt, faHeart,} from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'

const sidebar = () => {
  return (
    <section className="sidebar headerbar">
            <aside>
                <nav className='aside_nav'>
    
                    <div className="nav_image">
                        
                        <img src={logo} alt="logo" />
                    </div>
    
                    <div className='sidebar-links'>
                        
                        <p>
                            <Link className='active'>
                                <FontAwesomeIcon icon={faTachometerAlt} className='icon'/>
                                Dashboard
                            </Link>
                        </p>
    
                        <p><Link to='/ConstructionPage'> 
                        <FontAwesomeIcon icon={faHeart} className='icon'/>Interests</Link></p>
 
                        <p><Link to='/ConstructionPage'> <FontAwesomeIcon icon={faBook} className='icon'/>
                        Courses</Link></p>
    
                        <p><Link to='/ConstructionPage'>
                        <FontAwesomeIcon icon={faCog} className='icon'/>
                        Settings</Link></p>
                        
                        <p><Link to='/ConstructionPage'>
                        <FontAwesomeIcon icon={faHandsHelping} className='icon'/>
                        Help</Link></p>
                        
                    </div>

                    <div className='sidebar-links-icons'>
                        
                        <p>
                            <Link className='active'>
                                <FontAwesomeIcon icon={faTachometerAlt} className='icon'/>
                                
                            </Link>
                        </p>
    
                        <p><Link to='/'> 
                        <FontAwesomeIcon icon={faHeart} className='icon'/></Link></p>
 
                        <p><Link to='/'> <FontAwesomeIcon icon={faBook} className='icon'/>
                    </Link></p>
    
                        
                        <p><Link to='/'>
                        <FontAwesomeIcon icon={faHandsHelping} className='icon'/>
                        </Link></p>
                        
                    </div>
    
                    
                    <div className="logout">
                        <hr />
                        <Link to="/">
                        <FontAwesomeIcon icon={faSignOutAlt} className='icon'/>
                        Logout</Link>
                    </div>
                    
    
                </nav>
            </aside>
    
        </section>
  )
}

export default sidebar