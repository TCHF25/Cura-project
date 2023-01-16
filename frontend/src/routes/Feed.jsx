import React from 'react'
import {  ReactComponent as Cover } from '../assets/svg/doctor1.svg'
import {  ReactComponent as Cover2  } from '../assets/svg/giving-pills.svg'
import {  ReactComponent as Cover3  } from '../assets/svg/cover3.svg'
import {  ReactComponent as Testimonial1  } from '../assets/svg/test1.svg'
import {  ReactComponent as Testimonial2  } from '../assets/svg/test2.svg'
import {  ReactComponent as Testimonial3  } from '../assets/svg/test3.svg'
import {  ReactComponent as Logo } from '../assets/svg/navlogo2.svg'
import '../styles/css/feed.css'
                          
const Feed = () => {
    return (
        <div>
                <div> 
                <Cover className='cover'/>    
                    <h1 className='cover-text-background'>
                     Making Medication <br /> Accessible For Everyone
                    </h1>
                </div>

                <div className='part2'>
                    <div className='cover-image'>
                        <Cover2 className='cover2'/> 
                    </div>
                    <div className='cover-image-text'>
                        <h1 className='cover2-text-background'>
                         MAKING THE <br />WORLD A<br /> HEALTHIER, <br />HAPPIER PLACE
                        </h1>
                        <div className='line-separation'></div>
                        <h4 className='cover2-text-details'>
                        Big Pharma monopolized the drug industry, and it controlls the price of all medication in the market,
                        they keep the prices very high for to maximize their profits.
                        People can’t access medication due to artificial prices of all medication.
                        We at Cura, provide a solution.
                        </h4>
                    </div>    
                </div>
                <div className='part3'>
                    <div className='part3-title'>
                        <h1 className='part3-title'>PURPOSE OF CURA</h1>
                    </div>
                    <div className='line-separation-2'></div>
                    <div className='part3-text'>
                        <h3 className='part3-text'>We provide a platform for generic medication, which is a replacement for the original medication created by Big Pharma and we get discounts for marketing their medication on Cura.
                            We actively raise donations from anyone who wants to contribute to our cause.
                            We are available only online, so we cut the pharmacy cost, by deliivering directly from the provider to the user.</h3>
                        <h3 className='part3-text'>Based on all of the above, we optimize the price of the medication provided on Cura, by making it the cheapest on the market, through cutting the cost and adding discounts from providers and we cut part of the price by adding donations.
                            This way we make sure that medication is accessible to everyone.</h3>
                    </div>
                </div>
                <div className='cover-intersection'>
                        <Cover3 className='cover3'/> 
                </div>
                <div className='client-testimonials'>
                    <div className='client-testimonials-title'>
                        <h1 className='client-testimonials-title'>CLIENT <br /> TESTIMONIALS</h1>
                    </div>
                    <div className='line-separation-3'></div>
                    <div className='testimonials'>
                        <div className='person'>
                            <div className='person-text'>
                                    <h3 className='person-text'>Cura helped me get my medication at a very cheap price, and with no waiting time at all.</h3>
                            </div>
                            <div className='person-image'>
                                <Testimonial1 className=''/>
                            </div>
                            <div className='line-separation-4'></div>
                            <div className='person-name'>
                                    <h3 className='person-name'>- Tarek Charif</h3>
                            </div>
                        </div>

                        <div className='person'>
                            <div className='person-text'>
                                    <h3 className='person-text'>Cura helped me get my medication at a very cheap price, and with no waiting time at all.</h3>
                            </div>
                            <div className='person-image'>
                                <Testimonial2 className=''/>
                            </div>
                            <div className='line-separation-4'></div>
                            <div className='person-name'>
                                    <h3 className='person-name'>- Tarek Charif</h3>
                            </div>
                        </div>

                        <div className='person'>
                            <div className='person-text'>
                                    <h3 className='person-text'>Cura helped me get my medication at a very cheap price, and with no waiting time at all.</h3>
                            </div>
                            <div className='person-image'>
                                <Testimonial3 className=''/>   
                            </div>
                            <div className='line-separation-4'></div>
                            <div className='person-name'>
                                    <h3 className='person-name'>- Tarek Charif</h3>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className='contact-us'>        
                    <div className='contact-us-title'>
                        <h1 className='contact-us-title'>CONTACT US</h1>
                    </div>
                    <div className='line-separation-5'></div>
                    <div className='address'>
                        <div className='location-box'>
                            <h3 className='location'>Cura</h3>
                            <h3 className='location'>Beirut, Lebanon</h3>
                            <h3 className='location'>Corniche el Mazraa</h3>
                        </div>
                        <div className='virtual-box'>
                            <h3 className='location'>Tel: 01705807</h3>
                            <h3 className='location'>Email: Support@cura.com</h3>
                        </div>
                    </div>
                </div>
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

export default Feed;