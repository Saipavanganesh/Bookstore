import React from 'react'
import './ForgotPassword.css'
import TextField from '@mui/material/TextField';

function ForgotPassword() {
    return (
        <div className='fp-outer-box'>
            <div className='fp-text'>Forgot Your Password?</div>
            <div className="fp-reset-box">
                <div className="fp-content">
                    <div className="fp-instruction fp-inside">
                        <div>
                            Enter your email address and we'll send you a link to reset your password
                        </div>
                    </div>
                    <div className="fp-input-box fp-inside">
                        <TextField className="fp-outlined-basic" label="Email Id" variant="outlined" />
                    </div>
                    <div className="fp-button fp-inside">
                        <button type="submit" className='fp-reset-button'>Reset Password</button>
                    </div>
                </div>
                <div className="fp-create-account">
                    <div>CREATE ACCOUNT</div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword