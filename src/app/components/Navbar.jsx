import React from 'react'
import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Rental Bike</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link href={"/#home"}>Home</Link>
        <Link href={"tel:+918888634041"}>Services</Link>
        <Link href={"https://shreebikerental.in/"}>Bikes</Link>
        <Link href={"https://shreebikerental.com/"}> Scooter</Link>
        {/* <Link href={"/#about"}>About Us</Link>
        <Link href={"/#contact"}>Contact Us</Link>
        <Link href={"https://shreebikerental.com/pricing/"}>
          Shree Rental Bikes
        </Link>
        <Link href={"/#footer"}>Footer</Link> */}

        {/* <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
      </div>
    </div>
  );
};

export default Navbar;
