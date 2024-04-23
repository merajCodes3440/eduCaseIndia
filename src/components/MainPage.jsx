import React, { useState } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="container">
      <div className="mainPage">
        <h1 className="headingMain">Welcom to PopX</h1>
        <p className="mainText">
          Lorem ipsum dolor sit, amet consectetu fsaa adipisicing elit.
        </p>

       <div className="button-sec">
       <Link className="signup-btn btn" to="/signup">
          Create Account
        </Link>
        <Link className="login-btn btn" to="/login">
         Already have Account?Login
        </Link>
       </div>
      </div>
    </div>
  );
}

export default MainPage;
