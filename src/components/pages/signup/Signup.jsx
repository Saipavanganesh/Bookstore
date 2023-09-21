import React, { Component } from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import image from '../../images/bookStoreLoginLogo.png'
import { Link } from 'react-router-dom';


function Signup(){

    return (
      <div className="outer-box">
        <div className="content">

          {/* IMAGE BOX */}
          <div className="image">
            <img className='signup-logo' src={image} alt="SignupLogo" />
          </div>

          {/* LOGIN BOX */}
          <form className="form">
            <div className="signup-form">
              <div className="heading">
                <div><Link id='login' to="/login" underline="none">LOGIN</Link></div>
                <div id='signup'>SIGNUP</div>
              </div>
              <div className="input-details"><TextField className="outlined-basic" label="Full Name" variant="outlined" /></div>
              
              <div className="input-details"><TextField className="outlined-basic" label="Email Id" variant="outlined" /></div>
              
              <div className="input-details"><TextField className="outlined-basic" label="Password" variant="outlined" /></div>
              
              <div className="input-details"><TextField className="outlined-basic" label="Mobile Number" variant="outlined" /></div>
              
              <button className="submit-button button" type="submit" >Signup</button>
            </div>
          </form>
        </div>
      </div>
    )
  }



export default Signup