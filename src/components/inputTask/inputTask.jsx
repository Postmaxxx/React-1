import React from 'react';
import './inputTask.css';

const InputTask = ({ handleChange, inputValue, cancelEdit, classes }) => {
    if (!classes) {classes = 'input-task-no-border'}
    return (
        <input 
            autoFocus 
            onBlur={cancelEdit}
            onChange={(e) => handleChange(e)} 
            className={classes}
            placeholder='_____________________________'
            value={inputValue} />
    )
}

export default InputTask;
