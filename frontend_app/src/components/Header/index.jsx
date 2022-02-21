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
    <button type="button" class="btn btn-outline-info" onClick={() => home()}><i class="fa-solid fa-house"></i></button>
      ) :  (<button type="button" class="btn btn-outline-info" onClick={() => userFavorites()}><i className="fa-solid fa-user"></i></button>)
    }
  <div className='Header'>
    <div className='Title'><strong>Furever Home </strong></div>
    <div className='Icon'><i class="fa-solid fa-paw"></i></div>
  </div>
  
  <div className='Left'>
    <button type="button" className="btn btn-outline-info"><i className="fa-solid fa-magnifying-glass-plus"></i></button>
    <br></br>
    <button type="button" className="btn btn-outline-info" onClick={() => logout()}>Logout</button>
  </div>

  </div>)

  const isNotLoggedIn = (  <div className='Header'>
  {location.pathname !== '/login' && location.pathname !== '/register' && <button onClick={() => login()}>Login</button>}
  <h2>Furever Home</h2>
  {location.pathname !== '/login' && location.pathname !== '/register' && <button><i className="fa-solid fa-magnifying-glass-plus"></i></button>}
  <div>
  {location.pathname !== '/login' && location.pathname !== '/register' && <div>Not a member yet?</div>}
  {location.pathname !== '/login' && location.pathname !== '/register' && <Link to='/register'>Register!</Link>}
  </div>
</div>)

  return (
  <div>
    {currentUser ? isLoggedIn : isNotLoggedIn}
  </div>
  )
}

// const location = window.location.href
// if location === (this is the whole url https://localhost:3000/home ---> google methods to just get end of url

export default Header;

