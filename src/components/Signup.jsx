import { FormControl, FormControlLabel, FormLabel, Radio, TextField,RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container">
      <div className="mainPage">
        <p className='heading' >Create your PopX Account</p>
        <div className="input-cont">
          <TextField
            id="outlined-basic"
            size="small"
            label="Full Name"
            variant="outlined"
            required
            defaultValue="Marry Doe"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Phone Number"
            variant="outlined"
            required
            defaultValue="Marry Doe"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Email Address"
            variant="outlined"
            required
            defaultValue="Marry Doe"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Password"
            variant="outlined"
            required
            defaultValue="Marry Doe"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Company Name"
            variant="outlined"
            required
            defaultValue="Marry Doe"
          />
        </div>
      
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Are you an Agency?<span>*</span></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel value="male" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Link to="/profilepage" className="signup-btn btn btn1">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Signup;
