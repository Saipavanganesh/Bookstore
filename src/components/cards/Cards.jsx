import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import book1 from '../images/book-1.jpg'
import './Cards.css'
import { useNavigate } from 'react-router-dom';

export default function Cards({title}) {
    let navigate = useNavigate();
    const handleCardClick = () => {
        navigate("/bookDisplay")
    }
  return (
    <div className="cards-outer-box" onClick={handleCardClick}>
      <Card className='cards-card' sx={{ width: 250 }}>

        <div className="cards-card-top">
          <CardMedia
            sx={{ height: 30 }}
          />
          <div><img className='cards-book1' src={book1} alt="book cover" /></div>
        </div>

        <div className="cards-card-bottom">
          <CardContent>
            <div className='cards-title cards-box'>
              <b>{title}</b>
            </div>
            <div className="cards-author cards-box">
              by Steve Krug
            </div>
            <span className="cards-rating cards-box">
              4.5 &#9733;
            </span>
            <span className='cards-total-reviews'>(20)</span>
            <div className='cards-cost cards-box'>
              <b>Rs.1500 </b>
              <s className='old-cost'>Rs.2000</s>
            </div>
          </CardContent>
        </div>

      </Card>
    </div>
  );
}
