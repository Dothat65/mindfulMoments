import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';




// navItem component that will have each option
function NavItem(props){
    return (
        <div className="navItem">
            <Link to={props.path}>{props.text}</Link>
        </div>
    )
}


function NavBar() {
    // make different options on the top
    // each option will be a link to a different page
    return (
        <div className="nav">
            <NavItem path="/" text="Home" />
            <NavItem path="/meditation" text="Meditation" />
            <NavItem path="/journal" text="Journal" />
            <NavItem path="/moodTracker" text="Mood Tracker" />
            <NavItem path="/registration" text="Registration" />
            <NavItem path="/resources" text="Resources" />
        </div>
    )
}


export default NavBar;

