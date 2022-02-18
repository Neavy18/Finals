import React from 'react';
import './Header.css';

// display the header component

const Header = () => {
  return (
    <div className='Header'>
      <button><i className="fa-solid fa-user"></i></button>
      <h2>Furever Home</h2>
      <button><i className="fa-solid fa-magnifying-glass-plus"></i></button>
    </div>
  )
}

// const location = window.location.href
// if location === (this is the whole url https://localhost:3000/home ---> google methods to just get end of url

export default Header;

