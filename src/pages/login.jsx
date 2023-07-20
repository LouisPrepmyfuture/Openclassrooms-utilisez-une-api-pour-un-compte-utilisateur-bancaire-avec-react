import React, { useState } from "react"
import MainNav from "../components/mainNav"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux-reducers/redux-user';

function Login() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };
  return (
		<>
		<MainNav />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
						
						<input
							type="email" 
							id="email"
							value={email}
							onChange={(e) => setUsername(e.target.value)}
						  />

          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
          </div>
					{loading ? (
						<p>Loading...</p>
						) : (
						<button onClick={handleLogin} className="sign-in-button">Sign In</button> 
					)}
					{error && <p>{error}</p>}
        </form>
      </section>
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
	</>
	)
}

export default Login
