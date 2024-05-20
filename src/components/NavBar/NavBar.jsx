import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import Menu from '../menu/Menu';
import logo from '../../assets/logo.jpg';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar-top"> 
      <div className="brand">
      <img src={logo} alt="Logo de Luxury Shop" className='logo' /> 
        <h1>Lux Shop</h1>
      </div>
      <Menu />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
