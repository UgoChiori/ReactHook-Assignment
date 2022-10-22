import React from "react";
import { Link } from "react-router-dom";
import './index.css';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navlinks">
        <Link to="/">Home</Link>

        <Link to="/users">FetchUsers</Link>

        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
