import './Navbar.css'
import React from 'react';

const Navbar = () => {
    return (
    <div className="navbar">
        <div className="navContainer">
            <div className="logo">React Learning Booking</div>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
    );
};

export default Navbar;