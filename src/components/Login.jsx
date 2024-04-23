import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="container">
    <div className="mainPage">
      
        <p className='heading'>Signin to your PopX Account </p>
        <p className='signin-p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit voluptatem.</p>

          <div className="login-input">
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
          </div>
        <Link to="/profilepage" className="login-btn btn" >Login</Link>

    </div>
  </div>
  )
}

export default Login
