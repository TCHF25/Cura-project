import React, { useState, useEffect } from "react";
import { ReactComponent as NavBrand } from "../assets/svg/navlogo2.svg";
import { Link } from "react-router-dom";
import "../styles/css/auth.css";


const Login = () => {
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const { email, password } = user;
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (email) {
      setFocusEmail(true);
    } else {
      setFocusEmail(false);
    }
    if (password) {
      setFocusPassword(true);
    } else {
      setFocusPassword(false);
    }
  }, [email, password]);


  return (
    <div className="signup-section sign-in-section">
      <div className="signup-wrapper signin-wrapper">
        <nav className="signup-nav sign-in">
          <span className="navLogo">
            <NavBrand className="logo" />
          </span>
        </nav>

        <form className="signup-form signInForm">
          <div className="form-header">
            <h1 className="authTitle">Sign in</h1>
            <h4 className="textMuted">
              Get your cheapest medication with us.
            </h4>
          </div>
          <div className="form-groupa form-groupasn">
            <label
              className={focusEmail ? "form-label active" : "form-label"}
              id="email"
              htmlFor="email">
              Email or phone
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              id="email"
              onChange={(e) => onChangeHandler(e)}
            />
          </div>

          <div className="form-groupa form-groupasn">
            <label
              className={focusPassword ? "form-label active" : "form-label"}
              id="password"
              htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              id="password"
              onChange={(e) => onChangeHandler(e)}/>
          </div>

          <div className="form-footer">
            <Link to="/reset-password" className="resetRedirect">
              Forgot Password
            </Link>
            <button className="formSubmitBtn signInBtn">Sign in</button>
          </div>
        </form>
        <p className="signInRedirect signUpRedirect">
          New to Cura? <Link to="/register">Join now</Link>
        </p>
      </div>     
    </div>
  );
};

export default Login;
