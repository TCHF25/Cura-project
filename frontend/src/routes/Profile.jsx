import React   from "react";
import '../styles/css/profile.css'
import {  ReactComponent as Health } from '../assets/svg/health.svg'

const Profile = () => {
    return (
        <div>
            <div>
                <div>
                    <Health className="health-cover"/>
                    <h1 className='health-profile-title'>HEALTH PROFILE</h1>
                </div>
                
                     
                
            </div>
        </div>
    )
}

export default Profile