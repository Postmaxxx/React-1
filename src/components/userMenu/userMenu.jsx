import React from 'react';
import './userMenu.css';
import MenuItems from '../menuItems/menuItems.jsx';

const UserMenu = ({ open }) => {
    if (open) { 
        return (
            <div className='userMenuArea'>
                <div className='userMenuTip'></div>
                <div className='userMenu'>
                    <MenuItems elements={['Profile', 'Log Out']} />
                </div>
            </div>
        )} else return null;
}

export default UserMenu;