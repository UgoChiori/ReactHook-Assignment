import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navlinks">
        <Link to="/">Home</Link>

        <Link to="/users">FetchUsers</Link>

        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
