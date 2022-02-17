import React, {useState} from 'react';
import axios from 'axios'
import './Register.css';


const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword]  = useState('')

  const register = () => {
    axios.post('http://localhost5000/register', {
      firstName: firstName, 
      lastName: lastName, 
      email: email, 
      password: password
    }).then((response) => {
      console.log("this is the axios user post response -->", response);
    });
  };

  return (
    <div className='Register'>
      <h2>Register</h2>
      <input type="text" placeholder='First name'
       onChange={(e) => {setFirstName(e.target.value)}} />
      <br></br>
      <input type="text" placeholder='Last name' 
      onChange={(e) => {setLastName(e.target.value)}} />
      <br></br>
      <input type="email" placeholder='email' 
      onChange={(e) => {setEmail(e.target.value)}} />
      <br></br>
      <input type="password" placeholder='password' 
      onChange={(e) => {setPassword(e.target.value)}} />
      <br></br>
      <button onClick={register}>Register</button>
    </div>
  )
}

// everything related to Header goes here :  onClick js, html, icons etc
// add logic to display icons at top when user is logged in, hide if not

export default Register;
