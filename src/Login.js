import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

function Login() {
    // const history = useNavigate();
    // const [email, setEmail] =useState('');
    // const [password, setPassword] =useState('');

    // const signIn = e => {
    //     e.preventDefault();

    //     auth
    //     .signInWithEmailAndPassword(email, password)
    //     .then((auth) =>{
    //             if(auth){
    //                 history.push('/')
    //             }
    // })
    //     .catch(error => alert(error.message))
    // }

    // const register = e =>{
    //     e.preventDefault();

    //     auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //         if(auth){
    //             history.push('/')
    //         }
    //     })
    //     .catch(error => alert(error.message))
    // }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleSignIn = async (e) => {
      e.preventDefault();
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard'); // Redirect to the dashboard after sign-in
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login--logo" src="./image/vision.png" alt="login"/>
            </Link>
            {/* <div className="login--container">
                 <h1>Sign-In</h1>
                 <form>
                    <h5>E-mail</h5>
                    <input type="text" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className="login--signButton">Sign In</button>
                 </form>
                 <Link to='/SignUp'>
                 <button type='submit' onClick={''} className="login--registerButton">Create your Account</button>
                 </Link>
            </div> */}
            <div className="signin-container">
            <h2 className="signin-header">Sign In</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSignIn} className="signin-form">
            <div className="form-group">
                <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
            />
            </div>
            <button type="submit" className="signin-button">Sign In</button>
        </form>
            <p className="signup-link">
            Don't have an account? <a href="/signUp">Sign up here</a>
            </p>
        </div>
    </div>
    )
}

export default Login
