import React from "react";
import './App.css';
import logo from "./images/Logo .svg"


const Footer = () => {
    return (
        <footer>
            <section>
                <div className = "info">
                    <img src = {logo} alt=""/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a moden twist.</p>

                </div>
            </section>
        </footer>
    );
};

export default Footer;