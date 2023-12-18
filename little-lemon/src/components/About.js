import React from "react";
import '../App.css';
import aboutImage1 from "../images/MarioandAdrian1.jpg";
import aboutImage2 from "../images/MarioandAdrian2.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="about">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning
                a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for
                the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines for the Mediterranean region.
                </p>
            </div>
            <div className="about-img">
                <img src={aboutImage1} alt="" className="topimage"/>   
                <img src={aboutImage2} alt="" className="higherimage"/>
            </div>
            
        </div>
        

    );
};

export default About;