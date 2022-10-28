import React from "react";
import { NavLink } from "react-router-dom";


const Error =() => {
    return (
      
        <div className="error-page">
            <h1>🙄🙄🙄🙄🙄🙄</h1>
            <img
        src={require("./404error.jpeg")}
        alt="coffee poured in transparent mug"
      />

            <NavLink to="/">Home</NavLink>

        </div>
     
    )
}

export default Error;