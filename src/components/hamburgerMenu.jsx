// src/components/hamburgerMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hamburgerMenu.css';

// defines a single navigation item, receives path and text as props
function NavItem({ path, text }) {
    return (
        <div className="nav-item">
            <Link to={path}>{text}</Link>
        </div>
    );
}

// main component for the hamburger menu
function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false); // state to track if the menu is open

    // function to toggle the menu open/close state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // renders the hamburger icon and the sliding menu container
    return (
        <div>
            <div className="hamburger" onClick={toggleMenu} style={{left: isOpen ? "270px" : "20px"}}>
                &#9776; {/* unicode for hamburger icon */}
            </div>
            <div className="menu-container" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
                <div className="nav-items">
                    {/* list of navigation items, each linked to a route */}
                    <NavItem path="/" text="Home" />
                    <NavItem path="/meditation" text="Meditation" />
                    <NavItem path="/journal" text="Journal" />
                    <NavItem path="/moodTracker" text="Mood Tracker" />
                    <NavItem path="/registration" text="Registration" />
                    <NavItem path="/resources" text="Resources" />
                    <NavItem path="/about" text="About" />
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
