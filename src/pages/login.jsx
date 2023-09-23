import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux-reducers/redux-auth';
import { getUser } from '../redux-reducers/redux-user';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setUsername] = useState('tony@stark.com');
  const [password, setPassword] = useState('password123');
	const navigate = useNavigate()


  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
	const token = useSelector((state) => state.auth.token);
	
  const handleLogin = () => {
		dispatch(login({ email, password }));
  };

	useEffect(()=>{
		if(token !== null){
			dispatch(getUser({token}));
			navigate('profil/')
		}
	},[token, navigate, dispatch])
  return (
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
	)
}

export default Login
