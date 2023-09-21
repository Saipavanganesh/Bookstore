import React from 'react'
import './Cart.css'
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import image from "../images/book-1.jpg"
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useNavigate } from 'react-router-dom';

function Cart() {
    let navigate = useNavigate();
    const handleCartClick = () => {
        navigate("/orderSummary")
    }
    return (
        <div className="cart-outer-box">
            <div className="cart-main-content">
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
                        <button className="cart-order-button" onClick={handleCartClick}>PLACE ORDER</button>
                    </div>
                </div>
                <div className="cart-bottom-two">
                    <div className="cart-address-details">Address Details</div>
                    <div className="cart-order-summary">Order Summary</div>
                </div>
            </div>
        </div>
    )
}

export default Cart