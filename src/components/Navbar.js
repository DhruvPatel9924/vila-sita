import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isProcessPage = location.pathname === '/process';

  return (
    <nav className={`navbar ${isProcessPage ? 'navbar-transparent' : ''}`}>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/process">Process</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
