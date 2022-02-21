import React from 'react';
import { useNavigate } from 'react-router';
import { Link,  useLocation } from 'react-router-dom';
import './Header.css';

// display the header component

const Header = () => {

  const location  = useLocation();
  console.log("this is location --->", location);

  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login')
  }
  
  const login = () => {
    navigate('/login')
  }

  const userFavorites = ()=> {
    navigate('/favorites')
  }

  const home = ()=> {
    navigate('/')
  }

  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  const isLoggedIn = (  <div className='Header'>
    {location.pathname === '/favorites' 
      ? (
    <button onClick={() => home()}><i className="fa-solid fa-magnifying-glass-plus"></i></button>
      ) :  (<button onClick={() => userFavorites()}><i className="fa-solid fa-user"></i></button>)
    };
  
  <h2>Furever Home</h2>
  <button><i className="fa-solid fa-magnifying-glass-plus"></i></button>
  <button onClick={() => logout()}>Logout</button>
  </div>);

  const isNotLoggedIn = (  <div className='Header'>
  {location.pathname !== '/login' && <button onClick={() => login()}>Login</button>}
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

