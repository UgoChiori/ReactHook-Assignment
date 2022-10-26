import React from "react";
import { Link } from "react-router-dom";
import './index.css';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navlinks">
        <Link to="/">HOME</Link>

        <Link to="/users">CLIENTS</Link>

        <Link to="/contact">INVENTORY</Link>
      </div>
    </nav>
  );
};

export default Navbar;
