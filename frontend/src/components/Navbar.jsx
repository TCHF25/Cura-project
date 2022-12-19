import React, { useState } from 'react'
import '../styles/css/navbar.css'

import {  ReactComponent as NavLogo } from '../assets/svg/navlogo.svg'
import { Link } from "react-router-dom"


const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home')
    const activePageTab = (page) =>{
        setActiveTab(page)
    }
 



  return (
    <div className="navbar">
        <div className="navcontainer">
            <div className="navflex">
                <div className="navleft">
                    <div className="navlogo">
                        <NavLogo className="logo"/>
                    </div>    
                </div>
                <div className="navright">
                    <div className="navigation">
                        <div className="nav-group">
                            <Link to="/feed" className={activeTab==='home'?"activeTab nav-link":"nav-link"} onClick={()=>{activePageTab('home')}} >                               
                                <span className="nav-texts" style={{marginTop: "0px"}}>Home</span>
                            </Link>
                            <Link to="/network" className={activeTab==='network'?"activeTab nav-link":"nav-link"} onClick={()=>{activePageTab('network')}}>                                
                                <span className="nav-texts">My Network</span>
                            </Link>
                            <Link to="/jobs" className={activeTab==='jobs'?"activeTab nav-link":"nav-link"} onClick={()=>{activePageTab('jobs')}}>                               
                                <span className="nav-texts">Jobs</span>
                            </Link>
                            <Link to="/messaging" className={activeTab==='messaging'?"activeTab nav-link messaging-link-nav":"nav-link messaging-link-nav"} onClick={()=>{activePageTab('messaging')}}>                               
                                <span className="nav-texts">Messaging</span>
                            </Link>
                            <Link to="/notifications" className={activeTab==='notifications'?"activeTab nav-link notif-link-nav":"nav-link notif-link-nav"} onClick={()=>{activePageTab('notifications')}}>                               
                                <span className="nav-texts">Notifications</span>
                            </Link>     
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar