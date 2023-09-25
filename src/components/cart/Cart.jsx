import React, { useState } from 'react'
import './Cart.css'
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import image from "../images/book-1.jpg"
import { Link } from 'react-router-dom';
import CustomerDetails from '../customerDetails/CustomerDetails';
import OrderSummary from '../orderSummary/OrderSummary';

function Cart() {
    const [custDetails, setCustDetails] = useState(false);
    const [ordSummary, setOrdSummary] = useState(false);
    const [btn, setBtn] = useState(true)

    const handleCartClick = () => {
        setCustDetails(true)
        setBtn(false)
    }
    function OrderSum(summary){
        setOrdSummary(summary)
    }

    return (
        <div className="cart-outer-box">
            <div className="cart-main-content">
            <div className='cart-Link'>
                <Link to={"/dashboard"}>Home/</Link>Cart
            </div>
                <div className="cart-main">
                    <div className="cart-my-cart">
                        <div className="cart-title">
                            My Cart (1)
                        </div>
                        <div className="cart-location">
                            <LocationIcon />Current Location
                        </div>
                    </div>
                    <div className="cart-mid-box">
                        <div className="cart-book-logo">
                            <img className="cart-image" src={image} alt="Logo" />
                        </div>
                        <div className="cart-total-books">
                            <div className="cart-book-title">
                                Don't Make Me Think
                            </div>
                            <div className="cart-book-author">
                                by Steve Krug
                            </div>
                            <div className="cart-book-price">
                                Rs.1500
                                <s className="cart-old-price">Rs.2000</s>
                            </div>

                        </div>
                    </div>
                    <div className="cart-place-order">
                        {
                            btn ? <button className="cart-order-button" onClick={handleCartClick}>PLACE ORDER</button> : ""
                        }
                        
                    </div>
                </div>
                <div className="cart-bottom-two">
                    {
                        custDetails ? <CustomerDetails OrderSum={OrderSum}/> :<div className="cart-address-details">Address Details</div>
                    }
                    {
                        ordSummary ? <OrderSummary  /> : <div className="cart-order-summary">Order Summary</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart