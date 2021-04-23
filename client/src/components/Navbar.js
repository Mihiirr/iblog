import './Navbar.css';
import React from 'react';
import { Button } from 'react-bootstrap';

function navbar() {
    return (
        <div className="navbar">
            
            <div className="nav__logo">
                <h1><a>IBLOG</a></h1>
            </div>
            
            <div className="links">
                <a href="/">Bloglist</a>
                <a href="/createblog">Create Blog</a>
            </div>
        </div>
    )
}

export default navbar
