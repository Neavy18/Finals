import React, {useState} from 'react';
import axios from 'axios'
import './Register.css';

const Register = (props) => {

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword]  = useState('')

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  console.log(user);
  

  // const register = () => {
  //   axios.post('http://localhost5000/register', {
  //     firstName: firstName, 
  //     lastName: lastName, 
  //     email: email, 
  //     password: password
  //   }).then((response) => {
  //     console.log("this is the axios register user post response -->", response);
  //   });
  // };

  return (
    <div className='Register'>
      <form onSubmit={(event) => event.preventDefault()}>
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
        <button type="submit" onClick={props.registerUser(user)}>Register</button>
      </form>
    </div>
  )
}


export default Register;
