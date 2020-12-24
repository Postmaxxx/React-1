import React from 'react';
import './blockName.css';


const Blockname = (props) => { //вывод названия блока
    const { blockname } = props;
    return (
        <>
            <h2 className='block_name'>
                {blockname}
            </ h2>
        </>
    )
}


export default Blockname;