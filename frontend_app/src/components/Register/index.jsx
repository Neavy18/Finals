import React, {useState} from 'react';
import axios from 'axios';
import './Register.css';
import { Link , useNavigate} from 'react-router-dom';


const Register = (props) => {

  let history = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

// ---> Axios call to send the info being inputted to the backend for user registration
  const registerUser = (user) => {
    if(!user.firstName || !user.lastName || !user.email || !user.password) {
      alert("No empty field, please try again :)")
    } else {
      return axios.post("http://localhost:5000/register", user)
      .then((res) => {
        if(res.data.error) {
          alert(res.data.error);
        } else {
          localStorage.setItem('currentUser', JSON.stringify(res.data))
          history("/")
        }
      });
    }
  };

  const registerDisplay = (
    <div className='Register'>
    <form onSubmit={(event) => event.preventDefault()}> 
      <h2>Register</h2>
      <input type="text" placeholder='First name' required
      onChange={(e) => {setUser({...user, firstName: e.target.value})}} />
      <br></br>
      <input type="text" placeholder='Last name' required
      onChange={(e) => {setUser({...user, lastName: e.target.value})}} />
      <br></br>
      <input type="email" placeholder='email' required
      onChange={(e) => {setUser({...user, email: e.target.value})}} />
      <br></br>
      <input type="password" placeholder='password' required
      onChange={(e) => {setUser({...user, password: e.target.value})}} />
      <br></br>
      <button type="submit" onClick={() => registerUser(user)}>Register</button>
    </form> 
    <h4>Already a user yet? <Link to="/">Login!</Link></h4>
  </div>
  )
  const alreadyLoggedInDisplay = (
    <div>
      <h1>You are already logged in!</h1>
    </div>
  )
  return (
    <div>
      {currentUser ? alreadyLoggedInDisplay : registerDisplay}
    </div>
  )
}

export default Register;
