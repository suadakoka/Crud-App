import React from "react";
import "./Loginform.css";
import { useNavigate } from "react-router-dom";

export function Loginform() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/dashboard");
  }

  return (
    <div className="head">
      <form action="">
        <div className="sign">
          <p>
            SIGN IN <a>Enter your credintials to access your account</a>
          </p>
        </div>

        <div className="input-box">
          <a>Email</a>
          <input type="text" placeholder="Enter your email" required />
        </div>

        <div className="input-box">
          <a>Password</a>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button onClick={handleclick} type="submit">
          SIGN IN
        </button>
        {/* <div className="forgot">
          <label>
            <input type="checkbox" />
            Forgot you password?
          </label>
          <a href="#">Reset Password</a>
        </div>  */}
      </form>
    </div>
  );
}

export default Loginform;
