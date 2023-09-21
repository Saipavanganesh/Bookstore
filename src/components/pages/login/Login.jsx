import React from 'react'
import TextField from '@mui/material/TextField';
import image from '../../images/bookStoreLoginLogo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Login.css'

function Login()  {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/dashboard");
    }
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
                            <div><Link id='login' to="/signup" underline="none">SIGNUP</Link></div>
                        </div>

                        <div className="input-details"><TextField className="outlined-basic" label="Email Id" variant="outlined" /></div>

                        <div className="input-details"><TextField className="outlined-basic" label="Password" variant="outlined" /></div>

                        <Link id='log-forgot' to="/forgotPassword">Forgot Password?</Link>

                        <button className="submit-button button" onClick={handleClick} type="submit">Login</button>

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

export default Login