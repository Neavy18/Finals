import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

const Login = (props) => {

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  })
   console.log("login component--->", userLogin);

  // const login = () => {
  //   axios.post('http://localhost5000/login', {
  //     email: email, 
  //     password: password
  //   }).then((response) => {
  //     console.log("this is the axios login user post response -->", response);
  //   });
  // };

  return (
    <div className='Login'>
    <h2>Login</h2>
    <form onSubmit={(event) => event.preventDefault()}> 
      <input type="email" placeholder='email' required
        onChange={(e) => {setUserLogin({...userLogin, email:e.target.value})}} />
      <br></br>
      <input type="password" placeholder='password' required
        onChange={(e) => {setUserLogin({...userLogin, password:e.target.value})}}/>
        <br></br>
      <button onClick={()=>props.loginUser(userLogin)}>Login</button>
    </form>
  </div>
  )
}

export default Login;
