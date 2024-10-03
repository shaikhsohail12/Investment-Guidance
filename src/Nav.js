import React from 'react';
import { Link } from 'react-router-dom';
// import React, { useRef } from 'react';
import './Nav.css';

const Nav = () => {
  // const contactRef = useRef(null); // Create a ref for the Contact Us section

  // const scrollToContact = () => {
  //   if (contactRef.current) {
  //     contactRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <nav className="navbar">
      <Link to='/'>
      <h1 className="logo">InvestmentGuidance</h1>
      </Link>
      <Link to="/">
          <img className="header--logo"  alt="logo" src="./image/vision.png"/>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/investment-plans">Investment Plans</Link></li>
        <li><Link to="/budgeting-tips">Budgeting Tips</Link></li>
        <li><Link to="/education-savings">Education Savings</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to='/SignIn'>SignIn</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
