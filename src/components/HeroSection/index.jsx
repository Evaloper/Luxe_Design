import React from 'react';
import HeroImage from "../../assets/image.png";
import "./index.css"

export const HeroSection = () => {
  return (
    <div className='hero'>
        <div className="left">
            <div className="text">
                <p className='welcome'>Hi there!</p>
                <h1 className='intro'><span>LUXE</span> IS HERE TO BE YOUR ASSISTANCE</h1>
                <p>I am here ready to help you in making creative digital products</p>
            </div>
            <button className="btn">Let's Discuss</button>
        </div>
        <div className="right">
            <img src={HeroImage} alt="" />
        </div>
    </div>
  )
}
