import React from 'react'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import womanimg from "../assets/dp1.jpg"

function ProfilePage() {
  return (
    <div className="container">
    <div className="mainPage profile-main">
      <p className='profile-h'>Account Settings </p>
      <div className="img-sec">
        <img src={womanimg} alt="user-img" ></img>
        <div className="camera">
        < CameraAltOutlinedIcon/>
        </div>
        <div className="img-right-sec">
          <h5>Marray Doe</h5>
          <h6>marray@gmail.com</h6>
        </div>

      </div>
      <p className='profile-p'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi animi, hic fugit cum esse facilis quaerat
      </p>
      <div className="bottom-border"></div>
      </div>
  </div>
  )
}

export default ProfilePage
