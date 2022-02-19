import React, {useState} from 'react';
import axios from 'axios';
import './Register.css';
import { Link , useNavigate} from 'react-router-dom';

//register logic that grabs the user info

const Register = (props) => {

  let history = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  console.log(user);

  const registerUser = (user) => {

    if(!user.firstName || !user.lastName || !user.email || !user.password) {
      alert("No empty field, please try again :)")
    } else {
      return axios.post("http://localhost:5000/register", user)
      .then((res) => {
        if(res.data.error) {
          alert(res.data.error);
        } else {
          history("/home")
        }
      });
    }
  };

  return (
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
}

export default Register;
