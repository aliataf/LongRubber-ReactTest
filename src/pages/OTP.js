import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { selectIsLoggedIn, login } from '@/features/user/userSlice';
import logo from '@images/logo.png';

export default function OTP() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const [something, setSomething] = useState("");

  const loginClick = () => {
    //TODO: dispatch something to /login/otp to get an access token 
    dispatch(login());
  }
  
  if (isLoggedIn)
    return <Redirect to={{ pathname: '/' }} />;

  return (
    <div style={styles.container}>
      <img src={logo} alt="logo" width="60" />

      <div className="hero-text" style={styles.heroText}>
        <h2 style={styles.noMargin}>OTP Verification</h2>
      </div>

      <p>
        Please Enter the <strong>One Time Password</strong> we sent to your mobile number
      </p>

      <form style={styles.form}>
        <div>
          <input style={styles.input} value={something} onChange={e => setSomething(e.target.value)} />
          <input style={styles.input} value={something} onChange={e => setSomething(e.target.value)} />
          <input style={styles.input} value={something} onChange={e => setSomething(e.target.value)} />
          <input style={styles.input} value={something} onChange={e => setSomething(e.target.value)} />
        </div>
        <button onClick={loginClick}>Verify</button>
      </form>

      <p>Didn't receive the OTP? <a href="/resend-otp">Resend it</a></p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroText: {
    textAlign: 'center'
  },
  noMargin: {
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    width: 30
  }
}