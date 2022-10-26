import React from 'react';
import { NavLink } from 'react-router-dom';


const Inventory = () => {
    return (
        <div className="contact">
            <h5> List of items  </h5>
           
            <ul className='coffee'>
                <li>Folgers</li>
                <li>Nescafe Classic</li>
                <li>Mugg & Bean</li>
                <li>Davidoff - Espresso 57 (Out of stock)</li>
                <li>Davidoff - Rich aroma</li>
                <li> Davidoff Oriental Style </li>
                <li>Cameroon Boyo Coffee</li>
                <li>Krispy Kreme Classic Medium Roast (restocked) </li>
                <li>Transparent Coffee Mugs</li>
                <li>Ceramic Coffee Mugs</li>
                <li>50kg Brown Sugar</li>
                <li>4 packs full cream milk (to be restocked)</li>
                <li>Aprons</li>


                </ul>
            
            
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default Inventory