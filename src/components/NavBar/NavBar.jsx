import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import Menu from '../menu/MenuCategoria';
import LogoLink from '../LogoLink/LogoLink';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar-top"> 
      <div className="brand">
        <LogoLink /> {/* Usa el componente LogoLink */}
        <h1>Lux Shop</h1>
      </div>
      <Menu />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
