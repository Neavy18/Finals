import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword]  = useState('')


  const login = () => {
    axios.post('http://localhost5000/login', {
      email: email, 
      password: password
    }).then((response) => {
      console.log("this is the axios login user post response -->", response);
    });
  };

  return (
    <div className='Login'>
    <h2>Login</h2>
    <input type="email" placeholder='email' 
      onChange={(e) => {setEmail(e.target.value)}} />
    <br></br>
    <input type="password" placeholder='password' 
      onChange={(e) => {setPassword(e.target.value)}} />
      <br></br>
    <button onClick={login}>Login</button>
  </div>
  )
}

export default Login;
