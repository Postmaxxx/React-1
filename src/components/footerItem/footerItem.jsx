import React from 'react';
import './footerItem.css';

const FooterItem = ({ field }) => {
    return (
        <span className='footer-text'>
            {field.description} {field.amount}
        </ span>
    )
}

export default FooterItem;

