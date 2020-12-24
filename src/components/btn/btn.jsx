import React from 'react';
import '../btn/btn.css';


const Btn = ({ btnText, btnClass, click, btnName, disabled }) => {
    return (
    <button className={btnClass} name={btnName} disabled={disabled} onClick={(e) => click(e)}>{btnText}</button>
    )
}



export default Btn;