import React   from "react";
import '../styles/css/profile.css'
import {  ReactComponent as Health } from '../assets/svg/health.svg'

const Profile = () => {
    return (
        <div>
            <div>
                <div className="health-container">
                    <Health className="health-cover"/>
                    <h1 className='health-profile-title'>HEALTH PROFILE</h1>
                    <div className="general-infos">
                        <div>
                            <h1 className="general-infos-title">General Information</h1>
                        </div>
                        <div className="health-inputs">
                            <div className="left-part">
                                <div className="full-name">
                                    <input type="text" />
                                </div>
                                <div className="email">
                                    <input type="text" />
                                </div>
                                <div className="date-of-birth">
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="right-part">
                                <div className="email">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                         
            </div>
        </div>
    )
}

export default Profile