import React from 'react';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';


const Navbar = () => {
  return (

    <nav className='navbar'>

      <a className='logo' href="./home" alt="logo" >
        <h1>X</h1>
        <strong>SHOCK</strong>
      </a>

      <ul className='menu'>
        <li>
          <a className='active' href="./">Shop</a>
        </li>
        <li>
          <a href="./">Lookbook</a>
        </li>
        <li>
          <a href="./">Our Story</a>
        </li>
      </ul>

      <div className="cart">
        <span>Cart (0)</span>
      </div>

      <div id="theme-toggle-container">
        <ThemeToggle />
      </div>

    </nav>

  )
};

export default Navbar;