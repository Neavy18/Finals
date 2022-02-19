import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import { Link , useNavigate} from 'react-router-dom';


const Login = (props) => {

  let history = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  })

  const loginUser = (user) => {
    console.log("this is inside login user ---->", user);
    return axios.post("http://localhost:5000/login", user)
    .then((res) => {
      if(res.data.error) {
       alert(res.data.error)
      } else {
        history("/home")
      }
    })
  };

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
      <button onClick={()=>loginUser(userLogin)}>Login</button>
    </form>
    <div>
    <h4>Not a user yet? <Link to="/register">Register!</Link></h4>
    </div>
  </div>
  )
}

export default Login;
