import React from 'react'
import "./CustomerDetails.css"
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

function CustomerDetails() {
    return (
        <div className="cd-outer-box">
            <div className="cd-main-content">
                <div className="cd-box-1">
                    <div className="cd-title">
                        Customer Details
                    </div>
                    <div>
                        <button className="cd-new-address">Add New Address</button>
                    </div>
                </div>
                <div className="cd-main-details">
                    <div className="cd-box-2 cd-box">
                        <div className="cd-outlined-basic-box1">
                            <TextField className="cd-full-name" label="Full Name" variant="outlined" />
                        </div>
                        <div className="cd-outlined-basic-box1">
                            <TextField className="cd-mobile-number" label="Mobile Number" variant="outlined" />
                        </div>
                    </div>

                    <div className="cd-box-3">
                        <div className="cd-address">
                            <TextField className="cd-input-box" placeholder='Address' multiline fullWidth variant="outlined" InputProps={{ disableUnderline: true }} />
                        </div>
                    </div>

                    <div className="cd-box-4 cd-box">
                        <div className="cd-outlined-basic-box1">
                            <TextField className="cd-full-name" label="City/Town" variant="outlined" />
                        </div>
                        <div className="cd-outlined-basic-box1">
                            <TextField className="cd-mobile-number" label="State" variant="outlined" />
                        </div>
                    </div>

                    <div className="cd-box-5 cd-box">
                        <div>
                            Type
                        </div>
                        <div className="cd-radio-buttons">
                            <FormControlLabel value="end" control={<Radio />} label="Home" />
                            <FormControlLabel value="end" control={<Radio />} label="Work" />
                            <FormControlLabel value="end" control={<Radio />} label="Other" />
                        </div>
                    </div>

                    <div className="cd-box-6 cd-box">
                        <button className="cd-submit-button" type="submit">CONTINUE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails