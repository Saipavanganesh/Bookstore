import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import image from '../../images/bookStoreLoginLogo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button  from '@mui/material/Button';
import './Login.css'
import { login } from '../../../services/UserServices';

function Login()  {
    
    const [logData, setLogData] = useState({
        email: "",
        password: "",
    })
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

    const[logErrors, setLogErrors] = useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
    })

    let name, value
    const handleLogChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setLogData({...logData, [name]:value})
    } 
    
    let navigate = useNavigate();
    const handleClick = async () => {
        let emailTest = emailRegex.test(logData.email);
        let passwordTest = passwordRegex.test(logData.password);
        if (emailTest === false) {
            setLogErrors((prev) => ({
                ...prev,
                emailError: true,
                emailHelper: "Enter Correct Email",
            }));
        } else {
            setLogErrors((prev) => ({ ...prev, emailError: false, emailHelper: "" }));
        }

        if (passwordTest === false) {
            setLogErrors((prev) => ({
                ...prev,
                passwordError: true,
                passwordHelper: "Enter Correct Password",
            }));
        } else {
            setLogErrors((prev) => ({
                ...prev,
                passwordError: false,
                passwordHelper: "",
            }));
        }
        console.log(logData);
        if (emailTest === true && passwordTest === true) {
            let response = await login(logData);
            console.log(response);
            localStorage.setItem("token", response.data.result.accessToken)
            navigate("/dashboard");
        }
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

                        <div className="input-details"><TextField className="outlined-basic" label="Email Id" name='email' onChange={handleLogChange} variant="outlined" value={logData.email} error={logErrors.emailError} helperText={logErrors.emailHelper}/></div>

                        <div className="input-details"><TextField className="outlined-basic" label="Password" type='password' name='password' onChange={handleLogChange} variant="outlined" value={logData.password} error={logErrors.passwordError} helperText={logErrors.passwordHelper} /></div>

                        <Link id='log-forgot' to="/forgotPassword">Forgot Password?</Link>

                        <Button id="submit-button"  variant='contained' onClick={handleClick}>SIGNUP</Button>

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