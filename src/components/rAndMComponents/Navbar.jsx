
import { NavLink } from "react-router-dom";
import '../../css/rAndMBootstrap.css';
import Rick_Morty from '../../images/Rick_Morty_100.jpg'
import React from "react";

const Navbar = () => {

    return (

        <div className="navContainer p-2 mt-2 d-flex justify-content-center align-items-center" >
            <div>
                <NavLink to="/RandMHome" className={({ isActive }) => `nav-link ${isActive ? ' btn-outline-dark p-0' : ''}`}><img className="img-fluid p-0 border border-success shadow rounded" src={Rick_Morty} alt="Rick and Morty in Adidas track suits" /></NavLink>
            </div>
            <div>
                <NavLink to="/Characters" className={({ isActive }) => `nav-link ${isActive ? ' btn-outline-dark text-center' : 'text-center'}`}>Characters</NavLink>
                <NavLink to="/people" className={({ isActive }) => `nav-link ${isActive ? ' btn-outline-dark text-center' : 'text-center'}`}>Locations</NavLink>
                <NavLink to="/vehicles" className={({ isActive }) => `nav-link ${isActive ? ' btn-outline-dark text-center' : 'text-center'}`}>Episodes</NavLink>
            </div>
        </div>
    )
};

export default Navbar;
