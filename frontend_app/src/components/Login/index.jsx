import React from 'react';

const Login = () => {
  return (
    <div className='Login'>
    <h2>Login</h2>
    <br></br>
    <input placeholder='email'></input>
    <br></br>
    <input placeholder='password'></input>
    <br></br>
    <button>Login</button>
  </div>
  )
}

// everything related to Header goes here :  onClick js, html, icons etc
// add logic to display icons at top when user is logged in, hide if not

export default Login;
