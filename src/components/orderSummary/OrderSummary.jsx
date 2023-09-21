import React from 'react'
import image from "../images/book-1.jpg"
import "./OrderSummary.css"
import { useNavigate } from 'react-router-dom';

function OrderSummary() {
    let navigate = useNavigate();
    const handleOsClick = () => {
        navigate("/orderPlaced")
    }
  return (
    <div className="os-outer-box">
            <div className="os-main-content">
                <div className="os-main">
                    <div className="os-my-os">
                        <div className="os-title">
                            Order Summary
                        </div>
                    </div>
                    <div className="os-mid-box">
                        <div className="os-book-logo">
                            <img className="os-image" src={image} alt="Logo" />
                        </div>
                        <div className="os-total-books">
                            <div className="os-book-title">
                                Don't Make Me Think
                            </div>
                            <div className="os-book-author">
                                by Steve Krug
                            </div>
                            <div className="os-book-price">
                                Rs.1500
                                <s className="os-old-price">Rs.2000</s>
                            </div>
                        </div>
                    </div>
                    <div className="os-place-order">
                        <button className="os-order-button" onClick={handleOsClick}>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OrderSummary