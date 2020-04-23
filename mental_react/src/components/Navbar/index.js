import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// Change classname of navbar or add one from bootstrap
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link-active" : "nav-link"}
                           >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link 
                    to="/workout"
                    className={
                        window.location.pathname === "workout" ? "nav-link-active" : "nav-link"}
                        >
                            Workout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;