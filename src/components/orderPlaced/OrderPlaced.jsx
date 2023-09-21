import React from 'react'
import "./OrderPlaced.css"
import opImage from "../images/order-placed.png"
import { useNavigate } from 'react-router-dom'


function OrderPlaced() {
    let navigate = useNavigate();
    const opHandleClick = () => {
        navigate("/dashboard")
    }
    return (
        <div className="op-outer-box">
            <div className="op-main-content">
                <div className="op-box1">
                    <img className="op-image" src={opImage} alt="opImage" />
                </div>
                <div className="op-box2">
                    <div className="op-text">
                        Hurray!!!your order is confirmed. OrderId is #123456. Save the Order Id for further communication.
                    </div>
                </div>
                <div className="op-box3">
                    <div className="op-table">
                        <div className="op-top">
                            <div>Email Us</div>
                            <div>Contact Us</div>
                            <div>Address</div>
                        </div>
                        <div className="op-bottom">
                            <div className="op-email-us">
                                <div>
                                    admin@bookstore.com
                                </div>
                            </div>
                            <div className="op-email-us">
                                <div>
                                    +91 9876543210
                                </div>
                            </div>
                            <div className="op-email-us">
                                <div>
                                    42, 14th Main, 15th Cross, Sector 4, Opp. to BDA Complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="op-box4">
                    <button className='op-submit-button' onClick={opHandleClick} type="submit">CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>
    )
}

export default OrderPlaced