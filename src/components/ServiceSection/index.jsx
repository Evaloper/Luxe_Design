import React from 'react';
import Branding from "../../assets/Branding.png"
import UI from "../../assets/Ui Design.png"
import Product from "../../assets/Product.png"
import "./index.css"

export const ServiceSection = () => {
  return (
    <div className='service'>
      <h1>OUR SERVICE</h1>
      <div className='card-wrapper'>
        <div className="card">
          <img src={Branding} alt="Branding" />
          <h3>Branding</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <div className="card card2">
          <img src={UI} alt="UI" />
          <h3>Branding</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <div className="card card3">
          <img src={Product} alt="Product" />
          <h3>Branding</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
      </div>
    </div>
  )
}
