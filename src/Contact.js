import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialIcon from './SocialIcon';

const Contact = () => {
    return (
        <div className="contact">
            <h2> Contact Us </h2>
           
            <SocialIcon/>
            
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default Contact