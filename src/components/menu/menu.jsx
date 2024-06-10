import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <ul className='menu'>
      <li><Link to="/category/reloj">Relojes</Link></li>
      <li><Link to="/category/anillo">Anillos</Link></li>
      <li><Link to="/category/collar">Collares</Link></li>
    </ul>
  );
};

export default Menu;
