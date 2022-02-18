import React, {useState} from 'react';
import axios from 'axios'
import './Register.css';

//register logic that grabs the user info

const Register = (props) => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  console.log(user);

  return (
    <div className='Register'>
      {/* <form onSubmit={(event) => event.preventDefault()}> */}
        <h2>Register</h2>
        <input type="text" placeholder='First name'
        onChange={(e) => {setUser({...user, firstName: e.target.value})}} />
        <br></br>
        <input type="text" placeholder='Last name' 
        onChange={(e) => {setUser({...user, lastName: e.target.value})}} />
        <br></br>
        <input type="email" placeholder='email' 
        onChange={(e) => {setUser({...user, email: e.target.value})}} />
        <br></br>
        <input type="password" placeholder='password' 
        onChange={(e) => {setUser({...user, password: e.target.value})}} />
        <br></br>
        <button type="submit" onClick={() => props.registerUser(user)}>Register</button>
      {/* </form> */}
    </div>
  )
}

export default Register;
