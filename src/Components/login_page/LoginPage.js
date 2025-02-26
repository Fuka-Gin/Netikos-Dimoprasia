import React, { useState } from 'react';
import './LoginPage.css';
import { BiShow, BiHide } from "react-icons/bi";
import imagePath from './auction-house-conceptual-background_1284-29710.avif';
import { SiMaildotru } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [passView, setView] = useState(false);
  const [email, setUsername] = useState(''); // Username input state
  const [password, setPassword] = useState(''); // Password input state
  // const [message, setMessage] = useState(''); // For displaying feedback messages
  const navigate = useNavigate();

  const toggle = () => {
    setView(!passView);
  };
 
  const handleMailId = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // If login is successful, navigate to the dashboard page
    navigate('/dashboard');
  };

  return (
    <div>
      <div className='design'>
        <img src={imagePath}/>
      </div>
      <form className='login-form' onSubmit={handleSubmit}>
        <div>
          <div className='label-box'>
            <label forName="umail">Email:</label>
          </div>
          <div className="input-box">
            <input type="text" id="umail" name="umail" placeholder="Enter your mail id" onChange={handleMailId} required />
            <SiMaildotru className='icon'/>
          </div>
        </div>
            
        <div>
          <div className='label-box'>
            <label forName="password">Password:</label>
          </div>
          <div className="input-box">
            <input type={passView ? 'text' : 'password'} 
              id="password" name="password" placeholder="Enter your password" 
              onChange={handlePassword}
              required
            />
            <span onClick={toggle}>
              {passView ? <BiShow className='icon' /> : <BiHide className='icon' />}
            </span>
          </div>
        </div>

        <div className='forgot-password'>
          <Link to='/forgot-password' className='forgot-link'>Forgot password?</Link>
        </div>

        <input type="submit" id="button" value="Login"/>
        <div className='register-link'>
          <p>Don't have an account? <Link to='/signup'>Register</Link></p>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;