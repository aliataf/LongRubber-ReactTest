import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { selectIsLoggedIn, login } from "@/features/user/userSlice";
import logo from "@images/logo.png";
import styles from "./index.module.css";

export default function OTP() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const [firstDigit, setFirstDigit] = useState("");
  const firstDigitEl = useRef(null);
  const [secondDigit, setSecondDigit] = useState("");
  const secondDigitEl = useRef(null);
  const [thirdDigit, setThirdDigit] = useState("");
  const thirdDigitEl = useRef(null);
  const [fourthDigit, setFourthDigit] = useState("");
  const fourthDigitEl = useRef(null);

  const loginClick = () => {
    //TODO: dispatch something to /login/otp to get an access token
    dispatch(login());
  };

  const isValideDigit = (digit) => {
    let strDigit = String(digit);
    let onlyDigitsRegex = /^\d+$/;
    return (
      strDigit.length < 2 && (onlyDigitsRegex.test(strDigit) || strDigit === "")
    );
  };

  if (isLoggedIn) return <Redirect to={{ pathname: "/" }} />;

  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" width="60" />

      <div className={styles.heroText}>
        <h2>OTP Verification</h2>
      </div>

      <p className={styles.textColor}>
        Please Enter the <strong>One Time Password</strong> <br />
        we sent to your mobile number
      </p>

      <form className={styles.form}>
        <div className={styles.digitsContainer}>
          <input
            ref={firstDigitEl}
            className={styles.input}
            value={firstDigit}
            onChange={(e) => {
              if (isValideDigit(e.target.value)) {
                setFirstDigit(e.target.value);
                if (e.target.value.length > 0) {
                  secondDigitEl.current.focus();
                }
              }
            }}
          />
          <input
            ref={secondDigitEl}
            className={styles.input}
            value={secondDigit}
            onChange={(e) => {
              if (isValideDigit(e.target.value)) {
                setSecondDigit(e.target.value);
                if (e.target.value.length > 0) {
                  thirdDigitEl.current.focus();
                }
              }
            }}
          />
          <input
            ref={thirdDigitEl}
            className={styles.input}
            value={thirdDigit}
            onChange={(e) => {
              if (isValideDigit(e.target.value)) {
                setThirdDigit(e.target.value);
                if (e.target.value.length > 0) {
                  fourthDigitEl.current.focus();
                }
              }
            }}
          />
          <input
            ref={fourthDigitEl}
            className={styles.input}
            value={fourthDigit}
            onChange={(e) => {
              if (isValideDigit(e.target.value)) {
                setFourthDigit(e.target.value);
              }
            }}
          />
        </div>
        <button
          className={`${styles.button} ${styles.verifyButton}`}
          onClick={loginClick}
        >
          Verify
        </button>
      </form>

      <p className={styles.textColor}>
        Didn't receive the OTP? <a href="/resend-otp" className={styles.link}>Resend OTP</a>
      </p>
    </div>
  );
}
