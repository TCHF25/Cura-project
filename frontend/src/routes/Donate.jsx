import React   from "react";
import '../styles/css/donate.css'
import { ReactComponent as Gloves } from '../assets/svg/rubber-gloves.svg'


const Donate = () => {
    return (
        <div>
            <div className="donation-container">
                <div className="left-part">
                    <div className="left-part-container">
                        <div className="left-space-title">
                            <h1 className="left-space-title">Donate Now</h1>
                        </div>
                        <div className="left-space-text">
                            <h3 className="left-space-text">By supporting of people like you <br/> we can proceed to provide others with affordable medication.</h3>
                        </div>
                    </div>
                </div>

                <div className="donation-part">
                    <div className="donation-cart">
                        <div className="now-monthly">
                            <button className="donate-btn">Donate Now</button>
                            <div className="empty-space-btn"></div>
                            <button className="donate-btn">Monthly Donation</button>     
                        </div>
                        <div className="donation-amount">
                            <div className="donation-amount-title">
                                <h2>Donation Amount</h2>
                            </div>
                            <div className="donation-amount-rectangles">
                                <div className="amount-rectangle">
                                    <h3>25 USD</h3>
                                </div>
                                <div className="amount-rectangle">
                                    <h3>100 USD</h3>
                                </div>
                                <div className="amount-rectangle">
                                    <h3>200 USD</h3>
                                </div>
                                <div className="amount-rectangle">
                                    <h3>400 USD</h3>
                                </div>
                                <div className="amount-rectangle">
                                    <h3>800 USD</h3>
                                </div>
                                <div className="amount-rectangle">
                                    <h3>Other</h3>
                                </div>
                            </div>
                        </div>
                        <div className="enter-donation-amount">
                            <div className="donation-amount-title">
                                <h2>Enter Donation Amount</h2>
                            </div>
                            <div className="enter-amount-input">
                                <input type="text" name="amount" value="Amount"></input>
                            </div>
                        </div>
                        <div className="currency">
                            <div className="donation-amount-title">
                                <h2>Currency</h2>
                            </div>
                            <div className="amount-rectangle">
                                <h3>Other</h3>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
            <div className="contact-details">
                <Gloves className="contact-details-cover"/>
                <div className="contact-details-container">
                    <div className="contact-details-left">
                        <div className="contact-details-title">
                            <h2 className="contact-details-title">Contact Details</h2>
                        </div>
                        <div className="contact-details-details">
                                    <div className="full-name">
                                        <input type="text"  className="contained"/>
                                    </div>
                                    <div className="full-name">
                                        <input type="text"  className="contained"/>
                                    </div>
                                    <div className="full-name">
                                        <input type="text"  className="contained"/>
                                    </div>
                                    <div className="full-name">
                                        <input type="text"  className="contained"/>
                                    </div>
                                    <div className="full-name">
                                        <input type="text"  className="contained"/>
                                    </div>
                        </div>     
                    </div>
                    <div className="contact-details-right"></div>
                </div>

            </div>
        </div>

    )
}

export default Donate