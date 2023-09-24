import React, { useState } from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import image from '../../images/bookStoreLoginLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import Button  from '@mui/material/Button';
import { signup } from '../../../services/UserServices';


function Signup() {
    const [data, setData] = useState({
        fullName: "",
        emailId: "",
        password: "",
        mobileNumber: "",
    })
    let name, value
    const handleSupChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setData({ ...data, [name]: value })
    };

    const nameRegex = /^[a-zA-Z\s\-']+$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const mobileNumberRegex = /^[6-9]{1}[0-9]{9}$/;

    const [errors, setErrors] = useState({
        fullNameError: false,
        fullNameHelper: "",
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
        mobileNumberError: false,
        mobileNumberHelper: ""
    });

    let Navigate = useNavigate();
    const handleSupClick = async () => {

        let fullNameTest = nameRegex.test(data.fullName);
        let emailTest = emailRegex.test(data.emailId);
        let passwordTest = passwordRegex.test(data.password);
        let mobileNumberTest = mobileNumberRegex.test(data.mobileNumber);
        
        if (fullNameTest === false) {
            setErrors((prev) => ({
                ...prev,
                fullNameError: true,
                fullNameHelper: "Enter Correct Name",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                fullNameError: false,
                fullNameHelper: "",
            }));
        }
        
        if (emailTest === false) {
            setErrors((prev) => ({
                ...prev,
                emailError: true,
                emailHelper: "Enter Correct Email",
            }));
        } else {
            setErrors((prev) => ({ ...prev, emailError: false, emailHelper: "" }));
        }

        if (passwordTest === false) {
            setErrors((prev) => ({
                ...prev,
                passwordError: true,
                passwordHelper: "Enter Correct Password",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                passwordError: false,
                passwordHelper: "",
            }));
        }
        if (mobileNumberTest === false) {
            setErrors((prev) => ({
                ...prev,
                mobileNumberError: true,
                mobileNumberHelper: "Enter Correct Password",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                mobileNumberError: false,
                mobileNumberHelper: "",
            }));
        }
        console.log(data);
        if (fullNameTest === true && emailTest === true && passwordTest === true && mobileNumberTest === true) {
            let response = await signup(data);
            console.log(response);
            localStorage.setItem("token", response.data);
            Navigate("/")
        }
    }
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
                            <div><Link id='login' to="/" underline="none">LOGIN</Link></div>
                            <div id='signup'>SIGNUP</div>
                        </div>

                        <div className="input-details"><TextField className="outlined-basic" label="Full Name" name='fullName' onChange={handleSupChange} variant="outlined" value={data.name} error={errors.fullNameError} helperText={errors.fullNameHelper} /></div>

                        <div className="input-details"><TextField className="outlined-basic" label="Email Id" name='emailId' onChange={handleSupChange} variant="outlined" value={data.emailId} error={errors.emailError} helperText={errors.emailHelper} /></div>

                        <div className="input-details"><TextField className="outlined-basic" label="Password" name='password' type='password' onChange={handleSupChange} variant="outlined" value={data.password} error={errors.passwordError} helperText={errors.passwordHelper} /></div>

                        <div className="input-details"><TextField className="outlined-basic" label="Mobile Number" name='mobileNumber' onChange={handleSupChange} variant="outlined" value={data.mobileNumber} error={errors.mobileNumberError} helperText={errors.mobileNumberHelper} /></div>

                        <Button id="submit-button"  variant='contained' onClick={handleSupClick}>SIGNUP</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup