import React, { useState } from 'react'
import './BookDisplay.css'
import imageOne from "../images/book-1.jpg"
import imageTwo from "../images/book-2.png"
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import TotalBooks from '../totalBooks/TotalBooks';


function BookDisplay({bookDisp, hPage}) {
    const [booksCount, setBooksCount] = useState(true)
    const handleBdClick = () => {
        setBooksCount(false)
    }
    
    return (
        <div className='bd-outer-box'>
                <div className='bd-Link'>
                    <Link onClick={hPage}>Home/</Link>BookDisplay
                </div>
            <div className="bd-main-content">
                <div className="bd-left-box">
                    <div className="bd-sm1">
                        <img className="bd-image-one" src={imageOne} alt="Image One" />
                    </div>
                    <div className="bd-sm2">
                        <img className="bd-image-two" src={imageTwo} alt="Image Two" />
                    </div>
                </div>

                <div className="bd-mid-box">
                    <div className="bd-book-cover">
                        <img className="bd-main-image" src={imageOne} alt="Image One" />
                    </div>
                    <div className="bd-buttons">
                        <div className="bd-add-bag">
                            {
                                booksCount ? <button className="bd-add-btn" onClick={handleBdClick}>ADD TO BAG</button> : <TotalBooks/>
                            }
                            
                        </div>
                        <div className="bd-wishlist">
                            <button className="bd-wish-btn"> <span className="bd-heart"> ♥ </span>WISHLIST</button>
                        </div>
                    </div>
                </div>

                <div className="bd-right-box">
                    <div className="bd-book-details">
                        <div className="bd-book-title bd-box">
                            {/* Don't Make Me Think */}
                            {bookDisp.bookName}
                        </div>
                        <div className="bd-book-author bd-box">
                            by {bookDisp.author}
                        </div>
                        <span className="bd-book-rating bd-box">4.5 &#9733;</span>
                        <span className="bd-total-reviews bd-box">(20)</span>
                        <div className="bd-book-price bd-box">
                            Rs.{bookDisp.discountPrice}
                            <s className="bd-old-price bd-box">Rs.{bookDisp.price}</s>
                        </div>
                    </div>
                    <hr />
                    <div className="bd-book-description">
                        <ul>
                            <li className="bd-desc-title">
                                Book Detail
                            </li>
                            <li className="bd-desc">
                                {bookDisp.description}
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="bd-title">Customer Feedback</div>
                    <div className="bd-feedback-input">
                        <div className="bd-star-rating">
                            <Typography component="legend">Overall rating</Typography>
                            <Rating name="no-value" value={null} />
                        </div>
                        <div className="bd-write-review">
                            <div className="bd-review"><input className='bd-input-review-field' type="text" placeholder='Write your review' /></div>
                        </div>
                        <div className="bd-review-submit-button">
                            <button className="bd-rating-submit" type="submit">Submit</button>
                        </div>
                    </div>
                    <div className="bd-customer-feedback">
                        <div className="bd-review-1">
                            <div className="bd-profile">
                                <IconButton>
                                    <Avatar>SG</Avatar>
                                </IconButton>
                            </div>
                            <div className="bd-rating-review">
                                <div className="bd-acc-name">Sai Pavan Ganesh</div>
                                <div className="bd-stars-rating">
                                    <Rating name="read-only" value='3' readOnly />
                                </div>
                                <div>
                                    The best book for people starting in usability design. Talks about the importance of navigation and testing in the design process and why we should adopt it. Recommended for both experienced and beginner designers.
                                </div>
                            </div>
                        </div>

                        <div className="bd-review-1">
                            <div className="bd-profile">
                                <IconButton>
                                    <Avatar>WW</Avatar>
                                </IconButton>
                            </div>
                            <div className="bd-rating-review">
                                <div className="bd-acc-name">Whitewolf</div>
                                <div className="bd-stars-rating">
                                    <Rating name="read-only" value='4' readOnly />
                                </div>
                                <div>
                                    Very relevant even for the contemporary web design and ux, the examples given show a clear understanding of inherent user behavior.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDisplay
