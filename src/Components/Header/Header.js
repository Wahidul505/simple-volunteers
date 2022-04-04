import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <NavLink to='/home'>HOME</NavLink>
            <NavLink to='/volunteers'>VOLUNTEERS</NavLink>
        </nav>
    );
};

export default Header;