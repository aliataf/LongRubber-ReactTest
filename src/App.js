import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import OrderPage from './pages/Order';
import OTP from "./pages/OTP";
import { selectIsLoggedIn } from './features/user/userSlice';
import { useSelector } from 'react-redux';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/otp">
            <OTP />
          </Route>
          <PrivateRoute path="/order">
            <OrderPage />
          </PrivateRoute>
          <PrivateRoute path="/">
            <HomePage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children , ...rest }){
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) => 
        isLoggedIn ? (
          children
        ): (
          <Redirect to={{ 
            pathname: '/login',
            state: { from: location }
          }}
          />
        )
      }
    />
  )
}

export default App;
