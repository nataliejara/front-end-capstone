import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import logo from "../images/Logo .svg";


const Nav = () => {
    return (
        <nav className = "navbar"> 
            <img src = {logo} alt = ""/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/booking">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;