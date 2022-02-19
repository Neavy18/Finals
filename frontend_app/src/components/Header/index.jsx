import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './Header.css';

// display the header component

const Header = () => {

  let history = useNavigate();

  const logout = () => {
    localStorage.clear();
    history('/login')
  }
  
  const login = () => {
    history('/login')
  }
  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  const isLoggedIn = (  <div className='Header'>
  <button><i className="fa-solid fa-user"></i></button>
  <h2>Furever Home</h2>
  <button><i className="fa-solid fa-magnifying-glass-plus"></i></button>
  <button onClick={() => logout()}>Logout</button>
  </div>);

  const isNotLoggedIn = (  <div className='Header'>
  <button onClick={() => login()}>Login</button>
  <h2>Furever Home</h2>
  <button><i className="fa-solid fa-magnifying-glass-plus"></i></button>
  <div>
    <div>Not a member yet?</div>
    <Link to='/register'>Register!</Link>
  </div>
</div>);

  return (
  <div>
    {currentUser ? isLoggedIn : isNotLoggedIn}
  </div>
  )
}

// const location = window.location.href
// if location === (this is the whole url https://localhost:3000/home ---> google methods to just get end of url

export default Header;

