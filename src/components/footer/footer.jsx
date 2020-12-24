import React from 'react';
import '../footer/footer.css'
import '../header/header.css'
import '../footerItem/footerItem.jsx'
import FooterItem from '../footerItem/footerItem.jsx';
import { NavLink } from 'react-router-dom';



const Footer = ({ fields, author }) => {
    return (
        <div className='header footer'>
            {fields.map(item => {return (
                <NavLink to={'/detailed/'+item.categoryLink} key={item.description} className='footer-text'>
                    <FooterItem field={item} />
                </NavLink>
            )})}
            <FooterItem field={author}/>
        </ div>
    )
}



export default Footer;

