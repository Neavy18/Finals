import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import { Link , useNavigate} from 'react-router-dom';

const Login = (props) => {

  let history = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });

  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  // ---> Axios call to send the info being inputted to the backend for user authentification
  const loginUser = (user) => {
    return axios.post("http://localhost:5000/login", user)
    .then((res) => {
      if(res.data.error) {
       alert(res.data.error)
      } else {
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        history('/')
      }
    })
  };
  
  const loggedInDisplay = (
    <div>
      <h1>
        You are already logged in!
      </h1>
    </div>
  )
  const notLoggedInDisplay = (
    <div className='Login'>
    <h2>Login</h2>
    <form className='Form' onSubmit={(event) => event.preventDefault()}> 
      <input type="email" placeholder='email' required
        onChange={(e) => {setUserLogin({...userLogin, email:e.target.value})}} />
      <br></br>
      <input type="password" placeholder='password' required
        onChange={(e) => {setUserLogin({...userLogin, password:e.target.value})}}/>
        <br></br>
    </form>
    <button className='btn btn-info' onClick={()=>loginUser(userLogin)}>Login</button>
    <br></br>
    <div>
    <h4>Not a user yet? <Link to="/register">Register!</Link></h4>
    </div>
  </div>
  )
  return (
    <div>
      {currentUser ? loggedInDisplay : notLoggedInDisplay}
    </div>
  )
};

export default Login;
