import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <button>Profile</button>
      <h2>Furever Home</h2>
      <button>Extra parameters</button>
    </div>
  )
}

// const location = window.location.href
// if location === (this is the whole url https://localhost:3000/home ---> google methods to just get end of url

export default Header;

