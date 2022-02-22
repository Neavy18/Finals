import React from 'react';
import { useNavigate } from 'react-router';
import { Link,  useLocation } from 'react-router-dom';
import './Header.css';
import image from '../header.png'

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

  const isLoggedIn = (  
  <div className='Header'>

    <div className='HeaderTitle'>
    <div className='Icon'>
        <i class="fa-solid fa-paw"></i>
      </div>
      <div className='Title'>
        <strong>Furever Home </strong>
        <div className='Slogan'>
          {location.pathname === '/favorites'
          ? (
            <h2>My favorites</h2>
          ) : (<h2>Find your Soulmate</h2>) }
        </div>
      </div>
    </div>

    <div className='HeaderButtons'>
        {location.pathname === '/favorites' 
          ? (
        <button type="button" class="btn btn-outline-info" onClick={() => home()}>
          <i class="fa-solid fa-house"></i>
        </button>
          ) :  (<button type="button" class="btn btn-outline-info" onClick={() => userFavorites()}>
                <i className="fa-solid fa-user"></i>
              </button>)
        }
          <button type="button" className="btn btn-outline-info">
            <i className="fa-solid fa-magnifying-glass-plus"></i>
          </button>
        <button type="button" className="btn btn-outline-info" onClick={() => logout()}>
          Logout
        </button>
    </div>

  </div>)

  const isNotLoggedIn = (  
  <div className='Header'>
    <div className='HeaderTitle'>
      <div className='Icon'>
        <i class="fa-solid fa-paw"></i>
      </div>
      <div className='Title'>
        <strong>Furever Home </strong>
        <h2>Find your Soulmate</h2>

      <div className='LoginButton'>
      {location.pathname !== '/login' && location.pathname !== '/register' && <button type="button" className="btn btn-outline-info" onClick={() => login()}>Login</button>}
    </div>
    </div>
  </div>
    <div className='HeaderButtonsNotLogged'>
      {location.pathname !== '/login' && location.pathname !== '/register' && <h3>Not a member yet?</h3>}
      <br></br>
      {location.pathname !== '/login' && location.pathname !== '/register' && <h4><Link to='/register'>Register!</Link></h4>}
  </div>
</div>)

  return (
  <div style={{
    backgroundImage: `url(${image})`
  }}>
    {currentUser ? isLoggedIn : isNotLoggedIn}
  </div>
  )
}

// const location = window.location.href
// if location === (this is the whole url https://localhost:3000/home ---> google methods to just get end of url

export default Header;

