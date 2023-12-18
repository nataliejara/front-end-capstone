import React from "react";
import '../App.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import profileImg1 from "../images/Rosie.jpeg";
import profileImg2 from "../images/Sam.jpeg";
import profileImg3 from "../images/Luigi.jpeg";
import profileImg4 from "../images/Kate.jpeg";

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <div className="testimonials-header">
                <h2>Testimonials</h2>
            </div>
            <div className="profile-cards">
                <div className="reviews">
                    <div className="star-icons">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <img src={profileImg1} alt="" />
                    <h4>Rosie</h4>
                    <p>"Great restuarant to have a few drinks and great food with friends!"</p>
                </div>
                <div className="reviews">
                    <div className="star-icons">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <img src={profileImg2} alt="" />
                    <h4>Sam</h4>
                    <p>"My new favorite restaurant in Chicago! I hignly recommend the bruschetta and the lemon dessert"</p>
                </div>  
                <div className="reviews">
                    <div className="star-icons">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <img src={profileImg3} alt="" />
                    <h4>Luigi</h4>
                    <p>"Little Lemon has become my go to restaurant! It has amazing food and it's easy to make a reservation online!"</p>
                </div>
                <div className="reviews">
                    <div className="star-icons">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <img src={profileImg4} alt="" />
                    <h4>Kate</h4>
                    <p>"Exceptional food and amazing service! The only downside to being so good is that it gets booked fast!" </p>
                </div>
            </div>
          
            
        </div>
    );
};

export default Testimonials;