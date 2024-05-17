import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hamburgerMenu.css';

function NavItem({ path, text }) {
    return (
        <div className="nav-item">
            <Link to={path}>{text}</Link>
        </div>
    );
}

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                // downscroll code
                setIsVisible(false);
            } else {
                // upscroll code
                setIsVisible(true);
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div 
                className="hamburger" 
                onClick={toggleMenu} 
                style={{ 
                    left: isOpen ? "270px" : "20px", 
                    opacity: isVisible ? 1 : 0 
                }}
            >
                &#9776;
            </div>
            <div className="menu-container" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
                <div className="nav-items">
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
