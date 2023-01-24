import React from 'react'
import '../styles/css/footer.css'
import {  ReactComponent as Logo } from '../assets/svg/navlogo2.svg'



const Footer = () => {
    
  return (
            <div className='full-footer'>
                <div className='ankle'>
                    <div className='ankle-left'>  
                        <div className='ankle-logo' >
                             <Logo className="ankle-logo"/>
                        </div> 
                        <div className='ankle-text'>
                            <h2 className='ankle-text'>Transforming <br /> consumer healthcare</h2>
                        </div>
                    </div>
                    <div className='ankle-right'>
                        <div className='top-part'>
                            <div className='type'>
                                <h3 className='service-bold'>Services</h3>
                                <button className='details-normal-btn'>Medications</button>
                                <button className='details-normal-btn'>Donations</button>
                            </div>
                            <div className='type'>
                                <h3 className='service-bold'>Company</h3>
                                <button className='details-normal'>About Cura</button>
                                <button className='details-normal'>Careers</button>
                            </div>
                        </div>
                        <div className='bottom-part'>
                            <div className='type'>
                                <h3 className='service-bold'>Contact</h3>
                                <h3 className='details-normal'>Beirut, Lebanon</h3>
                                <h3 className='details-normal'>+961 70764371</h3>
                                <h3 className='details-normal'>support@cura.com</h3>
                            </div>
                            <div className='type'>
                                <h3 className='service-bold'>Social</h3>
                                <button className='details-normal'>icon-Instagram</button>
                                <button className='details-normal'>icon- Facebook</button>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className='footer-flex'>
                        <h3 className='footer-links'>Cura 2023</h3>
                        <h3 className='footer-links'>All Rights Reserved</h3>
                    </div>
                    <div className='footer-flex'>
                        <h3 className='footer-links'>Terms and Conditions</h3>
                        <h3 className='footer-links'>Privacy Policy</h3>
                    </div>
                </footer>
            </div>

  )

}

export default Footer