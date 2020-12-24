import React from "react";
import "../header/header.css";
import UserProfile from '../userProfile/userProfile.jsx'
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
    <div className="header">
        <NavLink to='/'>
            <span> Awesome Kanban Board </ span>
        </NavLink>
        <UserProfile />
    </div>
    )
};

export default Header;
