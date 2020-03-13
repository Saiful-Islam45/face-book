import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div>
                <h1 className="icon-design">Friends Fair Society</h1>
            </div>

            <nav>
                <a href="/home">Home</a>
                <a href="/friends">Friends List</a>
                <a href="/suggested">Suggested Friends</a>
            </nav>
        </div>
    );
};

export default Header;