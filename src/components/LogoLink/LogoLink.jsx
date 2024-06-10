import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';


const LogoLink = () => {
  return (
    <Link to="/" className="logo-link">
      <img src={logo} alt="Logo de Luxury Shop" className="logo" />
    </Link>
  );
};

export default LogoLink;
