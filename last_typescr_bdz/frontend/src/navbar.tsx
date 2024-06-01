import React from 'react';
import './navbar.css';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Ticket Reservation</h1>
            <div className="nav-links">
                <a href="#" className="nav-link">Search for Train</a>
                <a href="#" className="nav-link">Login</a>
            </div>
        </nav>
    );
};

export default NavBar;
