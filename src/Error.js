import React from "react";
import { NavLink } from "react-router-dom";


const Error =() => {
    return (
      
        <div className="error-page">
            <h1>404 Error Page</h1>
            <p>Sorry, this page does not exist.</p>

            <NavLink to="/">Home</NavLink>

        </div>
     
    )
}

export default Error;