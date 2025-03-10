import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/syno-logo.svg';

const Navbar = ({ toggleMenu }) => {
  return (
    <div id="navi" className="topnav">
      <div className="container">
        <Link className="logo" to="/">
          <img src={logo} alt="SYNOpix Creative Design Agency" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="icon">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;