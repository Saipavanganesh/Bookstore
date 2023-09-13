import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import image from '../../images/bookStoreLoginLogo.png'
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
                <div id='login'>SIGNUP</div>
              </div>
              <div className="input-details"><TextField className="outlined-basic" label="Email Id" variant="outlined" /></div>
              <div className="input-details"><TextField className="outlined-basic" label="Password" variant="outlined" /></div>
              <button className="submit-button" type="submit">Login</button>
              <div className="input-details dash">--------------------OR-------------------</div>
              <div className="buttons">
                <button className='btn fb'>Facebook</button>
                <button className='btn google'>Google</button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login