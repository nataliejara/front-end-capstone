import React from "react";
import '../App.css';
import menuItems from "../menuItems";

const Specials = () => {
    return (
        <div className = "menu-container">
            <div className = "menu-header">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="menu-cards">
                {menuItems.map((specials) => (
                    <div key={specials.id} className="menu-items">
                        <img src={specials.image} alt={`Special ${specials.id}`} />
                        <div className="menu-content">
                            <div className="card-heading">
                                <h3>{specials.title}</h3>
                                <p>${specials.price}</p>
                            </div>
                            <p>{specials.description}</p>
                            <button className="order-button">Order a delivery</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specials;