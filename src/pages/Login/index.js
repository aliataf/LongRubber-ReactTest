import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { selectIsLoggedIn, login } from "../../features/user/userSlice";
import logo from "../../assets/images/logo.png";
import googleLogo from "../../assets/images/logo-google.png";
import facebookLogo from "../../assets/images/logo-facebook.png";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState("");

  const loginClick = () => {
    //TODO: dispatch something to /login to ask for an OTP
    history.push("/otp");
  };

  const doNothing = () => {};

  if (isLoggedIn) return <Redirect to={{ pathname: "/" }} />;

  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" width="60" />

      <div className={styles.heroText}>
        <h2 className={styles.noMargin}>Your Meal.</h2>
        <h2 className={styles.noMargin}>Fresh and Tasty.</h2>
      </div>

      <form className={styles.form}>
        <PhoneInput
          country={"ae"}
          value={mobileNumber}
          onChange={(phone) => setMobileNumber(phone)}
          placeholder="Mobile Number"
          inputClass={styles.phoneInputClass}
          buttonClass={styles.phoneButtonClass}
        />
        <button
          className={`${styles.button} ${styles.signupButton}`}
          onClick={loginClick}
        >
          Free Sign Up
        </button>
      </form>

      <p>
        <span className={styles.textColor}>Already have an account?</span>{" "}
        <a href="/reset" className={styles.link}>
          Login
        </a>
      </p>

      <p className={styles.textColor}>OR</p>

      <div className={styles.thirdPartyLoginContainer}>
        <button
          onClick={doNothing}
          className={`${styles.button} ${styles.socialButton}`}
        >
          <img src={facebookLogo} alt="Facebook icon" width="30" />
          <span style={{ flex: "1 auto" }}>Continue with Facebook</span>
        </button>
        <button onClick={doNothing} className={`${styles.button} ${styles.socialButton}`}>
          <img src={googleLogo} alt="Google icon" width="30" />
          <span style={{ flex: "1 auto" }}>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}