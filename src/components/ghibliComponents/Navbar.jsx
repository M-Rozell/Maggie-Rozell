
import { NavLink } from "react-router-dom";
import '../../css/BootstrapGhibli.css';
import React from "react";

const Navbar = () => {

    return (

        <div className="navContainer shadow rounded p-2 mt-2">
            <img className="img-fluid w-25" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="" />
            <div className="nav d-flex justify-content-end">

                <NavLink to="/GhibliHome" className={({ isActive }) => `nav-link ${isActive ? 'ghibliBtn btn-outline-dark ' : ''}`}>Home</NavLink>
                <NavLink to="/films" className={({ isActive }) => `nav-link ${isActive ? 'ghibliBtn btn-outline-dark ' : ''}`}>Films</NavLink>
                <NavLink to="/people" className={({ isActive }) => `nav-link ${isActive ? 'ghibliBtn btn-outline-dark ' : ''}`}>People</NavLink>
                <NavLink to="/vehicles" className={({ isActive }) => `nav-link ${isActive ? 'ghibliBtn btn-outline-dark ' : ''}`}>Vehicles</NavLink>

            </div>
        </div>
    )
};

export default Navbar;
