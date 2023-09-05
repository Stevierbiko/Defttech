import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="deft__navbar">
      <div className="deft__navbar-links">
        <div className="deft__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="deft__navbar-links_container">
         <p> <a href="#home">Home</a></p>
          <p><a href="#wgpt3">About Us</a></p>
          <p><a href="#possibility">Contact Us</a></p>
          <p><a href="#features">Solutions</a></p>
          <p><a href="#blog">Products</a></p>
        </div>
      </div>
      <div className="deft__navbar-sign">
        {/* <p>Sign in</p> */}
        <button type="button"><a href="http://wa.me/+254728281044" target="_blank" rel="noreferrer noopener">Get Quote</a></button>
      </div>
      <div className="deft__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="deft__navbar-menu_container scale-up-center">
          <div className="deft__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About US</a></p>
            <p><a href="#possibility">Contact Us</a></p>
            <p><a href="#features">Solutions</a></p>
            <p><a href="#blog">Products</a></p>
          </div>
          <div className="deft__navbar-menu_container-links-sign">
            {/* <p>Sign in</p> */}
            <button type="button"><a href="http://wa.me/+254728281044" target="_blank" rel="noreferrer noopener">Get Quote</a></button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
