import React from 'react';
import '../menuItems/menuItems.css';

const MenuItem = ({ elements }) => {
    return (
        <ul className='menuItems'>
            {elements.map(item => {return (
                <li className='menuItem' key={item} onClick={localStorage.clear()}>{item}</li> //Очистка localStorage при выборе любого пункта меню. Просто, чтобы не делать отдельную кнопку
            )})}
        </ul>
    )
}


export default MenuItem;