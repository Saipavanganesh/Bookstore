import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import image from '../../images/bookStoreLoginLogo.png'
import Link from '@mui/material/Link';

import './Login.css'

class Login extends Component {
  render() {
    return (
        <div className="outer-box">
        <div className="content">

          <div className="image">
            <img className='signup-logo' src={image} alt="SignupLogo" />
          </div>

          <form className="form">

            <div className="signup-form">

              <div className="heading">
                <div id='signup'>LOGIN</div>
                <div><Link id='login' href="/signup" underline="none">SIGNUP</Link></div>
              </div>

              <div className="input-details"><TextField className="outlined-basic" label="Email Id" variant="outlined" /></div>
              
              <div className="input-details"><TextField className="outlined-basic" label="Password" variant="outlined" /></div>

              <a href="/forgotPassword">Forgot Password?</a>

              <button className="submit-button button" type="submit">Login</button>

              <div className="input-details dash">--------------------OR-------------------</div>
              
              <div className="buttons">
                <button className='btn button fb'>Facebook</button>
                <button className='btn button google'>Google</button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login