import React from "react";
import './App.css';
import logo from "./images/Logo .svg";


const Nav = () => {
    return (
        <nav className = "navbar"> 
            <img src = {logo} alt = ""/>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="reservations.html">Reservations</a></li>
                <li><a href="order.html">Order Online</a></li>
                <li><a href="login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;