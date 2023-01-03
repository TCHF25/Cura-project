import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as NavBrand } from "../assets/svg/navlogo2.svg";
import "../styles/css/auth.css";


const Register = () => {
  return (
    <div className="parent">
      <div className="signup-section">
        <div className="signup-wrapper">
          <form className="signup-form">

            <div className="form-group">
              <span className="navLogo">
                <NavBrand className="logo" />
              </span>
              <label className="form-label" id="email" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
              />
            </div>

            <div className="form-group">
              <label className="form-label" id="password" htmlFor="password">
                Password (6 or more characters)
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
              />
            </div>

            <div className="form-footer">
              <p className="sitePolicyText">
                By clicking Agree & Join, you agree to the Cura
                <Link to="/agreement">User Agreement, Privacy Policy</Link> , and
                <Link to="/cookie-policy">Cookie Policy.</Link>
              </p>
              <button className="formSubmitBtn">Agree & Join</button>
              <p className="signInRedirect">
                Already on Cura? <Link to="/login">Sign in</Link>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
