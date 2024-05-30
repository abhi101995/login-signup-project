import React from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/user.png";
import gmail_icon from "../Assets/mail.png";
import lock_icon from "../Assets/password.png";

const LoginSignup = () => {
  return (
    <div className="Container ">
      <div className="header">
        <div className="text ">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder=" User Name" />
        </div>
        <div className="input">
          <img src={gmail_icon} alt="" />
          <input type="gmail" placeholder="Email ID" />
        </div>
        <div className="input">
          <img src={lock_icon} alt="" />
          <input type="password" placeholder="Password" />

         
        </div>
        <div className="submit-container">
            <div className="forgot-password">
              Lost password <span>Click here?</span>
            </div>
            <div className="btns">
              <div className="submit">Signup</div>
              <div className="submit">Login</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LoginSignup;
