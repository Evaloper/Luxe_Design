import React from 'react';
import Logo from "../../assets/Luxe.png"
import Menu from "../../assets/Menu.png";
import "./index.css"

export const Header = () => {
  return (
    <nav className='nav-bar'>
        <div className='logo'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='pages'>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>How we works</li>
            </ul>
        </div>
        <div className='menu'>
            <img src={Menu} alt="Hamburger" />
        </div>
    </nav>
  )
}
