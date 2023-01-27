import React   from "react";
import '../styles/css/donate.css'


const Donate = () => {
    return (
        <div>
            <div className="donation-container">
                <div className="left-part">
                    <div className="left-space-title">
                        <h1>blabla</h1>
                    </div>
                    <div className="left-space-text">
                        <h1>bjdbkje</h1>
                    </div>
                </div>

                <div className="donation-part">
                    <div className="donation-cart">
                        <div className="now-monthly">
                            <button>Donate Now</button>
                            <button>Monthly Donation</button>     
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
                            <div className="enter-donation-amount-title">
                                <h2>Enter Donation Amount</h2>
                            </div>
                            <div className="enter-amount-input">
                                <input type="text" name="amount" value="Amount"></input>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>

    )
}

export default Donate