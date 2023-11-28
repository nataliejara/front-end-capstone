import React from "react"
import './App.css';
import headerImage from "./images/restaurantfood.jpg";


const Header = () => {
    return (
        <header className = "header">
            <section className = "banner">
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve Table</button>
                </div>

                <div className="header-img">
                    <img src={headerImage} alt="" />
                </div>
                
            </section>
        </header>
    );
};

export default Header;